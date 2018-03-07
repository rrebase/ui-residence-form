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
              <Email class="mt-3"/>
              <Phone class="mt-3"/>
              <LastPlace class="mt-3"/>
              <div class="mt-3">
                <label :for="uniqId">Välisriigi isikukood ja selle väljastanud riik</label>
                <!--suppress JSUnresolvedVariable -->
                <input data-vv-delay="500" v-validate="'alpha'" type="text" :name="'lplace' + uniqId"
                       :id="uniqId" class="form-control" autofocus>
                <span v-if="errors.has('lplace' + uniqId)">{{errors.first('lplace' + uniqId)}}</span>
                <small class="text-muted">Täita olemasolul</small>
              </div>
              <hr>
              <h5>Täiendavad andmed</h5>
              <small class="text-muted">Vastavalt riikliku statistika seadusele esitab füüsiline isik andmed
                enda kohta vabatahtlikuse alusel
              </small>
              <div class="mt-3">
                <label :for="uniqId">Rahvus</label>
                <input data-vv-delay="500" v-validate="'alpha'" type="text" :name="'nation' + uniqId"
                       :id="uniqId" class="form-control" autofocus>
                <span v-if="errors.has('nation' + uniqId)">{{errors.first('nation' + uniqId)}}</span>
              </div>
              <div class="mt-3">
                <label :for="uniqId">Emakeel</label>
                <input data-vv-delay="500" v-validate="'alpha'" type="text" :name="'tong' + uniqId"
                       :id="uniqId" class="form-control" autofocus>
                <span v-if="errors.has('tong' + uniqId)">{{errors.first('tong' + uniqId)}}</span>
              </div>
              <div class="mt-3">
                <label :for="uniqId">Omandatud kõrgeim haridustase</label>
                <select class="custom-select">
                  <option selected>vali</option>
                  <option value="0">Alusharidus või alghariduseta</option>
                  <option value="1">Põhiharidus (1.-6. klass)</option>
                  <option value="2">Põhiharidus (7.-9. klass)</option>
                  <option value="35">Kutsekeskharidus või kutseõpe põhihariduse baasil</option>
                  <option value="3">Keskharidus</option>
                  <option value="4">Kutsekeskharidus või kutseõpe keskhariduse baasil</option>
                  <option value="5">Keskeri- ja tehnikumiharidus keskhariduse baasil</option>
                  <option value="6">Bakalaureus või sellega võrdsustatud haridus</option>
                  <option value="7">Magister või sellega võrdsustatud haridus</option>
                  <option value="8">Doktor või sellega võrdsustatud haridus</option>
                </select>
              </div>
              <div class="mt-3">
                <label :for="uniqId">Sotsiaal-majanduslik seisund</label>
                <select class="custom-select">
                  <option selected>vali</option>
                  <option value="A">töötav</option>
                  <option value="B">kodune</option>
                  <option value="C">töötu/tööd otsiv</option>
                  <option value="D">ajateenija</option>
                  <option value="E">(üli)õpilane</option>
                  <option value="F">pensionär</option>
                  <option value="G">lapsehoolduspuhkusel</option>
                  <option value="H">muu mittetöötav</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer" :id="'footer' + uniqId">
            <!--<button @click="bar()" :id="'removebutton' + uniqId" onclick="return false" type="button" class="btn btn-danger" data-dismiss="modal">Eemalda-->
            <!--</button>-->
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
  import Email from './../fields/Email'
  import Phone from './../fields/Phone'
  import LastPlace from './../fields/LastPlace'

  export default {
    name: "person",
    data() {
      return {
        fname: "Täida",
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
    updated() {
    },
    components: {
      FirstName,
      LastName,
      IdCode,
      Email,
      Phone,
      LastPlace
    }
    ,
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
