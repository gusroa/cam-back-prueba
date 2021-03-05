const router = require("express").Router();

const { Cliente } = require("../../db");

router.get("/", async (req, res) => {
  const cliente = await Cliente.findAll();
  res.json(cliente);
});

router.post("/", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

router.put("/:itemId", async (req, res) => {
  await Cliente.update(req.body, {
    where: { id: req.params.itemId },
  });
  res.json({ success: "Se ha modificado correctamente el cliente" });
});

router.delete("/:itemId", async (req, res) => {
  await Cliente.destroy({
    where: { id: req.params.itemId },
  });
  res.json({ success: "Registro eliminado correctamente" });
});

module.exports = router;
