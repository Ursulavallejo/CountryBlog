<template>
  <div v-if="countriesCities.length" class="card">
    <div v-for="(city, index) in countriesCities" :key="index">
      <img :src="city.CityImage" alt="City Image" style="width: 500px; height: auto" />
      <p>City: {{ city.City }}</p>
      <p>Country: {{ city.Country }}</p>
      <img :src="city.FlagImage" alt="Country Flag" style="width: 100px; height: auto" />
      <p>Population: {{ city.Population }}</p>
      <p>Language: {{ city.Language }}</p>
      <p>Currency: {{ city.Currency }}</p>
    </div>
  </div>
  <div v-else>
    <p>No city information available</p>
  </div>
</template>

<script>
export default {
  props: ['countriesCities'],
  methods: {
    fetchCityInfo() {
      fetch('http://localhost:3000/api/country-city-info/')
        .then((response) => response.json())
        .then((countriesCities) => {
          this.$emit('update:countriesCities', countriesCities);
        })
        .catch((error) => {
          console.error('Error fetching city info:', error);
        });
    }
  },
  created() {
    this.fetchCityInfo();
  }
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 0;
}
</style>
