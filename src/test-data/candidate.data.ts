import { CandidateModel, Vacancy } from '@_src/models/candidate.model';

export const validCandidateData: CandidateModel = {
  firstName: 'John',
  middleName: 'A.',
  lastName: 'Doe',
  vacancy: Vacancy.SeniorQaLead,
  email: 'john.doe@example.com',
  contactNumber: '+1 7655788046',
  resumeFilePath:
    '/Users/michalkochanowski/Desktop/TestProjects/OrangeHRM/src/test-data/testCv.docx',
  keywords: 'JavaScript, TypeScript',
  dateOfApplication: '',
  notes: 'Experienced developer with a focus on frontend technologies.',
  consentOpt: true,
};
