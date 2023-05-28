<template>
  <!-- <Toolbar class="mb-4">
    <template #start>
        <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
        <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
    </template>
    <template #end>
        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
        <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
    </template>
  </Toolbar> -->
  <!-- DataTable -->
  <div class="card">
      <DataTable 
        :value="products" 
        paginator 
        :rows="5" 
        :rowsPerPageOptions="[5, 10, 20, 50]" 
        selectionMode="single" 
        editMode="row"
        :editingRows="editingRows"
        @row-edit-save="onRowEditSave"
        tableClass="editable-cells-table"
        >
        <Column 
          v-for="col of headers" 
          :key="col.field" 
          :field="col.field" 
          :header="col.header">
        </Column>
      </DataTable>
  </div>
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
  { header: "名稱", field: "name" },
  { header: "種類", field: "cate"},
  { header: "狀態", field: "status"},
  { header: "金額", field: "amount"},
  { header: "開始聯繫日期", field: "start_contact_date"},
  { header: "開始執行日期", field: "start_implement_date"},
  { header: "完成日期", field: "finished_date"},
  { header: "最後更新日期", field: "last_update_date"},
  { header: "收到款項日期", field: "receive_payment_date"},
  { header: "TAG", field: "tag"},
  { header: "備註", field: "remark"},
])

const products = dataArray;

const editingRows = ref([]);
const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};

</script>