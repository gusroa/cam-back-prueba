const router = require("express").Router();

const { Sensibilidad } = require("../../db");

router.get("/", async (req, res) => {
  const items = await Sensibilidad.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await Sensibilidad.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await Sensibilidad.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente" });
});

router.delete("/:itemId", async (req, res) => {
  await Sensibilidad.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
