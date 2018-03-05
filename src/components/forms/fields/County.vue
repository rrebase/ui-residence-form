<template>
  <div class="row">
    <label :for="uniqId" class="col-3">Maakond</label>
      <select class="custom-select col-6 text-left" v-model="selectedCounty" :id="uniqId">
        <option selected>vali</option>
        <option v-for="county in counties" v-bind:value="county['id']">{{ county["name"] }}</option>
      </select>
  </div>
</template>

<script>
  import Maakonnad from './data/maakonnad.json'

  export default {
    name: "county",
    data() {
      return {
        selectedCounty: 'vali',
        counties: Maakonnad
      }
    },
  }
</script>

<style scoped>
  select {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
  }
</style>
