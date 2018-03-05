<template>
  <div id="app">
    <router-link :to="{ name: 'First' }">1</router-link>
    <router-link :to="{ name: 'Second' }">2</router-link>
    <router-link :to="{ name: 'Third' }">3</router-link>
    <router-link :to="{ name: 'Fourth' }">4</router-link>
    <router-link :to="{ name: 'Fifth' }">5</router-link>
    <router-link :to="{ name: 'Sixth' }">6</router-link>
    <router-link :to="{ name: 'Seventh' }">7</router-link>
    <router-link :to="{ name: 'Eighth' }">8</router-link>
    <router-view/>
    <!--<FirstForm/>-->
    <!--<SecondForm/>-->
    <!--<ThirdForm/>-->
    <!--<FourthForm/>-->
    <!--<FifthForm/>-->
    <!--<SixthForm/>-->
    <!--<SeventhForm/>-->
    <!--<EighthForm/>-->
  </div>
</template>

<script>
  import estonian from 'vee-validate/dist/locale/et'

  import FirstForm from './components/forms/FirstForm'
  import SecondForm from './components/forms/SecondForm'
  import ThirdForm from './components/forms/ThirdForm'
  import FourthForm from './components/forms/FourthForm'
  import FifthForm from './components/forms/FifthForm'
  import SixthForm from './components/forms/SixthForm'
  import SeventhForm from './components/forms/SeventhForm'
  import EighthForm from './components/forms/EighthForm'

  export default {
    name: 'App',
    components: {
      FirstForm,
      SecondForm,
      ThirdForm,
      FourthForm,
      FifthForm,
      SixthForm,
      SeventhForm,
      EighthForm
    },
    created() {
      let attrs = {
        "fname": "Eesnimi",
        "lname": "Perekonnanimi",
        "idcode": "Isikukood",
        "email": "E-post",
        "phone": "Telefon",
        "city": "Linn",
        "street": "Tänav",
        "zipcode": "Postiindeks",
        "expiryfrom": "Kuupäev",
        "expiryto": "Kuupäev",
        "date": "Kuupäev"
      };
      let res = {};
      let keys = Object.keys(attrs);

      // for attrs with id-s
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < keys.length; j++) {
          let key = keys[j];
          if (i === 0) {
            res[key] = attrs[key];
          } else {
            res[key + i] = attrs[key];
          }
        }
      }
      // noinspection JSUnresolvedVariable
      this.$validator.localize('et', {
        messages: estonian.messages,
        attributes: res
      });
    }
  }
</script>

<style>
  span {
    color: red;
    font-size: 12px;
  }
</style>
