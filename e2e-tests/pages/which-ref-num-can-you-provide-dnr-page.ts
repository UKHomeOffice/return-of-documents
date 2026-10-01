import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class whichRefNumCanYouProvideDNRPage extends basePage {
    readonly referenceNumberTextFields: Record<string, Locator>;

    constructor(page: Page) {
        super(page);
        this.referenceNumberTextFields = {
            'Record number': page.locator('#dnr-record-number'),
            'Case ID': page.locator('#dnr-case-id'),
            'Home Office reference number': page.locator('#dnr-ho-reference-number'),
            'Payment reference number': page.locator('#dnr-payment-reference-number'),
            'Courier reference number': page.locator('#dnr-courier-reference-number'),
            'Unique Application Number (UAN)': page.locator('#dnr-unique-application-number'),
        };
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Which reference number can you provide? – Report documents not received – GOV.UK"
            : "Which reference number can you provide? – Report documents not received – GOV.UK";
    }

    async completeWhichReferenceNumberPage(referenceType: string, referenceNumber: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionWithText(referenceType);
        await this.type(this.referenceNumberTextFields[referenceType], referenceNumber);
        await this.clickContinueButton();
    }
}
