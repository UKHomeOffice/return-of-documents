import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class youCannotUseThisPassportToTravelMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: You cannot use this passport to travel – Cancel an application and get your documents back – GOV.UK"
            : "You cannot use this passport to travel – Cancel an application and get your documents back – GOV.UK";
    }

    async completeYouCannotUseThisPassportToTravelPage() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.clickContinueButton();
    }
}
