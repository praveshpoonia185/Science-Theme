/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./components/02-molecules/tabs/tabs.js ***!
  \**********************************************/
Drupal.behaviors.tabs={attach:function attach(a){function b(a){a!==h&&0<=a&&a<=f.length&&(f[+h].classList.remove("is-active"),f[+a].classList.add("is-active"),g[+h].classList.remove("is-active"),g[+a].classList.add("is-active"),h=a)}function c(a,c){a.addEventListener("click",function(a){a.preventDefault(),b(c)})}for(var d=a.querySelectorAll(".tabs"),f=a.querySelectorAll(".tabs__link"),g=a.querySelectorAll(".tabs__tab"),h=0,j=0;j<d.length;j+=1)d[+j].classList.remove("no-js");for(var k,l=0;l<f.length;l+=1)k=f[+l],c(k,l)}};
/******/ })()
;
//# sourceMappingURL=tabs.js.map