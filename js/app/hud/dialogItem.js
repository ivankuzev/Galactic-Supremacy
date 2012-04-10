(function () {
    "use strict";
    var dialogItem = App.Hud.DialogItem = function(icon,position,size,$content,text){
          
        this.$icon = $("<div class='gs-hud-menu-item-icon'>");
        this.$icon.css("background-image","url('css/app/hud/icons/"+icon+"')")
        this.$container = $("<div class='gs-hud-menu-item'>");
      
        this.$text = $("<div class='gs-hud-menu-item-text'>");
        this.$text.hide().text(text);
        
        this.$back = $("<div class='gs-hud-menu-item-background'>");
       
        this.$topleft = $("<div class='gs-hud-menu-item-topleft'>");
        this.$topright = $("<div class='gs-hud-menu-item-topright'>");
        this.$bottomleft = $("<div class='gs-hud-menu-item-bottomleft'>");
        this.$bottomright = $("<div class='gs-hud-menu-item-bottomright'>");
        
        this.$top = $("<div class='gs-hud-menu-item-topborder'>")
        this.$bottom= $("<div class='gs-hud-menu-item-bottomborder'>")
        this.$left= $("<div class='gs-hud-menu-item-leftborder'>")
        this.$right= $("<div class='gs-hud-menu-item-rightborder'>")
                  
        this.openedposition = {
            top:100,
            left:100
        };
        this.closedPosition =  position;
        this.openedSize = size;
        this.$content = $("<div class='gs-hud-menu-item-content'>")
        this.$content.append($content);
        this.$content.hide();
        this.closed = true;
        this.halfOpened = false;
    
        this.$container.css(position)
          
        this.$container.append(this.$content);
        this.$container.append(this.$top,this.$bottom,this.$left,this.$right);
        this.$container.append(this.$topleft,this.$bottomright,this.$topright,this.$bottomleft)
        this.$container.append(this.$back);
        this.$container.append(this.$icon,this.$text);
        ///testovo
    
        this.$container.on("mouseover",".gs-hud-menu-item-icon",$.proxy(function(event){
            if(this.closed){
                this.halfOpened = true;
                this.halfOpen();
            }
        },this))
        this.$container.on("mouseout",".gs-hud-menu-item-icon",$.proxy(function(event){
            if(this.closed){
                this.halfOpened = false;
                this.halfClose();
            }
        },this))
        //
        this.$container.on("click",".gs-hud-menu-item-icon",$.proxy(function(event){
            if(this.closed){
                this.halfOpened= false;
                this.closed= false;
                this.halfClose();
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
       
        
       
    }
    dialogItem.prototype.close = function(){
        this.hideContent(function(){
            this.$container.animate({
                width:50,
                height:50
            });   
            this.$container.animate(this.closedPosition,"fast", $.proxy(function(){
                this.closed = true;
            },this));
            
        })
        
    }   
    dialogItem.prototype.move = function(position){
        this.$container.animate(position);
    }
    dialogItem.prototype.halfOpen = function(callback){
        this.$container.stop().animate({
            width:200
        },$.proxy(function(){this.$text.show()},this));   
    }
    dialogItem.prototype.halfClose = function(callback){
        this.$container.stop().animate({
            width:50
        },$.proxy(function(){this.$text.hide()},this));   
    }
    dialogItem.prototype.showContent = function(callback){
        this.$content.fadeIn($.proxy(callback,this));
    }
    dialogItem.prototype.hideContent = function(callback){
        this.$content.fadeOut($.proxy(callback,this));
    }
})()