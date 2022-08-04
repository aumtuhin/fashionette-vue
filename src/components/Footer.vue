<template>
  <div class="footer">Made with <HeartIcon className="icon" /> by Tuhin</div>
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
.footer {
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    height: 1.5rem;
  }
}
</style>