<script setup>

</script>

<template>
    <form @submit.prevent="">
        <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome">
        </div>
        
        <div>
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf">
        </div>
        
        <div>
            <label for="email">EMAIL</label>
            <input type="text" name="email" id="email">
        </div>    

        <button>ADICIONAR</button>
    </form>
</template>