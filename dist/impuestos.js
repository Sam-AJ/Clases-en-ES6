// import "core-js/modules/es.error.cause.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevo_montoBrutoAnual) {
      this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevo_deducciones) {
      this._deducciones = nuevo_deducciones;
    }
  }]);

  return Impuesto;
}();

export { Impuesto as default };