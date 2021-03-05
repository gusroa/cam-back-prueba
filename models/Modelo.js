module.exports = (sequelize, type) => {
  return sequelize.define("modelo", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
  });
};
