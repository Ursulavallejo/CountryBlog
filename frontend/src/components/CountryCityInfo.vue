<script>
import CardInfo from './CardInfo.vue'
export default {
  components: {
    CardInfo,
  },
  created() {
    fetch('http://localhost:3000/api/country-city-info')
      .then((response) => response.json())
      .then((countriesCities) => {
        this.countriesCities = countriesCities
        console.log(countriesCities)
      })
  },
  data() {
    return {
      countriesCities: null,
    }
  },
}
</script>

<template>
  <CardInfo
    v-for="countryCity in countriesCities"
    :key="countryCity.CityId"
    :city-image="countryCity.CityImage"
    :city="countryCity.City"
    :country="countryCity.Country"
    :language="countryCity.Language"
    :flag-image="countryCity.FlagImage"
    :population="countryCity.Population"
    :currency="countryCity.Currency"
    :city-attractions="countryCity.CityAttraction"
  >
  </CardInfo>
</template>

<style scoped>
p {
  font-size: 24px;
  color: white;
}
</style>
