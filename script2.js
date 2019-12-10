$(document).ready(function()
{
    $("#addBtn").hover(()=>{
        $("#addBtn").css("background", "gray");
        $("#addBtn").html('<img src="images/plus-hover.svg" />')
    }, ()=>{
        $("#addBtn").css("background", "white");
        $("#addBtn").html('<img src="images/plus.svg" />')
    });

    $(document).on("mouseenter", ".remove", (event)=>{
        $(event.target).css("background", "gray");
        $(event.target).html("<img class='removeImg' src='images/remove-hover.svg' />");
    }).on("mouseleave", ".remove", (event)=>{
        $(event.target).css("background", "white");
        $(event.target).html("<img class='removeImg' src='images/remove.svg' />");
    });

    $(document).on("mouseenter", ".up", (event)=>{
        $(event.target).css("background", "gray");
        $(event.target).html("<img class='upImg' src='images/up-hover.svg' />");
    }).on("mouseleave", ".up", (event)=>{
        $(event.target).css("background", "white");
        $(event.target).html("<img class='upImg' src='images/up.svg' />");
    });

    $(document).on("mouseenter", ".down", (event)=>{
        $(event.target).css("background", "gray");
        $(event.target).html("<img class='downImg' src='images/down-hover.svg' />");
    }).on("mouseleave", ".down", (event)=>{
        $(event.target).css("background", "white");
        $(event.target).html("<img class='downImg' src='images/down.svg' />");
    });
});

