import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';
import { DataTable } from '@cucumber/cucumber';

export const { Given, When, Then } = createBdd(test);

//**************************************************************************************************************************************************************************//
//********************************************************************  Main form - get your documents back ****************************************************************//
//**************************************************************************************************************************************************************************//

Given('I visit the get your documents back page', async ({ pages }) => {
    await pages.rodMainFormHomepage.openLandingPage();
    await pages.rodMainFormHomepage.completeLandingPageForm();
});

When('I fill out my answers for main form pertaining to {string}', async ({ pages }, description: string) => {
    switch (description) {
        case 'The main applicant':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.THE_MAIN_APPLICANT);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.whatTypeVisaIsApplicationForMainForm.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.aboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.YES);
            await pages.cancellingYourApplicationMainFormPage.completeCancellingYourApplicationPage();
            await pages.whichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.CASE_ID, c.MF_CASE_ID_VALUE);
            await pages.yourDocumentsMainFormPage.completeYourDocumentsPage(c.PASSPORT, c.DOCUMENT_DESCRIPTION);
            await pages.mainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.enterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.deliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.contactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.notesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.checkYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.mainApplicantDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A sponsor':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_SPONSOR);
            await pages.whatTypeOfSponsorAreYouMainFormPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.furtherLeaveToRemainMainFormPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.aboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, '');
            await pages.whichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.MF_HO_REFERENCE_NUMBER_VALUE);
            await pages.yourDocumentsMainFormPage.completeYourDocumentsPage(c.OTHER, c.DOCUMENT_DESCRIPTION, c.OTHER_DOCUMENT_TYPE);
            await pages.mainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.enterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.deliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.NO);
            await pages.enterDeliveryAddressMainFormPage.completeEnterDeliveryAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.DELIVERY_POSTCODE);
            await pages.contactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.notesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.checkYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.sponsorAndDependentDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A dependant or a guardian of a dependant':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_DEPENDANT_OR_GUARDIAN);
            await pages.areYouDependantOrGuardianOfDependantMainFormPage.completeAreYouDependantOrGuardianPage(c.A_PARENT_OR_GUARDIAN_UNDER_18);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.SETTLEMENT);
            await pages.aboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.YES);
            await pages.cancellingYourApplicationMainFormPage.completeCancellingYourApplicationPage();
            await pages.whichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.MF_COURIER_REFERENCE_NUMBER_VALUE);
            await pages.yourDocumentsMainFormPage.completeYourDocumentsPage(c.OTHER, c.DOCUMENT_DESCRIPTION, c.OTHER_DOCUMENT_TYPE);
            await pages.mainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.enterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.deliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.contactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.notesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.checkYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.sponsorAndDependentDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A legal representative':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.whoAreYouLegallyRepresentingMainFormPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.legalRepresentationMainFormPage.completeLegalRepresentationPage(c.LETTER_OF_AUTHORITY_CONFIRMATION, c.LEGAL_FIRM_NAME);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.NO_TIME_LIMIT);
            await pages.aboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.NO);
            await pages.areYouRequestingReturnOfMainApplicantPassportTravelMainForm.completeReturnOfPassportForTravelPage(c.NO);
            await pages.youCannotUseThisPassportToTravelMainFormPage.completeYouCannotUseThisPassportToTravelPage();
            await pages.whichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.PAYMENT_REFERENCE_NUMBER, c.MF_PAYMENT_REFERENCE_NUMBER_VALUE);
            await pages.yourDocumentsMainFormPage.completeYourDocumentsPage(c.MARRIAGE_CERTIFICATE, c.DOCUMENT_DESCRIPTION);
            await pages.mainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.enterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.deliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.contactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.notesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.checkYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.legalRepDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
});


Then('application should be successfully submitted', async ({ page, pages }) => {
    await pages.requestReceivedMainFormPage.assertPageTitle(page, await pages.requestReceivedMainFormPage.expectedPageTitle());
});


When('I fill out my answers for main form except application for BritishCitizenship or EUSS and not requesting return of passport for travel pertaining to {string}', async ({ pages }, description: string) => {
    switch (description) {
        case 'Non BritishCitizenship and EUSS visa type applicant- Legal Rep':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.whoAreYouLegallyRepresentingMainFormPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.legalRepresentationMainFormPage.completeLegalRepresentationPage(c.LETTER_OF_AUTHORITY_CONFIRMATION, c.LEGAL_FIRM_NAME);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.furtherLeaveToRemainMainFormPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            break;

        case 'Non BritishCitizenship and EUSS visa type applicant- MainApplicant':
            await pages.whoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.THE_MAIN_APPLICANT);
            await pages.whatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.TRANSFER_OF_CONDITIONS);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.aboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.NO);
    await pages.areYouRequestingReturnOfMainApplicantPassportTravelMainForm.completeReturnOfPassportForTravelPage(c.YES);
});

Then('I should see page proof of validation only', async ({ page, pages }) => {
    await pages.forProofOfIdentityOnlyMainFormPage.assertPageTitle(page, await pages.forProofOfIdentityOnlyMainFormPage.expectedPageTitle());
});

