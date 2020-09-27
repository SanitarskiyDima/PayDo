import merchant from "../fixtures/merchant";
import feenPage from "../elements/FeenPage";
import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import restPage from "../elements/RestPage";
import paymentPage from "../elements/PaymentPage";
import card from "../fixtures/card";
import transactionsPage from "../elements/TransactionsPage";
import checkout from "../fixtures/checkout";
import createCheckoutPage from "../elements/CreateCheckoutPage";
import ticketsPage from "../elements/TicketsPage";
import ticket from "../fixtures/ticket";

cy.getRandomArbitrary = function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
};


    describe ('UI suit ', () => {

        it('Set main currency', () => {
            homePage.setMainCurrency()
        });

        describe('Checkout with default commissions settings', () => {

            beforeEach('', () => {
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
                cy.wait(5000);
                homePage.getCheckUrl();
                homePage.getMenuProjects().click();
                cy.wait(5000);
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
                cy.wait(5000);

                paymentPage.getInputCardNumber().type(card.card_number);
                paymentPage.getInputExpirationDate().type(card.expiration_date);
                paymentPage.getInputCVC().type(card.CVC);
                paymentPage.getInputCartdholderName().type(card.cardholder);
                paymentPage.getButtonPay().click();
                cy.wait(5000);

                loginPage.visit('/');
                cy.wait(5000);
                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getMenuPaymentHistory().click();
                transactionsPage.checkAmountUIGBP(payAmount);
            });

            // 2.Простой кейс. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
            // и валютами провайдера. Цена товара в USD или EUR или RUB
            it('Checkout, product currency USD or EUR or RUB', () => {

                let payAmount = cy.getRandomArbitrary(300, 500);
                //let payAmount = 400;

                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getCheckUrl();
                homePage.getMenuProjects().click();
                cy.wait(5000);
                homePage.getSubMenuRest().click();

                restPage.getInputOrderID().type("C2" + checkout.product_currency_c2);
                restPage.getInputOrderAmount().type(payAmount);
                restPage.getInputOrderCurrency().type(checkout.product_currency_c2);
                restPage.getInputOrderDescription().type('case2');
                restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                restPage.getButtonGenerateConfig().click();
                restPage.getButtonShowPaymentPage().click();
                cy.wait(5000);

                paymentPage.getInputCardNumber().type(card.card_number);
                paymentPage.getInputExpirationDate().type(card.expiration_date);
                paymentPage.getInputCVC().type(card.CVC);
                paymentPage.getInputCartdholderName().type(card.cardholder);
                paymentPage.getButtonPay().click();
                cy.wait(5000);

                loginPage.visit('/');
                cy.wait(5000);
                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getMenuPaymentHistory().click();
                transactionsPage.checkAmountUIUSD(payAmount);
            });

            // 3.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
            // основная валюта мерчанта совпадает с валютой оплаты, Стратегия комиссии - ALL. Цена товара в UAH
            it('Checkout, product currency is not USD, GBP, EUR, RUB', () => {

                let payAmount = cy.getRandomArbitrary(300, 500);
                //let payAmount = 366.31;

                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getCheckUrl();
                homePage.getMenuProjects().click();
                cy.wait(5000);
                homePage.getSubMenuRest().click();

                restPage.getInputOrderID().type("C3" + checkout.product_currency_c3);
                restPage.getInputOrderAmount().type(payAmount);
                restPage.getInputOrderCurrency().type(checkout.product_currency_c3);
                restPage.getInputOrderDescription().type('case3');
                restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                restPage.getButtonGenerateConfig().click();
                restPage.getButtonShowPaymentPage().click();
                cy.wait(5000);

                paymentPage.getInputCardNumber().type(card.card_number);
                paymentPage.getInputExpirationDate().type(card.expiration_date);
                paymentPage.getInputCVC().type(card.CVC);
                paymentPage.getInputCartdholderName().type(card.cardholder);
                paymentPage.getButtonPay().click();
                cy.wait(5000);

                loginPage.visit('/');
                cy.wait(5000);
                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getMenuPaymentHistory().click();
                transactionsPage.checkAmountUIUAH(payAmount);
            });

            // 4.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
            // основная валюта мерчанта не совпадает с валютой оплаты. Цена товара в CUP
            it('Checkout, product currency is not USD, GBP, EUR, RUB, the main currency does not match the payment currency ', () => {

                let payAmount = cy.getRandomArbitrary(500, 1500);
                //let payAmount = 419.94;

                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getCheckUrl();
                homePage.getMenuProjects().click();
                cy.wait(5000);
                homePage.getSubMenuRest().click();

                restPage.getInputOrderID().type("C4" + checkout.product_currency_c4);
                restPage.getInputOrderAmount().type(payAmount);
                restPage.getInputOrderCurrency().type(checkout.product_currency_c4);
                restPage.getInputOrderDescription().type('case4');
                restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                restPage.getButtonGenerateConfig().click();
                restPage.getButtonShowPaymentPage().click();
                cy.wait(5000);

                paymentPage.SelectPayCurrency();
                paymentPage.getInputCardNumber().type(card.card_number);
                paymentPage.getInputExpirationDate().type(card.expiration_date);
                paymentPage.getInputCVC().type(card.CVC);
                paymentPage.getInputCartdholderName().type(card.cardholder);
                paymentPage.getButtonPay().click();
                cy.wait(5000);

                loginPage.visit('/');
                cy.wait(5000);
                loginPage.getButtonToAdmibPanel().click();
                cy.wait(5000);
                homePage.getMenuPaymentHistory().click();
                transactionsPage.checkAmountUICUP(payAmount);
            });
        });

            describe ('Change strategy', () => {

                it('Change strategy', () => {
                    feenPage.changeComissionsAndStrategy()
                });
            });

                describe('Checkout with new commissions settings', () => {

                beforeEach('', () => {
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
                    cy.wait(5000);
                    homePage.getCheckUrl();
                    homePage.getMenuProjects().click();
                    cy.wait(5000);
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
                    cy.wait(5000);

                    paymentPage.getInputCardNumber().type(card.card_number);
                    paymentPage.getInputExpirationDate().type(card.expiration_date);
                    paymentPage.getInputCVC().type(card.CVC);
                    paymentPage.getInputCartdholderName().type(card.cardholder);
                    paymentPage.getButtonPay().click();
                    cy.wait(5000);

                    loginPage.visit('/');
                    cy.wait(5000);
                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getMenuPaymentHistory().click();
                    transactionsPage.checkAmountUIGBP(payAmount);
                });

                // 2.Простой кейс. Цена товара - совпадает с валютами которые в кабинете мерчанта (USD, EUR, GBP, RUB)
                // и валютами провайдера. Цена товара в USD или EUR или RUB
                it('Checkout, product currency USD or EUR or RUB', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 400;

                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getCheckUrl();
                    homePage.getMenuProjects().click();
                    cy.wait(5000);
                    homePage.getSubMenuRest().click();

                    restPage.getInputOrderID().type("C2" + checkout.product_currency_c2);
                    restPage.getInputOrderAmount().type(payAmount);
                    restPage.getInputOrderCurrency().type(checkout.product_currency_c2);
                    restPage.getInputOrderDescription().type('case2');
                    restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                    restPage.getButtonGenerateConfig().click();
                    restPage.getButtonShowPaymentPage().click();
                    cy.wait(5000);

                    paymentPage.getInputCardNumber().type(card.card_number);
                    paymentPage.getInputExpirationDate().type(card.expiration_date);
                    paymentPage.getInputCVC().type(card.CVC);
                    paymentPage.getInputCartdholderName().type(card.cardholder);
                    paymentPage.getButtonPay().click();
                    cy.wait(5000);

                    loginPage.visit('/');
                    cy.wait(5000);
                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getMenuPaymentHistory().click();
                    transactionsPage.checkAmountUIUSD(payAmount);
                });

                // 3.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта совпадает с валютой оплаты, Стратегия комиссии - ALL. Цена товара в UAH
                it('Checkout, product currency is not USD, GBP, EUR, RUB', () => {

                    let payAmount = cy.getRandomArbitrary(300, 500);
                    //let payAmount = 366.31;

                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getCheckUrl();
                    homePage.getMenuProjects().click();
                    cy.wait(5000);
                    homePage.getSubMenuRest().click();

                    restPage.getInputOrderID().type("C3" + checkout.product_currency_c3);
                    restPage.getInputOrderAmount().type(payAmount);
                    restPage.getInputOrderCurrency().type(checkout.product_currency_c3);
                    restPage.getInputOrderDescription().type('case3');
                    restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                    restPage.getButtonGenerateConfig().click();
                    restPage.getButtonShowPaymentPage().click();
                    cy.wait(5000);

                    paymentPage.getInputCardNumber().type(card.card_number);
                    paymentPage.getInputExpirationDate().type(card.expiration_date);
                    paymentPage.getInputCVC().type(card.CVC);
                    paymentPage.getInputCartdholderName().type(card.cardholder);
                    paymentPage.getButtonPay().click();
                    cy.wait(5000);

                    loginPage.visit('/');
                    cy.wait(5000);
                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getMenuPaymentHistory().click();
                    transactionsPage.checkAmountUIUAH(payAmount);
                });

                // 4.Цена товара - не совпадает с валютами, которые в кабинете мерчанта (USD, EUR, GBP, RUB),
                // основная валюта мерчанта не совпадает с валютой оплаты. Цена товара в CUP
                it('Checkout, product currency is not USD, GBP, EUR, RUB, the main currency does not match the payment currency ', () => {

                    let payAmount = cy.getRandomArbitrary(500, 1500);
                    //let payAmount = 419.94;

                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getCheckUrl();
                    homePage.getMenuProjects().click();
                    cy.wait(5000);
                    homePage.getSubMenuRest().click();

                    restPage.getInputOrderID().type("C4" + checkout.product_currency_c4);
                    restPage.getInputOrderAmount().type(payAmount);
                    restPage.getInputOrderCurrency().type(checkout.product_currency_c4);
                    restPage.getInputOrderDescription().type('case4');
                    restPage.getInputResultUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputFailUrl().type('https://app.stage.paydo.com/');
                    restPage.getInputProductUrl().type('https://app.stage.paydo.com/');
                    restPage.getButtonGenerateConfig().click();
                    restPage.getButtonShowPaymentPage().click();
                    cy.wait(5000);

                    paymentPage.SelectPayCurrency();
                    paymentPage.getInputCardNumber().type(card.card_number);
                    paymentPage.getInputExpirationDate().type(card.expiration_date);
                    paymentPage.getInputCVC().type(card.CVC);
                    paymentPage.getInputCartdholderName().type(card.cardholder);
                    paymentPage.getButtonPay().click();
                    cy.wait(5000);

                    loginPage.visit('/');
                    cy.wait(5000);
                    loginPage.getButtonToAdmibPanel().click();
                    cy.wait(5000);
                    homePage.getMenuPaymentHistory().click();
                    transactionsPage.checkAmountUICUP(payAmount);
                })
                });

                describe('Create refunds', () => {

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
                        transactionsPage.getButtonRefund().click();
                        transactionsPage.confirmRefund().click();
                        transactionsPage.getButtonCreateRefundOk().click();
                        transactionsPage.checkCreateRefund();
                    })
                });

                describe('Create tickets', () => {

                        it('Create ticket on the page merchant', () => {
                            loginPage.visit('/');
                            loginPage.getAuthorization();
                            loginPage.getButtonToAdmibPanel().click();
                            cy.wait(5000);
                            homePage.getCheckUrl();
                            cy.wait(2000);
                            homePage.getMenuTickets().click();
                            ticketsPage.getButtonCreateNewTicket().click();
                            ticketsPage.getInputRequestName().type(ticket.request_name);
                            ticketsPage.selectTopic();
                            ticketsPage.getInputQuestion().type(ticket.question);
                            //ticketsPage.attachFile();
                            ticketsPage.getButtonSendTicket().click();
                            ticketsPage.checkCreateTicket();
                            ticketsPage.closeAllert().click();
                        });

                        it('Create ticket on the Financial panel', () => {
                            loginPage.visit('/');
                            loginPage.getFeenAuthorization();
                            cy.wait(2000);
                            loginPage.getButtonToAdmibPanel().click();
                            cy.wait(3000);
                            homePage.getCheckUrlFin();
                            homePage.getMenuTickets().click();
                            ticketsPage.getButtonCreateNewTicket().click();
                            ticketsPage.getInputMerchantID().type(merchant.bussiness_account);
                            ticketsPage.getInputRequestNameFin().type(ticket.request_name);
                            ticketsPage.selectTopicFin();
                            ticketsPage.getInputQuestion().type(ticket.question);
                            //ticketsPage.getButtonSelectFile().click()
                            ticketsPage.getButtonSendTicket().click();
                            ticketsPage.checkCreateTicketFin();
                            ticketsPage.closeAlertFin().click();
                        });

                        it('Create ticket on the Manager panel', () => {

                            loginPage.visit('/');
                            loginPage.getManagerAuthorization();
                            cy.wait(2000);
                            loginPage.getButtonToAdmibPanel().click();
                            cy.wait(3000);
                            homePage.getCheckUrlMan();
                            homePage.getMenuTickets().click();
                            ticketsPage.getButtonCreateNewTicket().click();
                            ticketsPage.getInputMerchantID().type(merchant.bussiness_account);
                            ticketsPage.getInputRequestNameFin().type(ticket.request_name);
                            ticketsPage.selectTopicFin();
                            ticketsPage.getInputQuestion().type(ticket.question);
                            //ticketsPage.attachFile();
                            ticketsPage.getButtonSendTicket().click();
                            ticketsPage.checkCreateTicketFin();
                            ticketsPage.closeAlertFin().click();
                            })

                });
    });




