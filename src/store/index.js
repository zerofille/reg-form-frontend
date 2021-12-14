import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
