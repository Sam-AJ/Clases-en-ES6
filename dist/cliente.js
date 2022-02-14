// import "core-js/modules/es.error.cause.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var calculo = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * .21;
      return calculo;
    }
  }]);

  return Cliente;
}();

export { Cliente as default };