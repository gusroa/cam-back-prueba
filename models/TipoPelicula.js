module.exports = (sequelize, type) => {
  return sequelize.define("tipopelicula", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
    formato: type.INTEGER,
    marca: type.INTEGER,
    sensibilidadISO: type.INTEGER,
  });
};
