({
    // applyCSS : function(component, event, helper) {
    //     var cmpTarget = component.find('changeIt');
    //     $A.util.addClass(cmpTarget, 'changeMe');
    // },
    
    // removeCSS : function(component, event, helper) {
    //     var cmpTarget = component.find('changeIt');
    //     $A.util.removeClass(cmpTarget, 'changeMe');
    // },
    doInit: function(cmp) {
        var topo = cmp.find("topo");
        //Math.random() < 0.5 ? $A.util.addClass(topo, 'active') : $A.util.addClass(topo, 'inactive') ;
        
        //var number =Math.random() ;
        var randomNumberGenerator = cmp.get("c.random");

        randomNumberGenerator.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var number = response.getReturnValue();
                if(number < 0.5){
                    $A.util.addClass(topo, 'active');
                    cmp.set("v.isTopo",true)
                }else{
                    $A.util.addClass(topo, 'inactive');
                    cmp.set("v.isTopo",false)
                }
            }
        });

        // randomNumberGenerator.setParams({
        //     "min": 0,
        //     "max": 1
        // });

        $A.enqueueAction(randomNumberGenerator);



    
    
    },
    topoClick: function(cmp, event, helper) {
        // this function trigger an event
        // fire the event using that event name
        var isTopo = cmp.get("v.isTopo");
        console.log("isTopo: " + isTopo);
        var evt = $A.get("e.c:Puntuacion");
        console.log("evt: " + evt);
        evt.setParams({
            "molePoint": isTopo ? 2 : 0 
        });
        evt.fire();
    },



    // doInit : function(component, event, helper) {
    //     var topo = component.find('topo');
    //     var randomNumberGeneratorClass = component.get("c.random");
    //     randomNumberGeneratorClass.setCallback(this, function(response) {
    //         var state = response.getState();
    //         if (state === "SUCCESS" ) {
    //             // Lo que tenía antes de Apex
    //             var aleatorio = response.getReturnValue();
    //             console.log("aleatorio: " + aleatorio);
    //             aleatorio < 0.5 ? $A.util.addClass(topo, 'active') : $A.util.addClass(topo, 'inactive') ;
    //             // aleatorio < 0.5 ? component.set("v.isActive", true) : component.set("v.isActive", false);
    //             aleatorio < 0.5 ? component.set("v.isTopo", true) : component.set("v.isTopo", false);
    //             if(aleatorio < 0.5){
    //                 component.set("v.isTopo", true)
    //             }else{
    //                 component.set("v.isTopo", false);
    //             }
    //             // Fin de lo que tenía antes de la llamada a Apex
    //         }else{
    //             console.log("Error: " + state);
    //         }
    //     });
    //     // var aleatorio = $A.callback();
    //     // console.log("aleatorio: " + aleatorio);
    //     // aleatorio < 0.5 ? $A.util.addClass(topo, 'active') : $A.util.addClass(topo, 'inactive') ;
    //     // aleatorio < 0.5 ? component.set("v.isActive", true) : component.set("v.isActive", false);
    //     // // aleatorio < 0.5 ? component.set("v.isTopo", true) : component.set("v.isTopo", false);
    //     // if(aleatorio < 0.5){
    //     //     component.set("v.isTopo", true)
    //     // }else{
    //     //     component.set("v.isTopo", false);
    //     // }
    // },

    // topoClick: function(cmp,event) {
    //     var isTopo = cmp.get("v.isTopo");
    //     console.log("isTopo: " + isTopo);
    //     var evt = $A.get("e.c:Puntuacion");
    //     console.log("evt: " + evt);
    //     evt.setParams({
    //         "molePoint": isTopo ? 9 : 0 
    //     });
    //     evt.fire();
    //     // para que no se pueda volver a clicar
    //     if (isTopo) {
    //         var topo = cmp.find('topo');
    //         $A.util.removeClass(topo, 'active') ;
    //         $A.util.addClass(topo, 'inactive') ;
    //         cmp.set("v.isTopo", false);
    //     }
    // }// ,
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
