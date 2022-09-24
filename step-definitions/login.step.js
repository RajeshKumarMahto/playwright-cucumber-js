const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given(`I visit a login page`, async () => {
    // await page.goto('https://www.saucedemo.com/')
    await loginPage.navigateToLoginScreen()
})

When(`I fill the login form with valid credentials`, async () => {
    // await page.fill('input#user-name', 'standard_user')
    // await page.fill('input#password', 'secret_sauce')
    // await page.click('input#login-button')
    // console.log(`username and password Entered`)
    await loginPage.submitLoginForm()
    
})

Then(`I should see the home page`, async () => {
    // console.log(await page.title())
    // expect(await page.title()).to.equal('Swag Labs')
   await loginPage.assertUserIsLoggedIn()

})

When('I fill the login form with invalid {string} and {string} and click on login button', (username, password) => {
    loginPage.submitLoginFormWithInvalidCredential(username, password)
})

Then('error {string} should be displayed', async (errormsg) => {
    const errorMsg = await loginPage.getErrorMessage()
    await expect(errorMsg).to.equal(errormsg)
})
