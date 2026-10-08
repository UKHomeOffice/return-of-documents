import { Page, Locator, expect } from '@playwright/test';

export class basePage {
    readonly page: Page;

    // Common locators
    readonly headerText: Locator;
    readonly continueButton: Locator;
    readonly startNowButton: Locator;
    readonly acceptCookieButton: Locator;
    readonly hideThisMessageButton: Locator;
    readonly dayTextField: Locator;
    readonly monthTextField: Locator;
    readonly yearTextField: Locator;
    readonly thereIsAProblemText: Locator;
    readonly errorSummaryList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerText = page.locator('h1');
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.startNowButton = page.locator("[class='govuk-button govuk-button--start']");
        this.acceptCookieButton = page.getByRole('button', { name: 'Accept additional cookies' });
        this.hideThisMessageButton = page.getByRole('button', { name: /^Hide/ });
        this.dayTextField = page.locator("input[id*='day']");
        this.monthTextField = page.locator("input[id*='month']");
        this.yearTextField = page.locator("input[id*='year']");
        this.thereIsAProblemText = page.locator('#error-summary-title');
        this.errorSummaryList = page.locator("[class='govuk-list govuk-error-summary__list']");
    }

    async assertPageTitle(page: Page, title: string) {
        await expect(page).toHaveTitle(title);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async type(locator: Locator, text: string) {
        await locator.fill(text);
        await this.page.keyboard.press('Tab');
    }

    async typeAutocomplete(locator: Locator, text: string) {
        const elementId = await locator.getAttribute('id');
        if (!elementId) {
            throw new Error('Unable to determine the ID of the autocomplete field.');
        }

        await locator.fill('');
        await locator.pressSequentially(text);
        const firstSuggestion = this.page.locator(`[id="${elementId}__option--0"]`);
        await firstSuggestion.click();
        await locator.press('Tab');
    }

    async clickContinueButton() {
        await this.click(this.continueButton);
    }

    async clickStartNowButton() {
        await this.click(this.startNowButton);
    }

    async navigateToUrl() {
        await this.page.goto('/');
    }

    async acceptCookies() {
        if (!(await this.acceptCookieButton.isVisible())) {
            await this.page.context().clearCookies();
            await this.page.reload();
        }
        await this.click(this.acceptCookieButton);
        await this.click(this.hideThisMessageButton);
    }

    async selectCheckboxOptionWithText(page: Page, optionText: string) {
        if (!optionText || optionText.trim() === '') {
            throw new Error('Checkbox option text value cannot be null or blank.');
        }

        const checkboxOption: Locator = page.getByRole('checkbox', { name: optionText });
        await checkboxOption.check();
    }

    async selectRadioOptionWithText(optionText: string) {
        if (!optionText || optionText.trim() === '') {
            throw new Error('Radio option text value cannot be null or blank.');
        }

        const exactOption: Locator = this.page.getByLabel(optionText, { exact: true });
        await this.page.getByLabel(optionText).first().check();
    }

    async selectRadioOptionAndContinue(optionText: string) {
        await this.selectRadioOptionWithText(optionText);
        await this.clickContinueButton();
    }

    async enterDate(day: string, month: string, year: string) {
        await this.type(this.dayTextField, day);
        await this.type(this.monthTextField, month);
        await this.type(this.yearTextField, year);
    }

    convertTextToDate(dateValue: string | null): string | null {
        if (dateValue == null) return null;

        const date = dateValue.trim().toLowerCase();
        if (!date) return dateValue;

        const now = new Date();

        const formatDate = (d: Date): string => {
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        };

        const addDays = (d: Date, days: number) => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() + days);
            return newDate;
        };

        const addYears = (d: Date, years: number) => {
            const newDate = new Date(d);
            newDate.setFullYear(newDate.getFullYear() + years);
            return newDate;
        };

        const dateMappings: Record<string, () => Date> = {
            "yesterday's date": () => addDays(now, -1),
            "today's date": () => now,
            "tomorrow's date": () => addDays(now, 1),
            "more than 1 year in the future": () => addDays(addYears(now, 1), 1),
            "more than 100 years in the future": () => addDays(addYears(now, 100), 1),
            "more than 1 year in the past": () => addDays(addYears(now, -1), -1),
            "less the last 3 years": () => addDays(addYears(now, -3), 1),
            "more than 3 years ago": () => addDays(addYears(now, -3), -1),
            "less than 16 years ago": () => addDays(addYears(now, -16), 1),
            "less than 18 years ago": () => addDays(addYears(now, -18), 1),
            "19 years ago": () => addYears(now, -19),
            "more than 50 years ago": () => addDays(addYears(now, -50), -1),
            "more than 100 years ago": () => addDays(addYears(now, -100), -1),
            "more than 120 years ago": () => addDays(addYears(now, -120), -1),
            "more than 126 years ago": () => addDays(addYears(now, -126), -1),
        };

        const dateFn = dateMappings[date];

        return dateFn ? formatDate(dateFn()) : dateValue;
    }

    async enterDateOrDob(inputDate: string | null) {
        if (!inputDate?.trim()) return;

        const formattedDate = this.convertTextToDate(inputDate);

        if (!formattedDate) return;

        const dateParts = formattedDate.split('/');

        if (dateParts.length !== 3) {
            throw new Error('Invalid date format. Expected format: dd/mm/yyyy');
        }

        const [dayVal, monthVal, yearVal] = dateParts;

        await this.enterDate(dayVal, monthVal, yearVal);
    }

    async getThereIsAProblemTextErrorText(): Promise<string | null> {
        await this.thereIsAProblemText.waitFor();
        return (await this.thereIsAProblemText.textContent())?.trim() ?? null;
    }

    async getErrorSummaryListText(): Promise<string | null> {
        return await this.errorSummaryList.textContent();
    }
}
