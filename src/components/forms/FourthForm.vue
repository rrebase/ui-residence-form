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
        <div class="mt-4">
          <router-link :to="{name: 'Fifth'}">
            <button onclick="console.log('next');" type="submit" class="btn btn-primary">Edasi</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Person from './models/Person'


  export default {
    name: "fourth-form",
    data() {
      return {
        msg: 'Teised isikud, kelle elukoha aadressi muudetakse',
        people: []
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
      }
    },
    components: {Person}

  }
</script>

<style scoped>

</style>
