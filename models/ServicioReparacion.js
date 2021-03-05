module.exports = (sequelize, type) => {
  return sequelize.define("servicioreparacion", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
    direccion: type.STRING,
    item: type.INTEGER,
  });
};
