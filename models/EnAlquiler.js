module.exports = (sequelize, type) => {
  return sequelize.define("enalquiler", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente: type.INTEGER,
    camara: type.INTEGER,
    estado: type.INTEGER,
    dias: type.INTEGER,
  });
};
