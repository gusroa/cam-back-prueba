const router = require("express").Router();

const { Marca } = require("../../db");

router.get("/", async (req, res) => {
  const items = await Marca.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await Marca.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await Marca.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente" });
});

router.delete("/:itemId", async (req, res) => {
  await Marca.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
