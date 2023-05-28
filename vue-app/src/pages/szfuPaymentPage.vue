<template>
    <div class="flex">
        <!-- input -->
        <InputText type="text" v-model="amount" class="w-44"/>
        <Dropdown v-model="selectedPayType" :options="payType" optionLabel="name" placeholder="Select a pay type" class="" />
        <!-- btn -->
        <div 
            class="px-5 py-3 ml-1 bg-green-300 text-xl font-extrabold rounded-md cursor-pointer hover:bg-green-500"
            @click="submit">
            Click
        </div>
    </div>
</template>
<script setup>
import { ref, toRaw } from 'vue'
import axios from 'axios' 

const amount = ref('')
const payType = ref([
    { name: 'ATM', code: 'ATM' },
    { name: 'CVS', code: 'CVS' }
]);
const selectedPayType = ref('')

const submit = async() => {
    if (typeof(toRaw(selectedPayType.value).code) != 'undefined'){
        let params = new URLSearchParams()
        params.append('paytype', toRaw(selectedPayType.value).code)
        params.append('price', amount.value)

        axios.post('http://139.162.15.125:9090/api/szfu/szfuPayment.php', params)
        .then( (response) => console.log(response))
        .catch( (error) => console.log(error))
    }else{
        alert('Please choose a pay type!')
    }
}
</script>