<template>
  <div>
    <header>
      <div>HOME</div>
      <nav @mouseover="mouseoverNav">
        <router-link v-for="(nav, i) of setNav" :key="i" :to="nav.path">
          {{ nav.meta.title }}
        </router-link>
      </nav>
    </header>
    <main>
      <router-view :key="key" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    setNav() {
      return this.$router.options.routes.filter(route => route.meta?.title);
    },
    key() {
      return this.$route.path;
    },
  },
  created() {},
  methods: {
    mouseoverNav(e) {
      console.log(e.target);
    },
  },
};
</script>

<style></style>
