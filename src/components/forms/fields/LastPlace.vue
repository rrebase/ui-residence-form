<template>
  <div>
    <label :for="uniqId">Eelmine elukoht välismaal</label>
    <!--suppress JSUnresolvedVariable -->
    <input data-vv-delay="500" v-validate="'alpha'" type="text" :name="'lplace' + uniqId"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('lplace' + uniqId)">{{errors.first('lplace' + uniqId)}}</span>
    <small class="text-muted">Täita saabumisel välismaalt</small>
  </div>
</template>

<script>
  export default {
    name: "last-place"
  }
</script>

<style scoped>

</style>
