import { put } from "@redux-saga/core/effects";
import * as API from "../api/index";
import { createUserSuccess, createUserError } from "../reducers/userSlice";

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);
    const {
      data: {
        data: [user],
      },
    } = response;
    
    yield put(createUserSuccess(user));
  } catch (error) {
    yield put(createUserError(error));
  }
}
