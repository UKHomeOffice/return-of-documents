import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class whichReferenceNumberCanYouProvideMainFormPage extends basePage {
    readonly referenceNumberTextFields: Record<string, Locator>;

    constructor(page: Page) {
        super(page);
        this.referenceNumberTextFields = {
            'Record number': page.locator('#enter-record-number'),
            'Case ID': page.locator('#rod-case-id'),
            'Home Office reference number': page.locator('#rod-ho-reference-number'),
            'Payment reference number': page.locator('#rod-payment-reference-number'),
            'Courier reference number': page.locator('#rod-courier-reference-number'),
            'Unique Application Number (UAN)': page.locator('#rod-unique-application-number'),
        };
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Which reference number can you provide? – Cancel an application and get your documents back – GOV.UK"
            : "Which reference number can you provide? – Cancel an application and get your documents back – GOV.UK";
    }

    async completeWhichReferenceNumberPage(referenceType: string, referenceNumber: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionWithText(referenceType);
        await this.type(this.referenceNumberTextFields[referenceType], referenceNumber);
        await this.clickContinueButton();
    }
}
