module.exports = (sequelize, type) => {
  return sequelize.define("sensibilidadiso", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sensibilidad: type.STRING,
  });
};
