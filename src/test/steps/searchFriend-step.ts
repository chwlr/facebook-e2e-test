import { Given, Then } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture"

Given('User fill the search field with {string}', async (friend: string) => {
  await pageFixture.page.waitForLoadState()
  await pageFixture.page.locator(`//input[@aria-label='Search Facebook']`).type(friend)
  await pageFixture.page.keyboard.press('Enter');
})

Then('User found a friend on facebook', async () => {
  await pageFixture.page.waitForLoadState()
  await pageFixture.page.locator(`(//span[text()='Mark Zuckerberg'])[1]`).textContent()
})
