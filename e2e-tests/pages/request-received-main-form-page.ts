import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class requestReceivedMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Request received – Cancel an application and get your documents back – GOV.UK"
            : "Request received – Cancel an application and get your documents back – GOV.UK";
    }
}
