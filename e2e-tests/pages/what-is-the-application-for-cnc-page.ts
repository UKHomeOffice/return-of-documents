import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whatIsTheApplicationForCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: What is the application for? – Cancel a return of documents request – GOV.UK"
            : "What is the application for? – Cancel a return of documents request – GOV.UK";
    }

    async completeWhatIsTheApplicationForPage(applicationType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(applicationType);
    }
}
