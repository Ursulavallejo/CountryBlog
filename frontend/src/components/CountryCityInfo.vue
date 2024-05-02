<script>
export default {
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
  <ol>
    <li :key="countryCity.id" v-for="countryCity in countriesCities">
      <img
        :src="countryCity.CityImage"
        alt="City Image"
        style="width: 500px; height: auto"
      />
      <p>City: {{ countryCity.City }}</p>
      <p>Country:{{ countryCity.Country }}</p>

      <img
        :src="countryCity.FlagImage"
        alt="Country Flag"
        style="width: 100px; height: auto"
      />
      <p>Population: {{ countryCity.Population }}</p>
      <p>Language: {{ countryCity.Language }}</p>
      <p>Currency: {{ countryCity.Currency }}</p>
    </li>
    <br />
  </ol>
</template>

<style scoped>
p {
  font-size: 24px;
  color: white;
}
</style>
