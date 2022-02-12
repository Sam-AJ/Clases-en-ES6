import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let impuesto1 = new Impuesto(5500000, 440000);
let cliente1 = new Cliente ("Samuel", impuesto1);

console.log(cliente1);
console.log(impuesto1);
console.log(cliente1.calcularImpuesto());