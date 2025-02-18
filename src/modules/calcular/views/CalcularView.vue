<template>

        <h3>Propiedad Computadas</h3>
        <input type="text" v-model="valor">
        <p>Valor: {{ valorTriple}}</p>
        <ResultadoSection v-if="mostrarElemento" :resultado="valorTriple"></ResultadoSection>
        <div v-else-if="isNaN(valor)">No es valido, debe ser un numero</div>
        <div v-else>Aqui no se muestra nada</div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';
    const valor = ref('');

    const valorTriple = computed(() => {
        return valor.value * 3;
    });

    const mostrarElemento = computed(() => {
        return valorTriple.value >= 10;
    });
</script>

<style scoped>

</style>