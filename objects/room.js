import {THREE} from 'https://cdn.rodin.io/v0.0.1/vendor/three/THREE.GLOBAL';
import {ModelLoader} from 'https://cdn.rodin.io/v0.0.1/rodinjs/sculpt/ModelLoader';
import {SceneManager} from 'https://cdn.rodin.io/v0.0.1/rodinjs/scene/SceneManager';

const scene = SceneManager.get();

export const room = ModelLoader.load('./models/room/Deck_model.obj');

room.on('ready', (evt) => {
    scene.add(evt.target.object3D);
    //const floorTexture = new THREE.TextureLoader().load("./models/room/floor.jpg");
    //floorTexture.wrapS = THREE.RepeatWrapping;
    //floorTexture.wrapT = THREE.RepeatWrapping;
    //floorTexture.repeat.set(4, 4);

    //evt.target.object3D.children[0].material.materials[0].map = floorTexture;
    evt.target.object3D.scale.set(.5, .5, .5);
   
   evt.target.object3D.children[0].material = new THREE.MeshLambertMaterial({color:0xff0000});
   evt.target.object3D.children[1].material = new THREE.MeshLambertMaterial({color:0x00ff00});
   evt.target.object3D.children[2].material = new THREE.MeshLambertMaterial({color:0x0000ff});
   evt.target.object3D.children[3].material = new THREE.MeshLambertMaterial({color:0x00ffff});
   evt.target.object3D.children[4].material = new THREE.MeshLambertMaterial({color:0xff00ff});
   
   evt.target.object3D.children[3].position.y = -.15;
   evt.target.object3D.children[4].position.y = -.15;
   evt.target.object3D.children[3].scale.y = 1.05;
   evt.target.object3D.children[4].scale.y = 1.05;
   console.log(evt.target.object3D.children[3], evt.target.object3D.children[4]);
   
   evt.target.object3D.rotation.y = Math.PI;
   
   
});
