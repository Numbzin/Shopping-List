<template>
  <div class="app dark-mode">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app.dark-mode {
  min-height: 100vh;
  background-color: #1c1c1c;
  color: #fff;
}
</style>
