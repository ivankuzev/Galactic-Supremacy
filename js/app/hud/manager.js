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
            top:50,
            left:0
        },{width:300,height:200}))
          this.addMenuItem(new App.Hud.DialogItem("icon3.png",{
            top:100,
            left:0
        },{width:200,height:100}))
        
    }    
    Hud.prototype.addMenuItem = function(menuItem){
        
        this.menuItems.push(menuItem);
        menuItem.appendTo(this.$menu);
    
    }
    
    
})()

    