import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whoAreYouLegallyRepresentingMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Who are you legally representing? – Cancel an application and get your documents back – GOV.UK"
            : "Who are you legally representing? – Cancel an application and get your documents back – GOV.UK";
    }

    async completeWhoAreYouLegallyRepresentingPage(representing: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(representing);
    }
}
