<script>
import CardInfo from './CardInfo.vue'

export default {
  components: {
    CardInfo,
  },
  props: {
    selectedCityId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cityInfo: null,
    }
  },
  watch: {
    selectedCityId(newValue) {
      if (newValue !== null) {
        this.fetchCityInfo(newValue)
      } else {
        this.cityInfo = null
      }
    },
  },
  methods: {
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
    <CardInfo
      :key="cityInfo[0].CityId"
      :city-image="cityInfo[0].CityImage"
      :city="cityInfo[0].City"
      :country="cityInfo[0].Country"
      :language="cityInfo[0].Language"
      :flag-image="cityInfo[0].FlagImage"
      :population="cityInfo[0].Population"
      :currency="cityInfo[0].Currency"
      :city-attractions="cityInfo[0].CityAttraction"
    >
    </CardInfo>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
p {
  font-size: 24px;
  color: white;
}
</style>
