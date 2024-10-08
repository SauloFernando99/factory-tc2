abstract class Chair {
    constructor(
        public height: number,
        public width: number,
        public material: string,
        public color: string
    ) {}

    abstract calculateConfort(): number;

    abstract getStyle(): string;
}

class ArteDecoChair extends Chair {
    constructor (height: number, width: number, material: string, color: string) {
        super(height, width, material, color)
    }

    calculateConfort(): number {
        return (this.height / this.width) / 2;
    }

    getStyle(): string {
        return "ArteDeco";
    }
}

class VitorianoChair extends Chair {
    constructor (height: number, width: number, material: string, color: string) {
        super(height, width, material, color)
    }

    calculateConfort(): number {
        return (this.height / this.width) * 1.2;
    }

    getStyle(): string {
        return "Vitoriano";
    }
}

class ModernoChair extends Chair {
    constructor (height: number, width: number, material: string, color: string) {
        super(height, width, material, color)
    }

    calculateConfort(): number {
        return (this.height / this.width) * 0.9;
    }

    getStyle(): string {
        return "Moderno";
    }
}

abstract class Sofa {
    constructor(
        public width: number,
        public depth: number,
        public material: string,
        public color: string
    ) {}

    abstract calculateConfort(): number;

    abstract getStyle(): string;
}

class ArteDecoSofa extends Sofa {
    constructor(width: number, depth: number, material: string, color: string) {
        super(width, depth, material, color);
    }

    calculateConfort(): number {
        return (this.width / this.depth) / 2;
    }

    getStyle(): string {
        return "ArteDeco";
    }
}

class VitorianoSofa extends Sofa {
    constructor(width: number, depth: number, material: string, color: string) {
        super(width, depth, material, color);
    }

    calculateConfort(): number {
        return (this.width / this.depth) * 1.3;
    }

    getStyle(): string {
        return "Vitoriano";
    }
}

class ModernoSofa extends Sofa {
    constructor(width: number, depth: number, material: string, color: string) {
        super(width, depth, material, color);
    }

    calculateConfort(): number {
        return (this.width / this.depth) * 0.8;
    }

    getStyle(): string {
        return "Moderno";
    }
}

class ManufactureArteDeco {
    createChair(): Chair {
        return new ArteDecoChair(120, 60, "Wood", "Black");
    }

    createSofa(): Sofa {
        return new ArteDecoSofa(200, 90, "Leather", "White");
    }
}

class ManufactureVitoriano {
    createChair(): Chair {
        return new VitorianoChair(110, 65, "Wood", "Brown");
    }

    createSofa(): Sofa {
        return new VitorianoSofa(210, 95, "Velvet", "Red");
    }
}

class ManufactureModerno {
    createChair(): Chair {
        return new ModernoChair(130, 65, "Metal", "Gray");
    }

    createSofa(): Sofa {
        return new ModernoSofa(220, 100, "Cloth", "Blue");
    }
}


interface ManufactureFurnitude {
    createModernoChair(): Chair;
    createArteDecoSofa(): Sofa;
    createArteDecoChair(): Chair;
    createVitorianoChair(): Chair;
    createModernoSofa(): Sofa;
}

abstract class CompositionClient implements ManufactureFurnitude {
    abstract createModernoChair(): Chair;
    abstract createArteDecoSofa(): Sofa;
    abstract createArteDecoChair(): Chair;
    abstract createVitorianoChair(): Chair;
    abstract createModernoSofa(): Sofa;
}

class CompositionClient1 extends CompositionClient {
    private furnitures: (Chair | Sofa)[] = [];
    private furnitureStyle: "Moderno" | "ArteDeco" | "Vitoriano" | null = null;

    private validateFurnitureStyle(style: "Moderno" | "ArteDeco" | "Vitoriano") {
        if (this.furnitureStyle === null) {
            this.furnitureStyle = style;
        } else if (this.furnitureStyle !== style) {
            throw new Error(`Não é permitido criar móveis de estilos diferentes. Você já criou móveis do estilo ${this.furnitureStyle}.`);
        }
    }

