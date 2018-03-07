<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <div class="mt-4">
          <!--suppress JSUnresolvedVariable -->
          <button v-on:click="foo($event)" type="submit" class="btn btn-success">Lisa isik</button>
        </div>
        <div class="list-group mt-4" id="people">
          <Person v-for="person in people" :data="person" :key="person.id" v-on:deletePerson="deletePerson(person)"/>
        </div>
        <div class="form-check radio1 mt-3">
          <input class="form-check-input" type="checkbox" name="liveelse" :id="uniqId" value="option3" v-model='child'>
          <label class="form-check-label" :for="uniqId">Esitan uue elukoha andmeid alaealise lapse kohta</label>
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
  import Person from './models/Person'

  import bus from './bus.js'

  export default {
    name: "fourth-form",
    data() {
      return {
        msg: 'Teised isikud, kelle elukoha aadressi muudetakse',
        people: [],
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 4, "last": 3},
        child: false
      }
    },
    methods: {
      foo: function (event) {
        event.preventDefault();
        this.people.push(Person);
        console.log("Clicked on add person!");
      },
      deletePerson: function (person) {
        console.log("Clicked on delete person" + person.toString());
      },
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('call', null);
        this.data['next'] = 5;
        console.log(this.child);

        if (this.child) {
          this.$router.push('form-' + 5);
        } else {
          this.$router.push('form-' + 6);
        }
        bus.$emit('call', this.data);
      },
      toBack: function (event) {
        event.preventDefault();
        this.$router.go(-1);
      }
    },
    components: {Person},
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
