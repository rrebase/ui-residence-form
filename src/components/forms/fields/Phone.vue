<template>
  <div>
    <label :for="uniqId">Telefon</label>
    <input data-vv-delay="500" v-validate="'required|numeric'" type="text" maxlength="12"
           onkeypress='return event.charCode >= 48 && event.charCode <= 57'
           name="phone" :id="uniqId" class="form-control">
    <span v-if="errors.has('phone')">{{errors.first('phone')}}</span>
  </div>
</template>

<script>
  export default {
    name: "phone"
  }
</script>

<style scoped>

</style>
