import * as Engine from "../../../engine/engine.js"
import Input from "../../../engine/input.js"

export default class ShootTearComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 101;
  }
  update() {

    if (this.tick > 100 && (Input.getKey("ArrowLeft") || Input.getKey("ArrowRight")
      || Input.getKey("ArrowUp") || Input.getKey("ArrowDown"))) {

      console.log("Shoot tear")
      this.tick = 0;

      Engine.SceneManager.currentScene.instantiate({
        prefabName: "Tear",
        x: this.gameObject.transform.position.x
      })
    }
    else {
      this.tick++;
    }
  }
}