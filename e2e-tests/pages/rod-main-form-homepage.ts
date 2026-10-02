import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodMainFormHomepage extends basePage {
    readonly reportDocumentsNotReceivedLink: Locator;
    readonly cancelYourRequestLink: Locator;

    constructor(page: Page) {
        super(page);
        this.reportDocumentsNotReceivedLink = page.getByRole('link', { name: 'Report that you have not received your documents' }).first();
        this.cancelYourRequestLink = page.getByRole('link', { name: 'Cancel your request to return documents' }).first();
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Cancel an application and get your documents back – GOV.UK"
            : "Cancel an application and get your documents back – GOV.UK";
    }

    async openLandingPage() {
        await this.navigateToUrl();
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.acceptCookies();
    }

    async completeLandingPageForm() {
        await this.clickStartNowButton();
    }

    async clickReportDocumentsNotReceivedLink() {
        await this.click(this.reportDocumentsNotReceivedLink);
    }

    async clickCancelYourRequestLink() {
        await this.click(this.cancelYourRequestLink);
    }
}
