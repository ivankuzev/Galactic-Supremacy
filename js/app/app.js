$(document).ready(function() {
    
    // initialize game
    
    //todo need to make changes so that classes are with Capital letters but instance of them are not
    
    App.Res = new App.Resources(App.Controllers.App);
    App.hud = new App.Hud.Manager($("body"));


});