class shapes{
    constructor(text, textColor, shapesColor){
        this.text = text;
        this.textColor = textColor;
        this.shapesColor = shapesColor;
        this.color = '';
    }
    shapesColor(color){
        this.color = color;
    }
}

class Sqr extends shapes{

    constructor(text,textColor,shapeColor){
    super(text,textColor,shapeColor)

    }
    render(){
        return `<square cx="100" cy="100" r="50" fill="${color}" />`
    }
}
class Tri extends shapes{
    constructor(text,textColor,shapeColor){
    super(text,textColor,shapeColor)

    }
    render(){
        return `<polygon points="100" cy="100" r="50" fill="${color}" />`
    }
}
class Cir extends shapes{
    constructor(text,textColor,shapeColor){
    super(text,textColor,shapeColor)
    }
    render(){
        return `<circle cx="100" cy="100" r="50" fill="${color}" />`
    }
}
