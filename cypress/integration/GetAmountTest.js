import loginPage from "../elements/LoginPage";
import user from "../fixtures/user.json";
import homePage from "../elements/HomePage";
import transactionsPage from "../elements/TransactionsPage";
import merchant from "../fixtures/merchant.json"
import manager from "../fixtures/manajer.json"



describe('', () => {


    // cy.visit('https://www.google.com.ua/')
    // cy.request({
    //     method: 'GET',
    //     url: `http://data.fixer.io/api/latest?access_key=f74d95af4d874be993c3d2b716800735&symbols=GBP&format=1`
    // }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         expect(response.body).property('rates').to.not.be.oneOf([null, ""])
    //         var rates = response.body.rates.GBP
    //     cy.get('[class="gLFyf gsfi"]').type(rates)
    // })


    // var sha256 = require('js-sha256');
    // var hash = sha256.create();
    // hash.update('10:GBP:C1GBPALL:33267e6b6621f4ca049720b6');
    // hash.hex();


    //     var searchResp;
    //
    //     cy.visit('https://rozetka.com.ua/')
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://search.rozetka.com.ua/search/autocomplete/', // baseUrl is prepended to url
    //         form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    //         body: {
    //             text: 'sams',
    //             lang: 'ru'
    //         }
    //     }).then((response) => {
    //         cy.get('[search-input]').type(response.body.content.text)
    //         const searchResp = response.body;
    //     })
    //     cy.get('[search-input]').type(searchResp+'12345')


    // visit manager
    // loginPage.visit('/');  MANAGER
    // window.localStorage.setItem ('user-session', '{"id":"1596","email":"eugeniy.o+m@payop.com","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4","role":3,"moduleUrl":"manager","status":1,"type":2,"accountType":1,"availableAccounts":[],"stayLogin":true,"isLoggedIn":true}')
    //  loginPage.getButtonToAdmibPanel().click();
    // })


    // loginPage.visit('/');  FEEN
    // window.localStorage.setItem('user-session',
    //     '{"id":"1604","email":"eugeniy.o+f2@payop.com","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2MDQiLCJhY2Nlc3NUb2tlbiI6ImRlYzhhMDE5YjA1Y2M2ZjVkMzk3ZjdiOSIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5OCIsInRpbWUiOjE1OTYzNTgyNzMsImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9GSU5BTkNJQUwiXSwidHdvRmFjdG9yIjp7InBhc3NlZCI6dHJ1ZX19.GGimEqCfcBU3fMMiO23Uc9_-nPidBcmNwpFvNuNi3SU","role":4,"moduleUrl":"financial","status":1,"type":2,"accountType":1,"availableAccounts":[],"stayLogin":true,"isLoggedIn":true}')
    // loginPage.getButtonToAdmibPanel().click();


    // loginPage.visit('/');
    // loginPage.getAuthorization();
    // loginPage.getButtonToAdmibPanel().click();
    //
    // var sha256 = require('js-sha256');
    // var hash = sha256.create();
    // hash.update('20:GBP:C1GBPALL:33267e6b6621f4ca049720b6');
    // hash.hex();
    //
    //
    // cy.request({
    //     method: 'POST',
    //     url: `https://app.stage.paydo.com/v1/invoices/create`,
    //     body: {
    //         "publicKey": "application-2d37880c-7de6-4b3d-aad2-8072d7b7ebb7",
    //         "order": {
    //             "id": "C1GBPALL",
    //             "amount": "20",
    //             "currency": "GBP",
    //             "items": [
    //                 {
    //                     "id": "487",
    //                     "name": "Item 1",
    //                     "price": "3"
    //                 },
    //                 {
    //                     "id": "358",
    //                     "name": "Item 2",
    //                     "price": "7"
    //                 }
    //             ],
    //             "description": "case1"
    //         },
    //         "signature": hash.toString(),
    //         "payer": {
    //             "email": "eugeniy.o+avtotest@payop.com",
    //             "phone": "",
    //             "name": ""
    //         },
    //         "paymentMethod": null,
    //         "language": "en",
    //         "resultUrl": "https://app.stage.paydo.com/",
    //         "failPath": "https://app.stage.paydo.com/",
    //         "productUrl": "https://app.stage.paydo.com/"
    //     }
    // }).then((response) => {
    //     expect(response).property('status').to.equal(200)
    //     expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //     var tot = response.body.data;
    //
    //     cy.request({
    //         method: 'POST',
    //         url: `https://app.stage.paydo.com/v1/payment-tools/card-token/create`,
    //         body: {
    //
    //             "invoiceIdentifier": tot,
    //             "saveCard": null,
    //             "pan": "4111111111111111",
    //             "expirationDate": "12/20",
    //             "cvv": "301",
    //             "holderName": "name"
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(201)
    //         expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //         var tock = response.body.data.token;
    //
    //         cy.request({
    //             method: 'POST',
    //             url: `https://app.stage.paydo.com/v1/checkout/create`,
    //             body: {
    //
    //                 "invoiceIdentifier": tot,
    //                 "paymentMethod": 1,
    //                 "payCurrency": "GBP",
    //                 "customer": {
    //                     "email": "eugeniy.o+avtotest@payop.com",
    //                     "name": "",
    //                     "phone": "",
    //                     "address": "",
    //                     "companyName": "",
    //                     "site": "",
    //                     "extraFields": []
    //                 },
    //                 "cardToken": tock,
    //                 "checkStatusUrl": "https://app.stage.paydo.com/en/payment/wait-page/{{txid}}"
    //             }
    //         })
    //     })
    // })


    // Check status tranzaction
    // cy.get('[class="mat-chip mat-focus-indicator mat-primary mat-standard-chip status_2"]').eq(0).invoke('text').should((text) => {
    //     expect(text).to.eq(' Accepted ')
    // })

    // cy.request({
    //     method: 'GET',
    //     url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
    //     headers:{
    //         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3ODAiLCJhY2Nlc3NUb2tlbiI6IjFmMWQ1ZjU4OWY4NzUyYWM2YjE0NmYyYSIsInRva2VuSWQiOiIyNyIsIndhbGxldElkIjoiMTc3NCIsInRpbWUiOjE1OTU5MTk2NDIsImV4cGlyZWRBdCI6MTY0MDkwMTYwMCwicm9sZXMiOltdLCJ0d29GYWN0b3IiOnsicGFzc2VkIjpmYWxzZX19.nRwbIMyBd0hI1_m1_GTZpGC2AvT0tptCZ-Dny8IisgM'
    //     }
    // }).then((response) => {
    //     expect(response).property('status').to.equal(200)
    //     expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //     let sum = response.body.data[0].amount;
    //     expect(sum).to.eq((payAmount - fixcom - (payAmount / 100 * perscom) - (payAmount / 100 * conversion)) + ' ' + 'GBP')


    // cy.request({
    //     method: 'GET',
    //     url: 'http://data.fixer.io/api/convert?access_key=f74d95af4d874be993c3d2b716800735&from=TRY&to=USD&amount=1',
    // }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //          //expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //          let rat = response.body.info.rate;
    //             console.log(rat)
    // })

    //верификация персонального айбена
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://app.stage.paydo.com/v1/ibans/requests/filter?query[userIdentifier]=1782',
    //         params: {
    //             "query[userIdentifier]": "1782"
    //         },
    //         headers: {
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4'
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //         let idreq = response.body.data[0].identifier
    //         console.log()
    //         cy.request({
    //             method: 'POST',
    //             url: "https://app.stage.paydo.com/v1/ibans/requests/"+idreq+"/accept",   //'+idreq+' конкатенация для передачи значения айди запроса
    //             headers: {
    //                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4',
    //             }
    //         }).then((response) => {
    //             expect(response).property('status').to.equal(200)
    //         })
    //
    //     })
    //
    // })


    //верификация персональная
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://app.stage.paydo.com/v1/users/verification/all?query[userIdentifier]=1771',
    //         params: {
    //             "query[userIdentifier]": "1771"
    //         },
    //         headers: {
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4'
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         //expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //         let ident = response.body.data[0].identifier
    //
    //         cy.request({
    //             method: 'POST',
    //             url: `https://app.stage.paydo.com/v1/users/verification/verify`,
    //             headers: {
    //                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4',
    //             },
    //             body: {
    //                 "identifier": ident
    //             }
    //         }).then((response) => {
    //             expect(response).property('status').to.equal(200)
    //         })
    //     })
    // })


    //ver bussines
    // cy.request({
    //     method: 'GET',
    //     url: 'https://app.stage.paydo.com/v1/users/verification/all?query[userIdentifier]=1771',
    //     params: {
    //         "query[userIdentifier]": "1771"
    //     },
    //     headers: {
    //         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4'
    //     }
    // }).then((response) => {
    //     expect(response).property('status').to.equal(200)
    //     expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //     let busveriden = response.body.data[0].identifier
    //
    //
    //     cy.request({
    //         method: 'POST',
    //         url: `https://app.stage.paydo.com/v1/users/verification/verify`,
    //         headers: {
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4',
    //         },
    //         body: {
    //             "identifier": busveriden
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //     })
    // })

    // cy.request({            //получение идентификатора для бизнес IBAN
    //     method: 'GET',
    //     url: 'https://app.stage.paydo.com/v1/ibans/requests/filter?query[userIdentifier]=1772',
    //     params: {
    //         "query[userIdentifier]": "1772"
    //     },
    //     headers: {
    //         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4'
    //     }
    // }).then((response) => {
    //     expect(response).property('status').to.equal(200)
    //     expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //     let busiban = response.body.data[0].identifier
    //
    //     cy.request({        //верификация бизнес IBAN по идентификатору
    //         method: 'POST',
    //         url: "https://app.stage.paydo.com/v1/ibans/requests/"+busiban+"/accept",   //'+busiban+' конкатенация и кавычки для передачи значения айди запроса
    //         headers: {
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4',
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //     })
    // })


    // cy.request({            //получение идентификатора проекта по ID мерчанта и PROJNAME
    //         method: 'GET',
    //         url: 'https://app.stage.paydo.com/v1/apps/filters?query[userIdentifier]=1780&query[name]=MyNewProject',
    //         params: {
    //             "query[userIdentifier]": "1772"
    //         },
    //         headers: {
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4'
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //         let projident = response.body.data[0].identifier
    //
    //         cy.request({        //can use card token +
    //             method: 'POST',
    //             url: "https://app.stage.paydo.com/v1/apps/"+projident+"/update-manager",   //'+projident+' конкатенация и кавычки для передачи значения айди запроса
    //             headers: {
    //                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1OTYiLCJhY2Nlc3NUb2tlbiI6ImE0YWViZTgyZDA3MmFjMzhhYTFjYWIyMiIsInRva2VuSWQiOm51bGwsIndhbGxldElkIjoiMTU5MCIsInRpbWUiOjE1OTYzNTczNjksImV4cGlyZWRBdCI6bnVsbCwicm9sZXMiOlsiUk9MRV9NQU5BR0VSIl0sInR3b0ZhY3RvciI6eyJwYXNzZWQiOnRydWV9fQ.vPDJQpWUYKvuZT7L_4_tFWMMIEiuGOvfIyKMNvrLZH4',
    //             },
    //             body: {
    //             "name": "MyNewProject",
    //             "info": "non-specialized wholesale trade",
    //             "site": "https://app.stage.paydo.com/my.new.project",
    //             "ipn": "https://non-specialized wholesale trade",
    //             "canUseCardToken": true,
    //             "cashRegisterType": "default",
    //             "midIdentifier": 0,
    //             "logo": "data:image/jpeg;base64,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",
    //             "newStatus": null,
    //             "logoSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw0PDw8ODw8PDw4PEA8PDw8NDw8PFREWFhURFhUYHSggGBolGxUWITIiJSkrLy8uFx8zODMsNygtLi0BCgoKDg0OGhAQGi0eHiUtLS0tLS0tLS0uLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIEBQYDBwj/xABDEAABAwICBQgJAQYEBwAAAAABAAIDBBEFIQYSMUFRBxMiMmFxgZEjQlJicqGxwdEUgpKiwuHxCEPD0hUkNFNjg7P/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADYRAAIBAwAGBwgCAwADAAAAAAABAgMEEQUSITFBURMiYXGRsdEGFDKBocHh8CNCM1LxQ5Ki/9oADAMBAAIRAxEAPwD7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICrngC5IA4k2ChySWXsC2mFNjNOzbK0/Bd/0WjV0paU9818tvkZo29SW5GHJpLCNjZXeDQPmVpT0/bLcm/l+TKrKo9+DyOk7d0LvFwH2WB+0VPhB+KL+4y5gaTjfC798H7IvaKn/AKPxHuL5nozSWI7WSjwaR9Vmj7QW73xkvD1KuynwaMuHG6Z3+YG/GCz5nJblPS1pU3Tx37PMxStqq4GdHI1wu1wcOLSCPkt+M4zWYvK7DC01vLqxAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBhV2KQw5Odd3sN6TvLd4rSutIULb45beS3/veZadGdTcjRVekMz8owIxxPTf8APILztz7QVZbKS1V4v0N6nZRXxbTWSl8hu9znn3iSuHWuqlV5qSb7zbjCMfhWCY6YnYCe4XWGOtL4Vks2lvMlmHSH1T42H1WdWlw/6sxutTXE9Bhb+A8wsisLjkvEr7xAg4Y/gPMKHYV+zxHvECjsPePV8rFY3a11/Usq0HxMeSmI2gjvFlietH4lgyJp7ijGuYbsc5p4tJafkr0ridN5g2n2ESipbGsmxpcenjyfaVvb0XeY+67Vtp6vDZU668H4mrOzhL4dhvKHGYZbAHUefUfkSew7CvRWmlLe42J4fJ/u00alvOG/ajYromAIAgCAIAgCAIAgCAIAgCAIAgPKoqGRtLnuDWjefp2lYq1aFGDnN4RaMXJ4SycziGOySXbFeNnteu7/AGryt9pydTMaPVXPi/TzOjRs1HbPazWRwkneSfEkrzzk5PZtbN3YkbOnwpxzd0Rw2lb1HRlWe2b1V9TXncxXw7TPioY2+rc8XZ/LYulTsKFPhl9u38GtKvOXHBkbMh8ltbFsRiIKq2SRdVbJIuqtk4KkqrZOCCqNknhJTMdtFu0ZLWqW1KfDHcZI1JLiYU1B7Jv2HIrRqWco7YPJnjWT3mBLARkQtbLi8MzLD3Gdh+Myw2a68kfAnpAdh+xXbsdNVaPVn1o/Vdz9TVrWkZ7VsZ09FWRzN1o3XG8bC08CNy9db3VK4hr03k5k6coPEkZC2CgQBAEAQBAEAQBAEAQBAYeJYiyBt3ZuPVYNrj9h2rSvb6naw1p7+C4v95mWlSlUeEclV1Uk7tZ5+Fo6rR2BeHvL6rcz1pvuXBHXpUo01hGRRYe5+exvE/biqW1nUuNu6PP0Iq1ow7zcwU7Ix0RnxOZK71C2p0FiC+fE0J1JT3nrdZmypF1RsYIuqtkkKrZJUlUbJIVckkEqrZJUquQQVVskgqrZJ5yMDtousVSEZrEkXjJrca+ppLZjMfRc+pQlDatqNmFRPeYsMj4nB8ZLXDyI4Ebwr211UoTU6bw/PvE6cZrEjqsJxVs4t1ZAOkzj2t4he40fpKndxxukt6+67Dk16DpvsNkukYAgCAIAgCAIAgCAIDDxPEGwM1jm45NbvcfwtK+vYWtPXltfBc3+7zLSpOpLCOPlkfK8vebuPkBwHALwV1dTrzc6jy/3Yjs04KCwjZ4fh97Ofs3Dj/RbVlYdJ/JU3cFz/BgrV8dWO8230Xc2JYRokXVWySLqrZJF1Rski6q2SRdUbBBKrkki6q2Cqq2SFVskqSqtkkEquSSpVcklSoySYlTTg5jyWnVo/wBomeE+DMDpMcHNJa5puCNoKpRrShJSi8NGSUVJYZ1eDYmJ22NhI3rN4+8Oxe70bpGN3Dbskt6+67PI5Feg6b7DZLpmuEAQBAEAQBAEB5VM7Y2Oe42a0XP471irVoUYOc3hItGLk8I4urqXTyF7u5rdzW7gvn99ezuarnL5LkjtUqSpxwjPw2i1uk4dEbBxP4VrC06V9JP4fP8ABjr1tXqreba67zZoglUbJIVWwRdUbJIuqtkkKjZJBKq2CFVsEKrZJBVWySqrkkhVbJIUZJKlVySQVGSSpVckmLUw3zHitWrDHWRmhLgzCjkdE9r2Gzmm44dx7Fe2uZ0ZqcHhotOCmtVnZ4fWNnja9vcRva7eF9CtLqFzSVSPz7HyOLUpunLVZkrZMYQBAEAQBAEBymkVdzknNNPQjPS95/8AT8ryGnL7pJ9DF7I7+1/jzOnZ0dVa73sxqGm13AbtpPALg29F16mrw49xtVJ6kcm/aAAAMgMgF6VJRSS3HNe3axdQ2CLqrZJF1RsnBCo2DzMzNbU1m6+3U1hrW7tqjDxkZLKjZIVGySFVsEKrZJCq2SQVXIPOWZjbaz2tvkNZwbc8BfaiTe5ZJySVTJJUqMkkFVySVKjJYqVGSTCqYlqzWqzPF5RfBq7mJcz6N9mu4Dg7w+i7GiL73eriT6st/Zyf7wNe5o68crejsgvdHICAIAgCAIDCxes5mFzx1j0WfEdn58FpaQuvdqEp8dy7/wB2mWjT6SaRx0Lf7r53Uk3vO2kb/D4dVl97s/DcF27Cj0dLL3vb6GjXnrSxyMm63GzCQqNkkKjYIVWyTieVfS52GUYELgKqpJjhOR5toA15bcQCAO1wO5bthbKtU63wreY6ktVH5xfUyOkMrpHmUu1zIXOMhfe+trbb33r0mFjHA1T9B8kGmD8RppIah2tVUuqC87ZoXX1Xn3gQQfA715rSdqqM1KO5/Rm1SnlYZ365LZlCq2SQVXIIKq2SafSzHGYfRVFW8a3NN6DNmvK42Y3uuRfsus9rQdxVVNcfIrOWqsn5fxnFp6yZ9RUyOkkecydjRua0eq0bgF7elShSioQWEaLbbyz6hyL6ZSuk/wCG1Ly9rmudSveS5zHNF3Q3Pq6oJHCxG9cLTNlHU6eCw+PqbFCo86rPsRXmMm2VKjJYgqMklCoySUkbcKk1lYLxeGa6dixQZmOo0drOci1XHpxWae1vqnyy8F73Q9309DEvijsfdwf7yOPdU9SeVuZtV1jWCAIAgCA5XSap15mxjZGLn43Z/S3mV5D2gudaqqS3R83+Dp2VPEdbmYtFFrOaOJz7t689Qh0tVRNupLVi2b1ekyc4hVbBF1RskXVWwQqNg+AcvVW5+JxRX6MNLHYbtZ73uJ8Rq+S9FomOKGebNas+sfNV1DEd7yJ1hjxiFn/fhqIT3BnO/WMLm6WjrWzfJp/b7mSk+sfoteSbNwhUbAKhsEKuST5R/iArC2loILn0s8sp7eaYB/qrvaAhmc58kl4/8Ne4exI+IL05rG00XqzBXUMrTYsqYHfs64uPEXCwXMFOjOL4p+RaLw0z9WFfO8nTKlRkkqVGSxUqMklSmSTFnbtWF7JGaO4vgdTzVQ2/Vk9GfHqnzt5rtaFueiuUnuls9Pqa11T1qfcdkvdHICAIAgKvcACTsAJPcFEmorLCWThDIZHvedr3F3dc7F81uqzq1JTfF5O9COrFI2mGMzceAA8/7LNo2PWlIw3D2JGwuus2apF1RsEXVGwFVskKjYPz/wAvFMW4pHJY6stJEQdxLXvaR8h5hel0PLNDHJs1ay6x83XVMR3fIpSGTGYHboIqiU9xjMf1kC5ml56tq1zwvrn7GSkusfo1ePbNwhUbAUZBCrkk+T/4gaQupsPn3RzTRH/2sa4f/Jeg9nqnXnDmk/D/AKa9wtzPiK9SaxstGqUzV1FEASZKmBuWeRkFz5LBczUKM5Pgn5ForLR+rivnGTplSoyWKlRkkoUySVKjJZHlKqTMkTBmFsxkRmFelJp5RLR3FFPzkcb/AGmgnvtmPNfS7aqqtKNTmkzhVI6snE91mKBAEBgY7LqU8x4t1P3jq/dc/SlXo7Sb7MeOwzW8daokcjTtXzyozto3OHjoHtcfoupYLFNvtNOu+sZN1uNmEhUbBKq2SQqNgKrYOE5XNE34jRtkgbrVNKXPY0daWNwGvGO3JpHw23ro6LvFQqOM/hl9GYqsNZZR+dXsLSWkEEEggixBG0EL1i27jUPv/IzolJQ00lVUMLKirDQI3Cz4oBmARuLjmRwDd915PTF7GrNU4PKj5/g2qMMLLPoy4jZmCq2Aq5BCq2SaTTLAW4jQ1FKSA57daJx2MmbmwnsvkewlbVldO2rxqcOPdxKzjrLB+XcRoJqaWSCeN0Usbi17HCxB+43gjIhfQKdSFSKnB5TNFrDwz6dyK6JSOmGJTMLYog4UwcCDLI4apkHFoBIvxPYvP6dv4xp+7we17+xerNi3hl6zPtBXkcm4ipUZLFSmSSpUZLIqULHm/Yqy3FkYk4UwZc6PReW8Gr7D3N8D0vuvd6Cq69rq8m19/uci8jipnmbhdk1QgCA0mlb7QsHtSDyDSVw9PzxbJc2vublks1M9hoIAvDTOqjb0fUHefqutZ/4Uadb4z2Ww2YgqtgKjZIVWwFRsBVyQYxw6nMgmMEBmH+aYmGUft2up6epq6us8cs7CNVGUsLZIVGwSq5AVcgqVGSSFGSTErMPgmLTNBDKW9UyxskLe7WGSvCvUp7ISa7ngaqe897WyGwfJYmyyKlRksVKZJKlRksUKZLFShJRyhlkY8wySG8ubXRJ+c7fgd9QfsvYezk9lSPc/M5t8vhZ0a9MaAQBAc/paejAPeefkPyvOe0T/AI4Ltfkb1j8TNNDsXjJnTNpRnoeJXUtH/EalZdY91sNmIhUbJJVWwLqjZAVWwFRsEqrYJVGyCVVsEqjYIKrkEFMklSoySVKjJKKlRksVKElSoLFCmSSpTJYoUyWRRyZLI8ZdiR3ljP0UPpZRxjB8nD8r1Xs6/wCWa7PuaF98KOoXrTmhAEBz+loygPvPHyC857RL+OHe/I3rHezTQ7F4yZ0zYURyI7brespdVo16y25MlbbZhF1RsC6q2BdUbIJVWwSqNgKrYJVGyCbqrYJVGyASoyCpUZJKlRkkgqMlipTJJQpksUKjJJUpksVKZLFChYo5CyPKXYrR3kmfoqPTSn/x/wAwXqvZ1fyzfZ9zRvvhXedQvWnMCAIDSaWM9FGeEg+bSuF7QRzbxfKX2ZuWT/ka7DQQFeHmdUzKV1nd+SyW0sTxzMdVZRmXXQbNYXVcgXVWwSqNkBVbBN1VsEqmSCVVsEqrZAuqNgXUDBCjJJBKgsVKgkoUJKlCxUoSihKFipQsihQsUKkk8ptivDeSbTRJnSnd2MH1K9f7OR/yS7l5nOvn8KOkXpznhAEBrtIItaml90B/7pBPyuudpan0lpNctvhtM9tLFVHKU5Xz2ojtIyWlYk8PJDRnNdcArpxnrLJqtYZN1DZBKrkC6q2CbqjZBN1VsE3VWwLqpBN1XJGBdVbGBdVJIuoJIJUElSUJKlQSkVJQsVJQlFChYoSpJKlSWKlSWPCcrJBBnQaLRWhc725HHwFh9QV7rQNPVttbm36HJvZZqY5I3S7ZqBAEBSVgc1zTscC09xFlWcVOLi+OwlPDycI1pY5zDta4tPeDZfNLik6c3B708HejLWSZkgrULGRTv3LPQnjqsw1I8Ti+V3Ga6jpIJaN5iBn1JpGta5wBaSwZg2BIOfYBvXodD0KNarKNVZ2bF5mncSlFJo2vJ1pIcSoI5XkGeMmGoyDbyN2PsAB0mkHLK5I3LV0paK2ruMfhe1enyLUZ68e06i65jZlCqyCbqrYJuqtgXVWyCbqrAuqgXUAi6gkglQSVKgkqShJUoWKkoSajSjGW0NHUVTrHm2HUafXlOTG+LiPC63bC1d1cRpLjv7uJWrPUi2cRySaQYhXPrTVSmaFgjs5zWN1ZXE9FuqBlYG43WGy67un7K1t4w6KOrJ58DXtKk5t6zPo5XmDfKlSSYlQ5Z6aIZ22Gwc3DEze1ov8AFtPzuvpNpR6GhCnyX/Th1Z603IyVsmMIAgCA5LSOn5ufXHVlF/2hkfsfFeM09balfXW6Xmt/2OrZ1NaGryMWM5Lzckbh6BVIZ441hsddSz0svVmYWk2uWu2teO0OAPgulZ3UqVSNSO9fv1NarTysHxHQXGJMExSWmquhE936epHqsIPo5hxAve/suK9hpC3jfWqnT2vevuv3ic+lJ054Z+gAfHtXiGdAm6o2CbqpBN1VsC6rkE3VQLqARdQBdVJwQSgKkoSVJUFipKkkqVJJ8R5W9IzWVUeH05L44JNVwZnztUejqjjq31e8u7F7rQNirai69TY5Lwj+d/gc65qa8tVH03QrABh1FDT5c4fSTuGetM4DWz3gZNHY0Ly+lL13dw6nDcu787zeoU+jhg3ZWgZyjzkpSJJwmn52ojHqtOu7ub/WwXa0RbdNcxXBbX8vya9zU1KbO1XvjjBAEAQBAa7HaPnoXADps6be0jaPELnaUtPeLdpb1tX72me3qak88DkoHr57OJ2kZQWEF2mylNp5RVrJ8+5W9D/1cX66mYTUwMtKxuZmhGdwN7m594y3AL1Gg9JqEuhm+q93Y/R+ZoXNH+yMTkj04D2sw2qeA9gDaWRxtzjBshPvD1eIy3C+bTejGm7iktn9l9/XxKW9X+rPqt15c2ybqgJuoAuqsYF1BAuqk4F1AIuoBF1BJF0JwVJUklSVJJwXKdpsKGI01O4GslbmQf8Ap4yOuffO4ePC/odCaJdxPpqi6i/+n6c/A1rmvqLVW857kh0PJIxKoabC/wClY71jaxnI4bQPE7gV0faDSaS92pvb/Z/b18DFaUcvXfyPrJXjzpFSpJMed6ywQOi0Zo9SMyEdKWxHYwbPPb5L3Og7ToqHSPfLy4epybuprT1VwN0u2agQBAEAQBAchjtDzMus0ejkJI4Ndvb9/wCy8Tpqx6Grrx+GX0fFfc61pW146r3oxon3Xn5LBtnqFQFmlE8FWsnyLlL0CdG5+IUDDqXMk8LLh0Tr3MsYHq7yN20ZbPZ6G0zGqlQrvbuTfHsfb59+/m3Fu49aJtOTzlMbMI6TEHhk2TY6l1gyXg2Q+q/t2HfY7dfSuhHDNW3WVxjy7uzsJo3GerI+o3XlzcF1UjAuoGCbqBgXVQRdQSLqBgi6E4IJUklSVIOC0/5Q4qEPp6YtlrCCCcnR0/a7i/3fPgfQ6J0HO4aqVtkPrL8dvgate4UNkd5xWgehk2JzGurtc0xeXkvJ5yrkvsHucT4DeR3NKaUp2VPoKHx7tm6K9eS+b7cFCg6j1pbvM+2NaGgNaA1rQAABYADYANwXhW3J5e06iWAULHnI6ytFZBOG0ZqJQ31B0nn3eHjsXY0ZZO5rKL+FbX3fkwXFXo4Z48DtWgAADIDKy98kksI4pKkBAEAQBAEBj11I2aN0bth2He07iFr3VvC4pOnPj9O0vTm4SUkcXLE6J7o3izmnwI3Edi+fXdtOhUdOa2r69p26c1OOsj2Y660WsFy4KqQWBUEHzXTrkyZUF9TQBscxu59PkyKU8WHYxx4bD2b/AFGi9PunilcbVwlxXfzX17zRr2uetA5bRrTyvwl/6SrjfLDGQ0wy3ZNCPccd1tgNxstZda80Tb30elpPDfFbn3/uTWhWnTeqz63o7phQ4gB+nnbzlrmCT0czePRPW27W3HavJXmjLm1+OOzmtq/HzN6FaE9zN9dc4yi6hjAuoGBdQTgi6Ai6kGqx3SOjoW61VOyM2u1l9aV/wsGZ77WW5a2FxcvFKLfbw8Sk6sYb2fJtKeU6qrCafD2SQRvOoHDpVUt9w1ep3Nue3cvXWOgaNsukrtSa/wDVevz8DRqXMp7I7DYaEclxJZUYkLC4c2kuCXcDKRu90eO8LX0n7QJJ07ba+MvT18OZejaZ2z8D6wxoaA1oDWtAAAAAAGwAbgvISbk8s6KWAShJVzlKRJjG73BrQS5xsANpK2qNGU5KMVlsrKSiss7DCaAQRhu1xze7i78BfQLCyja0lBb+L7Ti1qrqSyZy3jEEAQBAEAQBAEBrcZwwTtysJG9V3H3T2Lm6S0fG7p7Nkluf2fYZ6Fd05dhyg1mOLXAtc02IO0FeDrUZQk4SWGt52IyUllHu111qtYLF1AJBUEGrx7R2kr2alVC2Sws146MrPheMx3bFuWl/XtZZpSx2cH8jFUpRnvR8vx7kkqYiZKCYTtGbY5CIZhbYA7quPb0V6m19pKM+rXjqvmtq9fM0J2cltjtNXFpTj2FEMnM+oDYMrIzKw90hzI7nWW3LR+jr1a0Es84vD8F90Y1Uq09j+pvqHlneLCehY7i6GYs8Q1zT9Vz6vsvB/wCOo13rPoZVePijbM5Y6H1qasB7BC7+cLTfsvccJx+voZPfI8mS7ljoN1PWnvbCP5yoXsvccZx+voPfI8mayt5Z9ogoe50s/wDK1v3W1T9ll/5Kngvz9ijveSOfqNOscxEmOn5xoORZRQuDs95fm4d9wulDROj7Ra1RLvk/tu+hiderPYvoZmDcllfUu52tlFOHG7tZ36iod32NhfiT4LDc+0NtRWrRWt9F+/ItC0nLbLYfTtG9EaLDh/y8QMlrOnks+Z3HpeqOxtgvLXmk7i7f8j2clsX5+ZvU6EIbjeErnmcglSSVc6ylLIMaSS+QzJyAGZJ4LPCm28Ihs6bAsK5oc5IPSuGzbzY4d69vonRnu0ekqfG/ouXfzOTc3HSPC3eZuF2jVCAIAgCAIAgCAIAgNbi+FNnFxZsgHRdx913YuZpHRsLuOd0luf2fZ5GxQruk+w5WRj4nFjwWuG7s4jiF4e5tp0ZuE1hnWhNTWYnoyS603HBc9LqoJuhBN1ADgCCCAQdoIuD4KU2nlENGlrdEMMmvzlDTEnaWRiJx8WWK3qelLyn8NR/Pb55MTt6b4GqfyZYOdlM9vdUT/dxW0tP33+y8EY/dKfIhnJjhA207z3zzfZwUvT99/svBD3SnyNlR6FYVDbUoac23yNM585CVrVNL3tTfUfy2eWC6t6a4G8ijawBrGtY0bGtAa0eAWhKcpPMnkyqKW4tdVLEXUgi6ElHPsrKOQeF3PIa0FzibADMlbNGjKclGKy2VlJRWWdNg2DCK0klnS7htDO7ie1e00ZomNt/JU2z8u7t7TlXFy6myO43C7RqhAEAQBAEAQBAEAQBAEBi11DHO3VeL8HDJzTxBWtdWlK5hq1F8+K7jJTqSpvMTl8QwqWC568fttGwe8Ny8dfaIq2+ZLrR5rh3o6dG5jPY9jMSOZcaUDaPdrwsbjgFrqoJugwLoBdCBdALoSLoCLoCpeFKQPF8yyKAPahw+WoPRFmb3uyb4cSurZaMrXLzFYjzf7tMFW4hT37+R1GG4ZHAOiLuPWeesfwOxexsrClaxxBZfFvecqrWlUe0zlvGIIAgCAIAgCAIAgCAIAgCAIAgNTX4FFJct9E/i0dE97fxZcm70PQr9aPVlzX3X/DZp3U4bN6NHVYPURZ6vON9qO7v4dq83c6FuaW1LWXZ6bzep3VOXYYQmtkciN29ciVNp4ZspnoJlRwJLiUKuowTzgUarA5wJqsEc6FOqwVMysoA8nTKypkZMqlwyol2MLW+0/oD8ldS20Rc1t0cLm9n5MFS5pw45N3Q6PRssZDzruBFmDw3+K9HaaDoUttTrv6eHqaNS7nLZHYblrQAALADhku0klsRqEqQEAQBAEAQBAEAQBAEAQBAEAQBAEAQHhUUkcnXYx3aQCfNYKttSqr+SKfei8ako/C8Gum0dgPV12fC64/iuubV0Faz+HMe5+uTPG8qLftMR+jB9Wb95n3BWlP2cX9anivyZlfc4nkdG5d0kZ8HBYH7O1eE19S3v0eQGjc2+SP8AiP2ReztX/dfUe/R5M9GaMu9aYfss/qs0fZz/AGqeC/JV33KJlQ6NwjrGR/e4NHyz+a3KegbaPxZl8/QxSvKj3bDY01BDH1I2NPG13eZzXSo2dCj/AI4JfvMwTqzn8TMlbJjCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgBQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/Z",
    //             "amountInfo": {
    //             "minAmount": {
    //                 "value": 0.1,
    //                     "currency": "EUR"
    //             },
    //             "averageAmount": {
    //                 "value": 1000,
    //                     "currency": "EUR"
    //             },
    //             "maxAmount": {
    //                 "value": 10000,
    //                     "currency": "EUR"
    //             },
    //             "expectedVolume": {
    //                 "value": 10000,
    //                     "currency": "EUR"
    //             }
    //         },
    //         "checkoutPageCustomization": {
    //         "logoSrc": "data:image/jpeg;base64,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"
    //     }
    //     }
    //         }).then((response) => {
    //             expect(response).property('status').to.equal(201)
    //         })
    //     })


    // cy.request({            //получение идентификатора проекта по ID мерчанта и PROJNAME
    //     method: 'GET',
    //     url: 'https://app.stage.paydo.com/v1/apps/filters',
    //     params: {
    //         "query[userIdentifier]": merchant.bussiness_account,
    //         "query[name]": "sdasdsds"
    //     },
    //     headers: {
    //         token: manager.token
    //     }
    // }).then((response) => {
    //     expect(response).property('status').to.equal(200)
    //     expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //     let projident = response.body.data[0].identifier
    //
    //     cy.request({  // accept project
    //         method: 'POST',
    //         url: "https://app.stage.paydo.com/v1/apps/" + projident + "/accept",
    //         params: {
    //             "query[userIdentifier]": merchant.bussiness_account
    //         },
    //         headers: {
    //             token: manager.token
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         //expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //
    //     })
    //})

    // Получить рейт с последней транзакции
    //     cy.request({   // получить ID последней транзакции мерчанта
    //         method: 'GET',
    //         url: 'https://app.stage.paydo.com/v1/transactions/user-transactions?query[type]=7',
    //         headers: {
    //             token: merchant.token
    //         }
    //     }).then((response) => {
    //         expect(response).property('status').to.equal(200)
    //         expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //         let identif = response.body.data[0].identifier;
    //
    //         cy.request({ //получить рейт последней транзакции подставив ID транзакции
    //             method: 'GET',
    //             url: "https://app.stage.paydo.com/v1/transactions/" + identif,
    //             headers: {
    //                 token: manager.token
    //             }
    //         }).then((response) => {
    //             expect(response).property('status').to.equal(200)
    //             expect(response.body).property('data').to.not.be.oneOf([null, ""]);
    //             let r = response.body.data.exchange[0].rate
    //             cy.log(r)
    //         })
    //     })


    before(() => {

        cy.visit('https://app.stage.paydo.com/ru/auth/registration');

        cy.setLocalStorage("item", 'disable-captcha', true);
        cy.visit('https://app.stage.paydo.com/ru/auth/registration')
        window.localStorage.setItem('disable-captcha', 'true');

    })
})


        it('sends confirmation mail after registration', () => {

            cy.visit('https://app.stage.paydo.com/ru/auth/registration');


            //cy.get("input[name=\"email\"]").type(`qaevergreens+${Cypress.env('current_client')}@gmail.com`);
            cy.get("input[name=\"email\"]").type(`eugeniy.o+test0709@payop.com`);
            cy.get("input[formcontrolname=\"password\"]").type("eugeniy.o+test0709@payop.com");
            cy.get("input[formcontrolname=\"passwordConfirm\"]").type("eugeniy.o+test0709@payop.com");
            cy.get('.mat-checkbox-inner-container').click();
            cy.wait(90000);
            cy.get('button.submit-btn').click();

            cy.task("gmail:getMessage", {
                from: "support@paydo.com",
                //to: `qaevergreens+${Cypress.env('current_client')}@gmail.com`,
                to: `eugeniy.o+test0709@payop.com`,
                subject: "Your One-time Authorization Code"
            }, {timeout: 120000}).then(email => {

                assert.isNotNull(email, `Check that email present`);

                cy.parse(email.body.html).then((emailContent) => {

                    let title = emailContent.find("h1").eq(5).text();
                    expect(title.includes("successfully registered")).to.equal(true);

                    let activationLink = emailContent.find("a[href*=\"user-activate\"]").attr("href");
                    cy.visit(activationLink)
                    cy.wait(200000)

                });

            });


        })


    // it('sends mail after successful account activation', () => {
    //
    //     cy.task("gmail:getMessage", {
    //         from: "support@payop.com",
    //         to: `qaevergreens+${Cypress.env('current_client')}@gmail.com`,
    //         subject: "Your PayOp account has been activated"
    //     },{timeout:120000}).then(email => {
    //
    //         assert.isNotNull(email, `Check that email present`);
    //
    //     })
    // });









    //
    // before (() => {
    //
    //             cy.visit('https://app.stage.paydo.com/ru/auth/registration');
    //
    //     cy.setLocalStorage("item", 'disable-captcha', true);
    //
    //         })
    //
    //             it('sends confirmation mail after registration', () => {
    //
    //                 //cy.visit('https://app.stage.paydo.com/ru/auth/registration');
    //
    //
    //                 //cy.get("input[name=\"email\"]").type(`qaevergreens+${Cypress.env('current_client')}@gmail.com`);
    //                 cy.get("input[name=\"email\"]").type(`eugeniy.o+test0709@payop.com`);
    //                 cy.get("input[formcontrolname=\"password\"]").type("eugeniy.o+test0709@payop.com");
    //                 cy.get("input[formcontrolname=\"passwordConfirm\"]").type("eugeniy.o+test0709@payop.com");
    //                 cy.get('.mat-checkbox-inner-container').click();
    //                 cy.wait(90000);
    //                 cy.get('button.submit-btn').click();
    //
    //                 cy.task("gmail:getMessage", {
    //                     from: "support@paydo.com",
    //                     //to: `qaevergreens+${Cypress.env('current_client')}@gmail.com`,
    //                     to: `eugeniy.o+test0709@payop.com`,
    //                     subject: "Your One-time Authorization Code"
    //                 },{timeout:120000}).then(email => {
    //
    //                     assert.isNotNull(email, `Check that email present`);
    //
    //                     cy.parse(email.body.html).then((emailContent) => {
    //
    //                         let title = emailContent.find("h1").eq(5).text();
    //                         expect(title.includes("successfully registered")).to.equal(true);
    //
    //                         let activationLink = emailContent.find("a[href*=\"user-activate\"]").attr("href");
    //                         cy.visit(activationLink)
    //                         cy.wait(200000)
    //
    //                     });
    //
    //                 });
    //
    //             });



        // it('sends mail after successful account activation', () => {
        //
        //     cy.task("gmail:getMessage", {
        //         from: "support@payop.com",
        //         to: `qaevergreens+${Cypress.env('current_client')}@gmail.com`,
        //         subject: "Your PayOp account has been activated"
        //     },{timeout:120000}).then(email => {
        //
        //         assert.isNotNull(email, `Check that email present`);
        //
        //     })
        // });






