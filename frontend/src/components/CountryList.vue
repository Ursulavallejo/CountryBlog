<script>
export default {
  created() {
    fetch('http://localhost:3000/api/countries')
      .then((response) => response.json())
      .then((countries) => {
        this.countries = countries
      })
  },
  data() {
    return {
      countries: null,
    }
  },
}
</script>

<template>
  <ol>
    <li :key="country.id" v-for="country in countries">
      <img
        :src="country.flagCountry"
        alt="Country Flag"
        style="width: 50px; height: auto"
      />
      {{ country.countryName }} {{ country.countryPopulation }}
    </li>
  </ol>
</template>

<style scoped></style>
