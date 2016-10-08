<!DOCTYPE html>
<html>
<head>
    <title> </title>
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    
</head>
<body>

    <div id="app">
        <div class="container">

            <div style="margin-top:20px;" class="jumbotron">
                <div class="container">
                    <h1>Basic Vue JS 2 Starter With Laravel 5.3 </h1>
                    <p>
                      A simple starter template for VueJS 2.0 with Laravel 5.3.<br/>
                      Already bootstrapped with  :  
                      <ul>
                          <li> Basic Routing with VueRouter 2.0 </li>
                          <li> A VueJS Starter Component   </li>
                          <li> Web API call with VueResource  </li>
                          <li> List Rendering with VueJS </li>

                      </ul>
                  </p>

              </div>
          </div>
          <h3> Basic Routing </h3>

          <div class="row">
            <div class="col-md-4">
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
    </div>{{-- /container --}}

</div>

{{-- / setting value to your CSRFglobal variables  --}}
<script>
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
        ]); ?>
</script>

<script src="/js/app.js"></script>
</body>
</html>