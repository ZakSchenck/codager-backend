# CODAGER - Server Side
Frontend code: https://github.com/ZakSchenck/codager-frontend
## Project Description 
Codager is a fullstack client manager for programmers. It includes all the CRUD operations. You are able to filter through All, Completed, and Pending data. All data is in alphabetical order and includes a pagination function.
## Tools Used
• React / React Router <br>
• Sass/SCSS <br>
• Node.js <br>
• Express.js <br>
• PostgreSQL 

## GET All Cards
```js
const getAllCards = (req, res) => {
  db.query("SELECT * FROM public.card ORDER BY public.card.clientname ASC", (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};
```
## GET Single Card
```js
const getSingleCard = (req, res) => {
  db.query(
    "SELECT * FROM public.card WHERE public.card.id = $1",
    // Retrieve ID params
    [Number(req.params.id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};
```
## POST New Card
```js
const createCard = (req, res) => {
  const b = req.body;
  db.query(
    "INSERT INTO public.card (date, status, appname, clientname, email, appdescription) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    // Retrieve req.body
    [b.date, b.status, b.appname, b.clientname, b.email, b.appdescription],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};
```
## DELETE Card
```js
const deleteCard = (req, res) => {
  db.query(
    "DELETE FROM public.card WHERE public.card.id = $1",
    // Retrieve ID params
    [Number([req.params.id])],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};
```
## UPDATE Card
```js
const editCard = (req, res) => {
  const b = req.body;
  db.query(
    "UPDATE public.card SET status = $1, appname = $2, clientname = $3, appdescription = $4, email = $5  WHERE public.card.id = $6 RETURNING *",
    [
      b.status,
      b.appname,
      b.clientname,
      b.appdescription,
      b.email,
      Number(req.params.id)
    ],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};
```
