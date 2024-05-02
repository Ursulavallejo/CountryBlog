<script>
import CountryCityInfo from '../components/CountryCityInfo.vue'

export default {
  components: {
    CountryCityInfo,
  },
}
</script>
<template>
  <main>
    <section class="side-left">
      <div class="left-container">
        <CountryCityInfo />
      </div>
    </section>

    <section class="side-right">
      <div class="right-container">
        <h1><span>TEXT TO ADD</span></h1>
        <h1>all countries</h1>
      </div>
      <router-link name="default" :to="'/comments'">
        <input type="button" value="View Comments" />
      </router-link>
      <router-link name="default" :to="'/'">
        <input type="button" value="Back Home" />
      </router-link>
    </section>
  </main>
</template>

<main>



</main>

<style scoped></style>
