const router = require("express").Router();

const { Modelo } = require("../../db");

router.get("/", async (req, res) => {
  const items = await Modelo.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await Modelo.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await Modelo.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente" });
});

router.delete("/:itemId", async (req, res) => {
  await Modelo.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
