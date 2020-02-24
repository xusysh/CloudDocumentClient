import { UP_LOAD_IMG, SAVE_USER_INFO } from "./mutation-type";
export default {
  upLoadImg({ commit }, value) {
    commit(UP_LOAD_IMG, value);
  },
  saveUserInfo({ commit }, value) {
    commit(SAVE_USER_INFO, value);
  }
};
