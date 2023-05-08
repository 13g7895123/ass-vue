<template>
    <!-- input -->
    <InputText type="text" v-model="amount" class="w-44"/>
    <!-- btn -->
    <div 
        class="px-5 py-3 ml-1 bg-green-200 text-xl font-extrabold rounded-md cursor-pointer hover:bg-green-300"
        @click="submit"
        >
        Click
    </div>
</template>
<script setup>
import { ref, toRaw } from 'vue'
import axios from 'axios' 

const amount = ref('')

const submit = async() => {
    let params = new URLSearchParams()
    params.append('Price', amount.value)

    axios.post('http://assistant.mercylife.cc/Pages/ajax/testPay.php', params)
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
}
</script>