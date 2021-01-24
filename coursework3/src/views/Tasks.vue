<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.deadLine }}
          </small>
        </strong>
      </p>
      <router-link custom v-slot="{ navigate }" :to="{ name: 'Task', params: { id: task.id } }">
        <button class="btn primary" @click="navigate">Посмотреть</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'

export default {
  components: { AppStatus },
  setup () {
    const store = useStore()
    return {
      activeTasksCount: store.getters.activeTasksCount,
      tasks: store.getters.tasks
    }
  }
}
</script>
