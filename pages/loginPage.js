class LoginPage {
  constructor(page) {
    this.page = page;
    this.instituteLoginButton = page.getByRole('button', { name: 'Institute Login', exact: true });
    this.emailInput = page.locator('#institute-login-email, input[type="email"]').first();
    this.passwordInput = page.locator('#institute-login-password, input[type="password"]').first();
    this.signInButton = page.locator('button[type="submit"]').first();
    this.dashboardHeading = page.getByText('School Admin', { exact: true });
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async login(email, password) {
    if (await this.instituteLoginButton.isVisible().catch(() => false)) {
      await this.instituteLoginButton.click();
    }
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.dashboardHeading.waitFor({ state: 'visible' });
  }
}

module.exports = { LoginPage };
