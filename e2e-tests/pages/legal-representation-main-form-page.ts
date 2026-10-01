import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class legalRepresentationMainFormPage extends basePage {
    readonly nameOfLegalFirmRepTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.nameOfLegalFirmRepTextField = page.locator('#legal-rep-name');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Legal representation – Cancel an application and get your documents back – GOV.UK"
            : "Legal representation – Cancel an application and get your documents back – GOV.UK";
    }

    async completeLegalRepresentationPage(letterOfAuthorityConfirmation: string, legalFirmName: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectCheckboxOptionWithText(this.page, letterOfAuthorityConfirmation);
        await this.type(this.nameOfLegalFirmRepTextField, legalFirmName);
        await this.clickContinueButton();
    }
}
