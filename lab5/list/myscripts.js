$(function() {
     console.log( "ready!" );
    $("#btnPrint").click(myFunction);
    
    function myFunction(){
        var name = $("#userInput").val();
            console.log(name);
            var names = new Array();
           names.push(name);
        $("#printNames").html(names);
        

    }
});

  
