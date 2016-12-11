import Room         from './components/Room.vue'
import VueRouter    from 'vue-router'
import Vue          from 'vue'

// Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

//Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/rooms', component: Room } // example of route with a seperate component
      ]
});
