
import { NewAdministratorUsersBuilder, NewRegularUsersBuilder } from "../../support/builders/newUsers.builder";

describe('API - Serverest New User Test', () => {

    // Testing GitHub Actions CI/CD pipeline
    it('Register regular user successfully', () => {
        const newUser = NewRegularUsersBuilder.new().build();

        cy.request({ method: 'POST', url: '/usuarios', body: newUser })
            .then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.message).to.contain('Cadastro realizado com sucesso')
            })
    })

    it('Register administrator user successfully', () => {
        const newAdminUser = NewAdministratorUsersBuilder.new().build();

        cy.request({ method: 'POST', url: '/usuarios', body: newAdminUser })
            .then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.message).to.contain('Cadastro realizado com sucesso')
            })
    })
})

