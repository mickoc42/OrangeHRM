import { CandidateShortListView } from './candidate_shortlistview';
import { Locator, Page } from '@playwright/test';

export class CandidateApplicationStageView {
  // TODO: rejectButton: Locator;
  shortlistButton: Locator;

  constructor(private page: Page) {
    this.shortlistButton = page.getByRole('button', { name: 'Shortlist' });
  }

  async rejectCandidate(): Promise<void> {
    // TODO: Code to reject candidate
  }

  async shortlistCandidate(): Promise<CandidateShortListView> {
    this.shortlistButton.click();
    return new CandidateShortListView(this.page);
  }
}
