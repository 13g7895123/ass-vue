<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>Toedoe</span>
                <strong>List</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <!-- <router-link to="/tasks" class="nav-link">Tasks</router-link> -->
                        <router-link :to="{ name: 'tasks' }" class="nav-link text-white">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link :to=" { name: 'summary' }" class="nav-link">Summary</router-link> -->
                        <a href="#" class="nav-link">Summary</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <!-- <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link> -->
                        <a href="#" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link :to=" { name: 'register' }" class="nav-link">Register</router-link> -->
                    </li>
                    <li class="nav-item">
                        <!-- <router-link :to=" { name: 'datatable' }" class="nav-link">DataTable</router-link> -->
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>