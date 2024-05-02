<script>
import CommentForm from '../components/CommentForm.vue'
import AllComments from '../components/AllComments.vue'

export default {
  components: {
    CommentForm,
    AllComments,
  },
  methods: {
    updateCommentsEmit() {
      this.$refs.allComments.fetchComments()
    },
  },
}
</script>
<template>
  <main>
    <section class="side-left">
      <div class="left-container">
        <AllComments ref="allComments" />
      </div>
      <router-link name="default" :to="'/countries'">
        <input type="button" value="All Countries" />
      </router-link>
    </section>

    <section class="side-right">
      <div class="right-container">
        <CommentForm @updateCommentsEmit="updateCommentsEmit" />
      </div>
      <router-link name="default" :to="'/'">
        <input type="button" value="Back Home" />
      </router-link>
    </section>
  </main>

  <main></main>
</template>

<style scoped></style>
