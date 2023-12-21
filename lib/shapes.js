
//parent class that children class will inherit text, txtColor, shapeColor
class Shape {
    constructor(text, txtColor, shapeColor) {
        this.text = text;
        this.txtColor = txtColor;
        this.shapeColor = shapeColor;

    }

}
//renders square
class Sqr extends Shape {

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}" >${this.text}</text>
    </svg>`
    }
} 
//renders triangle
class Tri extends Shape {
   
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}" >${this.text}</text>
    </svg>`
    }
}

//renders Circle
class Cir extends Shape {
   
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}" >${this.text}</text>
        </svg>`
    }
}

//exports classes to index.js
module.exports = {  Sqr, Tri, Cir }