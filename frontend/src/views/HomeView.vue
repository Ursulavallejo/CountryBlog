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
      <div class="left-container">
        <CountryCityDropOne :selectedCityId="selectedCityId" />
      </div>
      <router-link name="default" :to="'/countries'">
        <input type="button" value="All Countries" />
      </router-link>
    </section>

    <section class="side-right">
      <div class="right-container">
        <h1><span>Where do </span>you want to go?</h1>
        <CountryDropMenu @citySelected="handleCitySelected" />
      </div>
      <router-link name="default" :to="'/comments'" class="buttonComment">
        <input type="button" value="View Comments" />
      </router-link>
    </section>
  </main>
</template>

<style scoped>
span {
  color: rgb(244, 133, 6);
  font-weight: 800;
}
h1 {
  font-weight: 600;
  padding-bottom: 2rem;
  font-size: 44px;
}

.main-content {
  flex-grow: 1;
}
</style>
