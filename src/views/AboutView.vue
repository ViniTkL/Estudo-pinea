<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<template>
  <div class="about">
    <h2>Aqui o contador está em {{ store.count }}</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
