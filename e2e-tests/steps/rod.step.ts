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
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.THE_MAIN_APPLICANT);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.rodWhatTypeVisaIsApplicationForMainForm.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.rodAboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.YES);
            await pages.rodCancellingYourApplicationMainFormPage.completeCancellingYourApplicationPage();
            await pages.rodWhichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.CASE_ID, c.MF_CASE_ID_VALUE);
            await pages.rodYourDocumentsMainFormPage.completeYourDocumentsPage(c.PASSPORT, c.DOCUMENT_DESCRIPTION);
            await pages.rodMainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.rodEnterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.rodDeliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.rodContactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.rodNotesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.rodCheckYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.rodMainApplicantDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A sponsor':
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_SPONSOR);
            await pages.rodWhatTypeOfSponsorAreYouMainFormPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.rodFurtherLeaveToRemainMainFormPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.rodAboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, '');
            await pages.rodWhichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.MF_HO_REFERENCE_NUMBER_VALUE);
            await pages.rodYourDocumentsMainFormPage.completeYourDocumentsPage(c.OTHER, c.DOCUMENT_DESCRIPTION, c.OTHER_DOCUMENT_TYPE);
            await pages.rodMainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.rodEnterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.rodDeliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.NO);
            await pages.rodEnterDeliveryAddressMainFormPage.completeEnterDeliveryAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.DELIVERY_POSTCODE);
            await pages.rodContactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.rodNotesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.rodCheckYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.rodSponsorAndDependentDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A dependant or a guardian of a dependant':
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_DEPENDANT_OR_GUARDIAN);
            await pages.rodAreYouDependantOrGuardianOfDependantMainFormPage.completeAreYouDependantOrGuardianPage(c.A_PARENT_OR_GUARDIAN_UNDER_18);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.SETTLEMENT);
            await pages.rodAboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.YES);
            await pages.rodCancellingYourApplicationMainFormPage.completeCancellingYourApplicationPage();
            await pages.rodWhichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.MF_COURIER_REFERENCE_NUMBER_VALUE);
            await pages.rodYourDocumentsMainFormPage.completeYourDocumentsPage(c.OTHER, c.DOCUMENT_DESCRIPTION, c.OTHER_DOCUMENT_TYPE);
            await pages.rodMainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.rodEnterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.rodDeliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.rodContactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.rodNotesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.rodCheckYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.rodSponsorAndDependentDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        case 'A legal representative':
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.rodWhoAreYouLegallyRepresentingMainFormPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.rodLegalRepresentationMainFormPage.completeLegalRepresentationPage(c.LETTER_OF_AUTHORITY_CONFIRMATION, c.LEGAL_FIRM_NAME);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.NO_TIME_LIMIT);
            await pages.rodAboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.NO);
            await pages.rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm.completeReturnOfPassportForTravelPage(c.NO);
            await pages.rodYouCannotUseThisPassportToTravelMainFormPage.completeYouCannotUseThisPassportToTravelPage();
            await pages.rodWhichReferenceNumberCanYouProvideMainFormPage.completeWhichReferenceNumberPage(c.PAYMENT_REFERENCE_NUMBER, c.MF_PAYMENT_REFERENCE_NUMBER_VALUE);
            await pages.rodYourDocumentsMainFormPage.completeYourDocumentsPage(c.MARRIAGE_CERTIFICATE, c.DOCUMENT_DESCRIPTION);
            await pages.rodMainApplicantsDetailsMainFormPage.completeMainApplicantsDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);
            await pages.rodEnterMainApplicantAddressManuallyMainFormPage.completeEnterMainApplicantAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.MAIN_APPLICANT_POSTCODE);
            await pages.rodDeliveryAddressForDocumentsMainFormPage.completeDeliveryAddressForDocumentsPage(c.YES);
            await pages.rodContactDetailsMainFormPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.rodNotesAboutYourRequestMainFormPage.completeNotesAboutYourRequestPage(c.NOTES_ABOUT_YOUR_REQUEST);
            await pages.rodCheckYourAnswersRodMainFormPage.completeCheckYourAnswersPage();
            await pages.rodLegalRepDeclarationMainFormPage.completeDeclarationPage(c.DECLARATION_CONFIRMATION);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
});


Then('application should be successfully submitted', async ({ page, pages }) => {
    await pages.rodRequestReceivedMainFormPage.assertPageTitle(page, await pages.rodRequestReceivedMainFormPage.expectedPageTitle());
});


