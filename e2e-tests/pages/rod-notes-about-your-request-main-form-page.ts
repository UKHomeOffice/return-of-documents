import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodNotesAboutYourRequestMainFormPage extends basePage {
    readonly notesTextArea: Locator;

    constructor(page: Page) {
        super(page);
        this.notesTextArea = page.getByLabel('Enter any relevant details about your request, for example if you need your documents urgently');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Notes about your request (optional) – Cancel an application and get your documents back – GOV.UK"
            : "Notes about your request (optional) – Cancel an application and get your documents back – GOV.UK";
    }

    async completeNotesAboutYourRequestPage(notes: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.type(this.notesTextArea, notes);
        await this.clickContinueButton();
    }
}
