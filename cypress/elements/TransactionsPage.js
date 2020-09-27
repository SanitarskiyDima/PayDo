import merchant from "../fixtures/merchant.json"
import feen from "../fixtures/feen.json"
import checkout from "../fixtures/checkout.json"
import paymentMethod from "../fixtures/paymentMethod.json"

class TransactionsPage {


    getAmountTransaction() {
        const amount = cy.get('[class="bold price-align"]').first();
    }

    checkAmountUIGBP(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value.GBP[0];
            let perscom = response.body.data[7].value.GBP[1];
            let strateg = response.body.data[7].strategy;

            cy.wait(3000);

            //Check status tranzaction
            cy.get('[class="mat-chip mat-focus-indicator mat-primary mat-standard-chip status_2"]').eq(0).invoke('text').should((text) => {
                expect(text).to.eq(' Accepted ')
            });

            //Сalculation formula & Check Amount

            if (strateg === 1) {

                // суммируем фиксированную комиссию с процентом комиссии
                let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                // отнимаем сумму комисий от стоимости товара
                let rezult = (payAmount - sumcom).toFixed(2);

                cy.log("стратегия комиссий =" + " " + strateg);
                cy.log("цена товара =" + " " + payAmount);
                cy.log("сумма комиссий =" + " " + sumcom);

                // Check Amount
                cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                    expect(text).to.eq((+rezult).toFixed(2) + ' ' + 'GBP')
                })
            } else {
                if (fixcom > (+payAmount / 100 * +perscom)) {

                    // отнимаем фиксированную комиссию от стоимости товара
                    let rezult = (payAmount - fixcom).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount);
                    cy.log("фиксированная комиссия =" + " " + (+fixcom).toFixed(2));

                    // Check Amount
                    cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                        expect(text).to.eq((+rezult).toFixed(2) + ' ' + 'GBP')
                    })
                } else {
                    // отнимаем процент комиссии от стоимости товара
                    let rezult = (payAmount - (+payAmount / 100 * +perscom)).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount);
                    cy.log("процент комиссии =" + " " + (payAmount / 100 * perscom).toFixed(2));

                    // Check Amount
                    cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                        expect(text).to.eq((+rezult).toFixed(2) + ' ' + 'GBP')
                    })
                }
            }
        })
    }


    checkAmountUIUSD(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c2][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c2][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(3000);

            //Check status tranzaction
            cy.get('[class="mat-chip mat-focus-indicator mat-primary mat-standard-chip status_2"]').eq(0).invoke('text').should((text) => {
                expect(text).to.eq(' Accepted ')
            });

            // Сalculation formula & Check Amount

            // процент за конвертацию в GBP
            let exchcom = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

            if (strateg === 1) {

                // суммируем фиксированную комиссию, процент комиссии и процент за конвертацию
                let sumcom = (+fixcom + (+payAmount / 100 * +perscom) + +exchcom).toFixed(2);

                // отнимаем сумму комисий от стоимости товара
                let rezult = (payAmount - sumcom).toFixed(2);

                cy.log("стратегия комиссий =" + " " + strateg);
                cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                cy.log("сумма комиссий =" + " " + sumcom);

                // Check Amount
                cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                    expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                })
            } else {
                if (fixcom > (+payAmount / 100 * +perscom)) {

                    // суммируем фиксированную комиссию и процент за конвертацию
                    let sumcom = (+fixcom + +exchcom).toFixed(2);

                    // отнимаем сумму комиссий от стоимости товара
                    let rezult = (payAmount - sumcom).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                    cy.log("фиксированная комиссия =" + " " + (+fixcom).toFixed(2));

                    // Check Amount
                    cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                        expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                    })
                } else {

                    // суммируем процент комиссии и процент за конвертацию
                    let sumcom = ((+payAmount / 100 * +perscom) + +exchcom).toFixed(2);

                    // отнимаем сумму комиссий от стоимости товара
                    let rezult = (payAmount - sumcom).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                    cy.log("процент комиссии =" + " " + (payAmount / 100 * perscom).toFixed(2));

                    // Check Amount
                    cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                        expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                    })
                }
            }
        })
    }

    checkAmountUIUAH(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c3][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c3][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.get('[class="mat-chip mat-focus-indicator mat-primary mat-standard-chip status_2"]').eq(0).invoke('text').should((text) => {
                expect(text).to.eq(' Accepted ')
            });

            // Сalculation formula & Check Amount

            // Get the rate from  product currency to main currency
            cy.request({
                method: 'GET',
                url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.product_currency_c3 + "&to=" + merchant.main_currency + "&amount=1",
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                let rate = response.body.info.rate;

                if (strateg === 1) {

                    // сумма комиссий
                    let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                    // комиссия за конвертацию с UAH в основную валюту мерчанта
                    let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                    // комиссия за конвертацию цены товара с основной валюты в GBP
                    //let exch2 = ((payAmount * 0.036512990427426) / 100 * +checkout.exchange_percentage).toFixed(2)
                    let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);

                    // отнимаем от стоимости товара сумму комисий и комиссию за конвертацию с UAH
                    let net = (payAmount - sumcom - exch).toFixed(2);

                    // конвертируем результат в основную валюту мерчанта
                    //let conv = (net * 0.036512990427426).toFixed(2)
                    let conv = (net * +rate).toFixed(2);

                    // комиссия за конвертацию
                    let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                    // отнимаем комиссии за конвертацию
                    let rezult = (conv - comconv - exch2).toFixed(2);

                    cy.log("рейт обмена в основную валюту  =" + " " + rate);
                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                    cy.log("сумма комиссий =" + " " + sumcom);
                    cy.log("комиссия за конвертацию валюты товара в основную валюту =" + " " + exch);
                    cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                    cy.log("комиссия за конвертацию цены без комиссий в основную валюту мерчанта =" + " " + comconv);

                    // Check Amount
                    cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                        expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                    })

                } else {
                    if (fixcom > (+payAmount / 100 * +perscom)) {

                        // комиссия за конвертацию с UAH в основную валюту мерчанта
                        let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                        // комиссия за конвертацию цены товара с основной валюты в GBP
                        //let exch2 = ((payAmount * 0.036512990427426) / 100 * +checkout.exchange_percentage).toFixed(2)
                        let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);

                        // суммируем фиксированную комиссию и комиссию за конвертацию с UAH в основную валюту мерчанта
                        let sumcom = (+fixcom + +exch).toFixed(2);

                        // отнимаем от стоимости товара сумму комиссий
                        let net = (payAmount - sumcom).toFixed(2);

                        // конвертируем результат в основную валюту мерчанта
                        //let conv = (net * 0.036512990427426).toFixed(2)
                        let conv = (net * +rate).toFixed(2);

                        // комиссия за конвертацию
                        let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                        // отнимаем комиссии за конвертацию
                        let rezult = (conv - comconv - exch2).toFixed(2);

                        cy.log("рейт обмена в основную валюту  =" + " " + rate);
                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                        cy.log("фиксированная комиссия =" + " " + (+fixcom).toFixed(2));
                        cy.log("комиссия за конвертацию валюты товара в основную валюту =" + " " + exch);
                        cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                        cy.log("комиссия за конвертацию цены без комиссий в основную валюту мерчанта =" + " " + comconv);

                        // Check Amount
                        cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                            expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                        })

                    } else {

                        // комиссия за конвертацию с UAH в основную валюту мерчанта
                        let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                        // комиссия за конвертацию цены товара с основной валюты в GBP
                        //let exch2 = ((payAmount * 0.036512990427426) / 100 * +checkout.exchange_percentage).toFixed(2)
                        let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);

                        // суммируем процент комиссии и комиссию за конвертацию с UAH в основную валюту мерчанта
                        let sumcom = ((+payAmount / 100 * +perscom) + +exch).toFixed(2);

                        // отнимаем от стоимости товара сумму комиссий
                        let net = (payAmount - sumcom).toFixed(2);

                        // конвертируем результат в основную валюту мерчанта
                        //let conv = (net * 0.036512990427426).toFixed(2)
                        let conv = (net * +rate).toFixed(2);

                        // комиссия за конвертацию
                        let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                        // отнимаем комиссии за конвертацию
                        let rezult = (conv - comconv - exch2).toFixed(2);

                        cy.log("рейт обмена в основную валюту  =" + " " + rate);
                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                        cy.log("процент комиссии =" + " " + (payAmount / 100 * perscom).toFixed(2));
                        cy.log("комиссия за конвертацию валюты товара в основную валюту =" + " " + exch);
                        cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                        cy.log("комиссия за конвертацию цены без комиссий в основную валюту мерчанта =" + " " + comconv);

                        // Check Amount
                        cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                            expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                        })
                    }
                }
            })
        })
    }

    checkAmountAPIGBP(payAmount) {

        //Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value.GBP[0];
            let perscom = response.body.data[7].value.GBP[1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.request({
                method: 'GET',
                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                headers: {
                    token: merchant.token
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                let status = response.body.data[0].state;
                expect(status).to.eq(2);

                //Сalculation formula & Check Amount

                if (strateg === 1) {

                    // суммируем фиксированную комиссию и процент комиссии
                    let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                    // отнимаем от стоимости товара сумму комисий
                    let rezult = (+payAmount - sumcom).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount);
                    cy.log("сумма комиссий =" + " " + sumcom);

                    // Check Amount
                    cy.request({
                        method: 'GET',
                        url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                        headers: {
                            token: merchant.token
                        }
                    }).then((response) => {
                        expect(response).property('status').to.equal(200);
                        expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                        let sum = response.body.data[0].amount;
                        expect(sum).to.eq((+rezult).toFixed(2)).toString()
                    })
                } else {
                    if (fixcom > (+payAmount / 100 * +perscom)) {

                        // отнимаем от стоимости товара фиксированную комиссию
                        let rezult = (payAmount - fixcom).toFixed(2);

                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount);
                        cy.log("фиксированная комиссия =" + " " + fixcom);

                        // Check Amount
                        cy.request({
                            method: 'GET',
                            url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                            headers: {
                                token: merchant.token
                            }
                        }).then((response) => {
                            expect(response).property('status').to.equal(200);
                            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                            let sum = response.body.data[0].amount;
                            expect(sum).to.eq((+rezult).toFixed(2)).toString()
                        })
                    } else {
                        // отнимаем от стоимости товара процент комиссии
                        let rezult = (payAmount - (+payAmount / 100 * +perscom)).toFixed(2);

                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount);
                        cy.log("процент комиссии =" + " " + (+payAmount / 100 * +perscom).toFixed(2));

                        // Check Amount
                        cy.request({
                            method: 'GET',
                            url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                            headers: {
                                token: merchant.token
                            }
                        }).then((response) => {
                            expect(response).property('status').to.equal(200);
                            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                            let sum = response.body.data[0].amount;
                            expect(sum).to.eq((+rezult).toFixed(2)).toString()
                        })
                    }
                }
            })
        })
    }


    checkAmountAPIUSD(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c2][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c2][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.request({
                method: 'GET',
                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                headers: {
                    token: merchant.token
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                let status = response.body.data[0].state;
                expect(status).to.eq(2);

                // Сalculation formula & Check Amount

                // процент за конвертацию цены товара в GBP
                let exchcom = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                if (strateg === 1) {

                    // суммируем фиксированную комиссию и процент комиссии
                    let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                    // отнимаем от стоимости товара сумму комисий и процент за конвертацию в GBP
                    let rezult = (payAmount - sumcom - exchcom).toFixed(2);

                    cy.log("стратегия комиссий =" + " " + strateg);
                    cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                    cy.log("сумма комиссий =" + " " + sumcom);
                    cy.log("процент за конвертацию =" + " " + exchcom);

                    // Check Amount
                    cy.request({
                        method: 'GET',
                        url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                        headers: {
                            token: merchant.token
                        }
                    }).then((response) => {
                        expect(response).property('status').to.equal(200);
                        expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                        let sum = response.body.data[0].amount;
                        expect(sum).to.eq(rezult)
                    })
                } else {
                    if (fixcom > (+payAmount / 100 * +perscom)) {

                        // отнимаем от стоимости товара фиксированную комиссию и процент за конвертацию в GBP
                        let rezult = (+payAmount - fixcom - exchcom).toFixed(2);

                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                        cy.log("фиксированная комиссия =" + " " + fixcom);
                        cy.log("процент за конвертацию =" + " " + exchcom);

                        // Check Amount
                        cy.request({
                            method: 'GET',
                            url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                            headers: {
                                token: merchant.token
                            }
                        }).then((response) => {
                            expect(response).property('status').to.equal(200);
                            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                            let sum = response.body.data[0].amount;
                            expect(sum).to.eq(rezult)
                        })
                    } else {

                        // отнимаем от стоимости товара процент комиссии и процент за конвертацию в GBP
                        let rezult = (payAmount - (+payAmount / 100 * +perscom) - exchcom).toFixed(2);

                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c2);
                        cy.log("процент комиссии =" + " " + (+payAmount / 100 * +perscom).toFixed(2));
                        cy.log("процент за конвертацию =" + " " + exchcom);

                        // Check Amount
                        cy.request({
                            method: 'GET',
                            url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                            headers: {
                                token: merchant.token
                            }
                        }).then((response) => {
                            expect(response).property('status').to.equal(200);
                            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                            let sum = response.body.data[0].amount;
                            expect(sum).to.eq(rezult)
                        })
                    }
                }
            })
        })
    }

    checkAmountAPIUAH(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c3][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c3][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.request({
                method: 'GET',
                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                headers: {
                    token: merchant.token
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                let status = response.body.data[0].state;
                expect(status).to.eq(2);

                // Сalculation formula & Check Amount

                // Get the rate from product currency to main currency
                cy.request({
                    method: 'GET',
                    url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.product_currency_c3 + "&to=" + merchant.main_currency + "&amount=1",
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    let rate = response.body.info.rate;

                    // комиссия за конвертацию цены товара в основную валюту мерчанта
                    let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                    // комиссия за конвертацию цены товара с основной валюты в GBP
                    //let exch2 = ((payAmount * 0.036512990427426) / 100 * +checkout.exchange_percentage).toFixed(2)
                    let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);

                    if (strateg === 1) {

                        // суммируем фиксированную комиссию и процент комиссии
                        let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                        // отнимаем от стоимости товара сумму комисий и комиссию за конвертацию в основную валюту
                        let net = (payAmount - sumcom - exch).toFixed(2);

                        // конвертируем результат в основную валюту мерчанта
                        //let conv = (net * 0.036512990427426).toFixed(2)
                        let conv = (net * +rate).toFixed(2);

                        // комиссия за конвертацию результата в основную валюту
                        let comconv = (+conv / 100 * +checkout.exchange_percentage).toFixed(2);

                        // отнимаем комиссию за конвертацию результата и комиссию за конвертацию цены товара из основной валюты в GBP
                        let rezult = (conv - comconv - exch2).toFixed(2);

                        cy.log("рейт с "+checkout.product_currency_c3+" в "+merchant.main_currency+" = "+rate);
                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                        cy.log("сумма комиссий =" + " " + sumcom);
                        cy.log("комиссия за конвертацию цены товара в основную валюту =" + " " + exch);
                        cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                        cy.log("комиссия за конвертацию цены без комиссий в основную валюту мерчанта =" + " " + comconv);

                        // Check Amount
                        cy.request({
                            method: 'GET',
                            url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                            headers: {
                                token: merchant.token
                            }
                        }).then((response) => {
                            expect(response).property('status').to.equal(200);
                            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                            let sum = response.body.data[0].amount;
                            expect(sum).to.eq(rezult)
                        })

                    } else {
                        if (fixcom > (+payAmount / 100 * +perscom)) {

                            // отнимаем от стоимости товара фиксированную комиссию и комиссию за конвертацию цены товара в основную валюту
                            let net = (payAmount - fixcom - exch).toFixed(2);

                            // конвертируем результат в основную валюту мерчанта
                            //let conv = (net * 0.036512990427426).toFixed(2)
                            let conv = (net * +rate).toFixed(2);

                            // комиссия за конвертацию результата в основную валюту
                            let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию результата и комиссию за конвертацию из основной валюты в GBP
                            let rezult = (conv - comconv - exch2).toFixed(2);

                            cy.log("рейт с "+checkout.product_currency_c3+" в "+merchant.main_currency+" = "+rate);
                            cy.log("стратегия комиссий =" + " " + strateg);
                            cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                            cy.log("фиксированная комиссия =" + " " + fixcom);
                            cy.log("комиссия за конвертацию цены товара в основную валюту =" + " " + exch);
                            cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                            cy.log("комиссия за конвертацию цены без комиссий в основную валюту =" + " " + comconv);

                            // Check Amount
                            cy.request({
                                method: 'GET',
                                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                                headers: {
                                    token: merchant.token
                                }
                            }).then((response) => {
                                expect(response).property('status').to.equal(200);
                                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                                let sum = response.body.data[0].amount;
                                expect(sum).to.eq(rezult)
                            })

                        } else {

                            // отнимаем от стоимости товара процент комиссии и комиссию за конвертацию цены товара в основную валюту
                            let net = (payAmount - (+payAmount / 100 * +perscom) - exch).toFixed(2);

                            // конвертируем результат в основную валюту мерчанта
                            //let conv = (net * 0.036441447467412).toFixed(2)
                            let conv = (net * +rate).toFixed(2);

                            // комиссия за конвертацию результата в основную валюту
                            let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию результата и комиссию за конвертацию из основной валюты в GBP
                            let rezult = (conv - comconv - exch2).toFixed(2);

                            cy.log("рейт c "+checkout.product_currency_c3+" в "+merchant.main_currency+" = "+rate);
                            cy.log("стратегия комиссий =" + " " + strateg);
                            cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                            cy.log("процент комиссии =" + " " + (+payAmount / 100 * +perscom).toFixed(2));
                            cy.log("комиссия за конвертацию цены товара в основную валюту =" + " " + exch);
                            cy.log("комиссия за конвертацию с основной валюты в валюту провайдера =" + " " + exch2);
                            cy.log("комиссия за конвертацию цены без комиссий в основную валюту мерчанта =" + " " + comconv);

                            // Check Amount
                            cy.request({
                                method: 'GET',
                                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                                headers: {
                                    token: merchant.token
                                }
                            }).then((response) => {
                                expect(response).property('status').to.equal(200);
                                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                                let sum = response.body.data[0].amount;
                                expect(sum).to.eq(rezult)
                            })
                        }
                    }
                })
            })
        })
    }

    checkAmountAPICUP(payAmount) {

        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c4][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c4][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.request({
                method: 'GET',
                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                headers: {
                    token: merchant.token
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                let status = response.body.data[0].state;
                expect(status).to.eq(2);

                // Сalculation formula & Check Amount

                // Get rate from product currency to pay currency
                cy.request({
                    method: 'GET',
                    url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.product_currency_c4 + "&to="
                        + checkout.pay_currency + "&amount=1",
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    let rate = response.body.info.rate;

                    // Get rate from pay currency to main currency
                    cy.request({
                        method: 'GET',
                        url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.pay_currency + "&to="
                            + merchant.main_currency + "&amount=1",
                    }).then((response) => {
                        expect(response).property('status').to.equal(200);
                        let rate2 = response.body.info.rate;

                        // комиссия за конвертацию цены товара в валюту оплаты
                        let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                        // комиссия за конвертацию с валюты оплаты в GBP
                        //let exch2 = (((payAmount * 0.031927358873092).toFixed(2)) / 100 * +checkout.exchange_percentage).toFixed(2)
                        let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);


                        if (strateg === 1) {

                            // суммируем фиксированную комиссию и процент комиссии
                            let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                            // отнимаем от стоимости товара сумму комисий и комиссию за конвертацию цены товара в валюту оплаты
                            let net = (payAmount - sumcom - exch).toFixed(2);

                            // конвертируем результат в валюту оплаты
                            //let conv = (+net * 0.031927358873092).toFixed(2)
                            let conv = (+net * +rate).toFixed(2);

                            // комиссия за конвертацию результата в валюту оплаты
                            let comconv = (+conv / 100 * +checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию результата в валюту оплаты
                            let min = (+conv - comconv).toFixed(2);

                            // конвертируем в основную валюту мерчанта
                            let conv2 = (+min * +rate2).toFixed(2);
                            //let conv2 = (+min * 1.1819283160476).toFixed(2)

                            // комиссия за конвертацию в основную валюту мерчанта
                            let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию в основную валюту
                            let min2 = (conv2 - comconv2).toFixed(2);

                            // конвертируем комиссия за конвертацию с валюты оплаты в GBP в основную валюту мерчанта
                            let conv3 = (exch2 * rate2).toFixed(2);
                            //let conv3 = (exch2 * 1.1819283160476).toFixed(2)

                            // отнимаем конвертированную комиссию
                            let rezult = (min2 - conv3).toFixed(2);

                            cy.log("рейт c "+checkout.product_currency_c3+" в "+checkout.pay_currency+" = "+rate);
                            cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                            cy.log("стратегия комиссий =" + " " + strateg);
                            cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                            cy.log("сумма комиссий =" + " " + sumcom);
                            cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                            cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                            cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                            cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                            // Check Amount
                            cy.request({
                                method: 'GET',
                                url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                                headers: {
                                    token: merchant.token
                                }
                            }).then((response) => {
                                expect(response).property('status').to.equal(200);
                                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                                let sum = response.body.data[0].amount;
                                expect(sum).to.eq(rezult)
                            })
                        } else {
                            if (fixcom > (+payAmount / 100 * +perscom)) {

                                // отнимаем от стоимости товара фиксированную комиссию и комиссию за конвертацию валюты товара  в валюту оплаты
                                let net = (payAmount - fixcom - exch).toFixed(2);

                                // конвертируем результат в основную валюту мерчанта
                                let conv = (net * 0.031927358873092).toFixed(2);
                                //let conv = (net * +rate).toFixed(2)

                                // комиссия за конвертацию
                                let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                                // отнимаем комиссию за конвертацию результата в валюту оплаты
                                let min = (conv - comconv).toFixed(2);

                                // конвертируем в основную валюту мерчанта
                                //let conv2 = (+min * +rate2).toFixed(2)
                                let conv2 = (+min * 1.1819283160476).toFixed(2);

                                // комиссия за конвертацию в основную валюту мерчанта
                                let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                                // отнимаем комиссию за конвертацию
                                let min2 = (conv2 - (conv2 / 100 * checkout.exchange_percentage)).toFixed(2);

                                // конвертируем комиссию за второй обмен в основную валюту мерчанта
                                //let conv3 = (exch2 * rate2).toFixed(2)
                                let conv3 = (exch2 * 1.1819283160476).toFixed(2);

                                let rezult = (min2 - conv3).toFixed(2);

                                cy.log("рейт c "+checkout.product_currency_c3+" в "+checkout.pay_currency+" = "+rate);
                                cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                                cy.log("стратегия комиссий =" + " " + strateg);
                                cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c4);
                                cy.log("фиксированная комиссия =" + " " + (+fixcom).toFixed(2));
                                cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                                cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                                cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                                cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                                // Check Amount
                                cy.request({
                                    method: 'GET',
                                    url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                                    headers: {
                                        token: merchant.token
                                    }
                                }).then((response) => {
                                    expect(response).property('status').to.equal(200);
                                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                                    let sum = response.body.data[0].amount;
                                    expect(sum).to.eq(rezult)
                                })
                            } else {

                                // отнимаем от стоимости товара процент комиссии и комиссию за конвертацию цены товара в валюту оплаты
                                let net = (payAmount - (payAmount / 100 * perscom) - exch).toFixed(2);

                                // конвертируем результат в валюту оплаты
                                //let conv = (net * 0.031927358873092).toFixed(2)
                                let conv = (net * +rate).toFixed(2);

                                // комиссия за конвертацию результата в валюту оплаты
                                let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                                // отнимаем комиссии за конвертацию результата в валюту оплаты
                                let min = (conv - comconv).toFixed(2);

                                // конвертируем в основную валюту мерчанта
                                let conv2 = (+min * +rate2).toFixed(2);
                                //let conv2 = (+min * 1.1819283160476).toFixed(2)

                                // комиссия за конвертацию в основную валюту мерчанта
                                let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                                // отнимаем комиссию за конвертацию в основную валюту
                                let min2 = (conv2 - (conv2 / 100 * checkout.exchange_percentage)).toFixed(2);

                                // конвертируем комиссию конвертации с валюты оплаты в GBP
                                let conv3 = (exch2 * rate2).toFixed(2);
                                //let conv3 = (exch2 * 1.1819283160476).toFixed(2)

                                // отнимаем комиссию за конвертацию
                                let rezult = (min2 - conv3).toFixed(2);

                                cy.log("рейт c "+checkout.product_currency_c3+" в "+checkout.pay_currency+" = "+rate);
                                cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                                cy.log("стратегия комиссий =" + " " + strateg);
                                cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c3);
                                cy.log("процент комиссии =" + " " + (+payAmount / 100 * perscom).toFixed(2));
                                cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                                cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                                cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                                cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                                // Check Amount
                                cy.request({
                                    method: 'GET',
                                    url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
                                    headers: {
                                        token: merchant.token
                                    }
                                }).then((response) => {
                                    expect(response).property('status').to.equal(200);
                                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                                    let sum = response.body.data[0].amount;
                                    expect(sum).to.eq(rezult)
                                })
                            }
                        }
                    })
                })

            })
        })

    }

    checkAmountUICUP(payAmount) {
        // Get strategy, percent and fix commissions
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let fixcom = response.body.data[7].value[checkout.product_currency_c4][0];
            let perscom = response.body.data[7].value[checkout.product_currency_c4][1];
            let strateg = response.body.data[7].strategy;

            cy.wait(5000);

            //Check status tranzaction
            cy.get('[class="mat-chip mat-focus-indicator mat-primary mat-standard-chip status_2"]').eq(0).invoke('text').should((text) => {
                expect(text).to.eq(' Accepted ')
            });

            // Сalculation formula & Check Amount

            // Get rate from product currency to pay currency
            cy.request({
                method: 'GET',
                url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.product_currency_c4 + "&to=" + checkout.pay_currency + "&amount=1",
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                let rate = response.body.info.rate;

                // Get rate from pay currency to main currency
                cy.request({
                    method: 'GET',
                    url: "http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=" + checkout.pay_currency + "&to="
                        + merchant.main_currency + "&amount=1",
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    let rate2 = response.body.info.rate;

                    // комиссия за конвертацию цены товара в валюту оплаты
                    let exch = (payAmount / 100 * checkout.exchange_percentage).toFixed(2);

                    // комиссия за конвертацию с валюты оплаты в GBP
                    //let exch2 = (((payAmount * 0.031927358873092).toFixed(2)) / 100 * +checkout.exchange_percentage).toFixed(2)
                    let exch2 = ((payAmount * rate) / 100 * checkout.exchange_percentage).toFixed(2);

                    if (strateg === 1) {

                        // суммируем фиксированную комиссию и процент комиссии
                        let sumcom = (+fixcom + (+payAmount / 100 * +perscom)).toFixed(2);

                        // отнимаем от стоимости товара сумму комисий и комиссию за конвертацию цены товара в валюту оплаты
                        let net = (payAmount - sumcom - exch).toFixed(2);

                        // конвертируем результат в валюту оплаты
                        //let conv = (+net * 0.031927358873092).toFixed(2)
                        let conv = (+net * +rate).toFixed(2);

                        // комиссия за конвертацию результата в валюту оплаты
                        let comconv = (+conv / 100 * +checkout.exchange_percentage).toFixed(2);

                        // отнимаем комиссию за конвертацию результата в валюту оплаты
                        let min = (+conv - comconv).toFixed(2);

                        // конвертируем в основную валюту мерчанта
                        let conv2 = (+min * +rate2).toFixed(2);
                        //let conv2 = (+min * 1.1819283160476).toFixed(2)

                        // комиссия за конвертацию в основную валюту мерчанта
                        let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                        // отнимаем комиссию за конвертацию в основную валюту
                        let min2 = (conv2 - comconv2).toFixed(2);

                        // конвертируем комиссию за конвертацию с валюты оплаты в GBP в основную валюту мерчанта
                        let conv3 = (exch2 * rate2).toFixed(2);
                        //let conv3 = (exch2 * 1.1819283160476).toFixed(2)

                        // отнимаем конвертированную комиссию
                        let rezult = (min2 - conv3).toFixed(2);

                        cy.log("рейт c "+checkout.product_currency_c4+" в "+checkout.pay_currency+" = "+rate);
                        cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                        cy.log("стратегия комиссий =" + " " + strateg);
                        cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c4);
                        cy.log("сумма комиссий =" + " " + sumcom);
                        cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                        cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                        cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                        cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                        // Check Amount
                        cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                            expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                        })
                    } else {
                        if (fixcom > (+payAmount / 100 * +perscom)) {

                            // отнимаем от стоимости товара фиксированную комиссию и комиссию за конвертацию валюты товара  в валюту оплаты
                            let net = (payAmount - fixcom - exch).toFixed(2);

                            // конвертируем результат в основную валюту мерчанта
                            //let conv = (net * 0.031927358873092).toFixed(2)
                            let conv = (net * +rate).toFixed(2);

                            // комиссия за конвертацию
                            let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию результата в валюту оплаты
                            let min = (conv - comconv).toFixed(2);

                            // конвертируем в основную валюту мерчанта
                            let conv2 = (+min * +rate2).toFixed(2);
                            //let conv2 = (+min * 1.1819283160476).toFixed(2)

                            // комиссия за конвертацию в основную валюту мерчанта
                            let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию
                            let min2 = (conv2 - (conv2 / 100 * checkout.exchange_percentage)).toFixed(2);

                            // конвертируем комиссию за второй обмен в основную валюту мерчанта
                            let conv3 = (exch2 * rate2).toFixed(2);
                            //let conv3 = (exch2 * 1.1819283160476).toFixed(2)

                            let rezult = (min2 - conv3).toFixed(2);

                            cy.log("рейт c "+checkout.product_currency_c4+" в "+checkout.pay_currency+" = "+rate);
                            cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                            cy.log("стратегия комиссий =" + " " + strateg);
                            cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c4);
                            cy.log("фиксированная комиссия =" + " " + (+fixcom).toFixed(2));
                            cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                            cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                            cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                            cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                            // Check Amount
                            cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                                expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                            })
                        } else {

                            // отнимаем от стоимости товара процент комиссии и комиссию за конвертацию цены товара в валюту оплаты
                            let net = (payAmount - (payAmount / 100 * perscom) - exch).toFixed(2);

                            // конвертируем результат в валюту оплаты
                            //let conv = (net * 0.031927358873092).toFixed(2)
                            let conv = (net * +rate).toFixed(2);

                            // комиссия за конвертацию результата в валюту оплаты
                            let comconv = (conv / 100 * +checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссии за конвертацию результата в валюту оплаты
                            let min = (conv - comconv).toFixed(2);

                            // конвертируем в основную валюту мерчанта
                            let conv2 = (+min * +rate2).toFixed(2);
                            //let conv2 = (+min * 1.1819283160476).toFixed(2)

                            // комиссия за конвертацию в основную валюту мерчанта
                            let comconv2 = (conv2 / 100 * checkout.exchange_percentage).toFixed(2);

                            // отнимаем комиссию за конвертацию в основную валюту
                            let min2 = (conv2 - (conv2 / 100 * checkout.exchange_percentage)).toFixed(2);

                            // конвертируем комиссию конвертации с валюты оплаты в GBP
                            let conv3 = (exch2 * rate2).toFixed(2);
                            //let conv3 = (exch2 * 1.1819283160476).toFixed(2)

                            // отнимаем комиссию за конвертацию
                            let rezult = (min2 - conv3).toFixed(2);

                            cy.log("рейт c "+checkout.product_currency_c4+" в "+checkout.pay_currency+" = "+rate);
                            cy.log("рейт c "+checkout.pay_currency+" в "+merchant.main_currency+" = "+rate2);
                            cy.log("стратегия комиссий =" + " " + strateg);
                            cy.log("цена товара =" + " " + payAmount + " " + checkout.product_currency_c4);
                            cy.log("процент комиссии =" + " " + (+payAmount / 100 * perscom).toFixed(2));
                            cy.log("комиссия за конвертацию цены товара в валюту оплаты=" + " " + exch);
                            cy.log("конвертированная комиссия конвертации с валюты оплаты в GBP =" + " " + conv3);
                            cy.log("комиссия за конвертацию в валюту оплаты =" + " " + comconv);
                            cy.log("комиссия за конвертацию в основную валюту =" + " " + comconv2);

                            // Check Amount
                            cy.get('[class="bold price-align"]').eq(0).invoke('text').should((text) => {
                                expect(text).to.eq((+rezult).toFixed(2) + ' ' + merchant.main_currency)
                            })
                        }
                    }
                })
            })
        })
    }


    getButtonDetails() {
        return cy.contains('span', 'Details').eq(0);
    }

    getButtonPartialRefund() {
        return cy.contains('div', 'Partial Refund');
    }

    getButtonCreateRefund() {
        return cy.contains('span', ' Create refund ')
    }

    getInputPartialRefundAmount() {
        return cy.get('#mat-input-6');
    }

    checkCreateRefund() {
        // get ID last transaction and save on variable trIdent
        cy.request({
            method: 'GET',
            url: 'https://account.stage.paydo.com/v1/transactions/user-transactions',
            headers: {
                token: merchant.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let trIdent = response.body.data[0].identifier;

            // get status refund
            cy.request({
                method: 'GET',
                url: "https://account.stage.paydo.com/v1/transactions/" + trIdent,
                headers: {
                    token: merchant.token,
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                expect(response.body.data.refunds[0].status).to.eq(1)
            })
        })
    }


    getButtonCreateRefundOk() {
        return cy.contains('div', ' Ok ');
    }

    getButtonRefund() {
        return cy.get('[class="purple-btn w-183"]');
    }

    confirmRefund() {
        return cy.contains('button', 'Yes, I sure ');
    }

    getButtonFilter() {
        return cy.get('.filter-buttons > :nth-child(3) > .mat-button-wrapper');
    }

    getInputMerchantID() {
        return cy.get('#mat-input-0');
    }

    getButtonChargebackCreate() {
        return cy.get('[class="mat-button-focus-overlay"]');
    }
}




export default new TransactionsPage();