    createModernoChair(): Chair {
        this.validateFurnitureStyle("Moderno");
        const manufactureModerno = new ManufactureModerno();
        const chair = manufactureModerno.createChair();
        this.furnitures.push(chair);
        return chair;
    }

    createArteDecoSofa(): Sofa {
        this.validateFurnitureStyle("ArteDeco");
        const manufactureArteDeco = new ManufactureArteDeco();
        const sofa = manufactureArteDeco.createSofa();
        this.furnitures.push(sofa);
        return sofa;
    }

    createArteDecoChair(): Chair {
        this.validateFurnitureStyle("ArteDeco");
        const manufactureArteDeco = new ManufactureArteDeco();
        const chair = manufactureArteDeco.createChair();
        this.furnitures.push(chair);
        return chair;
    }

    createVitorianoChair(): Chair {
        this.validateFurnitureStyle("Vitoriano");
        const manufactureVitoriano = new ManufactureVitoriano();
        const chair = manufactureVitoriano.createChair();
        this.furnitures.push(chair);
        return chair;
    }

    createModernoSofa(): Sofa {
        throw new Error("Moderno Sofa isn't included");
    }

    getFurnitures(): (Chair | Sofa)[] {
        return this.furnitures;
    }
}


class CompositionClient2 extends CompositionClient {
    private furnitures: (Chair | Sofa)[] = [];
    private furnitureStyle: "Moderno" | "ArteDeco" | "Vitoriano" | null = null;

    private validateFurnitureStyle(style: "Moderno" | "ArteDeco" | "Vitoriano") {
        if (this.furnitureStyle === null) {
            this.furnitureStyle = style;
        } else if (this.furnitureStyle !== style) {
            throw new Error(`Não é permitido criar móveis de estilos diferentes. Você já criou móveis do estilo ${this.furnitureStyle}.`);
        }
    }

    createModernoChair(): Chair {
        throw new Error("Moderno Chair isn't included");
    }

    createArteDecoSofa(): Sofa {
        throw new Error("ArteDeco Sofa isn't included");
    }

    createArteDecoChair(): Chair {
        throw new Error("ArteDeco Chair isn't included");
    }

    createVitorianoChair(): Chair {
        this.validateFurnitureStyle("Vitoriano");
        const manufactureVitoriano = new ManufactureVitoriano();
        const chair = manufactureVitoriano.createChair();
        this.furnitures.push(chair);
        return chair;
    }

    createModernoSofa(): Sofa {
        this.validateFurnitureStyle("Moderno");
        const manufactureModerno = new ManufactureModerno();
        const sofa = manufactureModerno.createSofa();
        this.furnitures.push(sofa);
        return sofa;
    }

    getFurnitures(): (Chair | Sofa)[] {
        return this.furnitures;
    }
}

class Client {
    private name: string;
    private address: string;
    private phone: string;
    private requests: CompositionClient[] = []

    constructor(
           name: string,
           address: string,
           phone: string
        ) {
            this.name = name;
            this.address = address;
            this.phone = phone
        }

    makeRequest(composition: CompositionClient): string {
        this.requests.push(composition)
        return "Request made sucessfully"
    }

    getRequests(): CompositionClient[]{
        return this.requests;
    }

}

const client = new Client("John", "Street A, 123", "1234-5678");
const composition1 = new CompositionClient1();

try {
    composition1.createModernoChair();
    composition1.createArteDecoSofa();
    composition1.createArteDecoChair();
    composition1.createVitorianoChair();
} catch (error) {
    console.error(error);
}

const createdFurnitures1 = composition1.getFurnitures();
console.log(createdFurnitures1);

const composition2 = new CompositionClient2();

try {
    composition2.createVitorianoChair();
    composition2.createModernoSofa();
} catch (error) {
    console.error("erro");
}

const createdFurnitures2 = composition2.getFurnitures();
console.log(createdFurnitures2);

console.log(client.makeRequest(composition1));
console.log(client.makeRequest(composition2));

console.log(client.getRequests());
