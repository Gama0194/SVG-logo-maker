// shapes.js
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super();
        this.setColor(color);
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    render() {
        return `<polygon points="0,${this.height} ${this.base},0 ${this.base},${this.height}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super();
        this.setColor(color);
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    render() {
        return `<rect width="${this.side}" height="${this.side}" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super();
        this.setColor(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    render() {
        return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
    }
}

export { Triangle, Square, Circle };
