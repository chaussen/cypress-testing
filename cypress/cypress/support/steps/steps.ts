import 'cypress-map'

export const FUNC = () => null;

export function test() {
    cy.get('table').table().map('innerText');
}