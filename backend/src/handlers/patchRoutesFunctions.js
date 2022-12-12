const database = require("../../database");

// Update Hero Slider in admin
const updateHeroSliderById = (req, res) => {
  const { id } = req.params;
  const { fkVideo } = req.body;

  database
    .query("UPDATE hero_slider set fk_video = ? WHERE id = ?", [fkVideo, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the Hero");
    });
};

module.exports = {
  updateHeroSliderById,
};
