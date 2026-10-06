import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodYourDocumentsMainFormPage extends basePage {
    readonly documentTypeTextField: Locator;
    readonly documentDescriptionTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.documentTypeTextField = page.locator('#enter-document-type');
        this.documentDescriptionTextField = page.locator('#document-description');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Your documents – Cancel an application and get your documents back – GOV.UK"
            : "Your documents – Cancel an application and get your documents back – GOV.UK";
    }

    // otherDocumentType is only entered when the "Other" option is selected.
    async completeYourDocumentsPage(documentOption: string, documentDescription: string, otherDocumentType = '') {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionWithText(documentOption);
        if (otherDocumentType) {
            await this.type(this.documentTypeTextField, otherDocumentType);
        }
        await this.type(this.documentDescriptionTextField, documentDescription);
        await this.clickContinueButton();
    }
}
