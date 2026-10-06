import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodAboutTheApplicationMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: About the application – Cancel an application and get your documents back – GOV.UK"
            : "About the application – Cancel an application and get your documents back – GOV.UK";
    }

    // Sponsors are not asked whether to cancel, so pass an empty cancelApplication to skip the radio.
    async completeAboutTheApplicationPage(day: string, month: string, year: string, cancelApplication: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.enterDate(day, month, year);
        if (cancelApplication) {
            await this.selectRadioOptionWithText(cancelApplication);
        }
        await this.clickContinueButton();
    }
}
