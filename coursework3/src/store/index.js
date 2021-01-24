import { createStore } from 'vuex'
import { formatDate } from './helpers'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  getters: {
    activeTasksCount: state => state.tasks.filter(task => task.status === 'active').length,
    tasks: state => state.tasks.map(task => ({ ...task, deadLine: formatDate(task.deadLine) })),
    getTaskById: state => id => {
      const task = state.tasks.find(task => task.id === parseInt(id))
      if (task) return { ...task, deadLine: formatDate(task.deadLine) }
    }
  },
  mutations: {
    addNewTask (state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask (state, id) {
      const index = state.tasks.findIndex(task => task.id === id)
      state.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeTaskStatus (state, { id, status }) {
      const task = state.tasks.find(task => task.id === id)
      task.status = status
    }
  },
  actions: {},
  modules: {}
})
