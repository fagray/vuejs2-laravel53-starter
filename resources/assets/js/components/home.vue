<template>
    <div class="container-fluid">
           
          <h3> Basic Routing </h3>
          <h3> {{ count }} </h3>
          <h3> {{ $store.state.count }} </h3>

        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <router-link to="/" class="list-group-item ">Home</router-link>
                    <router-link to="/foo" class="list-group-item ">Foo</router-link>
                    <router-link to="/bar" class="list-group-item ">Bar</router-link>
                    <router-link to="/rooms" class="list-group-item ">Rooms</router-link>
                </div>
            </div>
            <div class="col-md-9">
                <router-view class="view"></router-view>
            </div>

        </div>

        <footer align="center">
            <p>Created by <a href="http://github.com/fagray">fagray</a>. All Rights Reserved</p>
        </footer>
    </div>


</template>
<script>
    export default{

        computed: {
            count () {
                return this.$store.state.count
            }
          },
    }

</script>