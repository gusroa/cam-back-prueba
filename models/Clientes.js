module.exports = (sequelize, type) => {
  return sequelize.define("cliente", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
    multa: type.INTEGER,
  });
};
