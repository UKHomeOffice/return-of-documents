import { test as base } from 'playwright-bdd';
import { basePage } from '../pages/base-page';
import { rodMainFormHomepage } from '../pages/rod-main-form-homepage';
import { rodWhoIsCompletingMainFormPage } from '../pages/rod-who-is-completing-main-form-page';
import { rodWhoAreYouLegallyRepresentingMainFormPage } from '../pages/rod-who-are-you-legally-representing-main-form-page';
import { rodWhatTypeOfSponsorAreYouMainFormPage } from '../pages/rod-what-type-of-sponsor-are-you-main-form-page';
import { rodAreYouDependantOrGuardianOfDependantMainFormPage } from '../pages/rod-are-you-dependant-or-guardian-of-dependant-main-form-page';
import { rodLegalRepresentationMainFormPage } from '../pages/rod-legal-representation-main-form-page';
import { rodWhatIsApplicationForMainFormPage } from '../pages/rod-what-is-application-for-main-form-page';
import { rodWhatTypeVisaIsApplicationForMainForm } from '../pages/rod-what-type-visa-is-application-for-main-form';
import { rodFurtherLeaveToRemainMainFormPage } from '../pages/rod-further-leave-to-remain-main-form-page';
import { rodAboutTheApplicationMainFormPage } from '../pages/rod-about-the-application-main-form-page';
import { rodCancellingYourApplicationMainFormPage } from '../pages/rod-cancelling-your-application-main-form-page';
import { rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm } from '../pages/rod-are-you-requesting-return-of-main-applicant-passport-travel-main-form';
import { rodForProofOfIdentityOnlyMainFormPage } from '../pages/rod-for-proof-of-identity-only-main-form-page';
import { rodYouCannotUseThisPassportToTravelMainFormPage } from '../pages/rod-you-cannot-use-this-passport-to-travel-main-form-page';
import { rodWhichReferenceNumberCanYouProvideMainFormPage } from '../pages/rod-which-reference-number-can-you-provide-main-form-page';
import { rodYourDocumentsMainFormPage } from '../pages/rod-your-documents-main-form-page';
import { rodMainApplicantsDetailsMainFormPage } from '../pages/rod-main-applicants-details-main-form-page';
import { rodEnterMainApplicantAddressManuallyMainFormPage } from '../pages/rod-enter-main-applicant-address-manually-main-form-page';
import { rodDeliveryAddressForDocumentsMainFormPage } from '../pages/rod-delivery-address-for-documents-main-form-page';
import { rodEnterDeliveryAddressMainFormPage } from '../pages/rod-enter-delivery-address-main-form-page';
import { rodContactDetailsMainFormPage } from '../pages/rod-contact-details-main-form-page';
import { rodNotesAboutYourRequestMainFormPage } from '../pages/rod-notes-about-your-request-main-form-page';
import { rodCheckYourAnswersRodMainFormPage } from '../pages/rod-check-your-answers-rod-main-form-page';
import { rodMainApplicantDeclarationMainFormPage } from '../pages/rod-main-applicant-declaration-main-form-page';
import { rodLegalRepDeclarationMainFormPage } from '../pages/rod-legal-rep-declaration-main-form-page';
import { rodSponsorAndDependentDeclarationMainFormPage } from '../pages/rod-sponsor-and-dependent-declaration-main-form-page';
import { rodRequestReceivedMainFormPage } from '../pages/rod-request-received-main-form-page';
import { rodDocNotReceivedHomePage } from '../pages/rod-doc-not-received-home-page';
import { rodMainApplicantDetailsDNRPage } from '../pages/rod-main-applicant-details-dnr-page';
import { rodWhatIsTheApplicationForDNRPage } from '../pages/rod-what-is-the-application-for-dnr-page';
import { rodWhatTypeOfVisaIsTheApplicationForDNRPage } from '../pages/rod-what-type-of-visa-is-the-application-for-dnr-page';
import { rodFurtherLeaveToRemainDNRPage } from '../pages/rod-further-leave-to-remain-dnr-page';
import { rodWhichRefNumCanYouProvideDNRPage } from '../pages/rod-which-ref-num-can-you-provide-dnr-page';
import { rodContactDetailsDNRPage } from '../pages/rod-contact-details-dnr-page';
import { rodCheckYourAnswersDNRPage } from '../pages/rod-check-your-answers-dnr-page';
import { rodReportSubmittedDNRPage } from '../pages/rod-report-submitted-dnr-page';
import { rodCancelYourRequestHomePage } from '../pages/rod-cancel-your-request-home-page';
import { rodMainApplicantDetailsCancelPage } from '../pages/rod-main-applicant-details-cancel-page';
import { rodWhoIsCompletingOriginalFormCncPage } from '../pages/rod-who-is-completing-original-form-cnc-page';
import { rodWhoAreYouLegallyRepresentingCncPage } from '../pages/rod-who-are-you-legally-representing-cnc-page';
import { rodWhatTypeOfSponsorAreYouCncPage } from '../pages/rod-what-type-of-sponsor-are-you-cnc-page';
import { rodAreYouDependantOrGuardianCncPage } from '../pages/rod-are-you-dependant-or-guardian-cnc-page';
import { rodWhatIsTheApplicationForCncPage } from '../pages/rod-what-is-the-application-for-cnc-page';
import { rodWhatTypeOfVisaIsApplicationForCncPage } from '../pages/rod-what-type-of-visa-is-application-for-cnc-page';
import { rodFurtherLeaveToRemainCncPage } from '../pages/rod-further-leave-to-remain-cnc-page';
import { rodWhichReferenceNumberYouProvideCncPage } from '../pages/rod-which-reference-number-you-provide-cnc-page';
import { rodContactDetailsCncPage } from '../pages/rod-contact-details-cnc-page';
import { rodCheckYourAnswerCancellationForm } from '../pages/rod-check-your-answer-cancellation-form';
import { rodCancellationRequestReceivedCncPage } from '../pages/rod-cancellation-request-received-cnc-page';

