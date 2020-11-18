
import feenPage from "../../elements/FeenPage";
import transactionsPage from "../../elements/TransactionsPage";
import createCheckoutPage from "../../elements/CreateCheckoutPage"
import homepage from "../../elements/HomePage";

cy.getRandomArbitrary = function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
};

    describe('Set main currency', () => {

        it('Set main currency', () => {
            homepage.setMainCurrency();
        });
    });

        describe('Checkout suit API', () => {

            describe('Checkouts API Tests', () => {

                // 1.Самый простой кейс. Цена товара совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
                // и валютами провайдера. Цена товара в GBP
                it.skip('Checkout, product currency GBP', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 470.22;
                    let payCurrency = 'GBP';

                    createCheckoutPage.getCheckoutGBPAPI(payAmount, payCurrency);

                    transactionsPage.checkAmountAPIGBP(payAmount);
                });

                // 2.Простой кейс. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
                // и валютами провайдера. Цена товара в USD или EUR или RUB
                it.skip('Checkout, product currency USD', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 474.24;

                    createCheckoutPage.getCheckout2API(payAmount);

                    transactionsPage.checkAmountAPIUSD(payAmount);
                });

                // 3.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта совпадает с валютой оплаты. Цена товара в ALL
                it.skip('Checkout, product currency is not USD, GBP, EUR, RUB', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 426.62;

                    createCheckoutPage.getCheckout3API(payAmount);

                    transactionsPage.checkAmountAPIALL(payAmount);
                });

                // 4.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта не совпадает с валютой оплаты. Цена товара в CUP
                it.skip('Checkout, product currency is not USD, GBP, EUR, RUB, the main currency does not match the payment currency ', () => {

                    let payAmount = cy.getRandomArbitrary(1000, 1500);
                    //let payAmount = 1336.76;

                    createCheckoutPage.getCheckout4API(payAmount);

                    transactionsPage.checkAmountAPICUP(payAmount);
                })
            });

            describe('Change strategy', () => {

                it.skip('Change strategy', () => {
                    feenPage.changeCommissionsAndStrategy()
                })
            });

            describe('Checkouts API Tests after change strategy', () => {

                // 1.Самый простой кейс. Цена товара совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
                // и валютами провайдера. Цена товара в GBP
                it.skip('Checkout, product currency GBP', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 368.75;
                    let payCurrency = 'GBP';

                    createCheckoutPage.getCheckoutGBPAPI(payAmount, payCurrency);

                    transactionsPage.checkAmountAPIGBP(payAmount);
                });

                // 2.Простой кейс. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
                // и валютами провайдера. Цена товара в USD или EUR или RUB
                it.skip('Checkout, product currency USD', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 474.24;

                    createCheckoutPage.getCheckout2API(payAmount);

                    transactionsPage.checkAmountAPIUSD(payAmount);
                });

                // 3.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта совпадает с валютой оплаты. Цена товара в ALL
                it.skip('Checkout, product currency is not USD, GBP, EUR, RUB', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 423.21;

                    createCheckoutPage.getCheckout3API(payAmount);

                    transactionsPage.checkAmountAPIALL(payAmount);
                });

                // 4.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта не совпадает с валютой оплаты. Цена товара в CUP
                it.skip('Checkout, product currency is not USD, GBP, EUR, RUB, the main currency does not match the payment currency ', () => {

                    let payAmount = cy.getRandomArbitrary(1000, 1500);
                    // let payAmount = 419.94;

                    createCheckoutPage.getCheckout4API(payAmount);

                    transactionsPage.checkAmountAPICUP(payAmount);
                })
            });

        });
