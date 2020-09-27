import loginPage from "./LoginPage";
import feen from "../fixtures/feen.json"
import merchant from "../fixtures/merchant.json"
import paymentMethod from "../fixtures/paymentMethod"

class FeenPage {

    getLogin() {
        loginPage.visit('/');
        window.localStorage.setItem('user-session',
            '{"id":"1604","email":"eugeniy.o+f2@payop.com","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2MDQiLCJhY2Nlc3NUb2tlbiI6ImRlYzhhMDE5YjA1Y2M2ZjVkMzk3ZjdiOSIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5OCIsInRpbWUiOjE1OTYzNTgyNzMsImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9GSU5BTkNJQUwiXSwidHdvRmFjdG9yIjp7InBhc3NlZCI6dHJ1ZX19.GGimEqCfcBU3fMMiO23Uc9_-nPidBcmNwpFvNuNi3SU","role":4,"moduleUrl":"financial","status":1,"type":2,"accountType":1,"availableAccounts":[],"stayLogin":true,"isLoggedIn":true}');
        loginPage.getButtonToAdmibPanel().click();
    }

    setCommissionsAndStrategy() {
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/commissions/custom`,
            headers: {
                token: feen.token,
            },
            body: {
                "transactionType": 7,
                "strategy": feen.strategy,
                "source": 1,
                "value": {
                    "ALL": [
                        feen.fix_commission,
                        feen.percent_commission
                    ]
                },
                "currency": "",
                "paymentMethodIdentifier": 300,
                "userIdentifier": merchant.bussiness_account

            }
        }).then((response) => {
            expect(response).property('status').to.equal(201)
        })
    }

    // Add Project to MID
    addProjectToMid() {
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/mid/11/add-apps`,
            headers: {
                token: feen.token
                },
            body:
                [
                    "cc9cf5c0-e5c8-46f0-8da3-fce662143c03",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
        }).then((response) => {
            expect(response).property('status').to.equal(201);
            expect(response.body).property('data').to.not.be.oneOf([null, ""])
             });

        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/mid/update`,
            headers: {
                token: feen.token
                },
                body: {
                    "identifier": 11,
                    "name": "Avto_Test_OE",
                    "riskLevel": "2",
                    "settings": [
                        {
                            "connectorId": "1",
                            "paymentMethodId": "197",
                            "terminalId": "10001"
                        },
                        {
                            "connectorId": "1",
                            "paymentMethodId": "300",
                            "terminalId": "10001"
                        },
                        {
                            "connectorId": "1",
                            "paymentMethodId": "20001",
                            "terminalId": "20001"
                        },
                        {
                            "connectorId": "1",
                            "paymentMethodId": "200",
                            "terminalId": "2"
                        }
                    ],
                    "apps": [
                        "cc9cf5c0-e5c8-46f0-8da3-fce662143c03"
                    ],
                    "createdAt": 1596124021,
                    "updatedAt": 1597518380
                }
        }).then((response) => {
            expect(response).property('status').to.equal(201);
            expect(response.body).property('data').to.not.be.oneOf([null, ""])
        })
    }

    changeHoldPendingBalance() {
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/holds/custom`,
            headers: {
                token: feen.token
            },
            body: {
                "from": 4,
                "to": 2,
                "value": {
                    "ALL": 0
                },
                "distributionPart": 100,
                "userIdentifier": merchant.bussiness_account

            }
        }).then((response) => {
            expect(response).property('status').to.equal(201);
            expect(response.body).property('status').to.not.be.oneOf([null, ""])
        })
    }

    setPaymentSettings() {
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/user-payment-settings/payment-methods/1/appoint-primary`,
            headers: {
                token: feen.token
            },
            body: {
                "userIdentifier": merchant.bussiness_account,
                "primaryIdentifier": 300
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('status').to.not.be.oneOf([null, ""])
        })
    }

    setNewCommissionsAndStrategy() {
        cy.request({
            method: 'POST',
            url: `https://app.stage.paydo.com/v1/instrument-settings/commissions/custom`,
            headers: {
                token: feen.token,
            },
            body: {
                "transactionType": 7,
                "strategy": 2,
                "source": 1,
                "value": {
                    "ALL": [
                        feen.fix_commission,
                        feen.percent_commission
                    ]
                },
                "currency": "",
                "paymentMethodIdentifier": 300,
                "userIdentifier": merchant.bussiness_account
            }
        }).then((response) => {
            expect(response).property('status').to.equal(201)
        })
    }

    changeComissionsAndStrategy() {
        // Get a strategy for the moment
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/instrument-settings/commissions/custom/" + paymentMethod.pm_id + "/" + merchant.bussiness_account,
            headers: {
                token: feen.token,
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let strateg = response.body.data[7].strategy;
            cy.log(strateg);

            if (strateg === 1) {
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/instrument-settings/commissions/custom`,
                    headers: {
                        token: feen.token,
                    },
                    body: {
                        "transactionType": 7,
                        "strategy": 2,
                        "source": 1,
                        "value": {
                            "ALL": [
                                feen.fix_commission,
                                feen.percent_commission
                            ]
                        },
                        "currency": "",
                        "paymentMethodIdentifier": paymentMethod.pm_id,
                        "userIdentifier": merchant.bussiness_account

                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(201);
                    expect((response.body).status).eq (1)
                })

            } else {
                cy.request({
                    method: 'POST',
                    url: `https://app.stage.paydo.com/v1/instrument-settings/commissions/custom`,
                    headers: {
                        token: feen.token,
                    },
                    body: {
                        "transactionType": 7,
                        "strategy": 1,
                        "source": 1,
                        "value": {
                            "ALL": [
                                feen.fix_commission,
                                feen.percent_commission
                            ]
                        },
                        "currency": "",
                        "paymentMethodIdentifier": paymentMethod.pm_id,
                        "userIdentifier": merchant.bussiness_account
                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(201)
                })
            }
        })
    }
}

export default new FeenPage();