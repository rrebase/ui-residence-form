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
        <div class="mt-4 row">
          <div class="col text-left">
            <button v-on:click="toBack($event)" type="submit" class="btn btn-info">Tagasi</button>
          </div>
          <div class="col text-right">
            <router-link :to="{name: data['next'].toString()}">
              <button v-on:click="toNext($event)" type="submit" class="btn btn-primary">Edasi</button>
            </router-link>
          </div>
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

  import bus from './bus.js'

  export default {
    name: "third-form",
    data() {
      return {
        msg: 'Sideaadress',
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 4, "last": 3}
      }
    },
    components: {
      Country,
      County,
      City,
      Street,
      ZipCode,
      ExpiryDate
    },
    methods: {
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 4;
        bus.$emit('call', this.data);
        this.$router.push('form-' + this.data['next']);
      },
      toBack: function (event) {
        event.preventDefault();
        this.$router.go(-1);
      }
    },
    updated() {
    },
    created() {
    },
    mounted() {
      bus.$emit('call', null);
      bus.$on('update', data => {
        this.data = data;
      });
    }
  }

</script>

<style scoped>

</style>
