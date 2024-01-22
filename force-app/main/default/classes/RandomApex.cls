public with sharing class RandomApex {
    public RandomApex() {

    }

    // Devuelve un numero aleatorio entre 0 y 1
    @AuraEnabled
    public static Double random() {
        return Math.random();
    }
}