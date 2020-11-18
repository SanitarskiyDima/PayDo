
import persVerPage from "../../elements/PersVerPage";
import businessVerPage from "../../elements/BusinessVerPage";
import managerPage from "../../elements/ManagerPage";

    describe('Verifications suit', () => {

        describe('Send and Accept Verification', () => {

            it('Personal Verification', () => {

                persVerPage.sendMainInformationPersonalDocuments();
                persVerPage.sendRequestIban();
                managerPage.acceptPersonalVerification();
                managerPage.acceptPersonalIBAN();
            });

            it('Business Verification', () => {

                businessVerPage.sendCompanyInfo();
                businessVerPage.sendRequestIBAN();
                managerPage.acceptBusinessVerification();
                managerPage.acceptBusinessIban();
           })

        })
    });










