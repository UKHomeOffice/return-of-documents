import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class checkYourAnswersRodMainFormPage extends basePage {
    readonly confirmSubmissionButton: Locator;

    constructor(page: Page) {
        super(page);
        this.confirmSubmissionButton = page.locator('#gov-grid-row-content form input[type="submit"]').first();
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: – Cancel an application and get your documents back – GOV.UK"
            : "– Cancel an application and get your documents back – GOV.UK";
    }

    async completeCheckYourAnswersPage() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.click(this.confirmSubmissionButton);
    }
}
