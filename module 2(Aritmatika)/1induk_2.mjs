import mod from "./modulus.mjs";
import tambah from "./tambah.mjs";
import pangkat from "./pangkat.mjs";
import kurang from "./kurang.mjs";
import perkalian from "./perkalian.mjs";
import pembagian from "./pembagian.mjs";
import inc from "./increment.mjs";


var mo = {"angka1" : 135, "angka2" :2};
console.log(mod(mo));
var tom = {"angka1" : 2,"angka2" : 3};
console.log(tambah(tom));
var pan = {"angka1" : 4, "angka2" : 2};
console.log(pangkat(pan))
var kur = {"angka1" : 21,"angka2" : 1};
console.log(kurang(kur));
var per = {"angka1" : 2,"angka2" : 10};
console.log(perkalian(per))
var pem = {"angka1" : 10,"angka2" : 2};
console.log(pembagian(pem));
var ni = {"angka1" :10};
console.log(inc(ni))