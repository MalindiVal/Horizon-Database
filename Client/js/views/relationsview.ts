class RelationsView implements Observer {
    private ctrl: RelationController;
    private persoctrl: PersonnageController;

    private container: HTMLDivElement;
    private svg: SVGSVGElement;
    private personnages: Personnage[] = [];
    private relations: Relation[] = [];
    private tooltipDiv: HTMLDivElement;
    private infos: HTMLDivElement;

    constructor(ctrl: RelationController, persoctrl: PersonnageController) {
        this.ctrl = ctrl;
        this.ctrl.register(this);

        this.persoctrl = persoctrl;
        this.persoctrl.register(this);

        // conteneur principal
        this.container = document.getElementById("mindmap") as HTMLDivElement;
        this.container.innerHTML = "";

        // créer un SVG
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.container.appendChild(this.svg);

        this.infos = document.getElementById("infos") as HTMLDivElement;
        this.infos.innerHTML = "";

        this.init();
        window.addEventListener("resize", () => this.drawMindMap());
    }

    AjoutPerso(p: Personnage): void {}
    PersoFound(p: Personnage): void {
        this.personnages.push(p);
    }
    AjoutFaction(f: Faction): void {}
    FactionFound(f: Faction): void {}
    AjoutRace(r: Race): void {}
    RaceFound(r: Race): void {}
    AjoutRelation(r: Relation): void {}
    RelationFound(r: Relation): void {
        this.relations.push(r);
    }
    Error(msg: string): void {}

    private async init() {
        await this.persoctrl.ListAllChars();
        await this.ctrl.listRelations();
        this.drawMindMap();
    }

    
    private drawMindMap() {
        const { positions, nodeRadius } = this.computePositions();
        this.svg.innerHTML = "";
        this.drawRelations(positions);
        this.drawNodes(positions, nodeRadius);
    }

    private computePositions(): { positions: { [key: number]: { x: number, y: number } }, nodeRadius: number } {
        let width = this.container.clientWidth;
        let height = this.container.clientHeight;
        const total = this.personnages.length;
        let nodeRadius = 25; // rayon par défaut
        const minRadius = 10;

        const maxRadiusAvailable = width / 2 - 5;
        const requiredRadius = total * (nodeRadius + 10) / Math.PI;

        if (requiredRadius > maxRadiusAvailable) {
            nodeRadius = Math.max(minRadius, nodeRadius * maxRadiusAvailable / requiredRadius);
        }

        const radius = Math.min(maxRadiusAvailable, requiredRadius);

        // Agrandir le conteneur si nécessaire
        const neededWidth = radius * 2 + nodeRadius * 2 + 20;
        const neededHeight = radius * 2 + nodeRadius * 2 + 20;
        if (width < neededWidth) this.container.style.width = neededWidth + "px";
        if (height < neededHeight) this.container.style.height = neededHeight + "px";

        const positions: { [key: number]: { x: number, y: number } } = {};
        let angle = 0;
        const angleStep = (2 * Math.PI) / total;

        this.personnages.forEach(p => {
            angle += angleStep;
            positions[p.Id] = {
                x: radius + nodeRadius + 10 + radius * Math.cos(angle),
                y: radius + nodeRadius + 10 + radius * Math.sin(angle)
            };
        });

        return { positions, nodeRadius };
    }


    private drawRelations(positions: { [key: number]: { x: number, y: number } }) {
        this.relations.forEach(rel => {
            const pos1 = positions[rel.Id_P1];
            const pos2 = positions[rel.Id_P2];

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", pos1.x.toString());
            line.setAttribute("y1", pos1.y.toString());
            line.setAttribute("x2", pos2.x.toString());
            line.setAttribute("y2", pos2.y.toString());
            line.setAttribute("stroke", this.getColorForRelationType(rel.Type));
            line.setAttribute("stroke-width", "2");
            this.svg.appendChild(line);

            // tooltip
            line.addEventListener("mousemove", (ev) => {
                
                const p1 = this.personnages.find(p => p.Id === rel.Id_P1)?.Nom || "???";
                const p2 = this.personnages.find(p => p.Id === rel.Id_P2)?.Nom || "???";
                const texte = `${p1} <--> ${p2}<br>${rel.Titre || "Titre inconnu"}<br>Type : ${rel.Type}<br>${rel.Description || "Pas de description"}`;
                this.infos.innerHTML = texte;
            });
        });
    }

    private drawNodes(positions: { [key: number]: { x: number, y: number } }, nodeRadius: number) {
        this.personnages.forEach(p => {
            const pos = positions[p.Id];

            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", pos.x.toString());
            circle.setAttribute("cy", pos.y.toString());
            circle.setAttribute("r", nodeRadius.toString());
            circle.setAttribute("fill", "#88c");
            this.svg.appendChild(circle);

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", pos.x.toString());
            text.setAttribute("y", (pos.y + nodeRadius / 4).toString());
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "white");
            text.setAttribute("font-size", (nodeRadius / 2).toString());
            text.setAttribute("font-weight", "bold");
            text.textContent = p.Nom;
            this.svg.appendChild(text);
        });
    }

    private getColorForRelationType(type: string): string {
        switch (type) {
            case "Famille": return "#5a9";
            case "Conflit": return "#e33";
            case "Mentor/Eleve": return "#38f";
            case "Amitié": return "#ff0";
            case "Amour": return "#f9c";
            default: return "#888";
        }
    }
}
