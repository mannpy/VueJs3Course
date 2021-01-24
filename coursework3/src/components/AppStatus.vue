<template>
  <span :class="['badge', statuses[type].class]">{{ statuses[type].text }}</span>
</template>

<script>
const statuses = {
  active: { text: 'Активен', class: 'primary' },
  done: { text: 'Завершен', class: 'primary' },
  canceled: { text: 'Отменен', class: 'danger' },
  pending: { text: 'Выполняется', class: 'warning' }
}
export default {
  props: ['type'],
  setup () {
    return { statuses }
  }
}
</script>
