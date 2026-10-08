import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class rodAreYouDependantOrGuardianCncPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Are you a dependant or a guardian of a dependant? – Cancel a return of documents request – GOV.UK"
            : "Are you a dependant or a guardian of a dependant? – Cancel a return of documents request – GOV.UK";
    }

    async completeAreYouDependantOrGuardianPage(dependantOrGuardian: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.selectRadioOptionAndContinue(dependantOrGuardian);
    }
}
