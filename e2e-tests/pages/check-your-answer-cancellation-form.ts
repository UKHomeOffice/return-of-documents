import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class checkYourAnswerCancellationForm extends basePage {
    readonly submitCancellationButton: Locator;

    constructor(page: Page) {
        super(page);
        this.submitCancellationButton = page.locator('#report-submit input');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: – Cancel a return of documents request – GOV.UK"
            : "– Cancel a return of documents request – GOV.UK";
    }

    async completeCheckYourAnswersPage() {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.click(this.submitCancellationButton);
    }
}
