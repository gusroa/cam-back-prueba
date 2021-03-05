const router = require("express").Router();

const { EnAlquiler } = require("../../db");

router.get("/", async (req, res) => {
  const items = await EnAlquiler.findAll();
  res.json(items);
});

router.post("/", async (req, res) => {
  const items = await EnAlquiler.create(req.body);
  res.json(items);
});

router.put("/:itemId", async (req, res) => {
  await EnAlquiler.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente el registro" });
});

router.delete("/:itemId", async (req, res) => {
  await EnAlquiler.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
