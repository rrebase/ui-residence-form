<template>
  <div>
    <label :for="uniqId">Eesnimi</label>
    <!--suppress JSUnresolvedVariable -->
    <input v-bind:value="value" v-on:input="updateValue($event.target.value)"
           data-vv-delay="500" v-validate="'required|alpha'" type="text" :name="'fname' + uniqId"
           :id="uniqId" class="form-control" autofocus>
    <span v-if="errors.has('fname' + uniqId)">{{errors.first('fname' + uniqId)}}</span>
  </div>
</template>

<script>
  export default {
    name: "first-name",
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
