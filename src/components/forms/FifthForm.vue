<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <FirstName class="mt-3"/>
        <LastName class="mt-3"/>
        <IdCode class="mt-3"/>
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
  import FirstName from './fields/FirstName'
  import LastName from './fields/LastName'
  import IdCode from './fields/IdCode'

  import bus from './bus.js'

  export default {
    name: "fifth-form",
    data() {
      return {
        msg: 'Alaealise lapse (laste) teise hooldusõigusliku vanema nõusolek',
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 6, "last": 5}
      }
    },
    components: {
      FirstName,
      LastName,
      IdCode
    },
    methods: {
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 6;
        bus.$emit('call', this.data);
        this.$router.push('form-' + this.data['next']);
      },
      toBack: function (event) {
        event.preventDefault();
        this.$router.go(-1);
      }
    },
    updated() {
      bus.$emit('call', null);
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
