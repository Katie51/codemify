describe('example to-do app', () => {
    beforeEach(() => {
    
      cy.visit('/')
    })
  
    it('change for night', () => {
   
      cy.get('[class="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-3tapkp"]').check();
    })
    // it('tc name', () => {
   
      // cy.get('').should('')
    // })
})

