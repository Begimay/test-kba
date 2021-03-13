<template>
  <div class="checkbox-item">
    <label class="checkbox-item-container">
      <input type="checkbox" class="checkbox" :value="option.price" @input="$emit('input', $event.target.value)" @change="onChange" />
      <span class="checkbox-text">{{ option.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    option: {
      type: Object
    }
  },
  methods: {
    onChange(e) {
      let currentValue = this.value
      if (e.target.checked) {
        currentValue = e.target.value
      } else {
        currentValue = 0
      }
      this.$emit('input', currentValue);
    },
  }
};
</script>

<style lang="sass">
  .checkbox-item-container
    cursor: pointer
    display: block
    position: relative
    user-select: none
    .checkmark
      position: absolute
      top: 0
      left: auto
      right: 0
      width: 20px
      height: 20px
      background: #fff
      border: none
    .checkbox-text
      font-size: 12px
      color: #19191a
      line-height: 22px
      margin-left: 10px
</style>
