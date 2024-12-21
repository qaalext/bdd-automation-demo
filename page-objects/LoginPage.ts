import { Locator, Page } from "playwright";

export class LoginPage {

    private readonly _userName : Locator;
    private readonly _password : Locator;
    private readonly _loginButton: Locator;
    private readonly _page : Page;
    private readonly _errorMessage : Locator;

    constructor(page : Page) {
        this._page = page;
        this._userName = page.locator("#user-name");
        this._password = page.locator("#password");
        this._loginButton = page.locator("#login-button");
        this._errorMessage = page.locator("//h3[@data-test='error']")
    }

    public get errorMessage() {
        return this._errorMessage;
    }

    async enterEmail(email : string) {
        await this._userName.fill(email);
    }

    async enterPassword(password : string) {
        await this._password.fill(password);
    }

    async clickLoginButton() {
        await this._loginButton.click();
    }

    async goToLoginPage() {
        await this._page.goto(process.env.BASE_URL!);
    }
    


}