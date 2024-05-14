import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePessoaStore = defineStore('pessoa', () => {
    let nome = ref('');
    let cpf = ref('');
    let email = ref('');

    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    function setEmail(newEmail) {
        email.value = email;
    }
  
    return { email, cpf, nome , doubleCount, setEmail }
  })
  