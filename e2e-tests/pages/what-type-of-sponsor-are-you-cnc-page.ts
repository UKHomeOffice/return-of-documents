import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whatTypeOfSponsorAreYouCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: What type of sponsor are you? – Cancel a return of documents request – GOV.UK"
            : "What type of sponsor are you? – Cancel a return of documents request – GOV.UK";
    }

    async completeWhatTypeOfSponsorAreYouPage(sponsorType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(sponsorType);
    }
}
