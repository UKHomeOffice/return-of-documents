import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodDocNotReceivedHomePage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Report that you have not received your documents – GOV.UK"
            : "Report that you have not received your documents – GOV.UK";
    }

    async completeLandingPageForm() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.clickStartNowButton();
    }
}
