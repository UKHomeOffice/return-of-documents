import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whoIsCompletingMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Who is completing this form? – Cancel an application and get your documents back – GOV.UK"
            : "Who is completing this form? – Cancel an application and get your documents back – GOV.UK";
    }

    async completeWhoIsCompletingPage(whoIsCompleting: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(whoIsCompleting);
    }
}
