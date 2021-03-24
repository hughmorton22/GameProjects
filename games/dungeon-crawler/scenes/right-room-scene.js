export default {
    name: "RightRoomScene",
    children: [
        {
            gameObject: {
              name:"MainCamera",components:[
                {name:"WorldCameraComponent"}
              ]
            },sx:10,sy:10
          },
          {
            gameObject:{
              name:"ScreenCamera",components:[
                {name:"ScreenCameraComponent"}
              ]
            }
          },
        {
          prefabName: "Ground"
        },
        {
            prefabName: "Isaac",
        },
        {
            prefabName: "SimpleEnemy",
            x: 40,
            y: -20
        },
        {
          prefabName: "MainController"
        }
    ]
}