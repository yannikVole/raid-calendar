<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/calendar">Calendar</RouterLink>
    </div>
    <div class="container">
      <RouterView/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: sans-serif;
}
.container {
  width: 70%;
  margin: 0 auto;
}
</style>