//**************************************************************************************************************************************************************************//
//********************************************************************  Report documents not received *********************************************************************//
//**************************************************************************************************************************************************************************//

Given('I visit report that you have not received your documents page', async ({ pages }) => {
    await pages.rodMainFormHomepage.openLandingPage();
    await pages.rodMainFormHomepage.clickReportDocumentsNotReceivedLink();
    await pages.docNotReceivedHomePage.completeLandingPageForm();
});

When('I fill out my answers for documents not received form and submit application pertaining to {string}', async ({ pages }, description: string) => {
    await pages.mainApplicantDetailsDNRPage.completeMainApplicantDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);

    switch (description) {
        case 'DNR- British citizenship':
            await pages.whatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.BRITISH_CITIZENSHIP);
            await pages.whichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.RECORD_NUMBER, c.RECORD_NUMBER_VALUE);
            break;

        case 'DNR- A visa':
            await pages.whatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.whatTypeOfVisaIsTheApplicationForDNRPage.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.whichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.HO_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR- Further leave to remain':
            await pages.whatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.furtherLeaveToRemainDNRPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.whichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.PAYMENT_REFERENCE_NUMBER, c.PAYMENT_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR- Settled or pre-settled status under the European Union Settlement Scheme':
            await pages.whatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.SETTLED_OR_PRE_SETTLED);
            await pages.whichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.COURIER_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR -Transfer of conditions or limited leave replacement biometric residence permit':
            await pages.whatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.TRANSFER_OF_CONDITIONS);
            await pages.whichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.CASE_ID, c.CASE_ID_VALUE);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.contactDetailsDNRPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.checkYourAnswersDNRPage.completeCheckYourAnswersPage();
});



Then('I should see application submitted for documents not received', async ({ page, pages }) => {
    await pages.reportSubmittedDNRPage.assertPageTitle(page, await pages.reportSubmittedDNRPage.expectedPageTitle());
});


//**************************************************************************************************************************************************************************//
//********************************************************************  Cancel your request ********************************************************************************//
//**************************************************************************************************************************************************************************//

Given('I visit cancel your request page', async ({ pages }) => {
    await pages.rodMainFormHomepage.openLandingPage();
    await pages.rodMainFormHomepage.clickCancelYourRequestLink();
    await pages.cancelYourRequestHomePage.completeLandingPageForm();
});

When('I fill out my answers for cancel your request form and submit application pertaining to {string}', async ({ pages }, description: string) => {
    await pages.mainApplicantDetailsCancelPage.completeMainApplicantDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);

    switch (description) {
        case 'CR- The main applicant':
            await pages.whoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.THE_MAIN_APPLICANT);
            await pages.whatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.BRITISH_CITIZENSHIP);
            await pages.whichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.RECORD_NUMBER, c.RECORD_NUMBER_VALUE);
            break;

        case 'CR- A legal representative':
            await pages.whoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.whoAreYouLegallyRepresentingCncPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.whatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.whatTypeOfVisaIsApplicationForCncPage.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.whichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.CASE_ID, c.CASE_ID_VALUE);
            break;

        case 'CR- A sponsor':
            await pages.whoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_SPONSOR);
            await pages.whatTypeOfSponsorAreYouCncPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.whatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.furtherLeaveToRemainCncPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.whichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.HO_REFERENCE_NUMBER_VALUE);
            break;

        case 'CR- A dependant or guardian of a dependant':
            await pages.whoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_DEPENDANT_OR_GUARDIAN);
            await pages.areYouDependantOrGuardianCncPage.completeAreYouDependantOrGuardianPage(c.A_DEPENDANT_AGED_18_OR_OVER);
            await pages.whatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.whatTypeOfVisaIsApplicationForCncPage.completeWhatTypeOfVisaPage(c.TEMPORARY_WORK_VISA);
            await pages.whichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.COURIER_REFERENCE_NUMBER_VALUE);
            break;

        case 'CR- A sponsor- UAN':
            await pages.whoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_SPONSOR);
            await pages.whatTypeOfSponsorAreYouCncPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.whatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.furtherLeaveToRemainCncPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.whichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.UNIQUE_APPLICATION_NUMBER, c.UNIQUE_APPLICATION_NUMBER_VALUE);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.contactDetailsCncPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.checkYourAnswerCancellationForm.completeCheckYourAnswersPage();
});


Then('I should see application submitted for cancel your request', async ({ page, pages }) => {
    await pages.cancellationRequestReceivedCncPage.assertPageTitle(page, await pages.cancellationRequestReceivedCncPage.expectedPageTitle());
});

//**************************************************************************************************************************************************************************//
//********************************************************************  Validation Test start from here ********************************************************************//
//**************************************************************************************************************************************************************************//

When("I fill in main applicant's details with below details and validate", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();

    const fullName = data['Full name'] ?? '';
    const dob = data['Date of birth'] ?? '';
    const nationality = data['Country of nationality'] ?? '';

    await pages.mainApplicantDetailsCancelPage.completeMainApplicantDetailsPageForValidation(fullName, dob, nationality);
});

Then('I should see {string} error message displayed on applicant details page on cancel your request form', async ({ pages }, expectedErrorMessage: string) => {
    const actualErrorMessage = await pages.basePage.getThereIsAProblemTextErrorText();
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});