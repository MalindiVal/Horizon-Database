class RelationsView implements Observer {
    private ctrl: RelationController;
    private persoctrl: PersonnageController;

    private canvas: HTMLCanvasElement;
    private tooltipDiv: HTMLDivElement;
    private personnages: Personnage[] = [];
    private relations : Relation[] = [];
    private hoverAreas: Array<{
        type: "line" | "text",
        rel: Relation,
        from: { x: number, y: number },
        to: { x: number, y: number },
        textPos?: { x: number, y: number },
        bbox?: { x: number, y: number, width: number, height: number }
    }> = [];

    constructor(ctrl: RelationController, persoctrl: PersonnageController) {
        this.ctrl = ctrl;
        this.ctrl.register(this);

        this.persoctrl = persoctrl;
        this.persoctrl.register(this);

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
    AjoutPerso(p: Personnage): void {
        throw new Error("Method not implemented.");
    }
    PersoFound(p: Personnage): void {
        this.personnages.push(p);
    }
    AjoutFaction(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    FactionFound(f: Faction): void {
        throw new Error("Method not implemented.");
    }
    AjoutRace(r: Race): void {
        throw new Error("Method not implemented.");
    }
    RaceFound(r: Race): void {
        throw new Error("Method not implemented.");
    }
    AjoutRelation(r: Relation): void {
        
    }
    RelationFound(r: Relation): void {
        this.relations.push(r);
    }
    Error(msg: string): void {
        throw new Error("Method not implemented.");
    }

    private async init(){
        this.canvas.width = window.innerWidth * 0.9;
        this.canvas.height = window.innerHeight * 0.7;
        await this.persoctrl.ListAllChars();
        await this.ctrl.listRelations();
        this.drawMindMap();
    }

    // Example of your drawMindMap with hover area recording:
    drawMindMap() {
        
        // 1. Place characters in a circle
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

        const total = this.personnages.length;
        const positions: { [key: number]: { x: number, y: number } } = {};

        const angleStep = (2 * Math.PI) / total;
        let angle = 0;
        this.personnages.forEach(P => {
            angle += angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            positions[P.Id] = { x, y };
        });

        this.hoverAreas = [];

        // 2. Draw relationships (edges)
        this.relations.forEach(rel => {
            const pos1 = positions[rel.Id_P1];
            const pos2 = positions[rel.Id_P2];

            ctx.beginPath();
            ctx.moveTo(pos1.x, pos1.y);
            ctx.lineTo(pos2.x, pos2.y);
            ctx.strokeStyle = this.getColorForRelationType(rel.Type);
            ctx.stroke();

            this.hoverAreas.push({
                type: "line",
                rel,
                from: pos1,
                to: pos2,
            });
            
            // milieu de ligne
            const midX = (pos1.x + pos2.x) / 2;
            const midY = (pos1.y + pos2.y) / 2;

            ctx.fillStyle = "#222";
            ctx.font = "10px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(rel.Titre || "", midX, midY);

            this.hoverAreas.push({
                type: "text",
                rel,
                from: pos1,
                to: pos2,
                textPos: { x: midX, y: midY },
                bbox: {
                    x: midX - 20,
                    y: midY - 10,
                    width: 40,
                    height: 20
                }
            });

        });

        // 3. Draw nodes (badges)
        this.personnages.forEach(p => {
            const pos = positions[p.Id];
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 25, 0, 2 * Math.PI);
            ctx.fillStyle = "#88c";
            ctx.fill();

            ctx.fillStyle = "#fff";
            ctx.font = "bold 10px sans-serif";
            ctx.textAlign = "center";
            const name = p.Nom || "P" + p.Id;
            ctx.fillText(name, pos.x, pos.y + 4);
        });
    }



    private onMouseMove(event: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        let foundHover = false;

        for (const area of this.hoverAreas) {
            if (area.type === "line") {
                // Check if mouse is close to the line (distance <= threshold)
                const dist = this.pointLineDistance(mouseX, mouseY, area.from, area.to);
                if (dist < 5) { // 5 pixels tolerance
                    let p1 = "";
                    for(let i = 0; i < this.personnages.length; i++){
                        if (area.rel.Id_P1 == this.personnages[i].Id){
                            p1 = this.personnages[i].Nom;
                            break;
                        }
                    }
                    let p2 = "";
                    for(let i = 0; i < this.personnages.length; i++){
                        if (area.rel.Id_P2 == this.personnages[i].Id){
                            p2 = this.personnages[i].Nom;
                            break;
                        }
                    }
                    let texte = `${p1} <--> ${p2} <br>${area.rel?.Titre || "Titre inconnu"}<br>Type de relation : ${area.rel?.Type || "Type inconnu"}<br>${area.rel?.Description || "Pas de description"}`
                    this.showTooltip(event.clientX,event.clientY,texte);
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

    private getColorForRelationType(type: string): string {
        switch (type) {
            case "Famille": return "#5a9";
            case "Conflit": return "#e33";
            case "Mentor/Eleve": return "#38f";
            case "Amitié": return "#FFFF00";
            case "Amour": return "#FFC0CB";
            default: return "#888";
        }
    }

}
