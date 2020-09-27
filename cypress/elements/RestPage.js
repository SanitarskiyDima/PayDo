

class RestPage{


    getInputOrderID() {
        return cy.get('#mat-input-6');
    }

    getInputOrderAmount() {
        return cy.get('#mat-input-7');
    }

    getInputOrderCurrency() {
        return cy.get('#mat-input-8');
    }

    getInputOrderDescription() {
        return cy.get('#mat-input-9');
    }


    getInputResultUrl() {
        return cy.get('#mat-input-13');
    }


    getInputFailUrl() {
        return cy.get('#mat-input-14');
    }

    getInputProductUrl() {
        return cy.get('#mat-input-15')
    }

    getButtonGenerateConfig() {
        return cy.contains('span', 'Generate config ')
        //return cy.get('.col-md-12 > .mat-focus-indicator > .mat-button-wrapper');
    }

    getButtonShowPaymentPage() {
        return cy.contains('span', 'Show payment page ')
        //return cy.get('.form-field > .mat-focus-indicator > .mat-button-wrapper');
    }
}


export default new RestPage();