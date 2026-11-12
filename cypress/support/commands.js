Cypress.Commands.add('checkOTP', () => {
  cy.get('.otp-block')
    .should('be.visible')
    .then(($block) => {
      const inputs = $block.find('input');

      cy.log(`Found ${inputs.length} OTP inputs`);

      inputs.each((index, el) => {
        cy.log(`Input ${index + 1}: type=${el.type}`);
      });
    });
});

Cypress.Commands.add('fillOTP', (otp) => {
  cy.get('.otp-block')
    .should('be.visible')
    .find('input:visible')
    .should('have.length', otp.length)
    .each(($input, index) => {
      cy.wrap($input).type(otp[index]);
    });
});

Cypress.Commands.add('captureScreen', (name) => {
  cy.screenshot(name, {
    capture: 'fullPage',
    overwrite: true
  });
});
