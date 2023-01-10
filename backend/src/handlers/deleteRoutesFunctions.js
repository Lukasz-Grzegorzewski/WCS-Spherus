const fs = require("fs");
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

  database.query("SELECT url FROM video WHERE id = ?", [id]).then(([[url]]) => {
    database
      .query("DELETE FROM video_category WHERE video_id = ?", [id])
      .then(([videoCategory]) => {
        if (videoCategory.affectedRows !== 0) {
          database
            .query("DELETE FROM video WHERE id = ?", [id])
            .then(([video]) => {
              const path = `/${url.url}`;
              fs.unlink(`public${path}`, (err) => {
                if (err) {
                  console.error(err);
                }
              });

              return video.affectedRows === 0
                ? res.status(404).send("Not Found")
                : res.sendStatus(204);
            })

            .catch((err) => {
              console.error(err);
              res.status(500).send("Error deleting a video");
            });
        }
      })

      .catch((err) => {
        console.error(err);
        res.status(500).send("Error deleting a video_category attachment");
      });
  });
};

const deleteCategoryById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM video_category WHERE category_id = ?", [id])
    .then(() => {
      database
        .query("DELETE FROM category WHERE id = ?", [id])
        .then(([category]) => {
          return category.affectedRows === 0
            ? res.status(404).send("Category Not Found")
            : res.sendStatus(204);
        })

        .catch((err) => {
          console.error(err);
          res.status(500).send("Error deleting a category");
        });
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video_category attachment");
    });
};

// HERO SLIDER
const deleteHeroSliderById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  database
    .query("DELETE FROM hero_slider WHERE id = ?", [id])
    .then(([hero]) => {
      console.warn(hero);
      return hero.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video in Hero Slider");
    });
};

// FIXTURES

const deleteFixturesById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  database
    .query("DELETE FROM fixtures WHERE id = ?", [id])
    .then(([fix]) => {
      console.warn(fix);
      return fix.affectedRows === 0
        ? res.status(404).send("File not found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video in Fixture Slider");
    });
};

// ADVERTISING
const deletePublicityById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  database
    .query("SELECT url_image ui FROM publicity WHERE id = ?", [id])
    .then(([[ui]]) => {
      database
        .query("DELETE FROM publicity WHERE id = ?", [id])
        .then(([pub]) => {
          const path = `/${ui.ui}`;
          fs.unlink(`public${path}`, (err) => {
            if (err) {
              console.error(err);
            }

            return pub.affectedRows === 0
              ? res.status(404).send("Not Found")
              : res.sendStatus(204);
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error deleting a advert");
        });
    });
};

// HOME PAGE
const deleteHomeById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  database
    .query("DELETE FROM home WHERE id = ?", [id])
    .then(([home]) => {
      return home.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting a video in Hero Slider");
    });
};

module.exports = {
  deleteUserById,
  deleteVideoById,
  deleteCategoryById,
  deleteHeroSliderById,
  deleteFixturesById,
  deletePublicityById,
  deleteHomeById,
};
