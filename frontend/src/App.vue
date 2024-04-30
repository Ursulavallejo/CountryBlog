<script>
// import CountryList from './components/CountryList.vue'
// import CountryCityInfo from './components/CountryCityInfo.vue'
import CountryCityDropOne from './components/CountryCityDropOne.vue'
import CountryDropMenu from './components/CountryDropMenu.vue'
import CommentForm from './components/CommentForm.vue'

export default {
  components: {
    CountryDropMenu,
    CountryCityDropOne,
    CommentForm,
  },
  data() {
    return {
      // selectedCountryId: 0,
      selectedCityId: 0,
    }
  },
  methods: {
    // handleCountrySelected(selectedCountryId) {
    //   this.selectedCountryId = selectedCountryId
    // },
    handleCitySelected(selectedCityId) {
      this.selectedCityId = selectedCityId
    },
  },
}
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <CountryCityInfo /> -->
      <!-- <CountryCityDropOne :selectedCountryId="selectedCountryId" /> -->
      <CountryCityDropOne :selectedCityId="selectedCityId" />
    </div>
  </header>

  <main>
    <!-- <CommentForm /> -->
    <!-- <TheWelcome /> -->
    <!-- <CountryList /> -->
    <!-- <CountryCityInfo /> -->
    <!-- <CountryDropMenu @countrySelected="handleCountrySelected" /> -->
    <div class="main-content">
      <CountryDropMenu @citySelected="handleCitySelected" />
    </div>
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

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
  /* main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 50vw;
  }

  .main-content {
    text-align: center; /* Adjust the width as needed */
  /* margin: 0 auto; */
  /* }  */
}
</style>
