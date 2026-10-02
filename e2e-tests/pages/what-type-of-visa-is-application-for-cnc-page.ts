import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class whatTypeOfVisaIsApplicationForCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: What type of visa is the application for? – Cancel a return of documents request – GOV.UK"
            : "What type of visa is the application for? – Cancel a return of documents request – GOV.UK";
    }

    async completeWhatTypeOfVisaPage(visaType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(visaType);
    }
}
