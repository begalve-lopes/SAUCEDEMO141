const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')

describe('Selecionar Produto', function() {
    this.timeout(30000)
    let driver
    
    beforeEach(async function() {
        // Configurar opções do Chrome
        const options = new chrome.Options()
        // Inicializar o driver
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.manage().setTimeouts({implicit:30000})
    })
    
    afterEach(async function() {
        if (driver) {
            await driver.quit()
        }
    })
    
    it('Selecionar Produto', async function() {
        await driver.get('https://www.saucedemo.com/')

        await driver.findElement(By.name('user-name')).sendKeys('standard_user')
        await driver.findElement(By.name('password')).sendKeys('secret_sauce')
        await driver.findElement(By.id('login-button')).click()
        
        // Aguardar o título carregar
        const titleElement = await driver.findElement(By.css('.title'))
        const titleText = await titleElement.getText()
        assert(titleText, 'Products')
        
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click()
        
        // Verificar se o produto foi adicionado ao carrinho
        const cartBadge = await driver.findElement(By.className('shopping_cart_badge'))
        const cartCount = await cartBadge.getText()
        assert(cartCount, '1')

        await driver.findElement(By.className('shopping_cart_link')).click()
        const cartItem = await driver.findElement(By.className('cart_item'))
        const cartItemText = await cartItem.getText()
        assert(cartItemText, 'Sauce Labs Backpack')
        await driver.findElement(By.id('react-burger-menu-btn')).click()
        // await driver.sleep(3000)
        await driver.findElement(By.id('logout_sidebar_link')).click()
    })
})