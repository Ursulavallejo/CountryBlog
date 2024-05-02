<script>
export default {
  props: ['country', 'date', 'title', 'comment', 'userName', 'homeCountry'],
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toISOString().split('T')[0] // Extract YYYY-MM-DD part
    },
  },
}
</script>

<template>
  <div class="review">
    <h3>{{ country }}</h3>
    <p>
      <i>{{ formatDate(date) }}</i>
    </p>
    <h1>{{ title }}</h1>
    <p>" {{ comment }} "</p>
    <hr />
    <h4>
      {{ userName }}, <span>{{ homeCountry }}</span>
    </h4>
  </div>
</template>

<style scoped>
h3 {
  color: rgb(57, 54, 54);
  font-weight: 600;
}
.review {
  border: 2px solid purple;
  margin: 1rem;
  border-radius: 10px;
  background-color: white;
  min-width: 200px;
}
</style>
