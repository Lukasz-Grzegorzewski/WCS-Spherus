const database = require("../../database");

const deleteUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([user]) => {
      return user.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting user");
    });
};

const deleteVideoById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM video_category WHERE video_id = ?", [id])
    .then(([videoCategory]) => {
      if (videoCategory.affectedRows !== 0) {
        database
          .query("DELETE FROM video WHERE id = ?", [id])
          .then(([video]) => {
            return video.affectedRows === 0
              ? res.status(404).send("Not Found")
              : res.sendStatus(204);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error deleting a video");
          });
      } else {
        console.log("youhou ça marche pas!")
      }

    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video_category attachment");
    });


};

const deleteCategoryById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM category WHERE id = ?", [id])
    .then(([category]) => {
      return category.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a category");
    });
};

const deleteHeroSliderById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM hero_slider WHERE id = ?", [id])
    .then(([hero]) => {
      return hero.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video in Hero Slider");
    });
};

const deletePublicityById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM publicity WHERE id = ?", [id])
    .then(([pub]) => {
      return pub.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a advert");
    });
};

module.exports = {
  deleteUserById,
  deleteVideoById,
  deleteCategoryById,
  deleteHeroSliderById,
  deletePublicityById,
};
