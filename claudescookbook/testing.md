# Claude's Cookbook - Regression and Accessibility Testing

## Test Environment

- Website: https://claudescookbook.com
- Browsers: Safari and Chrome
- Devices: Desktop and mobile
- Storage: Browser localStorage

## 1. Navigation

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| NAV-001 | Open Recipes page | Page loads successfully | Not tested |
| NAV-002 | Open Recipe Index | Index loads and displays recipes | Not tested |
| NAV-003 | Use recipe navigation links | Correct recipe is displayed | Not tested |
| NAV-004 | Open About page | About page loads successfully | Not tested |
| NAV-005 | Open Favorites page | Favorites page loads successfully | Not tested |
| NAV-006 | Navigate between pages | Links lead to correct destinations | Not tested |

## 2. Recipe Functionality

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| REC-001 | Increase recipe yield | Yield and ingredient quantities increase correctly | Not tested |
| REC-002 | Decrease recipe yield | Yield and ingredient quantities decrease correctly | Not tested |
| REC-003 | Change increment | Subsequent yield adjustments use selected increment | Not tested |
| REC-004 | Reset yield | Original yield and ingredient quantities return | Not tested |
| REC-005 | Adjust two different recipes | Each recipe scales independently | Not tested |
| REC-006 | Scale fractional ingredients | Fractions and amounts display correctly | Not tested |

## 3. Recipe Creation Form

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| FORM-001 | Submit valid recipe | Recipe is saved and displayed | Not tested |
| FORM-002 | Submit without recipe name | Submission is rejected with an error | Not tested |
| FORM-003 | Submit without yield | Submission is rejected with an error | Not tested |
| FORM-004 | Submit without ingredients | Submission is rejected with an error | Not tested |
| FORM-005 | Submit without directions | Submission is rejected with an error | Not tested |
| FORM-006 | Submit without source | Submission is rejected with an error | Not tested |
| FORM-007 | Submit whitespace-only fields | Invalid input is rejected | Not tested |
| FORM-008 | Submit recipe without image | Blank image placeholder is displayed | Not tested |
| FORM-009 | Submit recipe with image | Image displays correctly | Not tested |

## 4. Saved Data and Images

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| DATA-001 | Refresh after saving recipe | Recipe remains available | Not tested |
| DATA-002 | Reopen browser after saving | Recipe remains available in same browser | Not tested |
| DATA-003 | Upload photo to existing recipe | Correct photo displays | Not tested |
| DATA-004 | Refresh after uploading photo | Photo remains available | Not tested |
| DATA-005 | Remove uploaded photo | Photo disappears | Not tested |
| DATA-006 | Refresh after removing photo | Removed photo stays removed | Not tested |
| DATA-007 | Save multiple recipes | All recipes display without duplication | Not tested |

## 5. Accessibility

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| A11Y-001 | Navigate using Tab | Interactive elements receive focus | Not tested |
| A11Y-002 | Activate buttons using keyboard | Buttons work with Enter or Space | Not tested |
| A11Y-003 | Inspect keyboard focus | Focus indicator is visible | Not tested |
| A11Y-004 | Inspect form labels | Inputs have accessible labels | Not tested |
| A11Y-005 | Inspect images | Informative images have appropriate alt text | Not tested |
| A11Y-006 | Inspect heading hierarchy | Headings follow a logical structure | Not tested |

## 6. Responsive Layout

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| UI-001 | Test at 320px width | No horizontal overflow | Not tested |
| UI-002 | Test at 375px width | Content and controls remain usable | Not tested |
| UI-003 | Test at 768px width | Layout adapts correctly | Not tested |
| UI-004 | Test desktop layout | Content displays without overlap | Not tested |
| UI-005 | Open recipe form on mobile | Form fields and buttons remain usable | Not tested |
| UI-006 | View recipe images on mobile | Images fit within recipe cards | Not tested |

## 7. Browser Compatibility

| ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| BROWSER-001 | Test in Safari | Core functionality works | Not tested |
| BROWSER-002 | Test in Chrome | Core functionality works | Not tested |
| BROWSER-003 | Test image uploads | File selection and storage work | Not tested |
| BROWSER-004 | Test Cooking Mode | Screen wake lock works where supported | Not tested |
| BROWSER-005 | Test theme switching | Theme changes and persists after refresh | Not tested |

## Defect Log

Document any failed tests here, including steps to reproduce, expected behavior, actual behavior, and severity.