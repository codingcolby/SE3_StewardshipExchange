const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL OFFERS
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "offers" ORDER BY "submit_date" DESC;`;

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

// ----- GET ALL OFFERS BY USER
router.get("/:submitting_user_id", (req, res) => {
	const queryText = `SELECT * FROM "offers" WHERE "submitting_user_id" = $2 ORDER BY "submit_date" DESC;`;

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

// ----- POST NEW OFFER
router.post("/", (req, res) => {
	const queryText = `INSERT INTO "offers" (
        "submitting_user_id",
        "agency",
        "contact_name",
        "contact_email",
        "ten_digit_dash_phone1",
        "phone1_ext",
        "ship_options",
        "state",
        "city",
        "off_cat",
        "off_detail",
				"offer_status")
				VALUES ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;

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

// ----- UPDATE OFFER
router.put("/:offer_id", (req, res) => {
	const queryText = `UPDATE "offers"
			SET "submitting_user_id" = $2,
			"agency" = $3,
			"contact_name" = $4,
			"contact_email" = $5,
			"ten_digit_dash_phone1" = $6,
			"phone1_ext" = $7,
			"ship_options" = $8,
			"state" = $9,
			"city" = $10,
			"off_cat" = $11,
			"off_detail" = $12,
			"offer_status" = $13,
			"edit_date" = $15
			WHERE "offer_id" = $1;`;

	const offerId = req.params.id;
	const newOffersData = req.body;

	pool
		.query(queryText, [
			newOffersData.submitting_user_id,
			newOffersData.agency,
			newOffersData.contact_name,
			newOffersData.contact_email,
			newOffersData.ten_digit_dash_phone1,
			newOffersData.phone1_ext,
			newOffersData.ship_options,
			newOffersData.state,
			newOffersData.city,
			newOffersData.off_cat,
			newOffersData.off_detail,
			newOffersData.offer_status,
			offerId,
		])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- DELETE OFFER
router.delete("/:offer_id", (req, res) => {
	const offerId = req.params.offer_id;
	const queryText = `DELETE FROM "offers" WHERE "offer_id" = $1;`;

	pool
		.query(queryText, [offerId])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
