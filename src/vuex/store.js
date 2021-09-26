import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './types'
import ohana from '@/assets/ohana'
//import ohana from '@/assets/ohana'
//TODO: it'd be intereseting to use the vuex store to manage things like hasApp, isChrome... rather than using props all the time...

//NOTE: we are setting the first values of the store in App.vue

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    settings: { username: '', skip_tags: [] },

    skipTags: [],
    hasApp: false,
    extension_version: false,
    isChrome: false,
    isMobile: false,
  },
  getters: {
    //getters are like computed properties for the store. Use store.getters.testPlus1 toa access
  },
  mutations: {
    //trigger mutations by using store.commit(mutationName, payload)

    [mutations.SET_SETTINGS](state, settings) {
      //1. Save locally as fallback (in case no extension or removed later)
      localStorage.settings = JSON.stringify(settings)

      //2. Save in store (where it is really used)
      state.settings = { ...settings }
    },
    [mutations.SET_HAS_APP](state, value) {
      state.hasApp = value
    },
    [mutations.SET_EXTENSION_VERSION](state, value) {
      state.extension_version = value
    },
    [mutations.IS_GOOGLE_CHROME](state, value) {
      state.isChrome = value
    },
    [mutations.IS_MOBILE_CHANGE](state, value) {
      state.isMobile = value
    },
  },
  actions: {
    updateSettings({ commit }, settings) {
      console.log('action: updateSettings', settings)

      //1. Update web
      //commit(mutations.SET_SETTINGS, settings)
      commit(mutations.IS_GOOGLE_CHROME, true)

      //2. Ask the extension to save (they will trigger save extension when done too)
      let e = ohana.extension.events.SETTINGS_WEB_TO_EXTENSION
      const event = new CustomEvent(e, { detail: settings })
      document.dispatchEvent(event)
    },
  },

  //we can also use ACTOINS, if we want to do something async (like fetching data from API)
})

export default store