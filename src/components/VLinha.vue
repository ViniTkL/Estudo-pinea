<script setup>
const props = defineProps(["pessoa"])
</script>

<template>
    <tr>
        <th>{{ pessoa.nome }}</th>
        <th>{{ pessoa.cpf }}</th>
        <th>{{ pessoa.email }}</th>
    </tr>
</template>