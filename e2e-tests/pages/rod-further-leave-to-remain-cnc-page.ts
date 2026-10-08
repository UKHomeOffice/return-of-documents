import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodFurtherLeaveToRemainCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Further leave to remain (permission to stay) – Cancel a return of documents request – GOV.UK"
            : "Further leave to remain (permission to stay) – Cancel a return of documents request – GOV.UK";
    }

    async completeFurtherLeaveToRemainPage(furtherLeaveType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(furtherLeaveType);
    }
}
