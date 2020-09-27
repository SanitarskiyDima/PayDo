
import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import transactionsPage from "../elements/TransactionsPage";
import createCheckoutPage from "../elements/CreateCheckoutPage"

describe('Refund suit', () => {

    beforeEach('', () => {
        loginPage.visit('/');
        loginPage.getAuthorization();
        createCheckoutPage.getCheckout2API(300);
    });

    // Частичный рефанд на 100 USD, цена товара 300 USD
    it('Partial Refund', () => {
        loginPage.getButtonToAdmibPanel().click();
        cy.wait(2000);
        homePage.getCheckUrl();
        cy.wait(2000);
        homePage.getMenuPaymentHistory().click();
        transactionsPage.getButtonDetails().click();
        transactionsPage.getButtonPartialRefund().click();
        transactionsPage.getInputPartialRefundAmount().type('100');
        transactionsPage.getButtonCreateRefund().click();
        transactionsPage.getButtonCreateRefundOk().click();
        transactionsPage.checkCreateRefund();
    });

    // Полный рефанд, цена товара 300 USD
    it('Full Refund', () => {
        loginPage.getButtonToAdmibPanel().click();
        cy.wait(2000);
        homePage.getCheckUrl();
        cy.wait(2000);
        homePage.getMenuPaymentHistory().click();
        transactionsPage.getButtonDetails().click();
        cy.wait(2000);
        transactionsPage.getButtonRefund().click();
        transactionsPage.confirmRefund().click();
        transactionsPage.getButtonCreateRefundOk().click();
        transactionsPage.checkCreateRefund();
    });


});














