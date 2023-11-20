import { App } from 'Vue'

/** Class used to install the plugin. */
export class Installer {
  #getGreeting
  #greet

  constructor(getGreeting, greet) {
    this.#getGreeting = getGreeting
    this.#greet = greet
  }

  /**
   * Method used to add the getGreeting function in app instance created by
   * createApp.
   *
   * @param {App<Element>} app An app instance generated by createApp.
   * @param {() => string} getGreeting A function used to obtain a greeting to
   *   the user.
   */
  #addGetGreetingToApp(app, getGreeting) {
    app.config.globalProperties.$getGreeting = getGreeting
  }

  /**
   * Method used to add the greet function in app instance created by createApp.
   *
   * @param {App<Element>} app An app instance generated by createApp.
   * @param {(greeting: string) => void} greet A function used to greet to the
   *   user.
   */
  #addGreetToApp(app, greet) {
    app.config.globalProperties.$greet = greet
  }

  /**
   * Method used to install a Vue plugin.
   *
   * @param {App<Element>} app An app instance generated by createApp.
   * @param {object} [options] Options used to install this plugin.
   * @param {() => string} [options.getGreeting] A function used to obtain a
   *   greeting to the user.
   * @param {(gretting: string) => void} [options.greet] A function used to
   *   greet to the user.
   */
  install(app, options = {}) {
    const { getGreeting = this.#getGreeting, greet = this.#greet } = options

    this.#addGetGreetingToApp(app, getGreeting)
    this.#addGreetToApp(app, greet)
  }
}
