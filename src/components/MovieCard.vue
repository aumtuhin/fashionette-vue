<template>
  <div class="movie-card">
    <h4 v-if="movie.name !== null" class="title">{{ movie.name }}</h4>
    <img
      v-if="movie.image !== null"
      class="movie-thumb"
      :src="movie.image.medium"
      alt="thumb"
    />
    <img
      v-else
      class="movie-thumb"
      src="https://assets.nflxext.com/us/boxshots/hd1080/81034936.jpg"
      alt="thumb"
    />
    <div v-if="movie.rating.average !== null" class="rating">
      Rating: {{ movie.rating.average }}
    </div>
    <div v-else class="rating">Rating: No rating</div>
    <div v-if="movie.genres !== null" class="genres">
      <p
        class="genre"
        v-for="(genre, index) in movie.genres.slice(0, 2)"
        :key="index"
      >
        {{ genre }}
      </p>
    </div>
    <div v-if="movie.language !== null">Language: {{ movie.language }}</div>
    <div v-if="movie.premiered !== null">Premiered: {movie.premiered}</div>
    <p v-if="movie.summary !== null" class="summary">
      {{ movie.summary.replace(regex, "").slice(0, 100) }} ...
    </p>
    <a
      v-if="movie.officialSite !== null"
      :href="movie.officialSite"
      target="_blank"
      rel="noreferrer"
    >
      Official Site
    </a>
    <p v-else :href="movie.officialSite">No Official Site</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  name: "MovieCard",
  data() {
    return {
      regex: /(<([^>]+)>)/gi,
    };
  },
};
</script>

<style lang="scss" scoped>
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