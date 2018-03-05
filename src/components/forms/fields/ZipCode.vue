<template>
  <div>
    <label :for="uniqId">Postiindeks</label>
    <input type="text" class="form-control" :id="uniqId" v-model="zipcode" v-validate="'required|min:5'" data-vv-delay="500"
           onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength="5" name="zipcode">
    <span v-if="errors.has('zipcode')">{{errors.first('zipcode')}}<br></span>
    <small class="text-muted">Kui ei tea, leiad
      <a class="zip" href="http://postiindeks.ee/et/"
         onclick="return !window.open(this.href, 'postiindeks', 'width=500,height=500')"
         target="_blank">siit</a>.
    </small>
  </div>
</template>

<script>
  export default {
    name: "zip-code",
    data() {
      return {
        zipcode: null
      }
    },

  }
</script>

<style scoped>
  a:link {
    color: #c00
  }

  a:visited {
    color: #0c0
  }

  a:hover {
    color: #00c
  }

  a:active {
    color: #ccc
  }
</style>