When('I fill out my answers for main form except application for British Citizenship or EUSS and not requesting return of passport for travel pertaining to {string}', async ({ pages }, description: string) => {
    switch (description) {
        case 'Non BritishCitizenship and EUSS visa type applicant- Legal Rep':
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.rodWhoAreYouLegallyRepresentingMainFormPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.rodLegalRepresentationMainFormPage.completeLegalRepresentationPage(c.LETTER_OF_AUTHORITY_CONFIRMATION, c.LEGAL_FIRM_NAME);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.rodFurtherLeaveToRemainMainFormPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            break;

        case 'Non BritishCitizenship and EUSS visa type applicant- MainApplicant':
            await pages.rodWhoIsCompletingMainFormPage.completeWhoIsCompletingPage(c.THE_MAIN_APPLICANT);
            await pages.rodWhatIsApplicationForMainFormPage.completeWhatIsTheApplicationForPage(c.TRANSFER_OF_CONDITIONS);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.rodAboutTheApplicationMainFormPage.completeAboutTheApplicationPage(c.DATE_APPLIED_DAY, c.DATE_APPLIED_MONTH, c.DATE_APPLIED_YEAR, c.NO);
    await pages.rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm.completeReturnOfPassportForTravelPage(c.YES);
});

Then('I should see page proof of validation only', async ({ page, pages }) => {
    await pages.rodForProofOfIdentityOnlyMainFormPage.assertPageTitle(page, await pages.rodForProofOfIdentityOnlyMainFormPage.expectedPageTitle());
});

//**************************************************************************************************************************************************************************//
//********************************************************************  Report documents not received *********************************************************************//
//**************************************************************************************************************************************************************************//

Given('I visit report that you have not received your documents page', async ({ pages }) => {
    await pages.rodMainFormHomepage.openLandingPage();
    await pages.rodMainFormHomepage.clickReportDocumentsNotReceivedLink();
    await pages.rodDocNotReceivedHomePage.completeLandingPageForm();
});

When('I fill out my answers for documents not received form and submit application pertaining to {string}', async ({ pages }, description: string) => {
    await pages.rodMainApplicantDetailsDNRPage.completeMainApplicantDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);

    switch (description) {
        case 'DNR- British citizenship':
            await pages.rodWhatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.BRITISH_CITIZENSHIP);
            await pages.rodWhichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.RECORD_NUMBER, c.RECORD_NUMBER_VALUE);
            break;

        case 'DNR- A visa':
            await pages.rodWhatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.rodWhatTypeOfVisaIsTheApplicationForDNRPage.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.rodWhichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.HO_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR- Further leave to remain':
            await pages.rodWhatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.rodFurtherLeaveToRemainDNRPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.rodWhichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.PAYMENT_REFERENCE_NUMBER, c.PAYMENT_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR- Settled or pre-settled status under the European Union Settlement Scheme':
            await pages.rodWhatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.SETTLED_OR_PRE_SETTLED);
            await pages.rodWhichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.COURIER_REFERENCE_NUMBER_VALUE);
            break;

        case 'DNR -Transfer of conditions or limited leave replacement biometric residence permit':
            await pages.rodWhatIsTheApplicationForDNRPage.completeWhatIsTheApplicationForPage(c.TRANSFER_OF_CONDITIONS);
            await pages.rodWhichRefNumCanYouProvideDNRPage.completeWhichReferenceNumberPage(c.CASE_ID, c.CASE_ID_VALUE);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.rodContactDetailsDNRPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.rodCheckYourAnswersDNRPage.completeCheckYourAnswersPage();
});



Then('I should see application submitted for documents not received', async ({ page, pages }) => {
    await pages.rodReportSubmittedDNRPage.assertPageTitle(page, await pages.rodReportSubmittedDNRPage.expectedPageTitle());
});


//**************************************************************************************************************************************************************************//
//********************************************************************  Cancel your request ********************************************************************************//
//**************************************************************************************************************************************************************************//

Given('I visit cancel your request page', async ({ pages }) => {
    await pages.rodMainFormHomepage.openLandingPage();
    await pages.rodMainFormHomepage.clickCancelYourRequestLink();
    await pages.rodCancelYourRequestHomePage.completeLandingPageForm();
});

