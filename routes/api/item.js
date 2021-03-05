const router = require("express").Router();

const { Item } = require("../../db");

router.get("/", async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await Item.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await Item.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente" });
});

router.delete("/:itemId", async (req, res) => {
  await Item.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
