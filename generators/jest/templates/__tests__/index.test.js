import { beforeAll } from '@jest/globals'
import { createApp } from './helpers'
import { createInstaller } from '../src/main.js'

const filePath = 'src/main.js'

describe(`export function createInstaller (${filePath})`, () => {
  const app = createApp()
  const getGreeting = () => `hello from test`

  beforeAll(() => {
    app.install(createInstaller(), { getGreeting })
  })

  it('Should work the $getGreeting global property', () => {
    // Arrange
    const { $getGreeting } = app.config.globalProperties
    const expected = getGreeting()

    // Act
    const result = $getGreeting()

    // Assert
    expect(result).toBe(expected)
  })
})
