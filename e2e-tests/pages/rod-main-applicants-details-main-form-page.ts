import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodMainApplicantsDetailsMainFormPage extends basePage {
    readonly fullNameTextField: Locator;
    readonly nationalityTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameTextField = page.locator('#main-applicant-full-name');
        this.nationalityTextField = page.locator('#main-applicant-nationality');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Main applicant’s details – Cancel an application and get your documents back – GOV.UK"
            : "Main applicant’s details – Cancel an application and get your documents back – GOV.UK";
    }

    async completeMainApplicantsDetailsPage(fullName: string, day: string, month: string, year: string, nationality: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.type(this.fullNameTextField, fullName);
        await this.enterDate(day, month, year);
        await this.typeAutocomplete(this.nationalityTextField, nationality);
        await this.clickContinueButton();
    }
}
