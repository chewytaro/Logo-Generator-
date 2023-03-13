class shape {
    constructor({characters, textColor, shape, shapeColor}) {
        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
};

class Circle extends shape {
    constructor(data) {
    super(data);
    }
    render () {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
    }
};

class Square extends shape {
    constructor(data) {
    super(data);
    }
    render () {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
    }
};

class Triangle extends shape {
    constructor(data) {
    super(data);
    }
    render () {
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />`;
     }
};

function renderShape(shape) {
    if (shape === 'Circle') {
        return Circle;
    } else if (shape === 'Triangle') {
        return Triangle;
    } else if (shape === 'Square') {
        return Square; 
    }
}

function generateLogo(data) {
    const shape = renderShape(data); 
    shape;

}


module.exports = generateLogo; 
