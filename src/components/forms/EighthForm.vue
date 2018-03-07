<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ title }}</h3>
      <form action="" method="post" class="form-group">
        <div class="form-check radio1">
          <input class="form-check-input" type="checkbox" name="finalconfirm" :id="uniqId" value="option3">
          <label class="form-check-label ml-2" :for="uniqId">{{msg}}</label>
        </div>
        <!--<br>-->
        <!--<p class="text-muted">Olen teadlik, et vastavalt karistusseadustikule on ametiasutusele valeandmete esitamine kriminaalkorras karistatav.</p>-->
        <div class="form-row mt-4">
          <label :for="'date' + uniqId" class="col-3 pt-1">Kuupäev</label>
          <input :id="'date' + uniqId" class="form-control col-4" v-validate="'date_format:DD/MM/YYYY'" name="date">
          <span class="mt-2 ml-1" v-if="errors.has('date')">{{errors.first('date')}}</span>
        </div>
        <div class="mt-4 row">
          <div class="col text-left">
            <button v-on:click="toBack($event)" type="submit" class="btn btn-info">Tagasi</button>
          </div>
          <div class="col text-right">
            <router-link :to="{name: data['next'].toString()}">
              <button v-on:click="toNext($event)" type="submit" class="btn btn-primary">Saadan</button>
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
    name: "eighth-form",
    data() {
      return {
        title: 'Kinnitamine',
        msg: 'Kinnitan elukohateatel esitatud andmete õigsust.',
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 9, "last": 7}
      }
    },
    components: {},
    methods: {
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 9;
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
