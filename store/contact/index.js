export const state = () => ({
  contact: {
    name: '',
    company: '',
    email: '',
    tel: '',
    message: ''
  }
});

export const mutations = {
  add(state, payload) {
    state.name = payload.name;
    state.company = payload.company;
    state.email = payload.email;
    state.tel = payload.tel;
    state.message = payload.message;
  },
  remove(state) {
    state.name = '';
    state.email = '';
    state.company = '';
    state.message = '';
    state.tel = '';
  },
}

export const getters = {
  getContact(state) {
    return {
      name: state.name,
      company: state.company,
      email: state.email,
      tel: state.tel,
      message: state.message,
    };
  },
}

export const actions = {
  addAction({commit, dispatch, state}, payload) {
    commit('remove');
    commit('add',payload);
  },
}