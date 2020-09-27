import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import maneyTransferPage from "../elements/MoneyTransferPage";

describe('Withdraw suit ', () => {

    describe('Withdraw, payment not commercial', () => {

        beforeEach('', () => {
            loginPage.visit('/');
            loginPage.getAuthorization();
        });

        it('Create withdraw', () => {
            loginPage.getButtonToAdmibPanel().click();
            cy.wait(2000);
            homePage.getCheckUrl();
            cy.wait(2000);
            homePage.getMenuCreateTransfer().click();
            maneyTransferPage.getInputIBAN().type('45435452452');
            maneyTransferPage.getBeneficiaryName().type('Name');
            maneyTransferPage.selectCountry();
            maneyTransferPage.getInputCity().type('City');
            maneyTransferPage.getInputRecipientAdress().type('Recipient Adress');
            maneyTransferPage.getInputBICcode().type('BIJORU66XXX');
            maneyTransferPage.getInputBeneficiaryBank().type('Primatbank');
            maneyTransferPage.getInputPurposePayment().type('Other');
            maneyTransferPage.getCheckboxPaymentNotCommercial().click();
            maneyTransferPage.getInputAmountToTransfer().type('100');
            //maneyTransferPage.getFieldAmountToBeCharged().click();
            maneyTransferPage.getButtonProceed().click();
            maneyTransferPage.getButtonConfirmTransfer().click()


        });
    });
});
