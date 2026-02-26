import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchTeamRequest,
  fetchTeamSuccess,
  fetchTeamFailure,
} from "../Teamslices/TeamSlice";
import axiosInstance from "../../../../lib/axiosInstance";



const fetchTeamData = async (teamUrl) => {
  let response = {};
  response = await axiosInstance.get(teamUrl);
  return response.data;
};



function* handleFetchTeam(action) {
  try {
   const { teamUrl } = action.payload;
   const data = yield call(fetchTeamData, teamUrl);
   yield put(fetchTeamSuccess({ data }));
  } catch (error) {
   yield put(fetchTeamFailure(error.message || "Error in Request"));
  }
}



export function* teamSaga() {
  yield takeLatest(fetchTeamRequest.type, handleFetchTeam);
}
 