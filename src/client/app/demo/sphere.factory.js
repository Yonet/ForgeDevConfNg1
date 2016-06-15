(function() {
  'use strict';

  angular
    .module('app.demo')
    .factory('sphereFactory', sphereFactory);

  /* @ngInject */
  function sphereFactory() {

    var factory = {
      createCube: createCube,
      createSphere: createSphere
    };

    return factory;

    function createCube(color) {
      var color = color || 0x00ff00;

      //Cube geometry
      var geometry = new THREE.BoxGeometry(1, 1, 1);

      //Basic material
      var material = new THREE.MeshBasicMaterial({
        color: color
      });

      //Mesh
      var cube = new THREE.Mesh(geometry, material);
      // var sphere
      return cube;
    }; //cube

    function createSphere(radius) {
      var radius = radius || 5;

      // widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
      // heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
      var globeGeometry = new THREE.SphereGeometry(1, 32, 16);
      var globeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });

      var globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
      console.log(globeMesh);
      return globeMesh;
    }; //sphere

  } //sphereFactory
})();
