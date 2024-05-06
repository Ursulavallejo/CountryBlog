<script>
import CardComments from './CardComments.vue'

export default {
  components: {
    CardComments,
  },
  created() {
    this.fetchComments()
  },
  data() {
    return {
      comments: null,
    }
  },

  methods: {
    fetchComments() {
      fetch('http://localhost:3000/api/comment')
        .then((response) => response.json())
        .then((comments) => {
          this.comments = comments.reverse()

          // fetch för att hämta landets flagga och sätta ihop dem med rätt kommentar
          fetch('http://localhost:3000/api/countries')
            .then((response) => response.json())
            .then((countries) => {
              for (let i = 0; i < this.comments.length; i++) {
                for (let j = 0; j < countries.length; j++) {
                  if (this.comments[i].country === countries[j].countryName) {
                    this.comments[i].flagImage = countries[j].countryFlag
                  }
                }
              }
            })
        })
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="reviews">
      <CardComments
        v-for="review in comments"
        :key="review.message"
        :country="review.country"
        :date="review.date"
        :title="review.title"
        :comment="review.comment"
        :userName="review.userName"
        :homeCountry="review.homeCountry"
        :flagImage="review.flagImage"
      ></CardComments>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  min-width: 200px;
}

.reviews {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h3 {
  padding-top: 1em;
  color: rgb(48, 3, 55);
  font-weight: 300;
  font-style: italic;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 1px;
}
</style>
