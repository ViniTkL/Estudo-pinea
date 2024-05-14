<script setup>
// import { ref } from 'vue';
import { usePessoaStore } from '@/stores/pessoa';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = usePessoaStore();

const adicionarPessoa = () => {
    store.addPessoa();

    router.push('/list')
}
</script>

<template>
    <form @submit.prevent="adicionarPessoa()">
        <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" v-model="store.nome">
        </div>
        
        <div>
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" v-model="store.cpf">
        </div>
        
        <div>
            <label for="email">EMAIL</label>
            <input type="text" name="email" id="email" v-model="store.email">
        </div>    

        <button>ADICIONAR</button>
    </form>
</template>