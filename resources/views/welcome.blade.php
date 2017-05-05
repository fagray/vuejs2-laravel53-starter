<!DOCTYPE html>
<html>
<head>
    <title> </title>
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    
</head>
<body>

    <div id="app">
     <home></home>
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