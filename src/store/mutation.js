import { UP_LOAD_IMG, SAVE_USER_INFO } from "./mutation-type";
export default {
  [UP_LOAD_IMG](state, value) {
    state.img_url = value;
  },
  [SAVE_USER_INFO](state, value) {
    state.userInfo = value;
  }
};
