var camera, controls, scene, renderer;
var cube_1;
init();
animate();
function init() {
    console.log('running');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.z = 500;
    camera.position.x = 600;
    camera.position.y = 600;

    controls = new THREE.TrackballControls(camera);
    controls.addEventListener('change', render);
    scene = new THREE.Scene();
    //1st Layer
    //1 row
    cube_1 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshBasicMaterial());
    var cube_2 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_3 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_2.position.x = 300;
    cube_3.position.x = 600;
    //2 row
    var cube_4 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_5 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_6 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_4.position.y = 300;
    cube_5.position.y = 300;
    cube_6.position.y = 300;

    cube_5.position.x = 300;
    cube_6.position.x = 600;
    //3 row
    var cube_7 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_8 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_9 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_7.position.y = 600;
    cube_8.position.y = 600;
    cube_9.position.y = 600;

    cube_8.position.x = 300;
    cube_9.position.x = 600;

    //2nd Layer
    //1
    var cube_10 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_11 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_12 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_10.position.z = 300;
    cube_11.position.z = 300;
    cube_12.position.z = 300;

    cube_11.position.x = 300;
    cube_12.position.x = 600;

    //2
    var cube_13 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_14 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_15 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_13.position.z = 300;
    cube_14.position.z = 300;
    cube_15.position.z = 300;

    cube_13.position.y = 300;
    cube_14.position.y = 300;
    cube_15.position.y = 300;

    cube_14.position.x = 300;
    cube_15.position.x = 600;

    //3
    var cube_16 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_17 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_18 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_16.position.z = 300;
    cube_17.position.z = 300;
    cube_18.position.z = 300;

    cube_16.position.y = 600;
    cube_17.position.y = 600;
    cube_18.position.y = 600;

    cube_17.position.x = 300;
    cube_18.position.x = 600;

    //3rd Layer
    //1
    var cube_19 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_20 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_21 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_19.position.z = 600;
    cube_20.position.z = 600;
    cube_21.position.z = 600;

    cube_20.position.x = 300;
    cube_21.position.x = 600;

    //2
    var cube_22 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_23 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_24 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_22.position.z = 600;
    cube_23.position.z = 600;
    cube_24.position.z = 600;

    cube_22.position.y = 300;
    cube_23.position.y = 300;
    cube_24.position.y = 300;

    cube_23.position.x = 300;
    cube_24.position.x = 600;

    //3
    var cube_25 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_26 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
    var cube_27 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());

    cube_25.position.z = 600;
    cube_26.position.z = 600;
    cube_27.position.z = 600;

    cube_25.position.y = 600;
    cube_26.position.y = 600;
    cube_27.position.y = 600;

    cube_26.position.x = 300;
    cube_27.position.x = 600;




    scene.add(cube_1);
    scene.add(cube_2);
    scene.add(cube_3);
    scene.add(cube_4);
    scene.add(cube_5);
    scene.add(cube_6);
    scene.add(cube_7);
    scene.add(cube_8);
    scene.add(cube_9);
    scene.add(cube_10);
    scene.add(cube_11);
    scene.add(cube_12);
    scene.add(cube_13);
    scene.add(cube_14);
    scene.add(cube_15);
    scene.add(cube_16);
    scene.add(cube_17);
    scene.add(cube_18);
    scene.add(cube_19);
    scene.add(cube_20);
    scene.add(cube_21);
    scene.add(cube_22);
    scene.add(cube_23);
    scene.add(cube_24);
    scene.add(cube_25);
    scene.add(cube_26);
    scene.add(cube_27);



    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    document.addEventListener('click', onDocumentMouseDown, false);

}

// function onDocumentMouseDown( event ) {                
//     var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   //x
//                             -( event.clientY / window.innerHeight ) * 2 + 1,  //y
//                             0.5 );                                            //z
//     projector.unprojectVector( mouse3D, camera );   
//     mouse3D.sub( camera.position );                
//     mouse3D.normalize();
//     var raycaster = new THREE.Raycaster( camera.position, mouse3D );
//     var intersects = raycaster.intersectObjects( objects );
//         // Change color if hit block
//     if ( intersects.length > 0 ) {
//           intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
//     }
//  }


function onDocumentMouseDown(event) {

    var mouse3D = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1,   //x
        -(event.clientY / window.innerHeight) * 2 + 1,  //y
        0.5);                                            //z
    //  var raycaster = projector.pickingRay( mouse3D.clone(), camera );
    // var intersects = raycaster.intersectObjects( objects );
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse3D, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    // Change color if hit block
    if (intersects.length > 0) {
        console.log(intersects[0].object.material);
        if (intersects[0].object.material.wireframe == true) {
            intersects[0].object.material.wireframe = false;
        }
        else {
            intersects[0].object.material.wireframe = true;
        }
        //change color later
        // if(intersects[ 0 ].object.material.color.getHexString() == '00fbff'){//if blue
        //     intersects[ 0 ].object.material.color.setHex(0x000000);//then black
        // }
        // else if(intersects[ 0 ].object.material.color.getHexString() == '000000'){//if black
        //     intersects[ 0 ].object.material.color.setHex (0x00FBFF);//else blue
        // }
        // else if(intersects[ 0 ].object.material.color.getHexString() == 'ffffff'){
        //     intersects[ 0 ].object.material.color.setHex (0x00FBFF);   
        // }

        //Game check function is initiated from here 
        gameCheck();

    }
}

function gameCheck() {



}


function animate() {
    requestAnimationFrame(animate);
    controls.update();
}


function render() {
    scene.background = new THREE.Color(0xffffff);
    renderer.render(scene, camera);
} 