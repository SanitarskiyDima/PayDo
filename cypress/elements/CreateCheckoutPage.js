import project from "../fixtures/project.json"
import card from "../fixtures/card.json"
import checkout from "../fixtures/checkout.json"
import merchant from "../fixtures/merchant.json"

class CreateCheckoutPage {

    getCheckoutGBPAPI(payAmount, payCurrency) {

        // Signature generation
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        hash.update(payAmount + ':' + payCurrency + ':C1GBPAPI:' + project.secret_key);
        hash.hex();

        // Create invoices, save to variable invID
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/invoices/create`,
            body: {
                "publicKey": project.public_key,
                "order": {
                    "id": "C1GBPAPI",
                    "amount": payAmount,
                    "currency": payCurrency,
                    "items": [
                        {
                            "id": "487",
                            "name": "Item 1",
                            "price": "3"
                        },
                        {
                            "id": "358",
                            "name": "Item 2",
                            "price": "7"
                        }
                    ],
                    "description": "case1"
                },
                "signature": hash.toString(),
                "payer": {
                    "email": "eugeniy.o+4avtotest@payop.com",
                    "phone": "",
                    "name": ""
                },
                "paymentMethod": null,
                "language": "en",
                "resultUrl": "https://app.stage.paydo.com/",
                "failPath": "https://app.stage.paydo.com/",
                "productUrl": "https://app.stage.paydo.com/"
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            var invId = response.body.data;

                // Creatr card token, save to variable tok
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/payment-tools/card-token/create`,

                    body: {

                        "invoiceIdentifier": invId,
                        "saveCard": null,
                        "pan": card.card_number,
                        "expirationDate": card.expiration_date,
                        "cvv": card.CVC,
                        "holderName": card.cardholder
                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(201);
                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                    var tok = response.body.data.token;

                    // Create checkout
                    cy.request({
                        method: 'POST',
                        url: `https://app.stage.paydo.com/v1/checkout/create`,
                        body: {

                            "invoiceIdentifier": invId,
                            "paymentMethod": 1,
                            "payCurrency": payCurrency,
                            "customer": {
                                "email": "eugeniy.o+4avtotest@payop.com",
                                "name": "",
                                "phone": "",
                                "address": "",
                                "companyName": "",
                                "site": "",
                                "extraFields": []
                            },
                            "cardToken": tok,
                            "checkStatusUrl": "https://app.stage.payop.com/en/payment/wait-page/{{txid}}"
                        }
                    }).then((response) => {
                        expect(response).property('status').to.equal(200);
                        expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                    })
                })
            })
        }

    getCheckout2API(payAmount) {

        // Signature generation
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        hash.update(payAmount + ":" + checkout.product_currency_c2 + ":C2API:" + project.secret_key);
        hash.hex();

        // Create invoices, save to variable invID
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/invoices/create`,
            body: {
                "publicKey": project.public_key,
                "order": {
                    "id": "C2API",
                    "amount": payAmount,
                    "currency": checkout.product_currency_c2,
                    "items": [
                        {
                            "id": "487",
                            "name": "Item 1",
                            "price": "3"
                        },
                        {
                            "id": "358",
                            "name": "Item 2",
                            "price": "7"
                        }
                    ],
                    "description": "case2"
                },
                "signature": hash.toString(),
                "payer": {
                    "email": "eugeniy.o+4avtotest@payop.com",
                    "phone": "",
                    "name": ""
                },
                "paymentMethod": null,
                "language": "en",
                "resultUrl": "https://app.stage.paydo.com/",
                "failPath": "https://app.stage.paydo.com/",
                "productUrl": "https://app.stage.paydo.com/"
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            var invId = response.body.data;

             // cy.request({ // calculate
             //    method: 'POST',
             //    url: `https://stage.paydo.com/v1/invoices/calculate`,
             //    body: {
             //        "currency": merchant.main_currency,
             //        "invoiceIdentifier": invId,
             //        "paymentMethodIdentifier": 1
             //        }
             // }).then((response) => {
             //    expect(response).property('status').to.equal(200)
             //    expect(response.body).property('data').to.not.be.oneOf([null, ""]);

                // Creatr card token, save to variable tok
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/payment-tools/card-token/create`,
                     body: {
                         "invoiceIdentifier": invId,
                         "saveCard": null,
                         "pan": card.card_number,
                         "expirationDate": card.expiration_date,
                         "cvv": card.CVC,
                         "holderName": card.cardholder
                     }
                }).then((response) => {
                expect(response).property('status').to.equal(201);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                var tok = response.body.data.token;

                    // Create checkout
                    cy.request({
                        method: 'POST',
                        url: `https://app.stage.paydo.com/v1/checkout/create`,
                        body: {
                            "invoiceIdentifier": invId,
                            "paymentMethod": 1,
                            "payCurrency": checkout.product_currency_c2,
                            "customer": {
                                "email": "eugeniy.o+4avtotest@payop.com",
                                "name": "",
                                "phone": "",
                                "address": "",
                                "companyName": "",
                                "site": "",
                                "extraFields": []
                            },
                            "cardToken": tok,
                            "checkStatusUrl": "https://app.stage.paydo.com/en/payment/wait-page/{{txid}}"
                        }
                    }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                    })
                })
             })
        }

    getCheckout3API(payAmount) {

        // Signature generation
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        hash.update(payAmount + ":" + checkout.product_currency_c3 + ":C3API:" + project.secret_key);
        hash.hex();

        // Create invoices, save to variable invID
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/invoices/create`,
            body: {
                "publicKey": project.public_key,
                "order": {
                    "id": "C3API",
                    "amount": payAmount,
                    "currency": checkout.product_currency_c3,
                    "items": [
                        {
                            "id": "487",
                            "name": "Item 1",
                            "price": "3"
                        },
                        {
                            "id": "358",
                            "name": "Item 2",
                            "price": "7"
                        }
                    ],
                    "description": "case3"
                },
                "signature": hash.toString(),
                "payer": {
                    "email": "eugeniy.o+4avtotest@payop.com",
                    "phone": "",
                    "name": ""
                },
                "paymentMethod": null,
                "language": "en",
                "resultUrl": "https://app.stage.paydo.com/",
                "failPath": "https://app.stage.paydo.com/",
                "productUrl": "https://app.stage.paydo.com/"
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            var invId = response.body.data;

            // cy.request({ // calculate
            //    method: 'POST',
            //    url: `https://stage.paydo.com/v1/invoices/calculate`,
            //    body: {
            //        "currency": merchant.main_currency,
            //        "invoiceIdentifier": invId,
            //        "paymentMethodIdentifier": 1
            //        }
            // }).then((response) => {
            //    expect(response).property('status').to.equal(200)
            //    expect(response.body).property('data').to.not.be.oneOf([null, ""]);

            // Creatr card token, save to variable tok
            cy.request({
                method: 'POST',
                url: `https://app.stage.paydo.com/v1/payment-tools/card-token/create`,
                body: {
                    "invoiceIdentifier": invId,
                    "saveCard": null,
                    "pan": card.card_number,
                    "expirationDate": card.expiration_date,
                    "cvv": card.CVC,
                    "holderName": card.cardholder
                }
            }).then((response) => {
                expect(response).property('status').to.equal(201);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                var tok = response.body.data.token;

                // Create checkout
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/checkout/create`,
                    body: {
                        "invoiceIdentifier": invId,
                        "paymentMethod": 1,
                        "payCurrency": merchant.main_currency,
                        "customer": {
                            "email": "eugeniy.o+4avtotest@payop.com",
                            "name": "",
                            "phone": "",
                            "address": "",
                            "companyName": "",
                            "site": "",
                            "extraFields": []
                        },
                        "cardToken": tok,
                        "checkStatusUrl": "https://app.stage.paydo.com/en/payment/wait-page/{{txid}}"
                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                })
            })
        })
    }

    getCheckout4API(payAmount) {

        // Signature generation
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        hash.update(payAmount + ":" + checkout.product_currency_c4 + ":C4API:" + project.secret_key);
        hash.hex();

        // Create invoices, save to variable invID
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/invoices/create`,
            body: {
                "publicKey": project.public_key,
                "order": {
                    "id": "C4API",
                    "amount": payAmount,
                    "currency": checkout.product_currency_c4,
                    "items": [
                        {
                            "id": "487",
                            "name": "Item 1",
                            "price": "3"
                        },
                        {
                            "id": "358",
                            "name": "Item 2",
                            "price": "7"
                        }
                    ],
                    "description": "case4"
                },
                "signature": hash.toString(),
                "payer": {
                    "email": "eugeniy.o+4avtotest@payop.com",
                    "phone": "",
                    "name": ""
                },
                "paymentMethod": null,
                "language": "en",
                "resultUrl": "https://app.stage.paydo.com/",
                "failPath": "https://app.stage.paydo.com/",
                "productUrl": "https://app.stage.paydo.com/"
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            var invId = response.body.data;

            // cy.request({ // calculate
            //    method: 'POST',
            //    url: `https://stage.paydo.com/v1/invoices/calculate`,
            //    body: {
            //        "currency": merchant.main_currency,
            //        "invoiceIdentifier": invId,
            //        "paymentMethodIdentifier": 1
            //        }
            // }).then((response) => {
            //    expect(response).property('status').to.equal(200)
            //    expect(response.body).property('data').to.not.be.oneOf([null, ""]);

            // Creatr card token, save to variable tok
            cy.request({
                method: 'POST',
                url: `https://app.stage.paydo.com/v1/payment-tools/card-token/create`,
                body: {
                    "invoiceIdentifier": invId,
                    "saveCard": null,
                    "pan": card.card_number,
                    "expirationDate": card.expiration_date,
                    "cvv": card.CVC,
                    "holderName": card.cardholder
                }
            }).then((response) => {
                expect(response).property('status').to.equal(201);
                expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                var tok = response.body.data.token;

                // Create checkout
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/checkout/create`,
                    body: {
                        "invoiceIdentifier": invId,
                        "paymentMethod": 1,
                        "payCurrency": checkout.pay_currency,
                        "customer": {
                            "email": "eugeniy.o+4avtotest@payop.com",
                            "name": "",
                            "phone": "",
                            "address": "",
                            "companyName": "",
                            "site": "",
                            "extraFields": []
                        },
                        "cardToken": tok,
                        "checkStatusUrl": "https://app.stage.paydo.com/en/payment/wait-page/{{txid}}"
                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                    expect(response.body).property('data').to.not.be.oneOf([null, ""]);
                })
            })
        })
    }


}



export default new CreateCheckoutPage();