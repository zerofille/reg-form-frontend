import { takeLatest } from "redux-saga/effects";
import { createUserSaga } from "./userSaga";
import {createUserRequest} from "../reducers/userSlice";

function* rootSaga() {
  yield takeLatest(createUserRequest, createUserSaga);
}

export default rootSaga;
