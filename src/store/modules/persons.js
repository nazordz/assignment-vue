import axios from 'axios'

const state = () => ({
  persons: []
})

const mutations = {
  SET_PERSONS(state, payload) {
    state.persons = payload
  },
  TOGGLE_EXPAND(state, payload) {
    state.persons.find(p => p.id == payload).expand = !state.persons.find(p => p.id == payload).expand
    state.persons.filter(p => p.parent_id == payload).map(d => {
      d.is_visible = !d.is_visible
      if (d.is_visible === false && state.persons.filter(c => c.parent_id == d.id).length) {
        state.persons.filter(c => c.parent_id == d.id).map(x => {
          x.is_visible = false
          return x
        })
      }
      return d.e
    })
  }
 }

const actions = {
  getPersons({ commit }) {
    axios.get(`https://demo2725834.mockable.io/api/v1/list`)
      .then(response => {
        var newPeoples = []
        function uuidv4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        }
        function extractPersons(peoples, parent_id = null) {
          for (let index = 0; index < peoples.length; index++) {
            const p = peoples[index];
            const man = {
              id: uuidv4(),
              parent_id,
              is_visible: parent_id ? false : true,
              has_child: Object.hasOwnProperty.call(p, 'squard') ? true : false,
              expand: false,
              name: p.name,
              age: p.age,
              hobbies: p.hobbies
            }
            newPeoples.push(man)
            if (man.has_child) {
              extractPersons(p.squard, man.id)
            }
          }
          return newPeoples
        }
        extractPersons(response.data.data)
        commit('SET_PERSONS', newPeoples)
      })
  }
}

const getters = {
  personsList(state) {
    return state.persons.filter(a => a.is_visible)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
