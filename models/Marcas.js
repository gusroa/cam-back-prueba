module.exports = (sequelize, type) => {
  return sequelize.define("marca", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
  });
};
