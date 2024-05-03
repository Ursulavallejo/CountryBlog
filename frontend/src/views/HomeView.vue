<script>
import CountryCityDropOne from '../components/CountryCityDropOne.vue'
import CountryDropMenu from '../components/CountryDropMenu.vue'

export default {
  components: {
    CountryDropMenu,
    CountryCityDropOne,
  },
  data() {
    return {
      selectedCityId: 0,
    }
  },
  methods: {
    handleCitySelected(selectedCityId) {
      this.selectedCityId = selectedCityId
    },
  },
}
</script>

<template>
  <main>
    <section class="side-left">
      <div class="left-content">
        <div class="left-container">
          <CountryCityDropOne :selectedCityId="selectedCityId" />
        </div>
      </div>
      <div class="button">
        <router-link name="default" :to="'/countries'">
          <input type="button" value="All Countries" />
        </router-link>
      </div>
    </section>

    <section class="side-right">
      <div class="right-content">
        <div class="right-container">
          <img src="../assets/img/LogoPlane.svg" alt="LogoPlane" />
          <h1>
            <span class="underline"
              ><span class="first-letter">W</span>here do </span
            >you want to go ?
          </h1>

          <CountryDropMenu @citySelected="handleCitySelected" />
        </div>
      </div>
      <div class="button">
        <router-link name="default" :to="'/comments'" class="buttonComment">
          <input type="button" value="View Comments" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
span.first-letter {
  font-size: 70px;
  vertical-align: center;
}
span {
  color: rgb(244, 133, 6);
}
h1 {
  padding-bottom: 2rem;
  font-size: 44px;
}

img {
  margin-left: 12rem;
}

.underline {
  position: relative;
}

.underline::before,
.underline::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 5px;
  background-color: rgb(244, 133, 6);
}

.underline::before {
  width: 40%;
}

.underline::after {
  width: 110%;
}
</style>
