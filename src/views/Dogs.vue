 <template>
   <div>
     <PetTable
      species="dogs"
      :pets='dogs'
     />
   </div>
 </template>

 <script>
   import {mapState} from 'vuex'
   import PetTable from '@/components/petTable.vue'
   export default{
     components:{
       PetTable
     },
     data(){
       return{
       }
     },
     computed: {
       ...mapState([
        'dogs'
       ])
     }
   }
</script>   
