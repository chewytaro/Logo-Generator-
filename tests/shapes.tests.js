const {Circle, Square, Triangle} = require('./shape.js');

describe('Color name for Circle', () => {
    it('Should have red Circle', () => {
        const cuteCir = new Circle("", "ILU", "black");
        cuteCir.setShapeColor("red");
        expect(cuteCir.getShapeColor()).toEqual("red");
    });
});

describe('Hex color for Square', () => {
    it('hex color for square is correspond to given value (darkOrchid = "#9932CC")', () => {
        const cuteSq = new Square("", "IOU", "pink");
        const darkOrchid = "#9932CC";
        cuteSq.setShapeColor(darkOrchid);
        expect(cuteSq.getShapeColor()).toEqual(darkOrchid);
    });
});

describe('Triangle Render', () => {
    const favColors = { mediumSpringGreen: "#00FA9A", rebeccaPurple: "#663399" };
    const triangleTest = new Triangle();
    triangleTest.setText("njs");
    triangleTest.setTextColor(favColors.mediumSpringGreen);
    triangleTest.setShapeColor(favColors.rebeccaPurple);
    
    it('Renders a shape of a triangle with color', () => {
        const renderTest =`<polygon points="150,190 50,50 290,50" fill="${favColors.rebeccaPurple}"/>`
        expect(triangleTest.render()).toEqual(renderTest);
    });
    it('Renders initials inside a triangle with color text', () => {
        const renderTextTest =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${favColors.mediumSpringGreen}">NJS</text>`
        expect(triangleTest.renderText()).toEqual(renderTextTest);
    });
});

describe('Square Render', () => {
    const favColors = { lightSteelBlue: "#B0C4DE", indigo: "#4B0082" };
    const squareTest = new Square();
    squareTest.setText("lov");
    squareTest.setTextColor(favColors.lightSteelBlue);
    squareTest.setShapeColor(favColors.indigo);
    
    it('Renders a shape of a square with color', () => {
        const renderTest =`<rect x="90" y="25" width="150" height="150" fill="${favColors.indigo}"/>`
        expect(squareTest.render()).toEqual(renderTest);
    });
    it('Renders initials inside a square with color text', () => {
        const renderTextTest =`<text x="165" y="115" font-size="60" text-anchor="middle" fill="${favColors.lightSteelBlue}">LOV</text>`
        expect(squareTest.renderText()).toEqual(renderTextTest);
    });
});

describe('Circle Render', () => {
    const favColors = { darkSlateBlue: "#483D8B", deepPink: "#FF1493" };
    const circleTest = new Circle();
    circleTest.setText("lov");
    circleTest.setTextColor(favColors.darkSlateBlue);
    circleTest.setShapeColor(favColors.deepPink);
    
    it('Renders a shape of a square with color', () => {
        const renderTest =`<circle cx="150" cy="100" r="80" fill="${favColors.deepPink}"/>`
        expect(circleTest.render()).toEqual(renderTest);
    });
    it('Renders initials inside a square with color text', () => {
        const renderTextTest =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${favColors.darkSlateBlue}">LOV</text>`
        expect(circleTest.renderText()).toEqual(renderTextTest);
    });
});