<template>
    <div class="container-fluid">
           
          <h3> Basic Routing </h3>

        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <router-link to="/" class="list-group-item ">Home</router-link>
                    <router-link to="/foo" class="list-group-item ">Foo</router-link>
                    <router-link to="/bar" class="list-group-item ">Bar</router-link>
                    <router-link to="/rooms" class="list-group-item ">Rooms</router-link>
                </div>
            </div>

            <router-view class="view"></router-view>

        </div>

        <footer align="center">
            <p>Created by <a href="http://github.com/fagray">fagray</a>. All Rights Reserved</p>
        </footer>
    </div>


</template>