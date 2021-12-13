<template>
  <div class="home">
    <div>home</div>
    <button>
      <router-link :to="{ name: 'CSS' }"> Enter </router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
