<template>
  <div>
    <label :for="uniqId">Eesnimi</label>
    <!--suppress JSUnresolvedVariable -->
    <input data-vv-delay="500" v-validate="'required|alpha'" type="text" :name="'fname' + uniqId"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('fname' + uniqId)">{{errors.first('fname' + uniqId)}}</span>
  </div>
</template>

<script>
  export default {
    name: "first-name",
  }
</script>

<style scoped>

</style>
