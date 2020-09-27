import merchant from "../fixtures/merchant";
import homepage from "../elements/HomePage"

it('Set main currency' ,() => {

    homepage.setMainCurrency();cy.request({
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

})