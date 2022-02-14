import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js"; //Ejemplo para mostrar instancias por consola

var impuesto1 = new Impuesto(5500000, 440000);
var cliente1 = new Cliente("Samuel", impuesto1);
console.log(cliente1);
console.log(impuesto1);
console.log(cliente1.calcularImpuesto()); //Ejemplo para crear y mostrar instancias de manera dinámica

var clientes = [];
$(function () {
  $("form").submit(function (evento) {
    evento.preventDefault();
    var nombre = $("#txt-nombre").val();
    var montoBrutoAnual = $("#num-montoBrutoAnual").val();
    var deducciones = $("#num-deducciones").val();
    var impuesto = new Impuesto(montoBrutoAnual, deducciones);
    var cliente = new Cliente(nombre, impuesto);
    clientes.push(cliente);

    var mostrarCliente = function mostrarCliente() {
      $("#tabla-cliente tbody").html("");
      clientes.forEach(function (item, index) {
        console.log(item);
        $("#tabla-cliente tbody").append("\n                    <tr>\n                        <td>".concat(index + 1, "</td>\n                        <td>").concat(item.nombre, "</td>                           \n                        <td>").concat(item.impuesto.montoBrutoAnual, "</td>\n                        <td>").concat(item.impuesto.deducciones, "</td>\n                        <td>").concat(item.calcularImpuesto(), "</td>\n                    </tr>\n                "));
      });
    };

    $("form")[0].reset();

    if (deducciones >= montoBrutoAnual) {
      alert("Las deducciones deben ser menores al monto bruto anual");
    } else mostrarCliente();
  });
});