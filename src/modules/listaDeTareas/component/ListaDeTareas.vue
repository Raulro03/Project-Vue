<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ index + ". " + tarea }}
                <button @click="borrarTareas">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const tareas = ref([]);
    const nuevaTarea = ref('');
    const agregarTarea = () => {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
    const borrarTareas = (index) => {
        tareas.value.splice(index, 1);
    }
</script>

<style scoped>

</style>