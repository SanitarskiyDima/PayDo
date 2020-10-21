
import ticket from "../fixtures/ticket"

class TicketsPage {


    getButtonCreateNewTicket() {
        return cy.contains('span', 'Create new ticket')
    }

    getInputMerchantID(){
        return cy.get('#mat-input-5').click();
    }

    getInputRequestName() {
        return cy.get ('#mat-input-3').click();
    }

    selectTopic() {
        cy.contains('span', 'Sales department').click();
        return cy.contains('span', ticket.department_1).click();
    }

    getInputQuestion() {
        return cy.get ('[class="ql-editor ql-blank"]').click();
    }

    attachFile() {
        cy.get('input[class="ngx-file-drop__file-input"]').each((fileInput) => {
            cy.wrap(fileInput).attachFile("2.jpeg");
        });
    }

    getButtonSendTicket() {
        return cy.contains('span', ' Send ticket ');
    }

    checkCreateTicket() {
        cy.contains('div', 'Success').invoke('text').should((text) => {
            expect(text).to.eq('Success')
        });
    }

    closeAllert() {
        return cy.get ('.close-alert')
    }

    getInputRequestNameFin() {
        return cy.get ('#mat-input-4').click();
    }

    selectTopicFin() {
        cy.get ('#mat-select-23 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        return cy.contains('span', ticket.department_3).click();
    }

    closeAlertFin() {
        return cy.get ('.close-alert');
    }

    checkCreateTicketFin() {
        cy.get('.alert__title').invoke('text').should((text) => {
            expect(text).to.eq('Success');
        })
    }

    selectTopicMan() {
        cy.get('#mat-select-23 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        return cy.contains('span', ticket.department_2).click();
    }

    getButtonFilterTicket() {
        return cy.contains('span', ' Filter ');
    }
}

export default new TicketsPage();