<script setup>
import VLinha from '@/components/VLinha.vue'
import { usePessoaStore } from '@/stores/pessoa';

const store = usePessoaStore();
</script>

<template>
<table>
    <thead>
        <th>NOME</th>
        <th>CPF</th>
        <th>EMAIL</th>
    </thead>
    <tbody>
        <VLinha v-for="pessoa in store.pessoas" :pessoa="pessoa" />
    </tbody>
</table>
</template>