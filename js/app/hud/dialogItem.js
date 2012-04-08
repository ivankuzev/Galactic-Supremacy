(function () {
    "use strict";
    var dialogItem = App.Hud.DialogItem = function(icon,position,size,$content){
          
        this.$icon = $("<img src='css/app/hud/icons/"+icon+"'>");
        this.$container = $("<div class='gs-hud-menu-item'>");
       
        this.$back = $("<div class='gs-hud-menu-item-background'>");
       
        this.$topleft = $("<div class='gs-hud-menu-item-topleft'>");
        this.$topright = $("<div class='gs-hud-menu-item-topright'>");
        this.$bottomleft = $("<div class='gs-hud-menu-item-bottomleft'>");
        this.$bottomright = $("<div class='gs-hud-menu-item-bottomright'>");
        
        this.$top = $("<div class='gs-hud-menu-item-topborder'>")
        this.$bottom= $("<div class='gs-hud-menu-item-bottomborder'>")
        this.$left= $("<div class='gs-hud-menu-item-leftborder'>")
        this.$right= $("<div class='gs-hud-menu-item-rightborder'>")
         
         this.$topleft.append(this.$icon);
         
        this.openedposition = {
            top:100,
            left:100
        };
        this.closedPosition =  position;
        this.openedSize = size;
        this.$content = $("<div class='gs-hud-menu-item-content'>")
        this.$content.append($content);
        this.$content.css({
            display:"none"
        })
        this.closed = true;
    
        this.$container.css(position)
          
        this.$container.append(this.$content);
        this.$container.append(this.$top,this.$bottom,this.$left,this.$right);
        this.$container.append(this.$topleft,this.$bottomright,this.$topright,this.$bottomleft)
        this.$container.append(this.$back);
        ///testovo
    
        this.$container.on("click",".gs-hud-menu-item-topleft,.gs-hud-menu-item-bottomright",$.proxy(function(event){
            if(this.closed){
                this.open();
            }else{
                this.close();
            }
        },this))
      
    }    
    dialogItem.prototype.appendTo = function(container){
        this.$container.appendTo(container);
    }
    dialogItem.prototype.open = function(){
           
        this.$container.animate(this.openedposition,"fast");
        this.$container.animate(this.openedSize,$.proxy(this.showContent,this));
        this.closed = false;
        
       
    }
    dialogItem.prototype.close = function(){
        this.hideContent(function(){
            this.$container.animate({
                width:50,
                height:50
            });   
            this.$container.animate(this.closedPosition,"fast");
            this.closed = true;
        })
        
    }   
    dialogItem.prototype.move = function(position){
        this.$container.animate(position);
    }
    dialogItem.prototype.showContent = function(callback){
        this.$content.fadeIn('slow',$.proxy(callback,this));
        
        
    }
    dialogItem.prototype.hideContent = function(callback){
        this.$content.fadeOut('slow',$.proxy(callback,this));
    }
})()