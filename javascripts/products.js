(function(){
  $("#products .products img").live("click", function(e){
    $("#content").load($(e.currentTarget).attr("target"));
  });
})();
