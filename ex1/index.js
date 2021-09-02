"use strict";

const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");

const cestaDePeras = {};

cestaDePeras.max = 10;
cestaDePeras.min = 2;
cestaDePeras.actual = 3;
cestaDePeras.inicial = 3;
cestaDePeras.add = function (num) {
  cestaDePeras.actual += num;
  return `Tienes ${cestaDePeras.actual} peras.`;
};

cestaDePeras.less = function (num) {
  cestaDePeras.actual -= num;
  return `Tienes ${cestaDePeras.actual} peras.`;
};
cestaDePeras.reset = function (num) {
  cestaDePeras.actual = cestaDePeras.inicial;
  return `Tienes ${cestaDePeras.actual} peras.`;
};

list1.innerHTML = cestaDePeras.add(2);
list2.innerHTML = cestaDePeras.less(3);
list3.innerHTML = cestaDePeras.reset();
list4.innerHTML = cestaDePeras.add(1);
