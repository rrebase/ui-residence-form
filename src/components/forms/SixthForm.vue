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
        <div class="mt-4">
          <router-link :to="{name: 'Seventh'}">
          <button onclick="console.log('next');" type="submit" class="btn btn-primary">Edasi</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sixth-form",
    data() {
      return {
        msg: 'Ruumi kasutamise õigus',
        pickedOpt: ""
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
