import { PageObject as test } from '@_src/fixtures/page-object.fixture';
import { RecruitmentPage } from '@_src/pages/recruitment.page';
import { validCandidateData } from '@_src/test-data/candidate.data';
import { CandidateApplicationStageView } from '@_src/views/candidate_application_stage.view';
import { CandidateShortListView } from '@_src/views/candidate_shortlistview';
import { expect } from '@playwright/test';

test.describe('Recruitment lifecycle tests', () => {
  test(
    'Add a new candidate',
    { tag: '@CandidateRecruitment' },
    async ({ RecruitmentPage }) => {
      // Arrange
      let candidateApplicationStageView: CandidateApplicationStageView;
      let candidateShortListView: CandidateShortListView;
      let recruitmentPage: RecruitmentPage;

      await test.step('Add Candidate', async () => {
        // Act
        const addCandidateView =
          await RecruitmentPage.clickAddCandidateButton();
        candidateApplicationStageView =
          await addCandidateView.Add(validCandidateData);
        // Assert
        await expect(addCandidateView.toast).toBeVisible();
        await expect(addCandidateView.toast).toContainText(
          'Successfully Saved'
        );
      });

      await test.step('Shortlist Candidate', async () => {
        // Act
        candidateShortListView =
          await candidateApplicationStageView.shortlistCandidate();
      });

      await test.step('Confirm Shortlist', async () => {
        // Act
        recruitmentPage = await candidateShortListView.confirmShortlist();
        // Assert
        await expect(candidateShortListView.toast).toBeVisible();
        await expect(candidateShortListView.toast).toContainText(
          'Successfully Saved'
        );
        expect(await recruitmentPage.getHeading('Candidates')).toContain(
          'Candidates'
        );
      });
    }
  );
});
