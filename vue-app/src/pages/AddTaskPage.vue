<template>
    <form class="w-96 h-96 flex flex-col items-center justify-around border border-slate-300 rounded-lg" @submit="onSubmit">
        <div class="h-[70%] flex flex-col items-center justify-around">
            <div class='w-[80%] flex justify-end items-center'>
                <label class="w-26 text-slate-800 text-right mr-3">Name</label>
                <InputText type="text" v-model="name" class="w-44"/>
            </div>
            <div class='w-[80%] flex justify-end items-center'>
                <label class="w-26 text-slate-800 text-right mr-3">Cate</label>
                <div class="w-44 flex justify-content-center">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Cate" class="w-full" />
                </div>
            </div>
            <div class='w-[80%] flex justify-end items-center'>
                <label class="w-26 text-slate-800 text-right mr-3">Amount</label>
                <InputText type="text" v-model="amount" class="w-44"/>
            </div>
            <div class='w-[80%] flex justify-end items-center'>
                <label class="w-32 text-slate-800 text-right mr-3">Contact Time</label>
                <Calendar v-model="date" dateFormat="yy-mm-dd"  class="w-[13.8rem]"/>
            </div>
        </div>
        <div class="w-[80%] flex justify-end -mt-8 pr-3">
            <div class="py-3 px-5 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-700" @click="onSubmit">Submit</div>
        </div>
    </form>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import axios from 'axios' 

const name = ref('')
const amount = ref(0)
const date = ref('')
const cities = ref([
    { name: 'Web', code: 'web' },
    { name: 'Python', code: 'python' }
]);
const selectedCity = ref('')
const onSubmit = async() => {

    let params = new URLSearchParams()
    params.append('name', name.value)
    params.append('cate', toRaw(selectedCity.value).code)
    params.append('amount', amount.value)
    params.append('date', date.value.toLocaleDateString())

    axios.post('http://139.162.15.125/api_php/assistant/addTask.php', params)
    .then( response => {
        console.log(response)
    })
    .catch( (error) => console.log(error))
}   
</script>