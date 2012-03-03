(function() {
    "use strict";
    var Resources = App.Resources = new function()  {
        this.materials = {};
        this.geometries = {};
    
        
        this.lineMaterial = function( options ) {
            return new THREE.LineBasicMaterial(options);
        }
    
        this.imageMaterial = function( file, options, inImageDir ) {
            if ( file != undefined ) {
                var loc = inImageDir ? "images/textures/" + file : file;
                options.map = THREE.ImageUtils.loadTexture(loc);
            }
            return new THREE.MeshLambertMaterial(options);
        }
    
        this.basicMaterial = function( options ) {
            return new THREE.MeshBasicMaterial(options);
        }
    
        this.initilizeGeometries  = function(){
            this.geometries.sphere = new THREE.SphereGeometry( 1, 64, 62 );
            this.geometries.sphere.castShadow = true;
            this.geometries.sphere.receiveShadow = true;
       
            var circleShape = new THREE.Shape();
            circleShape.moveTo(0,0);
            circleShape.arc( 0, 0, 1, 0, Math.PI * 2, false );
            this.geometries.circle = circleShape.createPointsGeometry(60);
        
            this.geometries.verticalLine = new THREE.Geometry();
            this.geometries.verticalLine.vertices.push( new THREE.Vertex(new THREE.Vector3( 0, 0, 0)));
            this.geometries.verticalLine.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 1, 0)));
        
        }    
        this.initializeMaterials = function() {
            this.materials.planets = {
                gas0: this.imageMaterial("jupiter.jpg", {
                    overdraw: true
                }, true),
                gas1: this.imageMaterial("saturn.jpg", {
                    overdraw: true
                }, true),
                terran0: this.imageMaterial("terran1.jpg", {
                    ambient: 0x555555, 
                    color: 0x888888
                }, true),
                volcanic0: this.imageMaterial("venus.jpg", { }, true),
                desert0: this.imageMaterial("desert1.jpg", {
                    ambient: 0x555555, 
                    color: 0x888888
                }, true)
            };

            this.materials.moons = {
                ice0: this.imageMaterial(undefined, {
                    ambient: 0x05555, 
                    color: 0x008888
                }),
                barren0: this.imageMaterial("barren1.jpg", {
                    ambient: 0x555555, 
                    color: 0x888888
                }, true)
            };

            this.materials.stars = {
                star0: this.basicMaterial({
                    map: THREE.ImageUtils.loadTexture( 'images/textures/main_sequence_body.png' ), 
                    blending: THREE.AdditiveBlending, 
                    overdraw: true
                })

            };


            this.materials.etc = {
                gridDefault: this.lineMaterial({
                    color: 0x293A45, 
                    opacity: 0.9
                }), 
                
                gridSelected: this.lineMaterial({
                    color: 0xff0000, 
                    opacity: 0.9
                }),
                selector: this.basicMaterial({
                    transparent: true, 
                    overdraw: true, 
                    doubleSided: true,
                    map: THREE.ImageUtils.loadTexture( 'images/textures/selector.png' )
                })
            };   
        
        } 
    }
});