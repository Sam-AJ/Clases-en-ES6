export default class Cliente{
    constructor(nombre, impuesto = {}){
        this._nombre = nombre;
        this._impuesto = impuesto;
    };

    get nombre(){
        return this._nombre;
    };

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    };

    calcularImpuesto(){
        let calculo = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * .21;
        return calculo;
    };
};