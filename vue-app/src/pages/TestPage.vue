<template>
    <div 
        class="py-2 px-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-700"
        @click="testClick"
        >        
        Submit
    </div>
</template>

<script setup>
import axios from 'axios'
// const api = axios.create({
//     baseURL: 'http://assistant.mercylife.cc'
// })
// const resource = '/Pages/ajax/test.php'

// 用 axios 傳給後端 php 時，需加這 part
let params = new URLSearchParams()
params.append('test', '5555')

const testClick = async() => {
    axios.post('http://assistant.mercylife.cc/Pages/ajax/test.php', params)
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
}

// axios.get('https://health-insurance.mercylife.cc/Pages/ajax/table_query_sales.php?action=sales_data')
//     .then( (response) => console.log(response))
//     .catch( (error) => console.log(error))
</script>