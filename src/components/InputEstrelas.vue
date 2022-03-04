<template>
   <section>
      <i  v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo" @click="marcarAvaliacao(estrela.id)"></i>
      {{avaliacao}}
      
   </section>
</template>

<script>
export default {
   name: 'Input Estrelas',

   props:{
      numeroEstrelas: {
         type: Number,
         required: true
      }
   },

   data: ()=>({
      estrelas: [],
      avaliacao: 0
   }),

   methods:{
      iniciarEstrelas(){
         for (let i = 0; i < this.numeroEstrelas; i++) {
            this.estrelas[i] = {id: i, estilo:'bi bi-star estrela'}
            
         }
      },

      marcarAvaliacao(quantidade_estrelas){
         this.iniciarEstrelas()

         this.avaliacao = quantidade_estrelas+1
         for (let index = 0; index < this.avaliacao; index++) {
            this.estrelas[index].estilo = 'bi bi-star-fill estrela preenchida'
         }

         // this.$emit('avaliar', this.avaliacao)
         this.$emit('update:avaliar', this.avaliacao)
         //update pode ser caputarado pela diretiva v-model no componente pai. O v-model fica escutando eventos desse tipo
      }  
   },

   created(){
      this.iniciarEstrelas()
   },

   

}
</script>

<style scoped>
.estrela{
   font-size: 1.5rem;
   padding: 2px;
   color: #999;
}

.estrela:hover{
   font-size: 1.7rem;
   color: #fc0;
}

.preenchida{
   color: #fc0;
}

</style>