<!-- ================================================================================= -->
<!-- template -->
<!-- --------------------------------------------------------------------------------- -->
<template>
  <form method="POST">
    <fieldset>
      <legend>Post a comment</legend>

      <label>
        Name
        <input
          :class="{ error: postError && !userName }"
          placeholder="Name"
          v-model="userName"
        />
      </label>

      <label>
        Home Country
        <input placeholder="Home Country" v-model="homeCountry" />
      </label>

      <label>
        Country
        <select
          :class="{ error: postError && country === 'Select an option' }"
          v-model="country"
        >
          <option selected disabled>Select an option</option>
          <option v-for="country in databaseCountries" :value="country">
            {{ country }}
          </option>
        </select>
      </label>

      <label>
        Title
        <input
          :class="{ error: postError && !title }"
          placeholder="Title"
          v-model="title"
        />
      </label>

      <label>
        Comment
        <textarea
          :class="{ error: postError && !comment }"
          placeholder="Write a comment"
          rows="5"
          v-model="comment"
        ></textarea>
      </label>

      <div id="confirmation">
        <p v-if="commentConfirmation">You have posted a post!</p>
        <p v-if="postError">Please insert data in all fields</p>
      </div>

      <input id="sendButton" @click="newComment" type="button" value="Send" />
    </fieldset>
  </form>
</template>

<!-- ================================================================================= -->
<!-- script -->
<!-- --------------------------------------------------------------------------------- -->
<script setup>
import { ref } from 'vue'

const databaseCountries = ref([]), // hämtade länder från mysql-databasen
  userName = ref(''), // från formulär
  homeCountry = ref(''), // från formulär
  country = ref('Select an option'), // från formulär
  title = ref(''), // från formulär
  comment = ref(''), // från formulär
  postError = ref(false), // om input-fälten är ogiltiga
  commentConfirmation = ref(false) // bekräftar att kommentaren har skickats

generateCountries()

const emit = defineEmits(['updateCommentsEmit'])
// =================================================================================
// funktion som hämtar alla länder från mysql-databasen
// ---------------------------------------------------------------------------------
function generateCountries() {
  fetch('http://localhost:3000/api/countries')
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        databaseCountries.value.push(result[i].countryName)
      }
      databaseCountries.value.sort()
    })
}

// =================================================================================
// funktion som postar anropet till mongodb-databasen
// ---------------------------------------------------------------------------------
function newComment(event) {
  event.preventDefault()

  // -------------------------------------------------------------------------------
  // if-sats för att hantera felmeddelanden, else för att göra post-anrop när allt är ok
  if (
    country.value === 'Select an option' ||
    userName.value === '' ||
    title.value === '' ||
    comment.value === ''
  ) {
    postError.value = true
    commentConfirmation.value = false
  } else {
    postError.value = false

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          userName: userName.value,
          homeCountry: homeCountry.value,
          country: country.value,
          title: title.value,
          comment: comment.value,
        }),
      })
      return response.json()
    }

    postData('http://localhost:3000/api/comment').then((data) => {
      console.log(data)
      commentConfirmation.value = true
      userName.value = ''
      homeCountry.value = ''
      country.value = 'Select an option'
      title.value = ''
      comment.value = ''
    })
  }
  emit('updateCommentsEmit')
}
</script>

<!-- ================================================================================= -->
<!-- style -->
<!-- --------------------------------------------------------------------------------- -->
<style scoped>
form {
  color: black;
  display: flex;
  padding: 2rem;
  width: 42vw;
}

fieldset {
  border: none;
  padding: 1em;
  text-align: center;
  width: 100%;
}

label {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  margin: 0.5rem;
}

legend {
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
}

input,
select,
textarea {
  border: 2px rgb(160, 153, 153) solid;
  border-radius: 10px;
  flex-grow: 1;
  margin-left: 1rem;
  max-width: 60%;
  padding: 0.5rem;
}

.error {
  border-color: rgba(195, 0, 0, 0.7);
}

#confirmation {
  height: 1.5rem;
}

#sendButton {
  border: 2px #800080 solid;
  background-color: white;
  color: #800080;
  font-size: 1rem;
  margin-top: 1.5rem;
  padding: 0.5rem;
  width: 15%;
}
</style>
