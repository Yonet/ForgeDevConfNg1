(function() {
  'use strict';

  angular
    .module('app.demo')
    .directive('ayGlobe', ayGlobe);

  ayGlobe.$inject = ['sphereFactory'];
  /* @ngInject */
  function ayGlobe(sphereFactory) {

    // Directive definition object
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        whenDoneAnimating: '&?',
        width: "=width", // bindings
        height: '@height', // static value
        color: '&color' // expression
      }
    }; ///definition

    return directive;

    function link(scope, element, attrs) {
      //Set the width and height from the parent element width
      var width = attrs.width || element[0].parentNode.clientWidth;
      var height = width * 2 / 3;

      //Scene
      var scene = new THREE.Scene();

      //Camera
      var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      // Renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);

      //Add the renderer to the DOM
      element[0].appendChild(renderer.domElement);

      var cube = sphereFactory.createCube();
      scene.add(cube);
      //   var cubeTwo = sphereFactory.createCube(0x00ffff);
      //   scene.add(cubeTwo);
      //   var globe = sphereFactory.createSphere(5);
      //   scene.add(globe);

      camera.position.z = 5;

      var render = function() {

        //run every frame 60 times per second
        requestAnimationFrame(render);

        // Rotation animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        //Actual rendering the scene with the camera
        renderer.render(scene, camera);
      }; ///render

      render();
    } ///link
  } ///ayGlobe
})();
