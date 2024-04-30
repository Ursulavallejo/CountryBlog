<script>
import CountryCityDropOne from '../components/CountryCityDropOne.vue'
import CountryDropMenu from '../components/CountryDropMenu.vue'

export default {
  components: {
    CountryDropMenu,
    CountryCityDropOne,
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
      <CountryCityDropOne :selectedCityId="selectedCityId" />
    </div>
    <router-link name="default" :to="'/countries'">
      <input type="button" value="All Countries" />
    </router-link>
  </header>

  <main>
    <div class="main-content">
      <h1><span>Where do </span>you want to go?</h1>
      <CountryDropMenu @citySelected="handleCitySelected" />
    </div>
    <router-link name="default" :to="'/comments'" class="buttonComment">
      <input type="button" value="View Comments" />
    </router-link>
  </main>
</template>

<style scoped>
span {
  color: rgb(244, 133, 6);
  font-weight: 800;
}
h1 {
  font-weight: 600;
  padding-bottom: 2rem;
  font-size: 44px;
}
/* .buttonComment {

} */
.main-content {
  flex-grow: 1;
}
</style>
