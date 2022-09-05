/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FF7F66']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects
// Objects

var Ball = /*#__PURE__*/function () {
  function Ball(x, y, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.fill = this.color + '05';
    this.stroke = this.color;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.fill;
      c.strokeStyl = this.stroke; // c.fill()

      c.stroke();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Ball;
}();

var Parcticle = /*#__PURE__*/function () {
  function Parcticle(x, y, radius, color) {
    _classCallCheck(this, Parcticle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(0, color.length - 1)];
    this.fill = this.color + '20';
    this.stroke = this.color;
    this.mass = 1; // 1kg
    // this.speed = randomIntFromRange(1, 2);
    // this.velocity = {
    //   x: randomIntFromRangeWithoutZero(-this.speed, this.speed) *2,
    //   y: randomIntFromRangeWithoutZero(-this.speed, this.speed) *2
    // }

    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5
    };
  }

  _createClass(Parcticle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.fill;
      c.strokeStyle = this.stroke;
      c.lineWidth = 1.6;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      // draw first calculate later or sometimes it collison resolve before it could be happen
      this.draw();

      for (var i = 0; i < parcticles.length; i++) {
        if (this == parcticles[i]) continue;

        if (getDistance(this.x, this.y, parcticles[i].x, parcticles[i].y) - this.radius * 2 < 0) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_0__["resolveCollision"])(this, parcticles[i]);
        }
      }

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.velocity.y = -this.velocity.y;
      }

      if (getDistance(mouse.x, mouse.y, this.x, this.y) < ball_mouse.radius) {
        this.fill = this.color + '80';
      } else {
        this.fill = this.color + '20';
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }]);

  return Parcticle;
}(); // Implementation
// let objects


var parcticles_number = 100;
var parcticles = [];
var radius = 20;
var ball_mouse;

function init() {
  ball_mouse = new Ball(undefined, undefined, 150, 'red');
  parcticles = [];
  var x = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(radius, innerWidth - radius);
  var y = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(radius, innerHeight - radius);
  parcticles.push(new Parcticle(x, y, radius, colors));
  var parcticlesnumber = parcticles_number; // while(parcticles.length < parcticles_number) {

  var _loop = function _loop(i) {
    var x = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(radius, innerWidth - radius);
    var y = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(radius, innerHeight - radius);
    var add = true;
    parcticles.forEach(function (parcticle) {
      if (getDistance(parcticle.x, parcticle.y, x, y) < radius + parcticle.radius) {
        add = false;
      }
    });

    if (add == true) {
      parcticles.push(new Parcticle(x, y, radius, colors));
    }
  };

  for (var i = 0; i < parcticlesnumber - 1; i++) {
    _loop(i);
  } // parcticlesnumber = parcticles_number - parcticles.length;


  console.log(parcticles.length); // }
} // get distance


function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  ball_mouse.x = mouse.x;
  ball_mouse.y = mouse.y;
  ball_mouse.update();
  parcticles.forEach(function (parcticle) {
    return parcticle.update();
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntFromRangeWithoutZero(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);

  while (num == 0) {
    num = Math.floor(Math.random() * (max - min + 1) + min);
  }

  return num;
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */


function rotate(velocity, angle) {
  var rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };
  return rotatedVelocities;
}
/**
* Swaps out two colliding particles' x and y velocities after running through
* an elastic collision reaction equation
*
* @param  Object | particle      | A particle object with x and y coordinates, plus velocity
* @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
* @return Null | Does not return a value
*/


function resolveCollision(particle, otherParticle) {
  var xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  var yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
  var xDist = otherParticle.x - particle.x;
  var yDist = otherParticle.y - particle.y; // Prevent accidental overlap of particles

  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x); // Store mass in var for better readability in collision equation

    var m1 = particle.mass;
    var m2 = otherParticle.mass; // Velocity before equation

    var u1 = rotate(particle.velocity, angle);
    var u2 = rotate(otherParticle.velocity, angle); // Velocity after 1d collision equation

    var v1 = {
      x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
      y: u1.y
    };
    var v2 = {
      x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
      y: u2.y
    }; // Final velocity after rotating axis back to original location

    var vFinal1 = rotate(v1, -angle);
    var vFinal2 = rotate(v2, -angle); // Swap particle velocities for realistic bounce effect

    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;
    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomIntFromRangeWithoutZero: randomIntFromRangeWithoutZero,
  randomColor: randomColor,
  distance: distance,
  rotate: rotate,
  resolveCollision: resolveCollision
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map