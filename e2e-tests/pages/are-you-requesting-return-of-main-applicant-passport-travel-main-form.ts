import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class areYouRequestingReturnOfMainApplicantPassportTravelMainForm extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Are you requesting the return of the main applicant's passport for travel? – Cancel an application and get your documents back – GOV.UK"
            : "Are you requesting the return of the main applicant's passport for travel? – Cancel an application and get your documents back – GOV.UK";
    }

    async completeReturnOfPassportForTravelPage(requestingReturn: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(requestingReturn);
    }
}
