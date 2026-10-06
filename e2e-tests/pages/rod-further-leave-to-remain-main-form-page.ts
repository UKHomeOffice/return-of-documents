import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodFurtherLeaveToRemainMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Further leave to remain (permission to stay) – Cancel an application and get your documents back – GOV.UK"
            : "Further leave to remain (permission to stay) – Cancel an application and get your documents back – GOV.UK";
    }

    async completeFurtherLeaveToRemainPage(furtherLeaveType: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(furtherLeaveType);
    }
}
