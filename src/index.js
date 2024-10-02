"use strict";
class Chair {
    constructor(height, width, material, color) {
        this.height = height;
        this.width = width;
        this.material = material;
        this.color = color;
    }
}
class ArteDecoChair extends Chair {
    constructor(height, width, material, color) {
        super(height, width, material, color);
    }
    calculateConfort() {
        return (this.height / this.width) / 2;
    }
    getStyle() {
        return "ArteDeco";
    }
}
class VitorianoChair extends Chair {
    constructor(height, width, material, color) {
        super(height, width, material, color);
    }
    calculateConfort() {
        return (this.height / this.width) * 1.2;
    }
    getStyle() {
        return "Vitoriano";
    }
}
class ModernoChair extends Chair {
    constructor(height, width, material, color) {
        super(height, width, material, color);
    }
    calculateConfort() {
        return (this.height / this.width) * 0.9;
    }
    getStyle() {
        return "Moderno";
    }
}
class Sofa {
    constructor(width, depth, material, color) {
        this.width = width;
        this.depth = depth;
        this.material = material;
        this.color = color;
    }
}
class ArteDecoSofa extends Sofa {
    constructor(width, depth, material, color) {
        super(width, depth, material, color);
    }
    calculateConfort() {
        return (this.width / this.depth) / 2;
    }
    getStyle() {
        return "ArteDeco";
    }
}
class VitorianoSofa extends Sofa {
    constructor(width, depth, material, color) {
        super(width, depth, material, color);
    }
    calculateConfort() {
        return (this.width / this.depth) * 1.3;
    }
    getStyle() {
        return "Vitoriano";
    }
}
class ModernoSofa extends Sofa {
    constructor(width, depth, material, color) {
        super(width, depth, material, color);
    }
    calculateConfort() {
        return (this.width / this.depth) * 0.8;
    }
    getStyle() {
        return "Moderno";
    }
}
class ManufactureArteDeco {
    createChair() {
        return new ArteDecoChair(120, 60, "Wood", "Black");
    }
    createSofa() {
        return new ArteDecoSofa(200, 90, "Leather", "White");
    }
}
class ManufactureVitoriano {
    createChair() {
        return new VitorianoChair(110, 65, "Wood", "Brown");
    }
    createSofa() {
        return new VitorianoSofa(210, 95, "Velvet", "Red");
    }
}
class ManufactureModerno {
    createChair() {
        return new ModernoChair(130, 65, "Metal", "Gray");
    }
    createSofa() {
        return new ModernoSofa(220, 100, "Cloth", "Blue");
    }
}
class CompositionClient {
}
class CompositionClient1 extends CompositionClient {
    constructor() {
        super(...arguments);
        this.furnitures = [];
    }
    createModernoChair() {
        const manufactureModerno = new ManufactureModerno();
        const chair = manufactureModerno.createChair();
        this.furnitures.push(chair);
        return chair;
    }
    createArteDecoSofa() {
        const manufactureArteDeco = new ManufactureArteDeco();
        const sofa = manufactureArteDeco.createSofa();
        this.furnitures.push(sofa);
        return sofa;
    }
    createArteDecoChair() {
        const manufactureArteDeco = new ManufactureArteDeco();
        const chair = manufactureArteDeco.createChair();
        this.furnitures.push(chair);
        return chair;
    }
    createVitorianoChair() {
        const manufactureVitoriano = new ManufactureVitoriano();
        const chair = manufactureVitoriano.createChair();
        this.furnitures.push(chair);
        return chair;
    }
    createModernoSofa() {
        throw new Error("Moderno Sofa isn't included");
    }
    getFurnitures() {
        return this.furnitures;
    }
}
class CompositionClient2 extends CompositionClient {
    constructor() {
        super(...arguments);
        this.furnitures = [];
    }
    createModernoChair() {
        throw new Error("Moderno Chair isn't included");
    }
    createArteDecoSofa() {
        throw new Error("ArteDeco Sofa isn't included");
    }
    createArteDecoChair() {
        throw new Error("ArteDeco Chair isn't included");
    }
    createVitorianoChair() {
        const manufactureVitoriano = new ManufactureVitoriano();
        const chair = manufactureVitoriano.createChair();
        this.furnitures.push(chair);
        return chair;
    }
    createModernoSofa() {
        const manufactureModerno = new ManufactureModerno();
        const sofa = manufactureModerno.createSofa();
        this.furnitures.push(sofa);
        return sofa;
    }
    getFurnitures() {
        return this.furnitures;
    }
}
class Client {
    constructor(name, address, phone) {
        this.requests = [];
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    makeRequest(composition) {
        this.requests.push(composition);
        return "Request made sucessfully";
    }
    getRequests() {
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
}
catch (error) {
    console.error(error);
}
const createdFurnitures1 = composition1.getFurnitures();
console.log(createdFurnitures1);
const composition2 = new CompositionClient2();
try {
    composition2.createVitorianoChair();
    composition2.createModernoSofa();
}
catch (error) {
    console.error("erro");
}
const createdFurnitures2 = composition2.getFurnitures();
console.log(createdFurnitures2);
console.log(client.makeRequest(composition1));
console.log(client.makeRequest(composition2));
console.log(client.getRequests());
