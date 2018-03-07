<template>
  <div>
    <label :for="uniqId">Linn/vald, alevik, küla</label>
    <input data-vv-delay="500" v-validate="'required|alpha'" type="text" name="city" :id="uniqId" class="form-control" v-model="c">
    <span v-if="errors.has('city')">{{errors.first('city')}}</span>
    <span id="hid" v-model="c" style="display: none"></span>
  </div>
</template>

<script>
  import jquery from 'jquery';

  export default {

    name: "city",
    data() {
      return {
        c: ""
      };
    },
    created() {
      jquery.get("https://ipinfo.io", function (response) {
        console.log(response.city, response.country, response.region);
      }, "jsonp");
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
