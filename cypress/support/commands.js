
import 'cypress-file-upload';


Cypress.Commands.add('form_request', (method, url, formData, done) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        done(xhr);
    };
    xhr.onerror = function () {
        done(xhr);
    };
    xhr.send(formData);
});

Cypress.Commands.add('uploadFile', { prevSubject: true }, (subject, fixturePath, mimeType) => {
    cy.fixture(fixturePath, 'base64').then(content => {
        Cypress.Blob.base64StringToBlob(content, mimeType).then((blob) => {
            const testfile = new File([blob], fixturePath, { type: mimeType });
            const dataTransfer = new DataTransfer();
            const fileInput = subject[0];

            dataTransfer.items.add(testfile);
            fileInput.files = dataTransfer.files;

            cy.wrap(subject).trigger('change', { force: true });
        });
    });
});

Cypress.Commands.add("remove_captcha",()=>{
    localStorage.setItem('disable-captcha', true);
});

Cypress.Commands.add("generateClient",() => {
    Cypress.env('current_client',Math.random().toString(36).substring(3))
});

Cypress.Commands.add("parse",(string) => {

    var el = document.createElement( 'html' );
    el.innerHTML = parse(string).toString();
    return el;

});

Cypress.Commands.add('uploadFile', (fileNamePath, fileName, fileType = ' ', selector) => {
    cy.get(selector).then(subject => {
        cy.fixture(fileNamePath, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = subject[0];
                const testFile = new File([blob], fileName, {
                    type: fileType
                });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files
            })
    })
});