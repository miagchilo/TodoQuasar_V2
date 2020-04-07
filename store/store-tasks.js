import Vue from "vue"
import { uid } from "quasar"
const state = {
  tasks: {
    'ID1':{
      name: 'Go home',
          completed: true,
          dueDate: '2020/06/14',
          dueTime: '15:00'
    },
    'ID2':{
      name: 'Go eat',
      completed: false,
      dueDate: '2020/04/14',
      dueTime: '14:00'
    },
    'ID3':{
      name: 'Go buy',
      completed: false,
      dueDate: '2020/05/14',
      dueTime: '16:00'
    },
  },
  search: ""
 

}


const mutations = {
  updateTask(state, payload){
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state,id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state,value) {
    state.search = value ;
  }
  

  
}


const actions = {
  updateTask({commit},payload){
  
    commit('updateTask', payload)
  },
  deleteTask({ commit}, id){
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task,

    }
    commit('addTask', payload)
  },
  setSearch({commit}, value){
    commit('setSearch',value)
  }

}


const getters = {
  tasksFiltered: (state) =>{
    let tasksFiltered = {}
    if(state.search) {
      Object.keys(state.tasks).forEach(function(key){
        let task = state.tasks[key],
        taskNameLowerCase = task.name.toLowerCase(),
        searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase) ){
          tasksFiltered[key]= task 
        }
      })
      return tasksFiltered
    }
    return state.tasks
  },

  tasksTodo: (state,getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
          let task = tasksFiltered[key]
          if(!task.completed) {
            tasks[key]=task
          }
    })


    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
          let task = tasksFiltered[key]
          if(task.completed) {
            tasks[key]=task
          }
    })
    return tasks
  }
}

export default {
  namespaced: true, 
  state,
  mutations,
  actions,
  getters
}
