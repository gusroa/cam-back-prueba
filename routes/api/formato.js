const router = require("express").Router();

const { Formato } = require("../../db");

router.get("/", async (req, res) => {
  const items = await Formato.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await Formato.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await Formato.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente el registro" });
});

router.delete("/:itemId", async (req, res) => {
  await Formato.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
