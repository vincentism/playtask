import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const UPDATETASKLIST = 'UPDATETASKLIST';

const state = {
    taskList: [{}]
};

const mutations = {
    [UPDATETASKLIST] (state, taskList) {
        state.taskList = taskList;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    getters: {
        score: (state) => {
            let sum = 0;
            state.taskList.filter(item => {
                return item.completed;
            }).map( item => {
              sum += item.score;
            });
            return sum;
        },
        taskFilter: (state) => ( completed = false ) => {
            let taskFiltered = state.taskList.filter(item => {
                return completed ? item.completed : !item.completed;
            });
            return taskFiltered;
        }
    }
});
