
class MoneyTransferPage {


    getInputIBAN() {
        return cy.get ('#mat-input-3').click();
    }

    getBeneficiaryName() {
        return cy.get ('#mat-input-4').click();
    }

    selectCountry() {
        cy.get ('#mat-input-9').click();
        return cy.get ('#mat-option-10 > .mat-option-text').click();
    }

    getInputCity() {
        return cy.get ('#mat-input-5');
    }

    getInputRecipientAdress() {
        return cy.get ('#mat-input-6');
    }

    getInputBICcode() {
        return cy.get ('#mat-input-7');
    }

    getInputBeneficiaryBank() {
        return cy.get ('#mat-input-10');
    }

    getInputPurposePayment() {
        return cy.get ('#mat-input-8');
    }

    getCheckboxPaymentNotCommercial() {
        return cy.get ('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container');
    }

    getInputAmountToTransfer() {
        return cy.get ('#mat-input-2').click();
    }

    getFieldAmountToBeCharged() {
        return cy.get ('.transfer-item__view');
    }

    getButtonProceed() {
        return cy.get ('form.ng-star-inserted > .py-4 > .mat-focus-indicator > .mat-button-wrapper');
    }

    getButtonConfirmTransfer() {
        return cy.get ('.step-preview > .py-4 > .mat-focus-indicator > .mat-button-wrapper');
    }
}

export default new MoneyTransferPage();