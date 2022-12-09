const database = require("../../database");

/* WELCOME MESSAGE */
const welcome = (req, res) => {
  res.send("Welcome to root of Spherus!");
};

/* USERS ROUTES */
const getUsers = (req, res) => {
  database
    .query("SELECT * FROM user")
    .then(([users]) => res.status(200).json(users))
    .catch((err) => console.error(err));
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query("SELECT * FROM user WHERE id = ?", [id])
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).json(user[0]);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/users'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< USERS</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

/* FAVORITES ROUTES (fullname, video_title, category ORDER BY fullname) */
const getFavorites = (req, res) => {
  database
    .query(
      "SELECT u.id AS user_id, CONCAT(u.firstname, ' ', u.lastname) AS fullname, v.title, c.name AS cat FROM user u INNER JOIN favorites f  ON u.id = f.user_id INNER JOIN video v  ON v.id = f.video_fav_id INNER JOIN video_category vc  ON v.id = vc.video_id INNER JOIN category c  ON c.id = vc.category_id ORDER BY user_id;"
    )
    .then(([favorites]) => res.status(200).json(favorites))
    .catch((err) => console.error(err));
};
const getFavoritesByUserId = (req, res) => {
  const id = parseInt(req.params.id_user, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query(
      "SELECT CONCAT(u.firstname,' ', u.lastname) AS fullname, v.title, c.name AS cat FROM user u INNER JOIN favorites f  ON u.id = f.user_id AND u.id = ? INNER JOIN video v ON v.id = f.video_fav_id INNER JOIN video_category vc ON v.id = vc.video_id INNER JOIN category c ON c.id = vc.category_id ORDER BY fullname;",
      [id]
    )
    .then(([userFavourites]) => {
      if (userFavourites[0] != null) {
        res.status(200).json(userFavourites);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/favorites'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< FAVORITES</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

/* VIDEOS ROUTES */
const getVideos = (req, res) => {
  database
    .query("SELECT * FROM video")
    .then(([videos]) => res.status(200).json(videos))
    .catch((err) => console.error(err));
};
const getVideoById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query("SELECT * FROM video WHERE id = ?", [id])
    .then(([video]) => {
      if (video[0] != null) {
        res.status(200).json(video[0]);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/videos'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< VIDEOS</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const getVideosByCategoryId = (req, res) => {
  const id = parseInt(req.params.id_vid, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query(
      "SELECT c.name AS cat, v.title, v.id, v.description, v.display, v.url, year(v.date) AS year FROM video v INNER JOIN video_category vc  ON vc.video_id = v.id INNER JOIN category c  ON vc.category_id = c.id  AND c.id = ? ORDER BY cat;",
      [id]
    )
    .then(([videos]) => {
      if (videos[0] != null) {
        res.status(200).json(videos);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/videos'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< VIDEOS</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const getVideosAndCategoryByVideoId = (req, res) => {
  const id = parseInt(req.params.idVid, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query(
      "SELECT v.id, c.name AS cat, v.title, v.url, v.description, CONCAT(YEAR(v.date), ' ', MONTHNAME(v.date), ' ', DAY(v.date)) AS date, v.display FROM video v INNER JOIN video_category vc ON vc.video_id = v.id AND v.id = ? INNER JOIN category c ON vc.category_id = c.id;",
      [id]
    )
    .then(([videos]) => {
      if (videos[0] != null) {
        res.status(200).json(videos);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/videos'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< VIDEOS</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

/* CATEGORYS ROUTES */
const getCategorys = (req, res) => {
  database
    .query("SELECT * FROM category")
    .then(([category]) => res.status(200).json(category))
    .catch((err) => console.error(err));
};
const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id_cat, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query("SELECT * FROM category WHERE id = ?", [id])
    .then(([category]) => {
      if (category[0] != null) {
        res.status(200).json(category[0]);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/categorys'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< CATEGORYS</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

/* HERO_SLIDER VIDEOS ROUTES */
const getHeroSliderVideos = (req, res) => {
  database
    .query(
      "SELECT v.id, v.title, v.date, c.name as cat, v.url, v.display FROM video v INNER JOIN hero_slider hs ON hs.fk_video = v.id INNER JOIN video_category vc ON v.id = vc.video_id INNER JOIN category c ON c.id = vc.category_id;"
    )
    .then(([hsVideos]) => res.status(200).json(hsVideos))
    .catch((err) => console.error(err));
};

/* PUBLICITYS ROUTES */
const getPublicities = (req, res) => {
  database
    .query("SELECT * FROM publicity")
    .then(([publicitys]) => res.status(200).json(publicitys))
    .catch((err) => console.error(err));
};
const getPublicitiesById = (req, res) => {
  const id = parseInt(req.params.id_pub, 10);
  const image404 =
    "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query("SELECT * FROM publicity WHERE id = ?", [id])
    .then(([publicity]) => {
      if (publicity[0] != null) {
        res.status(200).json(publicity[0]);
      } else {
        res.write(
          "<div><h1 style='text-align:center;'>Not Found</h1><a href='/publicities'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< PUBLICITIES</button></a></div>"
        );
        res.write(`<img src=${image404} style='width: 100vw;'></img>`);
        res.status(404).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  welcome,
  getUsers,
  getUserById,
  getFavorites,
  getFavoritesByUserId,
  getVideos,
  getVideoById,
  getVideosByCategoryId,
  getCategorys,
  getCategoryById,
  getHeroSliderVideos,
  getPublicities,
  getPublicitiesById,
  getVideosAndCategoryByVideoId,
};
