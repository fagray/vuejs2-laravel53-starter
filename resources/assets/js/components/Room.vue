<template>
    
    <div class="">
        <h4>Rooms List</h4>
        <div class="row">
           
            <div class="col-md-4">
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <table class="table ">
                    <thead>
                        <tr>
                            <th>Room Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="room in rooms" >
                            
                            <td> <router-link :to=" {name: 'rooms_read', params:{ room: room.name}} " class="list-group-item ">{{ room.name }}</router-link> </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>

    export default {

     
        mounted() {
            console.log('Room Component ready.')
            this.fetchRoomList()

           
        },

        data : function() {
            return {
                rooms : []
            }

        },

        methods : {

            fetchRoomList : function(){

                    this.$http.get('/api/rooms').then((response) => {
                    this.$set(this,'rooms', response.data )

                });
            },
            increment(){
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            }


        }

       
        }
    
</script>
