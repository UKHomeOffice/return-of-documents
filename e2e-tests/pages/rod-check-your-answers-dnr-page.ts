import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodCheckYourAnswersDNRPage extends basePage {
    readonly submitReportButton: Locator;

    constructor(page: Page) {
        super(page);
        this.submitReportButton = page.locator('#report-submit input');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: – Report documents not received – GOV.UK"
            : "– Report documents not received – GOV.UK";
    }

    async completeCheckYourAnswersPage() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.click(this.submitReportButton);
    }
}
