const router = require("express").Router();

const { EstadoCamara } = require("../../db");

router.get("/", async (req, res) => {
  const items = await EstadoCamara.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await EstadoCamara.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await EstadoCamara.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente el registro" });
});

router.delete("/:itemId", async (req, res) => {
  await EstadoCamara.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
