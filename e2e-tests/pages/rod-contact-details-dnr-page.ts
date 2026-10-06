import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodContactDetailsDNRPage extends basePage {
    readonly emailTextField: Locator;
    readonly telephoneTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.emailTextField = page.locator('#dnr-email');
        this.telephoneTextField = page.locator('#dnr-telephone');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Contact details – Report documents not received – GOV.UK"
            : "Contact details – Report documents not received – GOV.UK";
    }

    async completeContactDetailsPage(email: string, telephone: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.type(this.emailTextField, email);
        await this.type(this.telephoneTextField, telephone);
        await this.clickContinueButton();
    }
}
