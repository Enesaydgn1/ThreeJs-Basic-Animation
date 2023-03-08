var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,500);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0,0,100);
camera.lookAt(0,0,0);



const material = new THREE.LineBasicMaterial({color:0x0000ff});

const point =  [];

point.push(new THREE.Vector3(-10,0,0));
point.push(new THREE.Vector3(0,10,0));
point.push(new THREE.Vector3(10,0,0));
point.push(new THREE.Vector3(0,-10,0));
point.push(new THREE.Vector3(-10,0,0));


const geometry = new THREE.BufferGeometry().setFromPoints(point);
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene,camera);


const animate = function ()  {
    requestAnimationFrame(animate);

    line.rotation.y += 1.01;
    renderer.render(scene,camera);
};

animate();