import * as THREE from '/build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

function handleClick(texture){
    const material = new THREE.MeshBasicMaterial({map: texture});
    material.side=THREE.BackSide;
}




function changeTexture(object){
    let texture = new THREE.TextureLoader().load("./images/opona/opona1.jpg");
    let bumpMap = new THREE.TextureLoader().load("./images/opona/opona21.jpg");
    let normalMap = new THREE.TextureLoader().load("./images/opona/opona3.jpg");
    let material = new THREE.MeshStandardMaterial({
    map: texture,
    bumpMap: bumpMap,
    bumpScale: 0.5,
     normalMap: normalMap,
    });
    
    object.material = material;
    object.material.needsUpdate = true;
    object.geometry.buffersNeedUpdate = true;
    object.geometry.uvsNeedUpdate = true;
    }








const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight,
0.1, 1000);
camera.position.set(0, 0, 25);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    //antialias: true,
    canvas: document.querySelector('.web-gl'),
});

//renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setSize(window.innerWidth, 720);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor = (0x000000, 0.0);

const opona1 = new THREE.TextureLoader().load('./images/opona/opona1.jpg');
const opona2 = new THREE.TextureLoader().load('./images/opona/opona2.jpg');
const opona3 = new THREE.TextureLoader().load('./images/opona/opona3.jpg');

var arr=[opona1,opona2,opona2];

const material = new THREE.MeshBasicMaterial({map: opona3});
material.side=THREE.BackSide;
const geometry = new THREE.SphereGeometry( 100,100,100 ); 
const sphere = new THREE.Mesh( geometry, material );
scene.add(sphere);

// render function to render the scene
const render = ()=>{
    renderer.render(scene, camera);
}

// Adding orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance=10;
controls.maxDistance=40;
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
controls.enablePan = false;

// Recursion function for animation
//const animate = ()=>{
function animate(){
    requestAnimationFrame(animate);
    controls.update();
    //renderer.render(scene, camera);
    render();
}
animate();

// Resizing window
const windowResize = ()=>{
    //camera.aspect = window.innerWidth / 720;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}
window.addEventListener('resize', windowResize, false);
/*
<div className='centerPlace'>
            <h1>Cameras</h1>
            <div className='cameraPlace' style="position: relative; 
            display: inline-block; 
            margin-left: 10px; 
            margin-right: auto;
            margin-top: -25px;">
            <a href="opona.html"><img src='./images/cam/cam1.jpg' width="50" height="50" alt="camera one"/></a>
            <a href="opona2.html"><img src='./images/cam/cam2.jpg' width="50" height="50" alt="camera two"/></a>
            <a href="opona3.html"><img src='./images/cam/cam3.jpg' width="50" height="50" alt="camera three"/></a>
</div>
</div>
*/