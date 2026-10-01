import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whoIsCompletingOriginalFormCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Who completed the original form? – Cancel a return of documents request – GOV.UK"
            : "Who completed the original form? – Cancel a return of documents request – GOV.UK";
    }

    async completeWhoCompletedTheOriginalFormPage(whoCompleted: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(whoCompleted);
    }
}
