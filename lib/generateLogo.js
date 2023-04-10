class Shape{
  constructor(color, text, textColor){
      this.color = color; 
      this.text = text; 
      this.textColor = textColor;
  }

  setShapeColor(color){
      
      if (color.includes('#')){ // if the user starts with # for hexadecimal number
          this.color = color.toUpperCase(); 
      }else{
          this.color = color.toLowerCase();
      }
  }
  setTextColor(textColor){
      // text color is user's input in string
      if (textColor.includes('#')){
          this.textColor = textColor.toUpperCase(); 
      }else{
          this.textColor = textColor.toLowerCase();
      }
  }
  setText(text){
      this.text = text.toUpperCase();
  }

  getShapeColor(){
      return this.color;
  }
  getTextColor(){
      return this.textColor;
  }
  getText(){
      return this.text;
  }

  render(){
      return ``;
  }
}

class Triangle extends Shape {
  constructor(color, text, colorText){
      super(color, text, colorText);
  }
  render(){
      return `<polygon points="150,190 50,50 290,50" fill="${this.getShapeColor()}"/>`;
  }
  renderText(){
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getText()}</text>`;
  }
}

class Circle extends Shape {
  constructor(color, text, colorText){
      super(color, text, colorText);
  }
  render(){
      return `<circle cx="150" cy="100" r="80" fill="${this.getShapeColor()}"/>`;
  }
  renderText(){
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getText()}</text>`;
  }
}

class Square extends Shape {
  constructor(color, text, colorText){
      super(color, text, colorText);
  }
  render(){
      return `<rect x="90" y="25" width="150" height="150" fill="${this.getShapeColor()}"/>`;
  }
  renderText(){
      return `<text x="165" y="115" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getText()}</text>`;
  }

}

// Create an object per user's request
function createLogo(userAnswers){
  switch (userAnswers.shape){
      case "Triangle": {
          const shapeTri = new Triangle();
          shapeTri.setShapeColor(userAnswers.shapeColor);
          shapeTri.setText(userAnswers.initial);
          shapeTri.setTextColor(userAnswers.textColor);
          return shapeTri;
      }
      case "Square": {
          const shapeSq = new Square();
          shapeSq.setShapeColor(userAnswers.shapeColor);
          shapeSq.setText(userAnswers.initial);
          shapeSq.setTextColor(userAnswers.textColor);
          return shapeSq;
      }
      case "Circle": {
          const shapeCir = new Circle();
          shapeCir.setShapeColor(userAnswers.shapeColor);
          shapeCir.setText(userAnswers.initial);
          shapeCir.setTextColor(userAnswers.textColor);
          return shapeCir;
      }
      default:{
          console.log("Something wrong with your input");
      }
  }
}

// Render a shape with initials for writing files
function renderSVG(shapeName){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeName.render()}
    
  ${shapeName.renderText()}
    
  </svg>`;
}

module.exports = {Circle, Square, Triangle, createLogo, renderSVG};