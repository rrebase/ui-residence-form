<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <Country class="mt-3"/>
        <County class="mt-3"/>
        <City class="mt-3"/>
        <Street class="mt-3"/>
        <ZipCode class="mt-3"/>
        <ExpiryDate class="mt-3"/>
        <div class="mt-4">
          <router-link :to="{name: 'Fourth'}">
            <button onclick="console.log('next');" type="submit" class="btn btn-primary">Edasi</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Country from './fields/Country'
  import County from './fields/County'
  import City from './fields/City'
  import Street from './fields/Street'
  import ZipCode from './fields/ZipCode'
  import ExpiryDate from './fields/ExpiryDate'


  export default {
    name: "third-form",
    data() {
      return {
        msg: 'Sideaadress',
      }
    },
    components: {
      Country,
      County,
      City,
      Street,
      ZipCode,
      ExpiryDate
    }
  }

</script>

<style scoped>

</style>
