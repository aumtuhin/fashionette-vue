<template>
  <header className="header">
    <form @submit.prevent="handleSubmit">
      <div className="form-control">
        <SearchInput placeholder="Name" name="search" v-model="searchQuery" />
        <Button name="Search" />
      </div>
    </form>
  </header>
  <div class="movies-section">
    <div v-if="!isLoading">Total: {{ movies.length }}</div>
    <div class="movies-container">
      <MovieCard v-for="(movie, index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { rootUrl } from "../constants/const";
import MovieCard from "./MovieCard.vue";
import Button from "./Button.vue";
import SearchInput from "./SearchInput.vue";

import { ref } from "vue";
const searchQuery = ref("");

export default {
  name: "Movies",
  components: {
    MovieCard,
    Button,
    SearchInput,
  },

  data() {
    return {
      isLoading: false,
      movies: [],
      searchQuery,
    };
  },

  async mounted() {
    try {
      this.isLoading = true;
      const response = await axios.get(`${rootUrl}/shows`);
      if (response.status === 200) {
        this.movies = response.data.slice(0, 12);
      }
    } catch (e) {
      console.error(e);
    }
    this.isLoading = false;
  },

  methods: {
    async handleSubmit() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `${rootUrl}/search/shows?q=${searchQuery}`
        );
        if (response.status === 200) {
          const data = response.data.slice(0, 12);
          this.movies = data.map((item) => item.show);
        }
      } catch (e) {
        console.error(e);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 2rem 2rem;
  img {
    height: 3rem;
    padding: 1rem;
  }
  .form-control {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.movies-container {
  padding: 0 2% 2% 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  width: 22%;
  margin: 5px;
  background-color: #ebedfe;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-radius: 0.3rem;
  color: #555657;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  transition: 0.3s ease;

  &:hover {
    -webkit-box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
    -moz-box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
    box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
  }

  .title {
    text-transform: uppercase;
  }

  .movie-thumb {
    max-width: 55%;
    max-height: 55%;
    object-fit: cover;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
    -moz-box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
    box-shadow: 0px 20px 36px -6px rgba(107, 107, 107, 1);
  }

  .rating {
    padding-top: 0.5rem;
    font-weight: bold;
  }

  .genres {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .genre {
    margin: 0.1rem;
    background-color: #d8dcfd;
    border-radius: 2rem;
    font-size: 0.8rem;
    padding: 0.2rem;
  }

  .summary {
    text-align: center;
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
  }

  a {
    color: #555657;
  }
}

@media (max-width: 768px) {
  .movie-card {
    flex: 2 0 40%;
  }

  .genres {
    flex-direction: row;
  }
}
</style>