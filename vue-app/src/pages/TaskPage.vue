<template>
  <EasyDataTable
    :headers="headers"
    :items="dataArray"
  />
    <!-- <DataTable class="display">
      <thead>
          <tr>
              <th>First</th>
              <th>Second</th>
          </tr>
      </thead>
  </DataTable> -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from "pinia"
import { useTaskStore } from '../stores/task'
import { toRaw } from 'vue';

const store = useTaskStore()
const { tasks } = storeToRefs(store)
const { fetchAllTasks } = store

fetchAllTasks()
const dataArray = toRaw(tasks)

const headers = ref([
  { text: "名稱", value: "name" },
  { text: "種類", value: "cate"},
  { text: "狀態", value: "status"},
  { text: "金額", value: "amount"},
  { text: "開始聯繫日期", value: "start_contact_date"},
  { text: "開始執行日期", value: "start_implement_date", sortable: true},
  { text: "完成日期", value: "finished_date"},
  { text: "最後更新日期", value: "last_update_date"},
  { text: "收到款項日期", value: "receive_payment_date"},
  { text: "TAG", value: "tag"},
  { text: "備註", value: "remark"},
])
const items = dataArray
// const items = ref([
//   { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
//   { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
//   { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
//   { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
// ])

</script>