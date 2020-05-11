import axios from "axios";
import { put } from "redux-saga/effects";

function* getTest(action) {
	try {
		const response = yield axios.get("/api/test");
		yield put({
			type: "GET_TEST",
			payload: response.data,
		}); // put() is the same as this.props.dispatch()
	} catch (err) {
		console.warn(err);
	}
}

export default getTest;
