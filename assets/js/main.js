import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

//Ejemplo para mostrar instancias por consola

let impuesto1 = new Impuesto(5500000, 440000);
let cliente1 = new Cliente ("Samuel", impuesto1);

console.log(cliente1);
console.log(impuesto1);
console.log(cliente1.calcularImpuesto());

//Ejemplo para crear y mostrar instancias de manera dinámica

let clientes = []

$(() => {
    $("form").submit((evento) => {
        evento.preventDefault();

        let nombre = $("#txt-nombre").val();
        let montoBrutoAnual = $("#num-montoBrutoAnual").val();
        let deducciones = $("#num-deducciones").val();

        let impuesto = new Impuesto(montoBrutoAnual, deducciones)
        let cliente = new Cliente(nombre, impuesto)
        clientes.push(cliente);

        let mostrarCliente = () => { 
			$("#tabla-cliente tbody").html("");
            clientes.forEach((item, index) => {
                console.log(item)
                $("#tabla-cliente tbody").append(`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.nombre}</td>                           
                        <td>${item.impuesto.montoBrutoAnual}</td>
                        <td>${item.impuesto.deducciones}</td>
                        <td>${item.calcularImpuesto()}</td>
                    </tr>
                `);
            });
        };

        $("form")[0].reset();

        if (deducciones >= montoBrutoAnual){
            alert("Las deducciones deben ser menores al monto bruto anual")
        }else mostrarCliente();
    });
});