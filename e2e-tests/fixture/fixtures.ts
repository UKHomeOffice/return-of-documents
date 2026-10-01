import { test as base } from 'playwright-bdd';
import { basePage } from '../pages/base-page';
import { rodMainFormHomepage } from '../pages/rod-main-form-homepage';
import { whoIsCompletingMainFormPage } from '../pages/who-is-completing-main-form-page';
import { whoAreYouLegallyRepresentingMainFormPage } from '../pages/who-are-you-legally-representing-main-form-page';
import { whatTypeOfSponsorAreYouMainFormPage } from '../pages/what-type-of-sponsor-are-you-main-form-page';
import { areYouDependantOrGuardianOfDependantMainFormPage } from '../pages/are-you-dependant-or-guardian-of-dependant-main-form-page';
import { legalRepresentationMainFormPage } from '../pages/legal-representation-main-form-page';
import { whatIsApplicationForMainFormPage } from '../pages/what-is-application-for-main-form-page';
import { whatTypeVisaIsApplicationForMainForm } from '../pages/what-type-visa-is-application-for-main-form';
import { furtherLeaveToRemainMainFormPage } from '../pages/further-leave-to-remain-main-form-page';
import { aboutTheApplicationMainFormPage } from '../pages/about-the-application-main-form-page';
import { cancellingYourApplicationMainFormPage } from '../pages/cancelling-your-application-main-form-page';
import { areYouRequestingReturnOfMainApplicantPassportTravelMainForm } from '../pages/are-you-requesting-return-of-main-applicant-passport-travel-main-form';
import { forProofOfIdentityOnlyMainFormPage } from '../pages/for-proof-of-identity-only-main-form-page';
import { youCannotUseThisPassportToTravelMainFormPage } from '../pages/you-cannot-use-this-passport-to-travel-main-form-page';
import { whichReferenceNumberCanYouProvideMainFormPage } from '../pages/which-reference-number-can-you-provide-main-form-page';
import { yourDocumentsMainFormPage } from '../pages/your-documents-main-form-page';
import { mainApplicantsDetailsMainFormPage } from '../pages/main-applicants-details-main-form-page';
import { enterMainApplicantAddressManuallyMainFormPage } from '../pages/enter-main-applicant-address-manually-main-form-page';
import { deliveryAddressForDocumentsMainFormPage } from '../pages/delivery-address-for-documents-main-form-page';
import { enterDeliveryAddressMainFormPage } from '../pages/enter-delivery-address-main-form-page';
import { contactDetailsMainFormPage } from '../pages/contact-details-main-form-page';
import { notesAboutYourRequestMainFormPage } from '../pages/notes-about-your-request-main-form-page';
import { checkYourAnswersRodMainFormPage } from '../pages/check-your-answers-rod-main-form-page';
import { mainApplicantDeclarationMainFormPage } from '../pages/main-applicant-declaration-main-form-page';
import { legalRepDeclarationMainFormPage } from '../pages/legal-rep-declaration-main-form-page';
import { sponsorAndDependentDeclarationMainFormPage } from '../pages/sponsor-and-dependent-declaration-main-form-page';
import { requestReceivedMainFormPage } from '../pages/request-received-main-form-page';
import { docNotReceivedHomePage } from '../pages/doc-not-received-home-page';
import { mainApplicantDetailsDNRPage } from '../pages/main-applicant-details-dnr-page';
import { whatIsTheApplicationForDNRPage } from '../pages/what-is-the-application-for-dnr-page';
import { whatTypeOfVisaIsTheApplicationForDNRPage } from '../pages/what-type-of-visa-is-the-application-for-dnr-page';
import { furtherLeaveToRemainDNRPage } from '../pages/further-leave-to-remain-dnr-page';
import { whichRefNumCanYouProvideDNRPage } from '../pages/which-ref-num-can-you-provide-dnr-page';
import { contactDetailsDNRPage } from '../pages/contact-details-dnr-page';
import { checkYourAnswersDNRPage } from '../pages/check-your-answers-dnr-page';
import { reportSubmittedDNRPage } from '../pages/report-submitted-dnr-page';
import { cancelYourRequestHomePage } from '../pages/cancel-your-request-home-page';
import { mainApplicantDetailsCancelPage } from '../pages/main-applicant-details-cancel-page';
import { whoIsCompletingOriginalFormCncPage } from '../pages/who-is-completing-original-form-cnc-page';
import { whoAreYouLegallyRepresentingCncPage } from '../pages/who-are-you-legally-representing-cnc-page';
import { whatTypeOfSponsorAreYouCncPage } from '../pages/what-type-of-sponsor-are-you-cnc-page';
import { areYouDependantOrGuardianCncPage } from '../pages/are-you-dependant-or-guardian-cnc-page';
import { whatIsTheApplicationForCncPage } from '../pages/what-is-the-application-for-cnc-page';
import { whatTypeOfVisaIsApplicationForCncPage } from '../pages/what-type-of-visa-is-application-for-cnc-page';
import { furtherLeaveToRemainCncPage } from '../pages/further-leave-to-remain-cnc-page';
import { whichReferenceNumberYouProvideCncPage } from '../pages/which-reference-number-you-provide-cnc-page';
import { contactDetailsCncPage } from '../pages/contact-details-cnc-page';
import { checkYourAnswerCancellationForm } from '../pages/check-your-answer-cancellation-form';
import { cancellationRequestReceivedCncPage } from '../pages/cancellation-request-received-cnc-page';

