$(document).ready(function(){

    $("#bttn1").on("submit",function(){
    var id =$(this).data("id");
    var beenDevoured=$(this).data("devoured");
    var burgerStatus={
        devoured:beenDevoured
    };
    $.ajax("/api/Burgers/" +id,{
        type:"PUT",
        data:burgerStatus

    }).then(function(){
        location.reload();
    })
});
    $("#bttn2").on("submit", function (event) {
        event.preventDefault();
        var name = $(".form-control input-lg").val().trim();
        var BurgerName = {
            burger_name: name,
            devoured: false
        };
        $.ajax("/api/Burgers/",{
            type:"POST",
            data:BurgerName
    
        }).then(function(){
            location.reload();
        })
    })
})
    

    
