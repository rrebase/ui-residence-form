<template>
  <div class="container">
    <div class="form-container">
      <h3 class="mb-4">{{ msg }}</h3>
      <form action="" method="post" class="form-group">
        <FirstName class="mt-3"/>
        <LastName class="mt-3"/>
        <IdCode class="mt-3"/>
        <div class="mt-4">
          <router-link :to="{name: 'Sixth'}">
            <button onclick="console.log('next');" type="submit" class="btn btn-primary">Edasi</button>
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

  export default {
    name: "fifth-form",
    data() {
      return {
        msg: 'Alaealise lapse (laste) teise hooldusõigusliku vanema nõusolek',
      }
    },
    components: {
      FirstName,
      LastName,
      IdCode
    }
  }
</script>

<style scoped>

</style>
