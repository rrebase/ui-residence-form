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
        <div class="mt-4">
          <button onclick="console.log('next'); return false;" type="submit" class="btn btn-primary">Saadan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: "eighth-form",
    data() {
      return {
        title: 'Kinnitamine',
        msg: 'Kinnitan elukohateatel esitatud andmete õigsust.'
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
