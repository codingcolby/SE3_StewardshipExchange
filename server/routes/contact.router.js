const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL CONTACTS
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "site_contact" ORDER BY "msg_received" DESC;`;

	pool
		.query(queryText)
		.then((responseDb) => {
			res.send(responseDb.rows);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- ADD CONTACT INQUIRES
router.post("/", (req, res) => {
	const queryText = `INSERT INTO "site_contact" (
"person_name",
"person_contact",
"contact_msg", 
"msg_received")
VALUES ($1, $2, $3, $4);`;

	pool
		.query(queryText, [req.body.name])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
