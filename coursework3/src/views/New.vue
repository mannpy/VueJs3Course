<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid" @click.prevent="createNewTask">Создать</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const store = useStore()

    const title = ref('')
    const date = ref('')
    const description = ref('')

    const isValid = computed(() => title.value.length && date.value.length && description.value.length)

    function createNewTask () {
      if (isValid.value) {
        const now = new Date()
        const chosenDate = new Date(date.value)
        // remove time comparison.
        now.setHours(0, 0, 0, 0)
        chosenDate.setHours(0, 0, 0, 0)

        const status = chosenDate < now ? 'canceled' : 'active'

        const task = {
          id: Date.now(),
          deadLine: chosenDate.toISOString(),
          title: title.value,
          description: description.value,
          status
        }

        store.commit('addNewTask', task)
        router.push({ name: 'Tasks' })
      }
    }

    return { title, date, description, isValid, createNewTask }
  }
}
</script>
