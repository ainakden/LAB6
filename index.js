
<html>

<head>
   <title>jQuery Function</title>
   <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

   <script>
     $(document).ready(function() {
        if (!localStorage.datacount || localStorage.datacount == null)
          localStorage.datacount=0;
       $("div").click(function() {
         alert("Hello, world!");
       });
     });
   </script>
</head>

<body>
   
</body>
</html>
