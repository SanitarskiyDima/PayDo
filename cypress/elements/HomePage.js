import merchant from "../fixtures/merchant";


class HomePage{

    getCheckUrl() {
        return  cy.url().should('include','/en/profile/overview');
    }

    getCheckUrlMan() {
        return  cy.url().should('include', '/en/manager');
    }

    getCheckUrlFin() {
        return  cy.url().should('include', '/en/financial');
    }

    getMenuVerification() {
        return cy.contains('Verification');
    }

    getChangeAccount() {
         cy.get('[class="acc-active__info_acc-type"]').click()
       return cy.contains('Personal account').click()
    }

    getSubmenuPersonal() {
        return cy.get('[class="mat-line mid-menu__li-text"]').contains('Personal')
    }


    getMenuProjects() {
        return cy.contains('Projects');
    }

    getSubMenuRest() {
        return cy.contains ('p', 'REST');
    }

    getMenuPaymentHistory() {
        return cy.contains('Payments History');
    }

    getMenuTransactions() {
        return cy.contains('Transactions');
    }

    getMenuTickets() {
        return cy.contains ('Tickets')
    }

    getMenuCreateTransfer() {
        return cy.contains ('Create Transfer');
    }


    setMainCurrency() {
        cy.request({
            method: 'POST',
            url: "https://account.stage.paydo.com/v1/users/settings/change-currency",
            headers: {
                token: merchant.token,
            },
            body: {
                "identifier": merchant.bussiness_account,
                "currency": merchant.main_currency
            }
        }).then((response) => {
            expect(response).property('status').to.equal(201);
            expect(response.body.status).eq(1);

        })
    }

    getMenuChargebacks() {
        return cy.contains('Chargebacks');
    }
}

export default new HomePage();