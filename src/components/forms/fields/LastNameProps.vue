<template>
  <div>
    <label :for="uniqId">Perekonnanimi</label>
    <!--suppress JSUnresolvedVariable -->
    <input v-bind:value="value" v-on:input="updateValue($event.target.value)"
           data-vv-delay="500" v-validate="'required|alpha'" type="text" name="lname1"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('lname1')">{{errors.first('lname1')}}</span>
  </div>
</template>

<script>
  export default {
    name: "last-name",
    props: ['value'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>
