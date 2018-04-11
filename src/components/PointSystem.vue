<template>
     <div>
      <h3 class='in-site-head'>Points Scoring Table</h3>
      <q-table
      :data="Point"
      :columns="columns"
      title="Points Scoring System"
      dark
      class="bg-secondary"
      color="tertiary"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>
    <q-table
      :data="Economy"
      :columns="columns"
      title="Economy Rate"
      dark
      class="bg-secondary"
      color="tertiary"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>
    <q-table
      :data="StrikeRate"
      :columns="columns"
      title="Points Scoring System"
      dark
      class="bg-secondary"
      color="tertiary"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
           {{ col.value }} 
        </q-td>
      </q-tr>
    </q-table>
     </div>
</template>
<script>
import Point from '../statics/point'
import Economy from '../statics/economy'
import StrikeRate from '../statics/strike-rate'
export default {
  data () {
    return {
      Point,
      Economy,
      StrikeRate,
      columns: [
          {
              label:'Sno.',
              name:'sno',
              field:'sno',
              align:'left'
          },
        {
         name: 'name',
          required: true,
          label: 'Particulars',
          align: 'left',
          field: 'name',
          sortable: true
        },
        {  name: 't20',label: 'T20', field: 't20', sortable: true },

        {  name:'odi',label: 'One Day', field: 'odi', sortable: true },

        {  name:'test',label: 'Test', field: 'test', sortable: true },
       
      ],
      selected: []
    }
  },
  computed: {
    tableClass () {
      if (this.dark) {
        return 'bg-black'
      }
    }
  },
  methods: {
    deleteRow () {
      this.$q.notify({
        color: 'secondary',
        icon: 'delete',
        message: `Will delete the selected row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
      })
    },
    rowClick (row) {
      this.$q.notify({
        color: 'primary',
        icon: 'local_dining',
        message: `Hmm, are you sure? It has ${row.calories} calories.`,
        actions: [{
          label: 'Yes, eat!',
          handler: () => {
            this.$q.notify({ color: 'positive', icon: 'done', message: 'Yummy. Thanks! Now one more.' })
          }
        }]
      })
    }
  }
}
</script>
