<template>
  <div>
    <label :for="uniqId">Linn/vald, alevik, küla</label>
    <input data-vv-delay="500" v-validate="'required|alpha'" type="text" name="city" :id="uniqId" class="form-control">
    <span v-if="errors.has('city')">{{errors.first('city')}}</span>
  </div>
</template>

<script>
  export default {
    name: "city"
  }
</script>

<style scoped>

</style>
