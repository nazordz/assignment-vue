<template>
  <div id="app">
    <div class="row justify-center">
      <div class="col-8">
        <q-table
          title="Persons by Naufal"
          :columns="columns"
          key="id"
          :data="persons"
        >
          <template v-slot:body="props">
            <table-body :person="props.row" />
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>
<script>
import TableBody from './components/TableBody.vue'

export default {
  components: { TableBody },
  name: 'App',
  data() {
    return {
      columns: [
        {
          name: 'name',
          field: 'name',
          label: 'Name',
          sortable: true,
          required: true,
          align: 'left',
        },
        {
          name: 'age',
          field: 'age',
          label: 'Age',
          sortable: true,
          align: 'left',
        },
        {
          name: 'hobbies',
          field: 'hobbies',
          label: 'Hobbies',
          sortable: true,
          align: 'left',
        },
      ],
    }
  },
  mounted() {
    this.$store.dispatch('persons/getPersons')
  },
  computed: {
    persons() {
      return this.$store.getters['persons/personsList']
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
