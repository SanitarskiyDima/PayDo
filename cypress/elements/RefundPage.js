import merchant from "../fixtures/merchant"
import feen from "../fixtures/feen"

class RefundPage{

    rejectRefund() {

        //Get ID last created refund
        cy.request({
            method: 'GET',
            url: "https://app.stage.paydo.com/v1/refunds/filters?query[userIdentifier]=" + merchant.bussiness_account + "&query[status]=1",
            headers: {
                token: feen.token
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            //expect(response.body).property('data').to.not.be.oneOf([null, ""]);
            let ref_ID = response.body.data[0].identifier;

            //Reject last refund
            cy.request({
                method: 'POST',
                url: "https://app.stage.paydo.com/v1/refunds/" + ref_ID + "/reject",
                headers: {
                    token: feen.token
                },
                body: {

                }
            }).then((response) => {
                expect(response).property('status').to.equal(201);
            })
        })
    }
}


export default new RefundPage();