<template>
  <div class="card" v-if="task">
    <h2 class="title">
      {{ task.title }}
      <router-link custom v-slot="{ navigate }" :to="{ name: 'Tasks' }">
        <button class="btn" @click="navigate">Назад</button>
      </router-link>
    </h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadLine }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeTaskStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeTaskStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeTaskStatus('canceled')">Отменить</button>
      <button class="btn danger" @click="removeTask">Удалить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  components: { AppStatus },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const task = computed(() => store.getters.getTaskById(route.params.id))

    function changeTaskStatus (status) {
      store.commit('changeTaskStatus', { id: task.value.id, status })
    }

    function removeTask () {
      store.commit('removeTask', task.value.id)
      router.push({ name: 'Tasks' })
    }

    return { task, route, changeTaskStatus, removeTask }
  }
}
</script>

<style scoped>
  h2.title {
    display: flex;
    justify-content: space-between;
  }
</style>
