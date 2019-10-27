export const state = () => ({
  family_data: {
    adults: 1,
    childs: 0,
    pets: 0,
    data: {
      familyname: '',
      adults_list: [],
      childs_list: [],
      pets_list: []
    }
  }
});

export const mutations = {
  update(state, data) {
    state.family_data[data['field']] = parseInt(data['value']);
  },

  updateData(state, data) {
    state.family_data.data[data['field']] = data['value'];
  },

  updateListData(state, data) {
    if(!state.family_data.data[data['area']][data['num']]) {
      state.family_data.data[data['area']][data['num']] = {};
    }

    state.family_data.data[data['area']][data['num']][data['field']] = data['value']
  }
};
