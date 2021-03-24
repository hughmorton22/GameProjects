import Component from "../component.js"
export default class DrawGeometryComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);
    this.color = color;
  }
  draw(ctx) {
    let rectangleGeometry = this.gameObject.getComponent("RectangleGeometryComponent");
    if (rectangleGeometry) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0 - rectangleGeometry.width / 2, 0 - rectangleGeometry.height / 2, rectangleGeometry.width, rectangleGeometry.height);
    }

  }
}