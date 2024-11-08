class Triangle {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a; 
        this.b = b; 
        this.c = c; 
    }

    inputSides() {
        this.a = parseFloat(prompt("Введите длину стороны a:"));
        this.b = parseFloat(prompt("Введите длину стороны b:"));
        this.c = parseFloat(prompt("Введите длину стороны c:"));
    }

    outputSides() {
        console.log(Сторона a: ${this.a});
        console.log(Сторона b: ${this.b});
        console.log(Сторона c: ${this.c});
    }

    area() {
        const s = this.perimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    perimeter() {
        return this.a + this.b + this.c;
    }

    setSides(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
