({
    applyCSS : function(component, event, helper) {
        var cmpTarget = component.find('changeIt');
        $A.util.addClass(cmpTarget, 'changeMe');
    },
    
    removeCSS : function(component, event, helper) {
        var cmpTarget = component.find('changeIt');
        $A.util.removeClass(cmpTarget, 'changeMe');
    },
    doInit : function(component, event, helper) {
        var topo = component.find('topo');
        var aleatorio = Math.random();
        aleatorio < 0.5 ? $A.util.addClass(topo, 'active') : $A.util.addClass(topo, 'inactive') ;

        aleatorio < 0.5 ? component.set("v.isActive", true) : component.set("v.isActive", false);
        // aleatorio < 0.5 ? component.set("v.isTopo", true) : component.set("v.isTopo", false);
        if(aleatorio < 0.5){
            component.set("v.isTopo", true)
        }else{
            component.set("v.isTopo", false);
        }
    },
    // topoClicks : function(component) {
    //     var topoClass = component.get('v.isActive');
    //     alert("llega")
    //     if (topoClass) {
    //         alert("The topoClass is true");
    //         console.log(topoClass);
    //         component.set("v.marcador", component.get('v.marcador')+1);
    //         this.actualizarMarcador(component);
    //     } else {
    //         alert("The topoClass is false");
    //         console.log(topoClass);
    //     }
    // },
    topoClick: function(cmp,event) {
        var isTopo = cmp.get("v.isTopo");
        console.log("isTopo: " + isTopo);
        var evt = $A.get("e.c:Puntuacion");
        console.log("evt: " + evt);
        evt.setParams({
            "molePoint": isTopo ? 9 : 0 
        });
        evt.fire();
        // para que no se pueda volver a clicar
        if (isTopo) {
            var topo = cmp.find('topo');
            $A.util.removeClass(topo, 'active') ;
            $A.util.addClass(topo, 'inactive') ;
            cmp.set("v.isTopo", false);
        }
    }// ,
    // actualizarMarcador : function(component) {
    //     // Obtiene el componente "Marcador" en la misma aplicación
    //     var marcadorComponent = component.find("Marcador");
        
    //     // Verifica si se encontró el componente "Marcador"
    //     if (marcadorComponent) {
    //         // Obtiene el valor actual del marcador
    //         var currentCount = marcadorComponent.get("v.marcador");
            
    //         // Incrementa el valor del marcador en 1
    //         marcadorComponent.set("v.marcador", currentCount + 1);
    //     } else {
    //         console.error("No se encontró el componente 'Marcador'.");
    //     }
    // }

})
