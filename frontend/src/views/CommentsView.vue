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
  <header>
    <div class="wrapper">
      <AllComments ref="allComments" />
    </div>
  </header>

  <main>
    <CommentForm @updateCommentsEmit="updateCommentsEmit" />

    <router-link name="default" :to="'/'">
      <input type="button" value="Back Home" />
    </router-link>
  </main>
</template>

<style scoped></style>
