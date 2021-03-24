import * as Engine from "../../../engine/engine.js"

export default class DestroyOnRoomWall extends Engine.Component {
    constructor(gameObject, speed = 1) {
        super(gameObject);
        this.speed = speed;
    }
    start() {
        console.log("You called start() on a DestroyOnRoomWall")
    }
    update() {
        let rectGeoComp = this.gameObject.getComponent("RectangleGeometryComponent");
        if (this.gameObject.transform.position.x - rectGeoComp.width / 2 < -75 || this.gameObject.transform.position.y - rectGeoComp.height / 2 < -40
            || this.gameObject.transform.position.x + rectGeoComp.width / 2 > 75 || this.gameObject.transform.position.y + rectGeoComp.height / 2 > 40) {
            this.gameObject.destroy();
        }
    }
}