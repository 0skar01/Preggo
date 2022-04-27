$("#radio1").on("click", function(e){
    $("#sliderDiv").show();
});
$("#radio2").on("click", function(e){
    $("#sliderDiv").hide();
});
$("#slider").on("input", function(e){
    $("#output").html($(this).val() + " weeks");
});