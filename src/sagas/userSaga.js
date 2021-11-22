import { put } from "@redux-saga/core/effects";
import * as HeroActionCreators from "../actions/userActionCreators";
import * as API from "../api/index";

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);
    const {
      data: {
        data: [user],
      },
    } = response;
    yield put(HeroActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(HeroActionCreators.createUserError(error));
  }
}
