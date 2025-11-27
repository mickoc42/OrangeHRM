# Tests for OrangeHrm application

## OrangeHrm Application

all tests use https://opensource-demo.orangehrmlive.com/ live demo

Manual tests can be found in /Manual Test Cases folder

Simple diagram for PageObject structure:
https://excalidraw.com/#json=MmK9k2g9CUf2QpQn-t2ZN,FDEfH9FykyZrI_h4ssMVmA

## Github actions

You can run all workflows through github actions on repository:

Playwright Tests - run all available tests

Playwright Tests login - run login tests

Playwright Tests sideMenu - run sideMenu tests

Playwright Tests candidateRecruitment - run CandidateRecruitment tests

## important

candidateRecruitment test fails, this is desired, and the Bug Report for it is in:
/Manual Test Cases/e2e/Bugs/

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky`
- prepare local env file: `cp .env-template .env`
- copy application main URL as value of `BASE_URL` variable in `.env` file

## Use

Run all tests:

```
npm run test:all
```

Run login tests:

```
npm run test:login
```

Run sideMenu tests:

```
npm run test:sideMenu
```

Run candidateRecruitment tests:

```
npm run test:candidateRecruitment
```
