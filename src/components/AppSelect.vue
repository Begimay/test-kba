<template>
  <div>
    <label>{{ title }}</label>
    <select class="select" @input="$emit('input', $event.target.value)">
      <option value="">{{ titleOption }} </option>
      <option v-for="(item, key) in options" :key="key" :value="item.price">{{ item.name }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    titleOption: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    options: {
      type: Array
    }
  }
}
</script>

<style lang="sass">
  label
    font-size: 14px
    line-height: 36px
    color: #19191a
    font-weight: 400
  .select
    background: #fff
    border: 10px solid #fff
    height: 40px
    line-height: 40px
    border-radius: 5px
    font-size: 12px
    color: #19191a
    padding: 0 10px
    width: 100%
    outline: none
</style>