<template>
  <div class="container">
    <div class="form-container">
      <div class="row">
        <h3 class="mb-2 col-10">{{ msg }}</h3>
        <div class="mt-1 col-2">
          <button type="button" class="btn btn-secondary qhelp" data-toggle="modal" data-target="#roomModal">?</button>
        </div>
      </div>
      <h6 class="text-muted mt-0">Täidab ruumi omanik või tema esindaja</h6>
      <form action="" method="post" class="form-group">
        <FirstName class="mt-3"/>
        <LastName class="mt-3"/>
        <IdCode class="mt-3"/>
        <Confirmation class="mt-3"/>
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
      <div class="modal fade" id="roomModal" tabindex="-1" role="dialog" aria-labelledby="roomModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="roomModalLabel">Selgitus</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <em aria-hidden="true">&times</em>
              </button>
            </div>
            <div class="modal-body">
              - Ruumi kasutusõigust tõendava dokumendi olemasolul (nt üürileping) ei pea elukohateatele täiendavalt lisama ruumi omaniku nõusolekut.
              <br>
              - Kui isik ei ole ise kaasomanik, on kaasomandis oleva ruumi andmete esitamisel vajalik kõigi kaasomanike või nende esindajate nõusolek.
              Kaasomanike
              vahel sõlmitud ruumi kasutamise kokkuleppe korral võib nõusolekute asemel lisada vastavat kokkulepet tõendava dokumendi.
              <br>
              - Ruumi omaniku nõusolekut või ruumi kasutamise õigust tõendavat dokumenti ei ole vaja, kui esitatakse perekonnaliikmele (nt abikaasa, alaealine
              laps) kuuluva ruumi või välisriigi elukoha aadress.
              <br>
              - Ruumi kasutamise muuks aluseks võib olla näiteks isiklik kasutusõigus või ruumi kasutamine perekonnaliikmena.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Sulge</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FirstName from './fields/FirstName'
  import LastName from './fields/LastName'
  import IdCode from './fields/IdCode'
  import Confirmation from './fields/Confirmation'

  import bus from './bus.js'

  export default {
    name: "seventh-form",
    data() {
      return {
        msg: 'Ruumi omaniku nõusolek',
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 8, "last": 6}
      }
    },
    components: {
      FirstName,
      LastName,
      IdCode,
      Confirmation
    },
    methods: {
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 8;
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
  h6 {
    font-size: 14px;
  }

  .qhelp {
    font-size: 10px;
    border-radius: 30px;
    padding: 2px 7px;
    background-color: #febc37;
    border-color: #c88f2f;
    color: white
  }

  button:active {
    outline: 0;
  }

</style>
