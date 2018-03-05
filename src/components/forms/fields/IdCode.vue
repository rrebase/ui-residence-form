<template>
  <div>
    <label :id="uniqId">Isikukood</label>
    <!--suppress JSUnresolvedVariable -->
    <input data-vv-delay="500" v-validate="'required|idcode'" type="text" name="idcode"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('idcode')">{{errors.first('idcode')}}</span>
  </div>
</template>

<script>

  import VeeValidate from 'vee-validate';
  import {isIdCodeValid} from "../../../../static/validation";

  VeeValidate.Validator.extend('idcode', {
    getMessage: field => field + ' ei vasta standardile.',
    validate(value, obj) {
      return isIdCodeValid(value);
    }
  });

  export default {
    name: "id-code",
  }
</script>

<style scoped>

</style>
