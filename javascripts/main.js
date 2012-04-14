(function(){
    $(document).ready(function(e){
      $("#content").load("contents/brand_vision.html");
      $(".sections_btn.init").addClass("selected");
      var target_icon = $(".sections_btn.init").attr("target_img");
      $("#icon_bar #" + target_icon).addClass("selected");
      $("#header").hide();
      $("#content").hide();
      $("#footer").hide();
    })

    $("#cover img").live("click", function(e){
      $("#cover").hide();
      $("#header").show();
      $("#content").show();
      $("#footer").show();
    });

    $("div.sections_btn").live("click", function(e){
       var target = e.currentTarget;
       if($(target).hasClass("selected")) return;
       var url = $(target).attr("target");
       $("#content").load(url);
      $(".sections_btn").removeClass("override selected");
      $(target).addClass("selected");
      $("#icon_bar div").removeClass("selected");
      var target_icon = $(target).attr("target_img");
      $("#icon_bar #" + target_icon).addClass("selected");
    });
    $("div.sections_btn").live("mouseover", function(e){
      $(".sections_btn").addClass("override");
    });
    $("div.sections_btn").live("mouseleave", function(e){
      $(".sections_btn").removeClass("override");
    });
})();
