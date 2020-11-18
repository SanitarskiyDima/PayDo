import transactionsPage from "../../elements/TransactionsPage";
import createCheckoutPage from "../../elements/CreateCheckoutPage";
import refundPage from "../../elements/RefundPage"

cy.getRandomArbitrary = function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
};

    describe('Refunds', () => {

        // 1. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD,EUR,GBP, RUB) и валютами провайдера, Full refund.
        // Валюта товара - USD, основная валюта мерчанта - USD, валюта ПМ - USD
        it.skip('Full refund', () => {

            let payAmount = cy.getRandomArbitrary(100, 500);

           createCheckoutPage.getCheckout2API(payAmount);
           cy.wait(3000);
           transactionsPage.createFullRefundAndCheckAmount(payAmount);
        });

        //
        it.skip('Partial refund', () => {
           let payAmount =cy.getRandomArbitrary(100, 500);

           createCheckoutPage.getCheckout2API(payAmount);
           cy.wait(3000);
           transactionsPage.createPartialRefundAndCheckAmount(payAmount);
        });

        afterEach(() => {
            refundPage.rejectRefund();
        })

})