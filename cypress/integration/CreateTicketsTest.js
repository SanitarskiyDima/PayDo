
import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import ticketsPage from "../elements/TicketsPage"
import ticket from "../fixtures/ticket"
import merchant from "../fixtures/merchant"

describe('Ticket suit ', () => {

    describe('Merchant account', () => {

        it('Create ticket', () => {
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
            ticketsPage.attachFile();
            ticketsPage.getButtonSendTicket().click();
            ticketsPage.checkCreateTicket();
            ticketsPage.closeAllert().click();
        })

    });

    describe('Manager panel', () => {

        it('Create ticket', () => {

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
            ticketsPage.selectTopicMan();
            ticketsPage.getInputQuestion().type(ticket.question);
            ticketsPage.attachFile();
            ticketsPage.getButtonSendTicket().click();
            ticketsPage.checkCreateTicketFin();
            ticketsPage.closeAlertFin().click();
       })
     });

    describe('Financial panel', () => {

        it('Create ticket', () => {
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
            ticketsPage.attachFile();
            ticketsPage.getButtonSendTicket().click();
            ticketsPage.checkCreateTicketFin();
            ticketsPage.closeAlertFin().click();
        })
    });

});

