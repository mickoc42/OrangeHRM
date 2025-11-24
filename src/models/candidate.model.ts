export interface CandidateModel {
  firstName: string;
  middleName: string;
  lastName: string;
  vacancy: Vacancy;
  email: string;
  contactNumber: string;
  resumeFilePath: string;
  keywords: string;
  dateOfApplication: string;
  notes: string;
  consentOpt: boolean;
}

export enum Vacancy {
  SeniorQaLead = 'Senior QA Lead',
  JuniorAccountAssistant = 'Junior Account Assistant',
}
