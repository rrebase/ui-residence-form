<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form @submit.prevent="validateBeforeSubmit" action="" method="post" class="form-group">
        <FirstName class="mt-3"/>
        <LastName class="mt-3"/>
        <IdCode class="mt-3"/>
        <Email class="mt-3"/>
        <Phone class="mt-3"/>
        <div class="mt-4 row">
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
  import Email from './fields/Email'
  import Phone from './fields/Phone'

  import bus from './bus.js'

  export default {
    data() {
      return {
        msg: 'Esitaja',
        test: 'Fourth',
        data: {"counter": 5, "queue": [1, 0, 0, 0, 0, 0, 0, 0], "next": 2, "last": 1}
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
      toNext: function (event) {
        event.preventDefault();
        bus.$emit('boo', this.data);
        this.validateChild();
        this.$router.push('form-' + 2);
      },
      toBack: function (event) {
        event.preventDefault();
        this.$router.go(-1);
      },
      validateChild() {
        // console.log("validating");
        bus.$emit('validate');
      },
    },
    created() {
      bus.$on('errors-changed', (errors) => {
        this.errors.clear();
        errors.forEach((e) => {
          this.errors.add(e.field, e.msg, e.rule, e.scope);
        });
      });
    },
    mounted() {
      bus.$on('call', x => {
        if (x === null) {
          bus.$emit('update', this.data);
        } else {
          bus.$emit('update', x);
        }
      });

      bus.$on('update', data => {
        this.data = data;
      });
    }
  }
</script>

<style scoped>

</style>
