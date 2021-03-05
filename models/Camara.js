module.exports = (sequelize, type) => {
  return sequelize.define("item", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    referencia: type.STRING,
    marca: type.INTEGER,
    modelo: type.INTEGER,
    soporteflash: type.INTEGER,
    modelo: type.INTEGER,
    tipopelicula: type.INTEGER,
  });
};
