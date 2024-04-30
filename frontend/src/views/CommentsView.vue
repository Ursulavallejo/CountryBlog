<script>
import CommentForm from '../components/CommentForm.vue'

export default {
  components: {
    CommentForm,
  },
}
</script>
<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <CommentForm />

    <router-link name="default" :to="'/'">
      <input type="button" value="Back Home" />
    </router-link>
  </main>
</template>

<style scoped></style>
