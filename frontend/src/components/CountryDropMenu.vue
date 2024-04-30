<script>
export default {
  // emits: ['countrySelected'],
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
      // selectedCountryId: null,
      selectedCityId: null,
    }
  },

  // IF want to use the search button:
  // methods: {
  //   search() {
  //     // Do whatever you want with the selected country ID
  //     console.log('Selected country ID:', this.selectedCountryId)
  //   },
  // },
  watch: {
    // selectedCountryId(newValue) {
    //   // Perform your action here with the selected country ID
    //   console.log('Selected country ID:', newValue)

    //   this.$emit('countrySelected', newValue)
    // },
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
  <!-- CountryID -->
  <!-- <p>
    <select id="countryDropdown" v-model="selectedCountryId">
      <option
        v-for="countryCity in countriesCities"
        :value="countryCity.CountryId"
      >
        {{ countryCity.City }},
        {{ countryCity.Country }}
      </option>
    </select>
  </p> -->
  <!-- <p><button @click="search">Search</button></p> -->
</template>

<style scoped>
select {
  border: 2px solid purple;
  font-size: 24px;
  color: purple;
  border-radius: 10px;
  padding: 1rem;
}

option {
  font-size: 24px;
}
</style>
