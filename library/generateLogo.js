const Circle = require('./shapes');
const Square = require('./shapes');
const Triangle = require('./shapes');

const generateLogo = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(data);
      return makeCircle;
      break;

    case 'triangle':
      const makeTriangle = new Triangle(data);
      return makeTriangle;
      break;

    case 'square':
      console.log(data);
      const makeSquare = new Square(data);
      return makeSquare;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { generateLogo };