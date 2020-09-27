import loginPage from "../elements/LoginPage";
import homePage from "../elements/HomePage";
import persVerPage from "../elements/PersVerPage";
import businessVerPage from "../elements/BusinessVerPage";

    describe('Verifications suit', () => {

        beforeEach('', () => {
            loginPage.visit('/');
            loginPage.getAuthorization()
        })

        describe('Login and Personal Verification', () => {

            it('Are you US person or you do business incorporated in US', () => {

                loginPage.getButtonToAdmibPanel().click();
                homePage.getCheckUrl()
                homePage.getMenuVerification().click();
                cy.wait(1000)
                homePage.getSubmenuPersonal().click();
                persVerPage.getCheckUrl();
                persVerPage.getRadioInputUSA().click();
                persVerPage.isElementDisplayed();
                //persVerPage.sendMainInformationPersonalDocuments()
            })

            it('Personal Verification', () => {

                loginPage.getButtonToAdmibPanel().click();
                persVerPage.sendMainInformationPersonalDocuments();
                persVerPage.sendRequestIban();
            })

            it('Business Verification', () => {
                loginPage.getButtonToAdmibPanel().click();
                businessVerPage.sendCompanyInfo();
                businessVerPage.sendRequestIban();
           })

        })
    })










