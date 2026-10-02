import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class whichReferenceNumberYouProvideCncPage extends basePage {
    readonly referenceNumberTextFields: Record<string, Locator>;

    constructor(page: Page) {
        super(page);
        this.referenceNumberTextFields = {
            'Record number': page.locator('#enter-record-number'),
            'Case ID': page.locator('#enter-case-id'),
            'Home Office reference number': page.locator('#enter-ho-reference-number'),
            'Payment reference number': page.locator('#enter-payment-reference-number'),
            'Courier reference number': page.locator('#enter-courier-reference-number'),
            'Unique Application Number (UAN)': page.locator('#enter-unique-application-number'),
        };
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Which reference number can you provide? – Cancel a return of documents request – GOV.UK"
            : "Which reference number can you provide? – Cancel a return of documents request – GOV.UK";
    }

    async completeWhichReferenceNumberPage(referenceType: string, referenceNumber: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionWithText(referenceType);
        await this.type(this.referenceNumberTextFields[referenceType], referenceNumber);
        await this.clickContinueButton();
    }
}
