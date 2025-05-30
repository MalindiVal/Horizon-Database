class RelationsView {
    private canvas: HTMLCanvasElement;
    private tooltipDiv: HTMLDivElement;
    private personnage: { [id: number]: string } = {};
    private hoverAreas: Array<{
        type: "line" | "text",
        rel: Relation,
        from: { x: number, y: number },
        to: { x: number, y: number },
        textPos?: { x: number, y: number },
        bbox?: { x: number, y: number, width: number, height: number }
    }> = [];

    constructor(ctrl: RelationController) {
        this.canvas = document.getElementById("mindmap") as HTMLCanvasElement;

        // Create tooltip div and hide initially
        this.tooltipDiv = document.createElement("div");
        this.tooltipDiv.style.position = "absolute";
        this.tooltipDiv.style.background = "rgba(0,0,0,0.7)";
        this.tooltipDiv.style.color = "#fff";
        this.tooltipDiv.style.padding = "4px 8px";
        this.tooltipDiv.style.borderRadius = "4px";
        this.tooltipDiv.style.pointerEvents = "none";
        this.tooltipDiv.style.visibility = "hidden";
        this.tooltipDiv.style.fontSize = "12px";
        document.body.appendChild(this.tooltipDiv);

        this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.canvas.addEventListener("mouseout", () => {
            this.tooltipDiv.style.visibility = "hidden";
        });

        this.init();
    }

    private async init(){
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.7;
        let relationdao = new RelationDAO();
        let data = await relationdao.GetAll();
        let charDao = new PersonnageDAO();
        let chars = await charDao.GetAll();
        chars.forEach(c => {
            this.personnage[c.Id] = c.Nom;
        })
        
        this.drawMindMap(data);
    }

    // Example of your drawMindMap with hover area recording:
    drawMindMap(relations: Relation[]) {
        const ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.8; 
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let centerX = this.canvas.width / 2;
        let centerY = this.canvas.height / 2;
        const radius = this.canvas.width/2 - 25 ;
        if (radius*2 + 15> this.canvas.height){
            this.canvas.height = radius*2 + 15
            centerX = this.canvas.width / 2;
            centerY = this.canvas.height / 2;
        }

        const uniqueIds = new Set<number>();
        relations.forEach(r => {
            uniqueIds.add(r.Id_P1);
            uniqueIds.add(r.Id_P2);
        });

        const ids = Array.from(uniqueIds);
        const total = ids.length;
        const angleStep = (2 * Math.PI) / total;

        const positions: { [key: number]: { x: number, y: number } } = {};

        // 1. Place characters in a circle
        ids.forEach((id, index) => {
            const angle = index * angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            positions[id] = { x, y };
        });

        this.hoverAreas = [];

        // 2. Draw relationships (edges)
        relations.forEach(rel => {
            const pos1 = positions[rel.Id_P1];
            const pos2 = positions[rel.Id_P2];

            ctx.beginPath();
            ctx.moveTo(pos1.x, pos1.y);
            ctx.lineTo(pos2.x, pos2.y);
            ctx.strokeStyle = "#444";
            ctx.stroke();

            this.hoverAreas.push({
                type: "line",
                rel,
                from: pos1,
                to: pos2,
            });

            const midX = (pos1.x + pos2.x) / 2;
            const midY = (pos1.y + pos2.y) / 2;
            ctx.fillStyle = "#000";
            ctx.font = "12px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(rel.Titre, midX, midY - 5);

            let textWidth = ctx.measureText(rel.Titre).width;
            let textHeight = 12; // approx font size
            this.hoverAreas.push({
                type: "text",
                rel,
                from: pos1,
                to: pos2,
                textPos: { x: midX, y: midY - 5 },
                bbox: {
                    x: midX - textWidth / 2,
                    y: midY - 5 - textHeight,
                    width: textWidth,
                    height: textHeight,
                },
            });
        });

        // 3. Draw nodes (badges)
        ids.forEach(id => {
            const pos = positions[id];
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 25, 0, 2 * Math.PI);
            ctx.fillStyle = "#88c";
            ctx.fill();

            ctx.fillStyle = "#fff";
            ctx.font = "bold 12px sans-serif";
            ctx.textAlign = "center";
            const name = this.personnage[id] || "P" + id;
            ctx.fillText(name, pos.x, pos.y + 4);
        });
    }



    private onMouseMove(event: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        let foundHover = false;

        for (const area of this.hoverAreas) {
            if (area.type === "text" && area.bbox) {
                // Check if mouse is inside text bounding box
                if (
                    mouseX >= area.bbox.x &&
                    mouseX <= area.bbox.x + area.bbox.width &&
                    mouseY >= area.bbox.y &&
                    mouseY <= area.bbox.y + area.bbox.height
                ) {
                    this.showTooltip(event.pageX, event.pageY, area.rel.Description || "No description");

                    foundHover = true;
                    break;
                }
            } else if (area.type === "line") {
                // Check if mouse is close to the line (distance <= threshold)
                const dist = this.pointLineDistance(mouseX, mouseY, area.from, area.to);
                if (dist < 5) { // 5 pixels tolerance
                    this.showTooltip(event.clientX,event.clientY,`${area.rel?.Titre || "Titre inconnu"}<br>Type de relation : ${area.rel?.Type || "Type inconnu"}<br>${area.rel?.Description || "Pas de description"}`);
foundHover = true;
                    break;
                }
            }
        }

        if (!foundHover) {
            this.tooltipDiv.style.visibility = "hidden";
        }
    }

    private showTooltip(x: number, y: number, text: string) {
        this.tooltipDiv.innerHTML = text;

        // Adjust for scroll position
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        this.tooltipDiv.style.left = scrollX + x + 10 + "px";
        this.tooltipDiv.style.top = scrollY + y + 10 + "px";
        this.tooltipDiv.style.visibility = "visible";
    }


    private pointLineDistance(px: number, py: number, start: { x: number; y: number }, end: { x: number; y: number }): number {
        // Calculate perpendicular distance from point (px,py) to line segment (start,end)
        const A = px - start.x;
        const B = py - start.y;
        const C = end.x - start.x;
        const D = end.y - start.y;

        const dot = A * C + B * D;
        const len_sq = C * C + D * D;
        let param = -1;
        if (len_sq !== 0) // in case of zero length line
            param = dot / len_sq;

        let xx, yy;

        if (param < 0) {
            xx = start.x;
            yy = start.y;
        }
        else if (param > 1) {
            xx = end.x;
            yy = end.y;
        }
        else {
            xx = start.x + param * C;
            yy = start.y + param * D;
        }

        const dx = px - xx;
        const dy = py - yy;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