type Pages = {
  basePage: basePage;
  rodMainFormHomepage: rodMainFormHomepage;
  rodWhoIsCompletingMainFormPage: rodWhoIsCompletingMainFormPage;
  rodWhoAreYouLegallyRepresentingMainFormPage: rodWhoAreYouLegallyRepresentingMainFormPage;
  rodWhatTypeOfSponsorAreYouMainFormPage: rodWhatTypeOfSponsorAreYouMainFormPage;
  rodAreYouDependantOrGuardianOfDependantMainFormPage: rodAreYouDependantOrGuardianOfDependantMainFormPage;
  rodLegalRepresentationMainFormPage: rodLegalRepresentationMainFormPage;
  rodWhatIsApplicationForMainFormPage: rodWhatIsApplicationForMainFormPage;
  rodWhatTypeVisaIsApplicationForMainForm: rodWhatTypeVisaIsApplicationForMainForm;
  rodFurtherLeaveToRemainMainFormPage: rodFurtherLeaveToRemainMainFormPage;
  rodAboutTheApplicationMainFormPage: rodAboutTheApplicationMainFormPage;
  rodCancellingYourApplicationMainFormPage: rodCancellingYourApplicationMainFormPage;
  rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm: rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm;
  rodForProofOfIdentityOnlyMainFormPage: rodForProofOfIdentityOnlyMainFormPage;
  rodYouCannotUseThisPassportToTravelMainFormPage: rodYouCannotUseThisPassportToTravelMainFormPage;
  rodWhichReferenceNumberCanYouProvideMainFormPage: rodWhichReferenceNumberCanYouProvideMainFormPage;
  rodYourDocumentsMainFormPage: rodYourDocumentsMainFormPage;
  rodMainApplicantsDetailsMainFormPage: rodMainApplicantsDetailsMainFormPage;
  rodEnterMainApplicantAddressManuallyMainFormPage: rodEnterMainApplicantAddressManuallyMainFormPage;
  rodDeliveryAddressForDocumentsMainFormPage: rodDeliveryAddressForDocumentsMainFormPage;
  rodEnterDeliveryAddressMainFormPage: rodEnterDeliveryAddressMainFormPage;
  rodContactDetailsMainFormPage: rodContactDetailsMainFormPage;
  rodNotesAboutYourRequestMainFormPage: rodNotesAboutYourRequestMainFormPage;
  rodCheckYourAnswersRodMainFormPage: rodCheckYourAnswersRodMainFormPage;
  rodMainApplicantDeclarationMainFormPage: rodMainApplicantDeclarationMainFormPage;
  rodLegalRepDeclarationMainFormPage: rodLegalRepDeclarationMainFormPage;
  rodSponsorAndDependentDeclarationMainFormPage: rodSponsorAndDependentDeclarationMainFormPage;
  rodRequestReceivedMainFormPage: rodRequestReceivedMainFormPage;
  rodDocNotReceivedHomePage: rodDocNotReceivedHomePage;
  rodMainApplicantDetailsDNRPage: rodMainApplicantDetailsDNRPage;
  rodWhatIsTheApplicationForDNRPage: rodWhatIsTheApplicationForDNRPage;
  rodWhatTypeOfVisaIsTheApplicationForDNRPage: rodWhatTypeOfVisaIsTheApplicationForDNRPage;
  rodFurtherLeaveToRemainDNRPage: rodFurtherLeaveToRemainDNRPage;
  rodWhichRefNumCanYouProvideDNRPage: rodWhichRefNumCanYouProvideDNRPage;
  rodContactDetailsDNRPage: rodContactDetailsDNRPage;
  rodCheckYourAnswersDNRPage: rodCheckYourAnswersDNRPage;
  rodReportSubmittedDNRPage: rodReportSubmittedDNRPage;
  rodCancelYourRequestHomePage: rodCancelYourRequestHomePage;
  rodMainApplicantDetailsCancelPage: rodMainApplicantDetailsCancelPage;
  rodWhoIsCompletingOriginalFormCncPage: rodWhoIsCompletingOriginalFormCncPage;
  rodWhoAreYouLegallyRepresentingCncPage: rodWhoAreYouLegallyRepresentingCncPage;
  rodWhatTypeOfSponsorAreYouCncPage: rodWhatTypeOfSponsorAreYouCncPage;
  rodAreYouDependantOrGuardianCncPage: rodAreYouDependantOrGuardianCncPage;
  rodWhatIsTheApplicationForCncPage: rodWhatIsTheApplicationForCncPage;
  rodWhatTypeOfVisaIsApplicationForCncPage: rodWhatTypeOfVisaIsApplicationForCncPage;
  rodFurtherLeaveToRemainCncPage: rodFurtherLeaveToRemainCncPage;
  rodWhichReferenceNumberYouProvideCncPage: rodWhichReferenceNumberYouProvideCncPage;
  rodContactDetailsCncPage: rodContactDetailsCncPage;
  rodCheckYourAnswerCancellationForm: rodCheckYourAnswerCancellationForm;
  rodCancellationRequestReceivedCncPage: rodCancellationRequestReceivedCncPage;
};

