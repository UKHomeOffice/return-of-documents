import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodReportSubmittedDNRPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Report submitted – Report documents not received – GOV.UK"
            : "Report submitted – Report documents not received – GOV.UK";
    }
}
