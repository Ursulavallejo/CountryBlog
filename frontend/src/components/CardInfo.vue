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
    <img :src="cityImage" alt="City Image" style="width: 290px; height: auto" />

    <div id="title">
      <h2>{{ city }}, {{ country }}</h2>
      <img id="flag" :src="flagImage" alt="Country Flag" />
    </div>
    <hr />

    <p><span class="infonamn">Population:</span> {{ population }}</p>
    <p><span class="infonamn">Language:</span> {{ language }}</p>
    <p><span class="infonamn">Currency:</span> {{ currency }}</p>
    <hr />

    <p id="attraction">
      <span class="infonamn info">Attractions</span
      ><span id="attractions" v-for="a in cityAttractions.split(',')">{{
        a
      }}</span>
    </p>
  </div>
</template>

<style scoped>
/* .card-info {
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  background-color: white;
  margin: 40px;
  border-radius: 10px;

  max-width: 350px;
  padding: 0.5rem;
}

#title {
  align-items: center;
  display: flex;
  justify-content: space-around;
}
#flag {
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}

.infonamn {
  font-weight: bold;
  font-size: large;
}

.info {
  margin-bottom: 0.5em;
}

p {
  justify-content: space-between;
  display: flex;
  margin: 1em;
  padding: 0.2em;
}

#attraction {
  flex-direction: column;
}

#attractions {
  flex-direction: column;
} */

.card-info {
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  background-color: white;
  margin: 10px auto;
  border-radius: 10px;
  max-width: 300px;
  padding: 0.3rem;
}

.card-info img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

h2 {
  font-size: 21px;
}
#title {
  align-items: center;
  display: flex;
  justify-content: space-around;

  margin: 0;
}

#flag {
  box-shadow: 0px 0px 5px rgb(102, 97, 97);
  border-radius: 50%;
  object-fit: cover;
  width: 35px;
  height: 35px;
}

.infonamn {
  font-weight: bold;
  font-size: 14px;
}

.info {
  font-size: 14px;
}

p {
  justify-content: space-between;
  display: flex;
}

#attraction {
  flex-direction: column;
  line-height: 1.2;
}

#attractions {
  flex-direction: column;
}
</style>
