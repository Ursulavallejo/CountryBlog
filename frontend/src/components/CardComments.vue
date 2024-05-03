<script>
export default {
  props: [
    'country',
    'date',
    'title',
    'comment',
    'userName',
    'homeCountry',
    'flagImage',
  ],
  created() {},
  data() {
    return {
      allCountries: null,
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toISOString().split('T')[0] // Extract YYYY-MM-DD part
    },
  },
}
</script>

<template>
  <div class="review card">
    <div id="countryAndFlag">
      <img alt="Flag Image" :src="flagImage" />
      <div id="countryAndDate">
        <h3>{{ country }}</h3>
        <p>
          <i>{{ formatDate(date) }}</i>
        </p>
      </div>
    </div>
    <h1>{{ title }}</h1>
    <p id="comment">{{ comment }}</p>
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
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  /* border: 2px solid purple; */
  margin: 1rem;
  border-radius: 10px;
  background-color: white;
  padding: 0.5rem;
  width: 200px;
}

#countryAndFlag {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
}

img {
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  border-radius: 50%;
  height: 50px;
  margin-right: 0.5rem;
  object-fit: cover;
  width: 50px;
}

#countryAndDate {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#countryAndDate h3,
#countryAndDate i {
  line-height: normal;
  margin: 0;
  text-align: right;
}

#countryAndDate p {
  color: #4a379b;
  font-size: 0.8rem;
  margin: 0.25rem 0;
}

h1 {
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
}

#comment {
  color: rgb(57, 54, 54);
  margin: 0.25em auto 1rem;
  text-align: left;
}

h4 {
  justify-content: flex-end;
  margin: 0.25rem;
}
</style>
