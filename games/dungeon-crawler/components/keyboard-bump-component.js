import Component from "../../../engine/component.js"
import Input from "../../../engine/input.js"

class KeyboardBumpComponent extends Component {
  static name = "KeyboardBumpComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  
  onKeyDown(keys){
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.transform.position.x -= 1 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.transform.position.x += 1 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.transform.position.y -= 1 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.transform.position.y += 1 * this.speed
  }

}

export default KeyboardBumpComponent;