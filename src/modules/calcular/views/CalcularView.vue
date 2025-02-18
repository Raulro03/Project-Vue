<template>

        <h3>Propiedad Computadas</h3>
        <input type="text" v-model="valor">
        <p>Valor: {{ valorTriple}}</p>
        <ResultadoSection :resultado="valorTriple"></ResultadoSection>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';
    const valor = ref('');

    const valorTriple = computed(() => {
        return valor.value * 3;
    });
</script>

<style scoped>

</style>