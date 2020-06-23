<template>
  <div class="modal">
    <div class="modal-title">xxx</div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <div class="modal-footer">
      <button @click="cancel">cancel</button>
      <button @click="submit">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    };
  },
  methods: {
    cancel() {
      this.$emit('input', false)
    },
    submit() {
      this.cancel()
    }
  }
};
</script>

<style lang="" scoped></style>
