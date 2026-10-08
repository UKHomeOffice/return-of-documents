import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class rodMainApplicantDetailsDNRPage extends basePage {
    readonly fullNameTextField: Locator;
    readonly nationalityTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameTextField = page.locator('#dnr-full-name');
        this.nationalityTextField = page.locator('#dnr-nationality');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Main applicant’s details – Report documents not received – GOV.UK"
            : "Main applicant’s details – Report documents not received – GOV.UK";
    }

    async completeMainApplicantDetailsPage(fullName: string, day: string, month: string, year: string, nationality: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.type(this.fullNameTextField, fullName);
        await this.enterDate(day, month, year);
        await this.typeAutocomplete(this.nationalityTextField, nationality);
        await this.clickContinueButton();
    }
}
