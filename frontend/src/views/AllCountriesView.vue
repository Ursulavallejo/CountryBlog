<script>
import CountryCityInfo from '../components/CountryCityInfo.vue'

export default {
  components: {
    CountryCityInfo,
  },
}
</script>
<template>
  <main>
    <section class="side-left">
      <div class="left-container">
        <CountryCityInfo />
      </div>
    </section>

    <section class="side-right">
      <div class="right-content">
        <div class="right-container">
          <img src="../assets/img/LogoPlane.svg" alt="LogoPlane" />
          <h1>
            <span><span class="first-letter">T</span>ravel </span>around the
            world!
          </h1>
        </div>
      </div>
      <div class="button align-buttons buttonDot">
        <router-link name="default" :to="'/comments'">
          <input type="button" value="View Comments" />
        </router-link>
        <router-link name="default" :to="'/'">
          <input type="button" value="Back Home" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
span.first-letter {
  font-size: 60px;
  vertical-align: center;
}
span {
  color: rgb(244, 133, 6);
}
.right-container h1 {
  padding-bottom: 2rem;
  font-size: 34px;
}

.right-container img {
  margin-left: 12rem;
}
.side-right {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  /* height: 95vh; */
  overflow-y: auto;
}
</style>
