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
      <div class="left-content">
        <div class="left-container">
          <AllComments ref="allComments" />
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
          <CommentForm @updateCommentsEmit="updateCommentsEmit" />
        </div>
      </div>
      <div class="button">
        <router-link name="default" :to="'/'">
          <input type="button" value="Back Home" />
        </router-link>
      </div>
    </section>
  </main>

  <main></main>
</template>

<style scoped></style>
