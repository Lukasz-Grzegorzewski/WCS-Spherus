const { decode } = require("node-base64-image");
const fs = require("fs");

const database = require("../../database");

/* POST USER */
const signInUserByUser = (req, res) => {
  const {
    firstname,
    lastname,
    nickname,
    birthday = null,
    email,
    password,
    isAdmin = 0,
  } = req.body;

  let finalBirthday = birthday;
  if (req.body.birthday === "") {
    finalBirthday = null;
  }

  database
    .query("SELECT email FROM user WHERE email = ?", [email])
    .then(([[resp]]) => {
      if (!resp) {
        database
          .query(
            "INSERT INTO user (firstname, lastname, nickname, birthday, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
              firstname,
              lastname,
              nickname,
              finalBirthday,
              email,
              password,
              isAdmin,
            ]
          )
          .then(([result]) => {
            res
              .location(`/users/${result.insertId}`)
              .status(201)
              .send({ message: "user created" });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the user");
          });
      } else {
        res.status(500).send("Impossible to save the user");
      }
    })
    .catch((err) => {
      console.warn(err);
      res.status(409).send("Fuck");
    });
};

const uploadAvatarUrl = (req, res) => {
  const { id, base64 } = req.body;
  const base64Final = base64.split("base64,")[1];
  const dir = `assets/images/avatars/`;
  const url = `${dir}${id}.jpg`;

  if (!fs.existsSync(`public/${dir}`)) {
    fs.mkdirSync(`public/${dir}`);
  }

  database
    .query("UPDATE user SET url = ? WHERE id = ?", [url, id])
    .then(async () => {
      await decode(base64Final, {
        fname: `./public/${dir}${id}`,
        ext: "jpg",
      });
      res.status(201).send({ message: "url avatar updated" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating avatar url");
    });
};

/* user by admin */
const signInUserByAdmin = (req, res) => {
  const { firstname, lastname, nickname, birthday, email, password, isAdmin } =
    req.body;

  database
    .query(
      "INSERT INTO user(firstname, lastname, nickname, birthday, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [firstname, lastname, nickname, birthday, email, password, isAdmin]
    )
    .then(([result]) => {
      res
        .location(`/user/${result.insertId}`)
        .status(201)
        .send({ message: "user created" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

// POST VIDEO

const postVideo = async (req, res, next) => {
  const { description, display, title, date, filename } = req.body;

  const url = `/assets/videos/${filename}`;

  database
    .query(
      "INSERT INTO video(url, description, display, title, date) VALUES (?, ?, ?, ?, ?)",
      [url, description, Number(display), title, date]
    )
    .then(([result]) => {
      req.body.videoId = result.insertId;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the video");
    });
};

// POST CATEGORY
const postCategory = (req, res) => {
  const { name } = req.body;

  database
    .query("INSERT INTO category(name) VALUES (?)", [name])
    .then(([result]) => {
      res
        .location(`/categories/${result.insertId}`)
        .status(201)
        .send({ message: "category added" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the category");
    });
};

/* attach category to video */

const attachCategoryToVideo = (req, res) => {
  const { videoId, categoryId } = req.body;
  database
    .query("INSERT INTO video_category(video_id, category_id) VALUES (?, ?)", [
      videoId,
      categoryId,
    ])
    .then(() => {
      res.status(201).send({ message: "category atached to the video" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error ataching category to the video");
    });
};

// Post Hero Slider
const postHeroSlider = (req, res) => {
  const { fkVideo } = req.body;

  database
    .query("INSERT INTO hero_slider(fk_video) VALUES (?);", [Number(fkVideo)])
    .then(() => {
      res.status(201).send({ message: "Hero Slider Updated" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error update the hero slider");
    });
};

// POST FIXTURE

const postFixture = (req, res) => {
  const { fkVideo } = req.body;

  database
    .query("INSERT INTO fixtures(fk_fix_video_id) VALUES (?);", [
      Number(fkVideo),
    ])
    .then(() => {
      res.status(201).send({ message: "Fixture Slider Updated" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error update the fixture slider");
    });
};

// POST ADVERT
const postAdvert = (req, res) => {
  const { description, urlLink, name, filename } = req.body;

  const urlImage = `/assets/images/${filename}`;
  database
    .query(
      "INSERT INTO publicity(url_image, description, url_link, name) VALUES (?, ?, ?, ?);",
      [urlImage, description, urlLink, name]
    )
    .then(() => {
      res.status(201).send({ message: "Advert Added" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error add new Advertising");
    });
};

// Post a user that try to log his account
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  database
    .query("SELECT * FROM user WHERE email = ?", [email])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// POST HOME
const postHome = (req, res) => {
  const { position, type, idLink } = req.body;

  database
    .query("INSERT INTO home(position, type, idLink) VALUES (?, ?, ?);", [
      position,
      type,
      idLink,
    ])
    .then(() => {
      res.status(201).send({ message: "Component Added" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error add new component in Home");
    });
};

module.exports = {
  signInUserByUser,
  getUserByEmailWithPasswordAndPassToNext,
  signInUserByAdmin,
  postVideo,
  postFixture,
  postCategory,
  attachCategoryToVideo,
  postHeroSlider,
  postAdvert,
  uploadAvatarUrl,
  postHome,
};
