import VueRouter    from 'vue-router'

//Define route components
const home = { template: '<div>home</div>' }
const foo = { template: '<div>Foo</div>' }
const bar = { template: '<div>Bar</div>' }

// lazy load components
const Room = require('./components/Room.vue')

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [

        { path: '/', component: home },
        { path: '/foo', component: foo },
        { path: '/bar', component: bar },
        { path: '/rooms', component: require('./components/Room.vue') }, // example of route with a seperate component
        
      ]
});
