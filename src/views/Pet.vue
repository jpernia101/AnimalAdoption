 <template>
   <div>
     <h1>{{animal.name}} ({{$route.params.species}})</h1>
     <p>{{animal.age}} years old </p>
     <p>Breed: {{animal.breed}}</p>
   </div>
 </template>


<script>
import {mapState} from 'vuex' 
export default {
  data(){ 
    return{
      animal: {}
    }
  },
  computed:{
    /*this syntax is the same as the one below it

      cats(){
      return this.$store.state.cats
    }*/

    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted(){
    {
      /*
        this['cats']
        this['dogs]
        same thing as this[this.$route.params.species]
      */
      const animals = this[this.$route.params.species][this.$route.params.id]
      this.animal = animals
    }
  }
}
</script>