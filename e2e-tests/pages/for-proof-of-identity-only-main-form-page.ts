import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class forProofOfIdentityOnlyMainFormPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: For proof of identity only – Cancel an application and get your documents back – GOV.UK"
            : "For proof of identity only – Cancel an application and get your documents back – GOV.UK";
    }
}
