module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
      nombre: 'Tenis',
      descripcion: 'JuegoTenis',
      imagen: null,
      grupal: 'true'
    }, {
       nombre: 'PingPong',
      descripcion: 'JuegoPingPong',
      imagen: null,
      grupal: 'true'
    }, {
      nombre: 'Baloncesto',
      descripcion: 'JuegoBaloncesto',
      imagen: null,
      grupal: 'true'

    }], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};