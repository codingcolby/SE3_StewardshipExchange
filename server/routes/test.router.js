const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL TEST
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "test"`;

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

// ----- GET ALL TEST BY RECORD ID
router.get("/:record_id", (req, res) => {
	const queryText = `SELECT * FROM "test" WHERE "record_id" = $3;`;
	const recordId = req.params.record_id;

	pool
		.query(queryText, [recordId])
		.then((responseDb) => {
			res.send(responseDb.rows);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- ADD TEST
router.post("/", (req, res) => {
	const newTestData = req.body;
	const queryText = `INSERT INTO "test" (
"numbers",
"letters")
VALUES ($1, $2);`;
	pool
		.query(queryText, [newTestData.numbers, newTestData.letters])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- PUT TEST
router.put("/:record_id", (req, res) => {
	const queryText = `UPDATE "test" SET
"numbers" =$1,
"letters" =$2;`;
	const recordId = req.body.record_id;
	const newTestData = req.body;
	pool
		.query(queryText, [newTestData.numbers, newTestData.letters, recordId])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- DELETE TEST
router.delete("/:record_id", (req, res) => {
	const recordId = req.body.record_id;
	const queryText = `DELETE FROM "test" WHERE "record_id" = $3;`;

	pool
		.query(queryText, [recordId])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
