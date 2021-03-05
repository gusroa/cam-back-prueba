const Sequelize = require("sequelize");

const CamaraModel = require("./models/Camara");
const ClientesModel = require("./models/Clientes");
const EnAlquilerModel = require("./models/EnAlquiler");
const EstadoCamaraModel = require("./models/EstadoCamara");
const MarcasModel = require("./models/Marcas");
const ModeloModel = require("./models/Modelo");
const SensibilidadISOModel = require("./models/SensibilidadISO");
const ServicioRepModel = require("./models/ServicioReparacion");
const TipoPeliModel = require("./models/TipoPelicula");
const FormatoModel = require("./models/Formato");

const sequelize = new Sequelize("t3q1MnvzsZ", "t3q1MnvzsZ", "RrN6hMPPJU", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const Item = CamaraModel(sequelize, Sequelize);
const Cliente = ClientesModel(sequelize, Sequelize);
const EnAlquiler = EnAlquilerModel(sequelize, Sequelize);
const EstadoCamara = EstadoCamaraModel(sequelize, Sequelize);
const Marca = MarcasModel(sequelize, Sequelize);
const Modelo = ModeloModel(sequelize, Sequelize);
const Sensibilidad = SensibilidadISOModel(sequelize, Sequelize);
const TipoPeli = TipoPeliModel(sequelize, Sequelize);
const ServicioReparacion = ServicioRepModel(sequelize, Sequelize);
const Formato = FormatoModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas ");
});

module.exports = {
  Item,
  Cliente,
  EnAlquiler,
  EstadoCamara,
  Marca,
  Modelo,
  Sensibilidad,
  TipoPeli,
  ServicioReparacion,
  Formato,
};
