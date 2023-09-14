import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { pageFixture } from '../../hooks/pageFixture'

Given('User click Whats on your mind button',async () => {
  await pageFixture.page.locator(`//div[contains(@class,'xi81zsa x1lkfr7t')]//span[1]`).click()
})

Given('User fill the post field with {string}', async (post: string) => {
  await pageFixture.page.locator(`(//div[contains(@class,'xi81zsa x6ikm8r')])[2]`).type(post)
})

When('User click post button', async () => {
  await pageFixture.page.locator(`//span[text()='Post']`).click()
})

Then('User create post success', async () => {
  const post = pageFixture.page.getByText('Hello this is automation test')
  await expect(post).toContainText('Hello this is automation test')
})