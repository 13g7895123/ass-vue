<script setup>
import TaskPage from './pages/TaskPage.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import NavbarRight from './components/NavbarRight.vue';
</script>

<template>
  <div class="flex overflow-hidden">
    <!-- left -->
    <Sidebar />
    <!-- right -->
    <div class="w-[calc(100%-15rem)] flex flex-col">
      <!-- navbar -->
      <NavbarRight />
      <!-- content -->
      <div class="h-[calc(100%-2.5rem)] flex justify-center items-center">
        <router-view/>
      </div>
    </div>    
  </div>  
  <!-- <Navbar/> -->
  <!-- <router-view v-slot="{ Component }" class="max-w-[1280px] mx-auto">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style scoped>
</style>
