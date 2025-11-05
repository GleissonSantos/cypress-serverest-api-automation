import { NewAdministratorUsersBuilder, NewRegularUsersBuilder } from "./builders/newUsers.builder";


Cypress.Commands.add('loginAsAdmin', () => {
    const newAdminUser = NewAdministratorUsersBuilder.new().build();

    cy.request({ method: 'POST', url: '/usuarios', body: newAdminUser })
        .then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.message).to.contain('Cadastro realizado com sucesso')
        })
    return cy.request({ method: 'POST', url: '/login', body: { email: newAdminUser.email, password: newAdminUser.password } })
        .then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.contain('Login realizado com sucesso')
            expect(res.body).to.have.property('authorization')

            return res.body.authorization;
        });
});

Cypress.Commands.add('createProduct', (token, product) => {
    return cy.request({ method: 'POST', url: '/produtos', body: product, headers: { Authorization: token } });
});
