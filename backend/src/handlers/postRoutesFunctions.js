const database = require("../../database");

/* POST USER */
const signInUserByUser = (req, res) => {
  const {
    firstname,
    lastname,
    nickname,
    birthday,
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
        res.status(500).send("Fuck saving the user");
      }
    })
    .catch((err) => {
      console.warn(err);
      res.status(409).send("Fuck");
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
const postVideo = (req, res) => {
  const { url, description, display, title, date } = req.body;

  database
    .query(
      "INSERT INTO video(url, description, display, title, date) VALUES (?, ?, ?, ?, ?)",
      [url, description, display, title, date]
    )
    .then(([result]) => {
      res
        .location(`/videos/${result.insertId}`)
        .status(201)
        .send({ message: "video added" });
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

// attach category to video

const attachCategoryToVideo = (req, res) => {
  // const id_vid = parseInt(req.params.id_vid);
  // const id_cat = parseInt(req.params.id_cat);

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

/* const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const image404 = "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";
 
  database
    .query("SELECT * FROM movies WHERE id = ?", [id])
    .then(([movie]) => {
      if (movie[0] != null) {
        res.status(200).json(movie[0]);
      } else {
        res.write("<div><h1 style='text-align:center;'>Not Found</h1><a href='/api/movies'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< MOVIES</button></a></div>");
        res.write("<img src=" + image404 + " style='width: 100vw;'></img>");
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    })
}; */

module.exports = {
  signInUserByUser,
  signInUserByAdmin,
  postVideo,
  postCategory,
  attachCategoryToVideo,
};
