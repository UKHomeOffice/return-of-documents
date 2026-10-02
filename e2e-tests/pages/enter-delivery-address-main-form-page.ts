import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class enterDeliveryAddressMainFormPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postcodeTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator('#delivery-address-line-1');
        this.addressLine2TextField = page.locator('#delivery-address-line-2');
        this.townOrCityTextField = page.locator('#delivery-address-town-or-city');
        this.postcodeTextField = page.locator('#delivery-address-postcode');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? "Error: Enter the delivery address – Cancel an application and get your documents back – GOV.UK"
            : "Enter the delivery address – Cancel an application and get your documents back – GOV.UK";
    }

    async completeEnterDeliveryAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postcode: string) {
        await this.assertPageTitle(this.page, await this.expectedPageTitle());
        await this.type(this.addressLine1TextField, addressLine1);
        await this.type(this.addressLine2TextField, addressLine2);
        await this.type(this.townOrCityTextField, townOrCity);
        await this.type(this.postcodeTextField, postcode);
        await this.clickContinueButton();
    }
}
