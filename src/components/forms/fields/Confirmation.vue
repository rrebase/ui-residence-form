<template>
  <div class="form-check radio1">
    <input class="form-check-input" type="checkbox" name="liveelse" :id="uniqId" value="option3">
    <label class="form-check-label ml-2" :for="uniqId">{{msg}}</label>
  </div>
</template>

<script>
  export default {
    name: "confirmation",
    data() {
      return {
        msg: "Kinnitan, et olen nõus eespool nimetatud isikute elukoha andmete kandmisega rahvastikuregistrisse."
      }
    }
  }
</script>

<style scoped>

</style>
