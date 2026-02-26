import { all } from "redux-saga/effects";
import paginationSaga from "./pagination/sagas/paginationSaga";
import { filterSaga } from "./filter/sagas/filterSaga";


function* rootSaga() {
  yield all([
    paginationSaga(),
    filterSaga()
  ]);
}
export default rootSaga;
 