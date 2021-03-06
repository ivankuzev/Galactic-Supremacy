(function () {
    "use strict";
    var Hud = App.Hud.Manager = function($container){
        this.$container  = $container;
        this.$menu = $("<div class='gs-hud-menu'>");
        this.$menu.appendTo($container);
          
        this.menuItems = [];
        var $content = $("<iframe src='http://mansoorsayed.com/gssite/' style='width:100%;height:100%;' />");
        
        this.addMenuItem(new App.Hud.DialogItem("icon1.png",{
            top:0,
            left:0
        },{width:1100,height:800},$content,"Info"))
        this.addMenuItem(new App.Hud.DialogItem("icon2.png",{
            top:30,
            left:0
        },{width:300,height:200}))
          this.addMenuItem(new App.Hud.DialogItem("icon3.png",{
            top:60,
            left:0
        },{width:200,height:100}))
        $(".gs-hud-menu div:eq(0)").css("z-index",0);
         $(".gs-hud-menu div:eq(1)").css("z-index",1);
          $(".gs-hud-menu div:eq(2)").css("z-index",2);
    }    
    Hud.prototype.addMenuItem = function(menuItem){
        
        this.menuItems.push(menuItem);
        menuItem.appendTo(this.$menu);
    
    }
    
    
})()

    