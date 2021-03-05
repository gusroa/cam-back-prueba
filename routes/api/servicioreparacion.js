const router = require("express").Router();

const { ServicioReparacion } = require("../../db");

router.get("/", async (req, res) => {
  const items = await ServicioReparacion.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await ServicioReparacion.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await ServicioReparacion.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente" });
});

router.delete("/:itemId", async (req, res) => {
  await ServicioReparacion.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
