import homePage from "../elements/MainPage";
import loginPage from "../elements/LoginPage";
import  user from "../fixtures/user.json";

describe('Authorization smoke', () => {

    it('Enter credentials and login', () => {
        loginPage.visit('/');
        loginPage.getEmailField().type(user.email);
        loginPage.getPasswordField().type(user.password);
        loginPage.getButtonLogin().click();
        loginPage.getAuthCode().type(user.authCode);

        homePage.getCheckUrl();
        homePage.getMenuProjects();

    })
})