module.exports = (sequelize, type) => {
  return sequelize.define("formato", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
  });
};
