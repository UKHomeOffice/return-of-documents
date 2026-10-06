import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodFurtherLeaveToRemainDNRPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Further leave to remain (permission to stay) – Report documents not received – GOV.UK"
            : "Further leave to remain (permission to stay) – Report documents not received – GOV.UK";
    }

    async completeFurtherLeaveToRemainPage(furtherLeaveType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(furtherLeaveType);
    }
}
