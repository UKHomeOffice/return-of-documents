import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodCancelYourRequestHomePage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Cancel a request to return your documents – GOV.UK"
            : "Cancel a request to return your documents – GOV.UK";
    }

    async completeLandingPageForm() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.clickStartNowButton();
    }
}
