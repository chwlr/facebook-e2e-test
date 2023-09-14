import * as dotenv from 'dotenv'
import { Given, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { pageFixture } from '../../hooks/pageFixture'

dotenv.config()

Given('User navigates to facebook',async () => {
  await pageFixture.page.goto('https://www.facebook.com')
})

Given('User login with valid credentials', async () => {
  await pageFixture.page.locator('//*[@id="email"]').type(`${process.env.FACEBOOK_EMAIL}`)
  await pageFixture.page.locator('//*[@id="pass"]').type(`${process.env.FACEBOOK_PASSWROD}`)
  await pageFixture.page.locator(`//button[contains(@name, 'login')]`).click()
})

Then('Login should be success', async () => {
  await pageFixture.page.getByRole('link').filter({ hasText: /Client Doe/ })
})

Then('User login with invalid credentials', async () => {
  await pageFixture.page.locator('//*[@id="email"]').type(`${process.env.FACEBOOK_INVALID_EMAIL}`)
  await pageFixture.page.locator('//*[@id="pass"]').type(`${process.env.FACEBOOK_INVALID_PASSWORD}`)
  await pageFixture.page.locator(`//button[contains(@name, 'login')]`).click()
})

Then('Login should not be success', async () => {
  const home = await pageFixture.page.locator(`//a[contains(@aria-label, 'Home')]`)
  await expect(home).toBeNull
})









// Then('Login should not be success', async () => {
//   const failureMessage = await page.locator('//*[@id="facebook"]/body/div[3]/div[2]/div/div/div/div/div[5]/text()')
//   await expect(failureMessage).toBeVisible({
//     timeout: 30000,
//   })
//   browser.close()
// })


