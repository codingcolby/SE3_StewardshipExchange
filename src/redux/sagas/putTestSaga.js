import axios from "axios";
import { put } from "redux-saga/effects";

function* putTest(action) {
	try {
		const recordId = action.payload.record_id;
		yield axios.put(`/api/test/${recordId}`, action.payload);
		yield put({
			type: "GET_TEST",
			payload: recordId,
		});
		yield put({
			type: "GET_TEST",
			payload: recordId,
		});
	} catch (err) {
		console.warn(err);
	}
}

export default putTest;
