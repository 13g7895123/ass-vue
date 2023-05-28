<template>
    <!-- sidebar -->
    <div class="w-60 h-screen bg-purple-100 overflow-hidden">
        <!-- Logo -->
        <div class="flex px-3 py-3 items-center cursor-pointer">
            <img src="../assets/logo.png" class="w-16">
            <label class="text-purple-900 text-3xl font-extrabold ml-1">Assistant</label>
        </div>
        <!-- content -->
        <ul class="flex flex-col p-4 border border-gray-100">
            <li class="flex flex-col justify-center">
                <router-link 
                    :to="{ name: 'tasks' }"
                    class="text-xl w-full py-2 pl-3 flex items-center rounded text-purple-900 hover:bg-purple-300 cursor-pointer">
                    <!-- <div class="pi pi-money-bill" style="font-size: 1.5rem"></div> -->
                    <div class="pi pi-money-bill" style="font-size: 1.5rem"></div>
                    <label class="ml-3">Tasks</label>
                    <div class="ml-3" :class="showIconClass" style="font-size: 1rem" @click="showTaskItems"></div>
                </router-link>
                <ul v-show="showTask">
                    <li class="w-full flex items-center justify-center cursor-pointer py-1 rounded hover:bg-purple-300">
                        <router-link 
                            :to="{ name: 'addTasks' }"
                            class="text-xl w-full py-2 pl-3 flex items-center rounded text-purple-900 hover:bg-purple-300 cursor-pointer">
                            <div class="pi pi-plus text-purple-900" style="font-size: 0.6rem"></div>
                            <label class="text-base text-purple-900 ml-1">add new task</label>
                        </router-link>                        
                    </li>
                </ul>
            </li>
            <li class="flex flex-col justify-center mt-2">
                <router-link 
                    :to="{ name: 'test' }"
                    class="text-xl w-full py-2 pl-3 flex items-center rounded text-purple-900 hover:bg-purple-300 cursor-pointer">
                    <div class="pi pi-check-circle" style="font-size: 1.5rem"></div>
                    <label class="ml-3">Test</label>
                    <div class="ml-3" :class="showIconClass" style="font-size: 1rem" @click="showTestItems"></div>
                </router-link>
                <ul v-show="showTest">
                    <li class="w-full flex items-center justify-center cursor-pointer py-1 rounded hover:bg-purple-300">
                        <router-link 
                            :to="{ name: 'szfuPayment' }"
                            class="text-xl w-full py-2 pl-3 flex items-center rounded text-purple-900 hover:bg-purple-300 cursor-pointer">
                            <div class="pi pi-plus text-purple-900" style="font-size: 0.6rem"></div>
                            <label class="text-base text-purple-900 ml-1">szfu payment</label>
                        </router-link>                        
                    </li>
                </ul>
            </li>
        </ul>
        <!-- footer -->
    </div>    
</template>
<script setup>
import { ref } from 'vue';

const showTask = ref(false)
const showIcon = ref(false)
const showIconClass = ref('')
const showTest = ref(false)

showIconClass.value = showIcon.value ? 'pi pi-angle-up' : 'pi pi-angle-down'
const showTaskItems = () => {
    showTask.value = !showTask.value
    showIcon.value = !showIcon.value
    showIconClass.value = showIcon.value ? 'pi pi-angle-up' : 'pi pi-angle-down'
}
const showTestItems = () => {
    showTest.value = !showTest.value
    showIcon.value = !showIcon.value
    showIconClass.value = showIcon.value ? 'pi pi-angle-up' : 'pi pi-angle-down'
}

</script>