type Pages = {
  basePage: basePage;
  rodMainFormHomepage: rodMainFormHomepage;
  whoIsCompletingMainFormPage: whoIsCompletingMainFormPage;
  whoAreYouLegallyRepresentingMainFormPage: whoAreYouLegallyRepresentingMainFormPage;
  whatTypeOfSponsorAreYouMainFormPage: whatTypeOfSponsorAreYouMainFormPage;
  areYouDependantOrGuardianOfDependantMainFormPage: areYouDependantOrGuardianOfDependantMainFormPage;
  legalRepresentationMainFormPage: legalRepresentationMainFormPage;
  whatIsApplicationForMainFormPage: whatIsApplicationForMainFormPage;
  whatTypeVisaIsApplicationForMainForm: whatTypeVisaIsApplicationForMainForm;
  furtherLeaveToRemainMainFormPage: furtherLeaveToRemainMainFormPage;
  aboutTheApplicationMainFormPage: aboutTheApplicationMainFormPage;
  cancellingYourApplicationMainFormPage: cancellingYourApplicationMainFormPage;
  areYouRequestingReturnOfMainApplicantPassportTravelMainForm: areYouRequestingReturnOfMainApplicantPassportTravelMainForm;
  forProofOfIdentityOnlyMainFormPage: forProofOfIdentityOnlyMainFormPage;
  youCannotUseThisPassportToTravelMainFormPage: youCannotUseThisPassportToTravelMainFormPage;
  whichReferenceNumberCanYouProvideMainFormPage: whichReferenceNumberCanYouProvideMainFormPage;
  yourDocumentsMainFormPage: yourDocumentsMainFormPage;
  mainApplicantsDetailsMainFormPage: mainApplicantsDetailsMainFormPage;
  enterMainApplicantAddressManuallyMainFormPage: enterMainApplicantAddressManuallyMainFormPage;
  deliveryAddressForDocumentsMainFormPage: deliveryAddressForDocumentsMainFormPage;
  enterDeliveryAddressMainFormPage: enterDeliveryAddressMainFormPage;
  contactDetailsMainFormPage: contactDetailsMainFormPage;
  notesAboutYourRequestMainFormPage: notesAboutYourRequestMainFormPage;
  checkYourAnswersRodMainFormPage: checkYourAnswersRodMainFormPage;
  mainApplicantDeclarationMainFormPage: mainApplicantDeclarationMainFormPage;
  legalRepDeclarationMainFormPage: legalRepDeclarationMainFormPage;
  sponsorAndDependentDeclarationMainFormPage: sponsorAndDependentDeclarationMainFormPage;
  requestReceivedMainFormPage: requestReceivedMainFormPage;
  docNotReceivedHomePage: docNotReceivedHomePage;
  mainApplicantDetailsDNRPage: mainApplicantDetailsDNRPage;
  whatIsTheApplicationForDNRPage: whatIsTheApplicationForDNRPage;
  whatTypeOfVisaIsTheApplicationForDNRPage: whatTypeOfVisaIsTheApplicationForDNRPage;
  furtherLeaveToRemainDNRPage: furtherLeaveToRemainDNRPage;
  whichRefNumCanYouProvideDNRPage: whichRefNumCanYouProvideDNRPage;
  contactDetailsDNRPage: contactDetailsDNRPage;
  checkYourAnswersDNRPage: checkYourAnswersDNRPage;
  reportSubmittedDNRPage: reportSubmittedDNRPage;
  cancelYourRequestHomePage: cancelYourRequestHomePage;
  mainApplicantDetailsCancelPage: mainApplicantDetailsCancelPage;
  whoIsCompletingOriginalFormCncPage: whoIsCompletingOriginalFormCncPage;
  whoAreYouLegallyRepresentingCncPage: whoAreYouLegallyRepresentingCncPage;
  whatTypeOfSponsorAreYouCncPage: whatTypeOfSponsorAreYouCncPage;
  areYouDependantOrGuardianCncPage: areYouDependantOrGuardianCncPage;
  whatIsTheApplicationForCncPage: whatIsTheApplicationForCncPage;
  whatTypeOfVisaIsApplicationForCncPage: whatTypeOfVisaIsApplicationForCncPage;
  furtherLeaveToRemainCncPage: furtherLeaveToRemainCncPage;
  whichReferenceNumberYouProvideCncPage: whichReferenceNumberYouProvideCncPage;
  contactDetailsCncPage: contactDetailsCncPage;
  checkYourAnswerCancellationForm: checkYourAnswerCancellationForm;
  cancellationRequestReceivedCncPage: cancellationRequestReceivedCncPage;
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
      whoIsCompletingMainFormPage: new whoIsCompletingMainFormPage(page),
      whoAreYouLegallyRepresentingMainFormPage: new whoAreYouLegallyRepresentingMainFormPage(page),
      whatTypeOfSponsorAreYouMainFormPage: new whatTypeOfSponsorAreYouMainFormPage(page),
      areYouDependantOrGuardianOfDependantMainFormPage: new areYouDependantOrGuardianOfDependantMainFormPage(page),
      legalRepresentationMainFormPage: new legalRepresentationMainFormPage(page),
      whatIsApplicationForMainFormPage: new whatIsApplicationForMainFormPage(page),
      whatTypeVisaIsApplicationForMainForm: new whatTypeVisaIsApplicationForMainForm(page),
      furtherLeaveToRemainMainFormPage: new furtherLeaveToRemainMainFormPage(page),
      aboutTheApplicationMainFormPage: new aboutTheApplicationMainFormPage(page),
      cancellingYourApplicationMainFormPage: new cancellingYourApplicationMainFormPage(page),
      areYouRequestingReturnOfMainApplicantPassportTravelMainForm: new areYouRequestingReturnOfMainApplicantPassportTravelMainForm(page),
      forProofOfIdentityOnlyMainFormPage: new forProofOfIdentityOnlyMainFormPage(page),
      youCannotUseThisPassportToTravelMainFormPage: new youCannotUseThisPassportToTravelMainFormPage(page),
      whichReferenceNumberCanYouProvideMainFormPage: new whichReferenceNumberCanYouProvideMainFormPage(page),
      yourDocumentsMainFormPage: new yourDocumentsMainFormPage(page),
      mainApplicantsDetailsMainFormPage: new mainApplicantsDetailsMainFormPage(page),
      enterMainApplicantAddressManuallyMainFormPage: new enterMainApplicantAddressManuallyMainFormPage(page),
      deliveryAddressForDocumentsMainFormPage: new deliveryAddressForDocumentsMainFormPage(page),
      enterDeliveryAddressMainFormPage: new enterDeliveryAddressMainFormPage(page),
      contactDetailsMainFormPage: new contactDetailsMainFormPage(page),
      notesAboutYourRequestMainFormPage: new notesAboutYourRequestMainFormPage(page),
      checkYourAnswersRodMainFormPage: new checkYourAnswersRodMainFormPage(page),
      mainApplicantDeclarationMainFormPage: new mainApplicantDeclarationMainFormPage(page),
      legalRepDeclarationMainFormPage: new legalRepDeclarationMainFormPage(page),
      sponsorAndDependentDeclarationMainFormPage: new sponsorAndDependentDeclarationMainFormPage(page),
      requestReceivedMainFormPage: new requestReceivedMainFormPage(page),
      docNotReceivedHomePage: new docNotReceivedHomePage(page),
      mainApplicantDetailsDNRPage: new mainApplicantDetailsDNRPage(page),
      whatIsTheApplicationForDNRPage: new whatIsTheApplicationForDNRPage(page),
      whatTypeOfVisaIsTheApplicationForDNRPage: new whatTypeOfVisaIsTheApplicationForDNRPage(page),
      furtherLeaveToRemainDNRPage: new furtherLeaveToRemainDNRPage(page),
      whichRefNumCanYouProvideDNRPage: new whichRefNumCanYouProvideDNRPage(page),
      contactDetailsDNRPage: new contactDetailsDNRPage(page),
      checkYourAnswersDNRPage: new checkYourAnswersDNRPage(page),
      reportSubmittedDNRPage: new reportSubmittedDNRPage(page),
      cancelYourRequestHomePage: new cancelYourRequestHomePage(page),
      mainApplicantDetailsCancelPage: new mainApplicantDetailsCancelPage(page),
      whoIsCompletingOriginalFormCncPage: new whoIsCompletingOriginalFormCncPage(page),
      whoAreYouLegallyRepresentingCncPage: new whoAreYouLegallyRepresentingCncPage(page),
      whatTypeOfSponsorAreYouCncPage: new whatTypeOfSponsorAreYouCncPage(page),
      areYouDependantOrGuardianCncPage: new areYouDependantOrGuardianCncPage(page),
      whatIsTheApplicationForCncPage: new whatIsTheApplicationForCncPage(page),
      whatTypeOfVisaIsApplicationForCncPage: new whatTypeOfVisaIsApplicationForCncPage(page),
      furtherLeaveToRemainCncPage: new furtherLeaveToRemainCncPage(page),
      whichReferenceNumberYouProvideCncPage: new whichReferenceNumberYouProvideCncPage(page),
      contactDetailsCncPage: new contactDetailsCncPage(page),
      checkYourAnswerCancellationForm: new checkYourAnswerCancellationForm(page),
      cancellationRequestReceivedCncPage: new cancellationRequestReceivedCncPage(page),
    });
  },
  scenarioContext: async ({}, use) => {
    await use({ scenarioId: '' });
  },
});

export const expect = test.expect;
