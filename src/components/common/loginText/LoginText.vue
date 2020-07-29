<template>
  <div class="login-text-container">
    <van-field
      v-model="textValue"
      :label="text"
      :placeholder="placeholder"
      :type="type"
      @blur="handleBlur"
      class="input-border"
      :error="valid"
    />
  </div>
</template>
<script>
import { Field } from 'vant';
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    rules: ''
  },
  data () {
    return {
      textValue: this.value,
      valid: false
    }
  },
  components: {
    [Field.name]: Field
  },
  watch: {
    textValue (val) {
      this.$emit('textChange', val)
    }
  },
  methods: {
    handleBlur () {
      if (this.rules.test) {
        this.valid = !this.rules.test(this.textValue)
      } else {
        this.valid = !this.rules(this.textValue)
      }
    }
  }
}
</script>
<style lang='less'>
</style>
