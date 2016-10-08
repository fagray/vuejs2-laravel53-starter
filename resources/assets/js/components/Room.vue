<template>
    
    <div class="container">
        <h3>Rooms List</h3>
        <div class="row">
           
            <div class="col-md-8">
                <table class="table ">
                    <thead>
                        <tr>
                            <th>Room Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="room in rooms" >
                            <td> {{ room.name }} </td>
                        </tr>
                    </tbody>
                </table>
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
            }
        }

       
        }
    
</script>
