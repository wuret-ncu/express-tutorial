module.exports = (app, models) => {
  app.get("/author/:id", (req, res) =>
    models.author.findByPk(req.params.id).then((result) => res.json(result))
  );
}