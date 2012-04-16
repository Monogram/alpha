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

    $("#home_icon").live("click", function(e) {
      $("#content").load("contents/brand_vision.html");
      $("#icon_bar div").removeClass('selected');
      $("#brand_vision_img").addClass("selected");
      $("#sections div").removeClass("selected");
      $("#sections div").last().addClass("selected");
    });

    $("#cover img").live("click", function(e){
      $("#cover").hide();
      $("#header").show();
      $("#content").show();
      $("#footer").show();
    });

    $("div.sections_btn").live("click", function(e){
      var target = e.currentTarget;

      var url = $(target).attr("target");

      $("#content").load(url, function() {

        if(url.indexOf('news') >= 0) {
          console.log('call custom scrollbar');
          $('#scrollable-news').jScrollPane();
        }

       });

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
