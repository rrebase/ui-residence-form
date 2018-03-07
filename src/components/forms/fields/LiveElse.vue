<template>
  <div class="form-check radio1">
    <input class="form-check-input" type="checkbox" name="liveelse" :id="uniqId" value="option3" v-model='liveelse' v-on:click="onUpdate()">
    <label class="form-check-label" :for="uniqId">Elan ka mujal kui ülal nimetatud elukohas</label>
  </div>
</template>

<script>
  import bus from './../bus.js'

  export default {
    name: "live-else",
    data() {
      return {
        liveelse: false
      }
    },
    methods: {
      onUpdate: function () {
        console.log(this.liveelse);
        bus.$emit('liveelse', this.liveelse)
      }
    }
  }
</script>

<style scoped>

</style>
