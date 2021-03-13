<template>
  <div>
    <label>{{ title }}</label>
    <ValidationProvider
        rules="required|min:3"
        v-slot="{
                      classes
                    }"
    >
      <div class="control" :class="classes">
        <input
            :type="type"
            class="text-field"
            v-model="number">
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    title: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      number: ''
    }
  }
}
</script>

<style lang="sass" scoped>
  .control
    width: 100%
    span
      display: block
      font-size: 12px
      line-height: 14px
    input
      padding: 5px 10px
  .control.invalid.failed
    input
      border: 1px #f8bfbf solid
      background: #f8bfbf
  label
    font-size: 14px
    line-height: 36px
    color: #19191a
    font-weight: 400
  .text-field
    border: 1px solid #fff
    height: 40px
    line-height: 40px
    font-size: 12px
    color: #19191a
    padding: 0 10px
    width: 104px
    background: #fff
    box-sizing: border-box
    &:focus
     outline-offset: 0px
  @media only screen and (max-width: 700px)
    .text-field
      width: 100%
</style>