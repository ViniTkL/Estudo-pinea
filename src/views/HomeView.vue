<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<template>
  <main>
    <h2>Meu contador esta em: {{ store.count }} </h2>
    <h2>Meu contador Dobrado: {{ store.doubleCount }} </h2>

    <button @click="store.increment()">Incrementar</button>
  </main>
</template>
