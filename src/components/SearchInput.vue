<template>
  <input
    className="search-input"
    type="text"
    :placeholder="placeholder"
    :name="name"
    required
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    placeholder: String,
    name: String,
  },

  props: {
    modelValue: String,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 25%;
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 2rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: #ebedfe;
  color: grey;
}

@media (max-width: 768px) {
  .search-input {
    width: 50%;
  }
}
</style>