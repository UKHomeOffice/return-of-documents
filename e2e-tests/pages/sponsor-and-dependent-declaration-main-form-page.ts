import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class sponsorAndDependentDeclarationMainFormPage extends basePage {
    readonly submitRequestButton: Locator;

    constructor(page: Page) {
        super(page);
        this.submitRequestButton = page.locator('#report-submit input');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Declaration – Cancel an application and get your documents back – GOV.UK"
            : "Declaration – Cancel an application and get your documents back – GOV.UK";
    }

    async completeDeclarationPage(declarationConfirmation: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectCheckboxOptionWithText(this.page, declarationConfirmation);
        await this.click(this.submitRequestButton);
    }
}
