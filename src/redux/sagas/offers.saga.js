import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getOffers() {
	try {
		const response = yield axios.get("api/offers", config);

		yield put({ type: "SET_OFFERS", payload: response.data });
	} catch (error) {
		console.log("Offers request failed", error);
	}
}

function* offersSaga() {
	yield takeLatest("GET_OFFERS", getOffers);
}

export default offersSaga;
