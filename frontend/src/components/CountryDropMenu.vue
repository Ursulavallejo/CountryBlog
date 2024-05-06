<script>
export default {
  emits: ['citySelected'],
  created() {
    fetch('http://localhost:3000/api/country-city-info')
      .then((response) => response.json())
      .then((countriesCities) => {
        this.countriesCities = countriesCities
        // Initialize selectedCountryId with the ID of the first country, if available
        if (countriesCities.length > 0) {
          // this.selectedCountryId = countriesCities[0].CountryId
          this.selectedCityId = countriesCities[0].CityId
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  },
  data() {
    return {
      countriesCities: [],
      selectedCityId: null,
    }
  },

  watch: {
    selectedCityId(newValue) {
      console.log('Selected city ID:', newValue)
      // Emit the selected city ID when it changes
      this.$emit('citySelected', newValue)
    },
  },
}
</script>

<template>
  <p>
    <select id="cityDropdown" v-model="selectedCityId">
      <option
        v-for="countryCity in countriesCities"
        :value="countryCity.CityId"
      >
        {{ countryCity.City }},
        {{ countryCity.Country }}
      </option>
    </select>
  </p>
</template>

<style scoped>
select {
  border: 2px solid purple;
  font-size: 16px;
  color: purple;
  border-radius: 15px;
  padding: 0.6rem;
}

option {
  font-size: 14px;
}
</style>
