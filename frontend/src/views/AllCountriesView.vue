<script>
import CountryCityInfo from '../components/CountryCityInfo.vue'

export default {
  components: {
    CountryCityInfo,
  },
}
</script>
<template>
  <header>
    <div class="wrapper">
      <CountryCityInfo />
    </div>
  </header>

  <main>
    <h1><span>Where do </span>you want to go?</h1>

    <div class="main-content"><h1>all countries</h1></div>
    <router-link name="default" :to="'/comments'">
      <input type="button" value="View Comments" />
    </router-link>
    <router-link name="default" :to="'/'">
      <input type="button" value="Back Home" />
    </router-link>
  </main>
</template>

<style scoped></style>
