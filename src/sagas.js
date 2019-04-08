import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

//watcher saga
export function* watcherSaga() {
  yield takeLatest("LOAD_IMAGE", workerSaga);
  console.log("loading");
}

//worker saga
function* workerSaga() {
  try {
    const response = yield call(loadImage);
    console.log(response.data.message);
    yield put({ type: "SAVE_IMAGE", image: response.data.message });
  } catch (error) {
    console.log("error");
  }
}

function loadImage() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}
