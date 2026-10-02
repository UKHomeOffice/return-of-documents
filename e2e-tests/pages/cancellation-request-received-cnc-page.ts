import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class cancellationRequestReceivedCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Cancellation request received – Cancel a return of documents request – GOV.UK"
            : "Cancellation request received – Cancel a return of documents request – GOV.UK";
    }
}
