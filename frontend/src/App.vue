<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import CountryList from './components/CountryList.vue'
import CountryCityInfo from './components/CountryCityInfo.vue'
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <CountryCityInfo />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <CountryList /> -->
    <!-- <CountryCityInfo /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #a593f5;
  height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
    /* padding-right: calc(var(--section-gap) / 2); */
    height: 100vh;
    width: 50vw;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
