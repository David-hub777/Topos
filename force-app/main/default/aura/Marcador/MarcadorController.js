({
    myAction : function(component, event, helper) {

    },
    manejarEvento : function(component, event, helper) {
        var pointsToAdd = event.getParam("molePoint");
        var marcador = component.get("v.marcador");
        if (pointsToAdd == 0) {
            marcador = 0;
        }else{
            marcador += pointsToAdd;
        }
        component.set('v.marcador', marcador);// Es obligatorio volver a mandar la variable marcador a la vista
    },
    guardarScore : function(component, event, helper) {
        var insertScoreApex = component.get("c.insertScore");

        insertScoreApex.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Score guardado");
            }else{
                console.log("Error: " + state);
            }
        });
        insertScoreApex.setParams({
            "nombre": "marcador",
            "puntuacion": component.get("v.marcador")
        });
        $A.enqueueAction(insertScoreApex);
    }
})
