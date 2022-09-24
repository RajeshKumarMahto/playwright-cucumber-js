class LoginPage{
    async navigateToLoginScreen() {
        await page.goto('https://www.saucedemo.com/')
    }

    async submitLoginForm() {
        await page.fill('input#user-name', 'standard_user')
        await page.fill('input#password', 'secret_sauce')
        await page.click('input#login-button')
        
    }
    async submitLoginFormWithInvalidCredential(username, password) {
        await page.fill('input#user-name', username)
        await page.fill('input#password', password)
        await page.click('input#login-button')
    }
    async assertUserIsLoggedIn() {
        expect(await page.title()).to.equal('Swag Labs')
    }
    
    async getErrorMessage() {
        await page.waitForSelector('div.error-message-container>h3')
        const loginErrorTxt = await page.$eval('h3', el => el.textContent)
        return loginErrorTxt 
    }

}

module.exports= {LoginPage}