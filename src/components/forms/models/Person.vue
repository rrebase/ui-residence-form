<template>
  <div>
    <div class="modal fade" :id="'modal' + uniqId" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Isiku lisamine</h5>
            <button type="button" class="close" data-dismiss="modal" tabIndex="-1">✖️</button>
          </div>
          <div class="modal-body ml-4 mr-4">
            <form>
              <FirstName v-model="fname" class="mt-3"/>
              <LastName v-model="lname" class="mt-3"/>
              <IdCode v-model="idcode" class="mt-3"/>
            </form>
          </div>
          <div class="modal-footer" :id="'footer' + uniqId">
            <button @click="bar()" :id="'removebutton' + uniqId" onclick="return false" type="button" class="btn btn-danger" data-dismiss="modal">Eemalda
            </button>
            <button :id="'savebutton' + uniqId" onclick="return false" type="button" class="btn btn-primary" data-dismiss="modal">Salvesta</button>
          </div>
        </div>
      </div>
    </div>
    <div :id="'m'+ uniqId" class="list-group-item mt-1" data-toggle="modal" :data-target="'#modal' + uniqId">
      {{fname}} {{lname}} {{idcode}}
    </div>
  </div>
</template>

<script>
  import FirstName from './../fields/FirstNameProps'
  import LastName from './../fields/LastNameProps'
  import IdCode from './../fields/IdCodeProps'

  export default {
    name: "person",
    data() {
      return {
        fname: "",
        lname: "",
        idcode: "",
        id: null
      }
    },
    methods: {
      bar: function () {
        console.log("Attempted removal");
      }
    },
    components: {
      FirstName,
      LastName,
      IdCode
    },
    created() {
    }
  }
</script>

<style scoped>
  .list-group-item {
    border-radius: 3px;
    background-color: #f5e8c2;
    color: #454545;
  }

  .list-group-item:hover {
    background-color: #cec3a3;
    color: black;
    cursor: pointer;
  }

  .hide {
    display: none;
  }
</style>
