'use strict';

module.exports = function(Juego) {
/**
 * Devuelve el nombre del juego
 * @param {Function(Error, string)} callback
 */

Juego.prototype.getNombre = function(callback) {
  var Nombre;
  // TODO
  callback(null, this.nombre);
};


};
