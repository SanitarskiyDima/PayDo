import merchant from "../fixtures/merchant"
import checkout from "../fixtures/checkout"

class PaymentPage{

    getInputCardNumber() {
        return cy.get('#mat-input-16');
    }

    getInputExpirationDate() {
        return cy.get('#mat-input-17');
    }

    getInputCVC() {
        return cy.get('#mat-input-18');
    }

    getInputCartdholderName() {
        return cy.get('#mat-input-19');
    }

    getButtonPay() {
        return cy.get('[class="mat-focus-indicator button-simple checkout-pay-button mat-raised-button mat-button-base"]');
    }

    SelectPayCurrency() {
         cy.contains('span', merchant.main_currency).click();
       return cy.contains ('span', checkout.pay_currency).click();
    }
}

export default new PaymentPage();
