import loginPage from "../../elements/LoginPage";
import createCheckoutPage from "../../elements/CreateCheckoutPage";
import homePage from "../../elements/HomePage";
import transactionsPage from "../../elements/TransactionsPage";
import merchant from "../../fixtures/merchant";

describe('Chargeback suit', () => {

    beforeEach('', () => {
        createCheckoutPage.getCheckout2API(300);
        loginPage.visit('/');
        loginPage.getFeenAuthorization();
    });

    it.skip('Create Chargeback', () => {
        loginPage.getButtonToAdminPanel().click();
        cy.wait(2000);
        homePage.getMenuPaymentHistory().click();
        transactionsPage.getButtonFilter().click();
        transactionsPage.getInputMerchantID().type(merchant.bussiness_account+'{enter}');
        transactionsPage.getButtonChargebackCreate().click({force:true});
        transactionsPage.confirmChargeback();
        transactionsPage.checkCreateChargeback();
        transactionsPage.closeAlert();

    })

});
