<template>
  <header class="navbar" >
    <router-link :to="{name: 'Tasks'}" custom v-slot="{ navigate }">
      <h2 @click="navigate" style="cursor: pointer">Freelance</h2>
    </router-link>
    <ul class="navbar-menu">
      <li><router-link :to="{name: 'Tasks'}">Все задачи</router-link></li>
      <li><router-link :to="{name: 'NewTask'}">Создать</router-link></li>
    </ul>
  </header>
</template>
