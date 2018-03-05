<template>
  <div>
    <label :for="uniqId">E-post</label>
    <input data-vv-delay="500" v-validate="'required|email'" type="text" name="email" :id="uniqId" class="form-control">
    <span v-if="errors.has('email')">{{errors.first('email')}}</span>
  </div>
</template>

<script>
  export default {
    name: "email"
  }
</script>

<style scoped>

</style>
