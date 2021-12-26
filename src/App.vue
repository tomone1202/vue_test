<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Search">Search</router-link>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "./views/footer.vue";
import HeaderNav from "./views/HeaderNav.vue";
export default {
  components: {
    Footer,
    HeaderNav,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
