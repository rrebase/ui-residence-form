<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <div class="form-check radio1 mt-2">
          <input v-model="pickedOpt" class="form-check-input" name="room" type="radio" value="option1" id="roomCheck1" checked>
          <label class="form-check-label ml-2" for="roomCheck1">Olen ruumi (kaas)omanik</label>
        </div>
        <div class="form-check radio1 mt-2">
          <input v-model="pickedOpt" class="form-check-input" name="room" type="radio" value="option2" id="roomCheck2">
          <label class="form-check-label ml-2" for="roomCheck2">Lisan üürilepingu</label>
        </div>
        <div class="form-check radio1 mt-2">
          <input v-model="pickedOpt" class="form-check-input" name="room" type="radio" value="option3" id="roomCheck3">
          <label class="form-check-label ml-2" for="roomCheck3">Ruumi omanik annab elukohateadetele nõusoleku</label>
        </div>
        <div class="form-check radio1 mt-2">
          <input v-model="pickedOpt" class="form-check-input" name="room" type="radio" value="option4" id="roomCheck4">
          <label class="form-check-label ml-2" for="roomCheck4">Ruumi kasutamise muu alus</label>
        </div>
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

  import bus from './bus.js'

  export default {
    name: "sixth-form",
    data() {
      return {
        msg: 'Ruumi kasutamise õigus',
        pickedOpt: "",
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 7, "last": 8}
      }
    },
    components: {},
    methods: {
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 7;
        bus.$emit('call', this.data);
        console.log(this.pickedOpt);
        if (this.pickedOpt === "option3") {
          this.$router.push('form-' + 7);
        } else {
          this.$router.push('form-' + 8);
        }
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
