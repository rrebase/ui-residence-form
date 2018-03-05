<template>
  <div>
    <div class="form-group row">
      <div class="col-5">
        <label :for="'expiryfrom' + uniqId">Kehtib alates ...</label>
        <input :id="'expiryfrom' + uniqId" class="form-control" v-validate="'date_format:DD/MM/YYYY'" name="expiryfrom">
        <span v-if="errors.has('expiryfrom')">{{errors.first('expiryfrom')}}</span>
      </div>
      <div class="col-5">
        <label :for="'expiryto' + uniqId">Kehtib kuni ...</label>
        <input :id="'expiryto' + uniqId" class="form-control" v-validate="'date_format:DD/MM/YYYY'" name="expiryto">
        <span v-if="errors.has('expiryto')">{{errors.first('expiryto')}}</span>
      </div>
      <div class="col-1"><button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="märkida juhul, kui aadressi kehtivuse alguse kuupäev on tulevikus või kui on teada, millal kehtivus lõppeb">?</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "expiry-date"
  }
</script>

<style scoped>
  button {
    font-size: 10px;
    border-radius: 30px;
    padding: 2px 7px;
    background-color: #febc37;
    border-color: #c88f2f;
  }
</style>
