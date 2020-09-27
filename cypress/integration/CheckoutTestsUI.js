import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import restPage from "../elements/RestPage";
import paymentPage from "../elements/PaymentPage";
import transactionsPage from "../elements/TransactionsPage";
import feenPage from "../elements/FeenPage";
import card from "../fixtures/card.json"
import checkout from "../fixtures/checkout.json"

cy.getRandomArbitrary = function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
};

describe('Checkout suit UI', () => {

    describe('Checkouts', () => {

        beforeEach ('', () => {
            feenPage.setCommissionsAndStrategy();
            loginPage.visit('/');
            loginPage.getAuthorization();
        });

        // 1.Самый простой кейс. Цена товара совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
        // и валютами провайдера. Цена товара в GBP
        it('Checkout, product currency GBP', () => {

            let payAmount = cy.getRandomArbitrary(300, 500);
            //let payAmount = 400;
            let payCurrency = 'GBP';

            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getCheckUrl();
            homePage.getMenuProjects().click();
            cy.wait(2000);
            homePage.getSubMenuRest().click();

            restPage.getInputOrderID().type('C1GBP');
            restPage.getInputOrderAmount().type(payAmount);
            restPage.getInputOrderCurrency().type(payCurrency);
            restPage.getInputOrderDescription().type('case1');
            restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
            restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
            restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
            restPage.getButtonGenerateConfig().click();
            restPage.getButtonShowPaymentPage().click();
            cy.wait(2000);

            paymentPage.getInputCardNumber().type(card.card_number);
            paymentPage.getInputExpirationDate().type(card.expiration_date);
            paymentPage.getInputCVC().type(card.CVC);
            paymentPage.getInputCartdholderName().type(card.cardholder);
            paymentPage.getButtonPay().click();
            cy.wait(2000);

            loginPage.visit('/');
            cy.wait(3000);
            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getMenuPaymentHistory().click();
            transactionsPage.checkAmountUIGBP(payAmount);
        });

        // 2.Простой кейс. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
        // и валютами провайдера. Цена товара в USD или EUR или RUB
        it('Checkout, product currency USD or EUR or RUB', () => {

            let payAmount = cy.getRandomArbitrary(300, 500);
            //let payAmount = 400;

            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getCheckUrl();
            homePage.getMenuProjects().click();
            cy.wait(2000);
            homePage.getSubMenuRest().click();

            restPage.getInputOrderID().type("C2" +checkout.product_currency_c2);
            restPage.getInputOrderAmount().type(payAmount);
            restPage.getInputOrderCurrency().type(checkout.product_currency_c2);
            restPage.getInputOrderDescription().type('case2');
            restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
            restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
            restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
            restPage.getButtonGenerateConfig().click();
            restPage.getButtonShowPaymentPage().click();
            cy.wait(3000);

            paymentPage.getInputCardNumber().type(card.card_number);
            paymentPage.getInputExpirationDate().type(card.expiration_date);
            paymentPage.getInputCVC().type(card.CVC);
            paymentPage.getInputCartdholderName().type(card.cardholder);
            paymentPage.getButtonPay().click();
            cy.wait(2000);

            loginPage.visit('/');
            cy.wait(3000);
            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getMenuPaymentHistory().click();
            transactionsPage.checkAmountUIUSD(payAmount);
        });

        // 3.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
        // основная валюта мерчанта совпадает с валютой оплаты, Стратегия комиссии - ALL. Цена товара в UAH
        it('Checkout, product currency is not USD, GBP, EUR, RUB', () => {

            let payAmount = cy.getRandomArbitrary(300, 500);
            //let payAmount = 366.31;

            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getCheckUrl();
            homePage.getMenuProjects().click();
            cy.wait(2000);
            homePage.getSubMenuRest().click();

            restPage.getInputOrderID().type("C3"+checkout.product_currency_c3);
            restPage.getInputOrderAmount().type(payAmount);
            restPage.getInputOrderCurrency().type(checkout.product_currency_c3);
            restPage.getInputOrderDescription().type('case3');
            restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
            restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
            restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
            restPage.getButtonGenerateConfig().click();
            restPage.getButtonShowPaymentPage().click();
            cy.wait(3000);

            paymentPage.getInputCardNumber().type(card.card_number);
            paymentPage.getInputExpirationDate().type(card.expiration_date);
            paymentPage.getInputCVC().type(card.CVC);
            paymentPage.getInputCartdholderName().type(card.cardholder);
            paymentPage.getButtonPay().click();
            cy.wait(2000);

            loginPage.visit('/');
            cy.wait(3000);
            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getMenuPaymentHistory().click();
            transactionsPage.checkAmountUIUAH(payAmount);
        });

        // 4.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
        // основная валюта мерчанта не совпадает с валютой оплаты. Цена товара в CUP
        it.only('Checkout, product currency is not USD, GBP, EUR, RUB, the main currency does not match the payment currency ', () => {

            let payAmount = cy.getRandomArbitrary(500, 1500);
            //let payAmount = 419.94;

            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getCheckUrl();
            homePage.getMenuProjects().click();
            cy.wait(2000);
            homePage.getSubMenuRest().click();

            restPage.getInputOrderID().type("C4"+checkout.product_currency_c4);
            restPage.getInputOrderAmount().type(payAmount);
            restPage.getInputOrderCurrency().type(checkout.product_currency_c4);
            restPage.getInputOrderDescription().type('case4');
            restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
            restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
            restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
            restPage.getButtonGenerateConfig().click();
            restPage.getButtonShowPaymentPage().click();
            cy.wait(3000);

            paymentPage.SelectPayCurrency();
            paymentPage.getInputCardNumber().type(card.card_number);
            paymentPage.getInputExpirationDate().type(card.expiration_date);
            paymentPage.getInputCVC().type(card.CVC);
            paymentPage.getInputCartdholderName().type(card.cardholder);
            paymentPage.getButtonPay().click();
            cy.wait(2000);

            loginPage.visit('/');
            cy.wait(3000);
            loginPage.getButtonToAdmibPanel().click();
            cy.wait(3000);
            homePage.getMenuPaymentHistory().click();
            transactionsPage.checkAmountUICUP(payAmount);
        })


    })
});

