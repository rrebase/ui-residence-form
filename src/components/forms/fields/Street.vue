<template>
  <div>
    <label :for="uniqId">Tänav/talu, maja nr, korteri nr</label>
    <input data-vv-delay="500" v-validate="'required|alpha'" type="text" name="street" :id="uniqId" class="form-control">
    <span v-if="errors.has('street')">{{errors.first('street')}}</span>
  </div>
</template>

<script>
  export default {
    name: "street"
  }
</script>

<style scoped>

</style>
