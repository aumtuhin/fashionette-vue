<template>
  <button className="btn-default">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: String,
  },
  name: "Button",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.btn-default {
  width: 5rem;
  height: 3.6rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  outline: none;
  background-color: #aab3f9;
  color: #fff;
  cursor: pointer;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    background-color: #969ee3;
  }
}
</style>