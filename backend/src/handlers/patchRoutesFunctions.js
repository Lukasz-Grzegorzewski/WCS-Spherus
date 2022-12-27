const database = require("../../database");

const patchVideoById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { url, description, display, title, date } = req.body;
  const reqBodyKeysArr = Object.keys(req.body);

  let sql = "UPDATE video SET";
  reqBodyKeysArr.forEach((item, index) => {
    if (index !== 0) sql += ",";
    switch (item) {
      case "url":
        sql += ` ${item} = ${JSON.stringify(url)}`;
        break;
      case "description":
        sql += ` ${item} = ${JSON.stringify(description)}`;
        break;
      case "display":
        sql += ` ${item} = ${JSON.stringify(display)}`;
        break;
      case "title":
        sql += ` ${item} = ${JSON.stringify(title)}`;
        break;
      case "date":
        sql += ` ${item} = ${JSON.stringify(date)}`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id = ?;";

  database
    .query(sql, [id])
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the movie");
    });
};

const patchUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { firstname, lastname, nickname, birthday, email, password, isAdmin } =
    req.body;
  const reqBodyKeysArr = Object.keys(req.body);

  let sql = "UPDATE user SET";
  reqBodyKeysArr.forEach((item, index) => {
    if (index !== 0) sql += ",";
    switch (item) {
      case "firstname":
        sql += ` ${item} = ${JSON.stringify(firstname)}`;
        break;
      case "lastname":
        sql += ` ${item} = ${JSON.stringify(lastname)}`;
        break;
      case "nickname":
        sql += ` ${item} = ${JSON.stringify(nickname)}`;
        break;
      case "birthday":
        sql += ` ${item} = ${JSON.stringify(birthday)}`;
        break;
      case "email":
        sql += ` ${item} = ${JSON.stringify(email)}`;
        break;
      case "password":
        sql += ` ${item} = ${JSON.stringify(password)}`;
        break;
      case "isAdmin":
        sql += ` is_admin = ${JSON.stringify(isAdmin)}`;
        break;
      default:
        break;
    }
  });
  sql += " WHERE id = ?;";

  database
    .query(sql, [id])
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing user");
    });
};

const patchCategoryById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  database
    .query(`UPDATE category SET name = ${JSON.stringify(name)} WHERE id = ?;`, [
      id,
    ])
    .then(([result]) => {
      return result.affectedRows === 0
        ? res.status(404).send("Not Found")
        : res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing category");
    });
};

// Update Hero Slider in admin
const updateHeroSliderById = (req, res) => {
  const { id } = req.params;
  const { fkVideo } = req.body;

  database
    .query("UPDATE hero_slider set fk_video = ? WHERE id = ?", [
      Number(fkVideo),
      id,
    ])
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
// Update Advertising in admin
const updatePublicityById = (req, res) => {
  const { id } = req.params;
  const { description, urlLink, name } = req.body;
  database
    .query(
      `UPDATE publicity set description = ${JSON.stringify(
        description
      )}, url_link= ${JSON.stringify(urlLink)}, name = ${JSON.stringify(
        name
      )} WHERE id = ?;`,
      [Number(id)]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the advert");
    });
};

module.exports = {
  patchVideoById,
  patchUserById,
  patchCategoryById,
  updateHeroSliderById,
  updatePublicityById,
};
