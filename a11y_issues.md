# Accessibility Issues

The following accessibility issues were identified using Lighthouse on Chrome.

## 1. Background and foreground colors do not have a sufficient contrast ratio
Low-contrast text is difficult or impossible for many users to read.

**Affected Elements:**
- **Footer Links & Text**:
  - "Compliance" link: Contrast 4.04 (Expected 4.5:1). Foreground: `#707080`, Background: `#0a0a14`.
  - Copyright text "© 2025 Incubyte...": Contrast 2.49 (Expected 4.5:1). Foreground: `#505060`, Background: `#0a0a14`.
  - LinkedIn icon/link ("in"): Contrast 3.5 (Expected 4.5:1). Foreground: `#707080`, Background: `#1a1a2e`.
  - X icon/link ("𝕏"): Contrast 3.5 (Expected 4.5:1). Foreground: `#707080`, Background: `#1a1a2e`.

### Visual Verification
I have visually inspected these elements in the browser.
- **Compliance Link Color**: `rgb(112, 112, 128)` (Matches `#707080`)
- **Copyright Text Color**: `rgb(80, 80, 96)` (Matches `#505060`)

![Footer Screenshot](/Users/sapanparikh/.gemini/antigravity/brain/39c616b1-dea5-4f59-94be-9cbbdd1c4a54/footer_area_1764675308023.png)


## 2. Heading elements are not in a sequentially-descending order
Properly ordered headings that do not skip levels convey the semantic structure of the page.

**Affected Elements:**
- **Footer**: `<h4>` "PRODUCT" seems to skip heading levels (likely missing h2/h3 hierarchy before it).

## 3. Form elements do not have associated labels
Labels ensure that form controls are announced properly by assistive technologies.

**Affected Elements:**
- **Slider Input**: `input#slider-_r_c_` (class `fui-Slider__input`) lacks a label.

## 4. Document does not have a main landmark
One main landmark helps screen reader users navigate a web page.

**Affected Elements:**
- **Document**: The page content should be wrapped in a `<main>` tag or an element with `role="main"`.
