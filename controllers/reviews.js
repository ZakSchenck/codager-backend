const db = require("../connection");

// GET all reviews
const getAllReviews = (req, res) => {
  db.query("SELECT * FROM public.reviews", (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};

// POST new review
const createReview = (req, res) => {
  const b = req.body;
  db.query(
    "INSERT INTO public.card (date, name, title, review, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    // Retrieve req.body
    [b.date, b.name, b.title, b.review, rating],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};

// DELETE review
const deleteReview = (req, res) => {
    db.query("DELETE FROM public.reviews WHERE public.reviews.id = $1",
    // Retrieve params ID
    [Number(req.params.id)],
    (error, dbRes) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.status(200).json(dbRes.rows)
        }
    })
}

module.exports = {
    createReview,
    getAllReviews,
    deleteReview
}


