
class ChargebackPage {

    getButtonFilter() {
       cy.contains('span', ' Filter ')
    }

}

export default new ChargebackPage();