When('I fill out my answers for cancel your request form and submit application pertaining to {string}', async ({ pages }, description: string) => {
    await pages.rodMainApplicantDetailsCancelPage.completeMainApplicantDetailsPage(c.FULL_NAME, c.DOB_DAY, c.DOB_MONTH, c.DOB_YEAR, c.NATIONALITY);

    switch (description) {
        case 'CR- The main applicant':
            await pages.rodWhoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.THE_MAIN_APPLICANT);
            await pages.rodWhatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.BRITISH_CITIZENSHIP);
            await pages.rodWhichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.RECORD_NUMBER, c.RECORD_NUMBER_VALUE);
            break;

        case 'CR- A legal representative':
            await pages.rodWhoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_LEGAL_REPRESENTATIVE);
            await pages.rodWhoAreYouLegallyRepresentingCncPage.completeWhoAreYouLegallyRepresentingPage(c.THE_MAIN_APPLICANT);
            await pages.rodWhatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.rodWhatTypeOfVisaIsApplicationForCncPage.completeWhatTypeOfVisaPage(c.BRITISH_NATIONAL_OVERSEAS_VISA);
            await pages.rodWhichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.CASE_ID, c.CASE_ID_VALUE);
            break;

        case 'CR- A sponsor':
            await pages.rodWhoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_SPONSOR);
            await pages.rodWhatTypeOfSponsorAreYouCncPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.rodWhatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.rodFurtherLeaveToRemainCncPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.rodWhichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.HOME_OFFICE_REFERENCE_NUMBER, c.HO_REFERENCE_NUMBER_VALUE);
            break;

        case 'CR- A dependant or guardian of a dependant':
            await pages.rodWhoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_DEPENDANT_OR_GUARDIAN);
            await pages.rodAreYouDependantOrGuardianCncPage.completeAreYouDependantOrGuardianPage(c.A_DEPENDANT_AGED_18_OR_OVER);
            await pages.rodWhatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.A_VISA);
            await pages.rodWhatTypeOfVisaIsApplicationForCncPage.completeWhatTypeOfVisaPage(c.TEMPORARY_WORK_VISA);
            await pages.rodWhichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.COURIER_REFERENCE_NUMBER, c.COURIER_REFERENCE_NUMBER_VALUE);
            break;

        case 'CR- A sponsor- UAN':
            await pages.rodWhoIsCompletingOriginalFormCncPage.completeWhoCompletedTheOriginalFormPage(c.A_SPONSOR);
            await pages.rodWhatTypeOfSponsorAreYouCncPage.completeWhatTypeOfSponsorAreYouPage(c.A_BRITISH_SPONSOR);
            await pages.rodWhatIsTheApplicationForCncPage.completeWhatIsTheApplicationForPage(c.FURTHER_LEAVE_TO_REMAIN);
            await pages.rodFurtherLeaveToRemainCncPage.completeFurtherLeaveToRemainPage(c.FLR_FP);
            await pages.rodWhichReferenceNumberYouProvideCncPage.completeWhichReferenceNumberPage(c.UNIQUE_APPLICATION_NUMBER, c.UNIQUE_APPLICATION_NUMBER_VALUE);
            break;

        default:
            throw new Error(`Invalid scenario description: ${description}`);
    }
    await pages.rodContactDetailsCncPage.completeContactDetailsPage(c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.rodCheckYourAnswerCancellationForm.completeCheckYourAnswersPage();
});


Then('I should see application submitted for cancel your request', async ({ page, pages }) => {
    await pages.rodCancellationRequestReceivedCncPage.assertPageTitle(page, await pages.rodCancellationRequestReceivedCncPage.expectedPageTitle());
});

//**************************************************************************************************************************************************************************//
//********************************************************************  Validation Test start from here ********************************************************************//
//**************************************************************************************************************************************************************************//

When("I fill in main applicant's details with below details and validate", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();

    const fullName = data['Full name'] ?? '';
    const dob = data['Date of birth'] ?? '';
    const nationality = data['Country of nationality'] ?? '';

    await pages.rodMainApplicantDetailsCancelPage.completeMainApplicantDetailsPageForValidation(fullName, dob, nationality);
});

Then('I should see {string} error message displayed on applicant details page on cancel your request form', async ({ pages }, expectedErrorMessage: string) => {
    const actualErrorMessage = await pages.basePage.getThereIsAProblemTextErrorText();
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});