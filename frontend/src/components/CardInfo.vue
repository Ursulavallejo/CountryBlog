<script>
export default {
  props: {
    cityImage: String,
    city: String,
    country: String,
    flagImage: String,
    population: Number,
    language: String,
    currency: String,
    cityAttractions: String,
  },
}
</script>

<template>
  <div class="card-info card">
    <img :src="cityImage" alt="City Image" style="width: 300px; height: auto" />
    <p>{{ city }}, {{ country }}</p>

    <img
      :src="flagImage"
      alt="Country Flag"
      style="width: 100px; height: auto"
    />
    <p>Population: {{ population }}</p>
    <p>Language: {{ language }}</p>
    <p>Currency: {{ currency }}</p>
    <p>CityAttractions: {{ cityAttractions }}</p>
  </div>
</template>

<style scoped>
.card-info {
  border-radius: 10px;
  border: 2px solid purple;
  max-width: 300px;
}
</style>
