import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePessoaStore = defineStore('pessoa', () => {
    let nome = ref('');
    let cpf = ref('');
    let email = ref('');

    let pessoas = ref([])

    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    function addPessoa() {
      const newPessoa = { nome: nome.value, cpf: cpf.value, email: email.value }

      pessoas.value.push(newPessoa)

      console.log(pessoas.value);
    }

   
    return { email, cpf, nome, pessoas, addPessoa }
  })
  