// Holds the scenario selected by "I selected the data for scenario" for later steps.
type ScenarioContext = {
  scenarioId: string;
};

export const test = base.extend<{ pages: Pages; scenarioContext: ScenarioContext }>({
  pages: async ({ page }, use) => {
    await use({
      basePage: new basePage(page),
      rodMainFormHomepage: new rodMainFormHomepage(page),
      rodWhoIsCompletingMainFormPage: new rodWhoIsCompletingMainFormPage(page),
      rodWhoAreYouLegallyRepresentingMainFormPage: new rodWhoAreYouLegallyRepresentingMainFormPage(page),
      rodWhatTypeOfSponsorAreYouMainFormPage: new rodWhatTypeOfSponsorAreYouMainFormPage(page),
      rodAreYouDependantOrGuardianOfDependantMainFormPage: new rodAreYouDependantOrGuardianOfDependantMainFormPage(page),
      rodLegalRepresentationMainFormPage: new rodLegalRepresentationMainFormPage(page),
      rodWhatIsApplicationForMainFormPage: new rodWhatIsApplicationForMainFormPage(page),
      rodWhatTypeVisaIsApplicationForMainForm: new rodWhatTypeVisaIsApplicationForMainForm(page),
      rodFurtherLeaveToRemainMainFormPage: new rodFurtherLeaveToRemainMainFormPage(page),
      rodAboutTheApplicationMainFormPage: new rodAboutTheApplicationMainFormPage(page),
      rodCancellingYourApplicationMainFormPage: new rodCancellingYourApplicationMainFormPage(page),
      rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm: new rodAreYouRequestingReturnOfMainApplicantPassportTravelMainForm(page),
      rodForProofOfIdentityOnlyMainFormPage: new rodForProofOfIdentityOnlyMainFormPage(page),
      rodYouCannotUseThisPassportToTravelMainFormPage: new rodYouCannotUseThisPassportToTravelMainFormPage(page),
      rodWhichReferenceNumberCanYouProvideMainFormPage: new rodWhichReferenceNumberCanYouProvideMainFormPage(page),
      rodYourDocumentsMainFormPage: new rodYourDocumentsMainFormPage(page),
      rodMainApplicantsDetailsMainFormPage: new rodMainApplicantsDetailsMainFormPage(page),
      rodEnterMainApplicantAddressManuallyMainFormPage: new rodEnterMainApplicantAddressManuallyMainFormPage(page),
      rodDeliveryAddressForDocumentsMainFormPage: new rodDeliveryAddressForDocumentsMainFormPage(page),
      rodEnterDeliveryAddressMainFormPage: new rodEnterDeliveryAddressMainFormPage(page),
      rodContactDetailsMainFormPage: new rodContactDetailsMainFormPage(page),
      rodNotesAboutYourRequestMainFormPage: new rodNotesAboutYourRequestMainFormPage(page),
      rodCheckYourAnswersRodMainFormPage: new rodCheckYourAnswersRodMainFormPage(page),
      rodMainApplicantDeclarationMainFormPage: new rodMainApplicantDeclarationMainFormPage(page),
      rodLegalRepDeclarationMainFormPage: new rodLegalRepDeclarationMainFormPage(page),
      rodSponsorAndDependentDeclarationMainFormPage: new rodSponsorAndDependentDeclarationMainFormPage(page),
      rodRequestReceivedMainFormPage: new rodRequestReceivedMainFormPage(page),
      rodDocNotReceivedHomePage: new rodDocNotReceivedHomePage(page),
      rodMainApplicantDetailsDNRPage: new rodMainApplicantDetailsDNRPage(page),
      rodWhatIsTheApplicationForDNRPage: new rodWhatIsTheApplicationForDNRPage(page),
      rodWhatTypeOfVisaIsTheApplicationForDNRPage: new rodWhatTypeOfVisaIsTheApplicationForDNRPage(page),
      rodFurtherLeaveToRemainDNRPage: new rodFurtherLeaveToRemainDNRPage(page),
      rodWhichRefNumCanYouProvideDNRPage: new rodWhichRefNumCanYouProvideDNRPage(page),
      rodContactDetailsDNRPage: new rodContactDetailsDNRPage(page),
      rodCheckYourAnswersDNRPage: new rodCheckYourAnswersDNRPage(page),
      rodReportSubmittedDNRPage: new rodReportSubmittedDNRPage(page),
      rodCancelYourRequestHomePage: new rodCancelYourRequestHomePage(page),
      rodMainApplicantDetailsCancelPage: new rodMainApplicantDetailsCancelPage(page),
      rodWhoIsCompletingOriginalFormCncPage: new rodWhoIsCompletingOriginalFormCncPage(page),
      rodWhoAreYouLegallyRepresentingCncPage: new rodWhoAreYouLegallyRepresentingCncPage(page),
      rodWhatTypeOfSponsorAreYouCncPage: new rodWhatTypeOfSponsorAreYouCncPage(page),
      rodAreYouDependantOrGuardianCncPage: new rodAreYouDependantOrGuardianCncPage(page),
      rodWhatIsTheApplicationForCncPage: new rodWhatIsTheApplicationForCncPage(page),
      rodWhatTypeOfVisaIsApplicationForCncPage: new rodWhatTypeOfVisaIsApplicationForCncPage(page),
      rodFurtherLeaveToRemainCncPage: new rodFurtherLeaveToRemainCncPage(page),
      rodWhichReferenceNumberYouProvideCncPage: new rodWhichReferenceNumberYouProvideCncPage(page),
      rodContactDetailsCncPage: new rodContactDetailsCncPage(page),
      rodCheckYourAnswerCancellationForm: new rodCheckYourAnswerCancellationForm(page),
      rodCancellationRequestReceivedCncPage: new rodCancellationRequestReceivedCncPage(page),
    });
  },
  scenarioContext: async ({}, use) => {
    await use({ scenarioId: '' });
  },
});

export const expect = test.expect;
