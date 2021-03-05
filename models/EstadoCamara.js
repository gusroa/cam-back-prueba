module.exports = (sequelize, type) => {
  return sequelize.define("estadocamara", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
  });
};
