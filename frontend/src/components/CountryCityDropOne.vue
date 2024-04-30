<script>
export default {
  props: {
    // selectedCountryId: {
    //   type: Number,
    //   required: true,
    // },
    selectedCityId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // countryInfo: null,
      cityInfo: null,
    }
  },
  watch: {
    // selectedCountryId(newValue) {
    //   if (newValue !== null) {
    //     this.fetchCountryInfo(newValue)
    //   } else {
    //     this.countryInfo = null
    //   }
    // },
    selectedCityId(newValue) {
      if (newValue !== null) {
        this.fetchCityInfo(newValue)
      } else {
        this.cityInfo = null
      }
    },
  },
  methods: {
    // fetchCountryInfo(selectedCountryId) {
    //   // Make an API call using the selected country ID to fetch its information
    //   fetch(`http://localhost:3000/api/country-city-info/${selectedCountryId}`)
    //     .then((response) => response.json())
    //     .then((countryInfo) => {
    //       this.countryInfo = countryInfo
    //       console.log(selectedCountryId)
    //       console.log(countryInfo[0])
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching country info:', error)
    //     })
    // },
    fetchCityInfo(selectedCityId) {
      fetch(`http://localhost:3000/api/country-city-info/${selectedCityId}`)
        .then((response) => response.json())
        .then((cityInfo) => {
          this.cityInfo = cityInfo
        })
        .catch((error) => {
          console.error('Error fetching city info:', error)
        })
    },
  },
}
</script>

<template>
  <div v-if="cityInfo">
    <img
      :src="cityInfo[0].CityImage"
      alt="City Image"
      style="width: 700px; height: auto"
    />
    <h1>{{ cityInfo[0].City }}, {{ cityInfo[0].Country }}</h1>
    <img
      :src="cityInfo[0].FlagImage"
      alt="Country Flag"
      style="width: 100px; height: auto"
    />

    <p>Population: {{ cityInfo[0].Population }}</p>
    <p>Language: {{ cityInfo[0].Language }}</p>
    <p>Currency: {{ cityInfo[0].Currency }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  <!-- <div  v-if="countryInfo">
    <img
      :src="countryInfo[0].CityImage"
      alt="City Image"
      style="width: 500px; height: auto"
    />
    <h1>{{ countryInfo[0].City }}, {{ countryInfo[0].Country }}</h1>
    <img
      :src="countryInfo[0].FlagImage"
      alt="Country Flag"
      style="width: 100px; height: auto"
    />

    <p>Population: {{ countryInfo[0].Population }}</p>
    <p>Language: {{ countryInfo[0].Language }}</p>
    <p>Currency: {{ countryInfo[0].Currency }}</p>

  </div>
  <div v-else>
    <p>Loading...</p>
  </div> -->
</template>

<style scoped>
p {
  font-size: 24px;
  color: white;
}
</style>
