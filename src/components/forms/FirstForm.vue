<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <FirstName class="mt-3"/>
        <LastName class="mt-3"/>
        <IdCode class="mt-3"/>
        <Email class="mt-3"/>
        <Phone class="mt-3"/>
        <div class="mt-4">
          <router-link :to="{name: 'Second'}">
            <button v-on:click="foo($event)" type="submit" class="btn btn-primary">Edasi</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import FirstName from './fields/FirstName'
  import LastName from './fields/LastName'
  import IdCode from './fields/IdCode'
  import Email from './fields/Email'
  import Phone from './fields/Phone'

  // import router from './../../router'

  export default {
    name: "first-form",
    data() {
      return {
        msg: 'Esitaja',
        test: 'Fourth'
      }
    },
    components: {
      FirstName,
      LastName,
      IdCode,
      Email,
      Phone
    },
    methods: {
      foo: function (event) {
        // event.preventDefault();
        console.log(this.$nextForm++);
      }
    },
    created() {
      this.test = this.$a;
    }
  }
</script>

<style scoped>

</style>
