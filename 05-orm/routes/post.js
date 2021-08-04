module.exports = (app, models) => {
  app.get("/posts", (req, res) =>
    models.post.findAll().then((result) => res.json(result))
  );

  app.get("/post/:id", (req, res) =>
    models.post.findByPk(req.params.id).then((result) => res.json(result))
  );

  app.post("/post", (req, res) =>
    models.post.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  app.put("/post/:id", (req, res) =>
    models.post.update({
      title: req.body.title,
      content: req.body.content
    }, {
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );

  app.delete("/post/:id", (req, res) =>
    models.post.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}