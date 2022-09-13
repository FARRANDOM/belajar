import kubus from "./R_kubus.mjs";
import cc from "./cc_motor.mjs";
import bola from "./R_bola.mjs";

var f = {"rumus" : 0.785, "diameter" : 5, "langkah" : 10}
var p = {"panjang" : 10,"lebar" : 5,"tinggi" :10 }
var m = {"phi" : 3.14,"jari" : 10}
console.log("CC motor = " + cc(f));
console.log("Volume = " + kubus(p));
console.log("Volueme bola = " + bola(m))