<template>
  <div class="row">
    <label :for="uniqId" class="col-3 mt-1">Riik</label>
      <select class="custom-select col-6 text-left" v-model="selectedCountry" :id="uniqId">
        <option selected>vali</option>
        <option v-for="country in countries" v-bind:value="country['id']">{{ country["name"] }}</option>
      </select>
  </div>
</template>

<script>
  import Riigid from './data/riigid.json'

  export default {
    name: "country",
    data() {
      return {
        selectedCountry: 'vali',
        countries: Riigid
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
