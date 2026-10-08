import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodWhatIsTheApplicationForDNRPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: What is the application for? – Report documents not received – GOV.UK"
            : "What is the application for? – Report documents not received – GOV.UK";
    }

    async completeWhatIsTheApplicationForPage(applicationType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(applicationType);
    }
}
