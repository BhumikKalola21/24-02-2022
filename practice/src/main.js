import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 4;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  action: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);

    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    oneOnten(state) {
      return state.counter * 5;
    },
    stuckVlaue(state) {
      const finalcounter = state.counter * 5;
      if (finalcounter < 0) {
        return 0
      } else if (finalcounter > 100) {
        return 100
      }
      return finalcounter
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
