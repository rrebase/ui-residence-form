<template>
  <div>
    <label :for="uniqId">Perekonnanimi</label>
    <!--suppress JSUnresolvedVariable -->
    <input data-vv-delay="500" v-validate="'required|alpha'" type="text" name="lname1"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('lname1')">{{errors.first('lname1')}}</span>
  </div>
</template>

<script>
  export default {
    // inject: ['$validator'],
    // inject: {
    //   $validator: '$validator'
    // },
    // $_veeValidate: {
    //   validator: 'new' // give me a new validator each time.
    // },
    name: "last-name",
  }
</script>

<style scoped>

</style>
