const router = require("express").Router();

const apiCliRoutes = require("./api/cliente");
const apiAlqRoutes = require("./api/enalquiler");
const apiEstRoutes = require("./api/estadocamara");
const apiItemRoutes = require("./api/item");
const apiMarcaRoutes = require("./api/marca");
const apiModRoutes = require("./api/modelo");
const apiSensRoutes = require("./api/sensibilidadiso");
const apiServRoutes = require("./api/servicioreparacion");
const apiTipoPRoutes = require("./api/tipopelicula");
const formatoRoutes = require("./api/formato");

router.use("/items", apiItemRoutes);
router.use("/clientes", apiCliRoutes);
router.use("/enalquiler", apiAlqRoutes);
router.use("/estados", apiEstRoutes);
router.use("/marcas", apiMarcaRoutes);
router.use("/modelos", apiModRoutes);
router.use("/sensibilidad", apiSensRoutes);
router.use("/sreparacion", apiServRoutes);
router.use("/tipopelicula", apiTipoPRoutes);
router.use("/formatos", formatoRoutes);

module.exports = router;
