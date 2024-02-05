public with sharing class RandomApex {
    // public RandomApex() {
        // // Add constructor logic here if needed
        // this.shared.Account = new SharedAccount();
    // }

    // Devuelve un numero aleatorio entre 0 y 1
    @AuraEnabled
    public static Double random() {
        return Math.random();
    }
    
    // Devuelve un numero aleatorio entre 0 y 1
    @AuraEnabled
    public static Void insertScore(String nombre, String puntuacion) {
        Account a = new Account(Name=nombre, BillingCity = puntuacion);
        if (Schema.sObjectType.Account.isCreateable()) {
            insert a;
        }
    } 

    // 
    @AuraEnabled
    public static List<Account> getListScores() {
        try {
            // if (Schema.sObjectType.Account.isAccessible()) {
                Account[] accounts = [SELECT Name, BillingCity FROM Account];
            // }
            return accounts;
        } catch (Exception e) {
            return null;
        }
    }
}