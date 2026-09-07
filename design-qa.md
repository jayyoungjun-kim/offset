# List card design QA · 2026-09-08

- source visual truth path: /var/folders/8n/c92bcqzs3d15pj6vg19rnvs40000gn/T/codex-clipboard-c7851e39-583e-4f4f-ad96-57a6bca3442a.png
- implementation screenshot paths: .wrangler/cards-1440.png, .wrangler/cards-390.png; focused card: .wrangler/card-focus.png
- viewport: 1920/1440/768/390 × 1000 CSS px, deviceScaleFactor 1.
- Source pixels: 3034×1676, screenshot of an advertising card strip. Implementation pixels: 1440×1000 and390×1000. Source device density is unknown; compare component hierarchy and relative spacing, not whole-page pixel parity.
- State: default program list, one persisted program, no thumbnail uploaded. Blank thumbnail is the user's explicit requirement. Existing4/2/1 grid and4:3 frames take precedence over reference portrait images/horizontal strip.
- Browser: in-app local page opened and accessibility tree inspected. Its tool did not expose capture/viewport APIs; standalone headless Chrome used for responsive screenshots and interactions.

## Comparison
Source and desktop/mobile captures opened together in one comparison input. Reference has rounded white cards on gray, inset rounded images, muted small descriptor followed by bold black title. Implementation carries these features into the existing program card. Reference advertising content is intentionally not copied. Schedule and enrollment status retained in a compact footer.

- Fonts/typography: existing Pretendard retained. 14/20px muted descriptor,18/26px semibold title(desktop),20/28px mobile. Full program name remains readable without clamping; hierarchy matches the card reference.
- Spacing/layout: 28px card corners,20px inner corners,10px inset. White frame clearly separates thumbnail and gray canvas. Existing4/2/1 grid and content-aligned canvas retained. No horizontal overflow across four tested widths.
- Colors/tokens: #f5f5f5 canvas,white card,#eeeef0 blank thumbnail,#171719 title and#737780 secondary text. Reference's soft neutral contrast translated without unrequested illustration assets.
- Image quality: managed upload pipeline unchanged. No sample image or code-generated decorative thumbnail introduced.4:3 whole-image rendering preserved.
- Copy/content: real program title and metadata used; advertised product copy omitted. No instructional design prose added to public page.
- Full-view comparison evidence: .wrangler/cards-1440.png and .wrangler/cards-390.png viewed with source in the same input. Focused card remains readable in full capture; extra focused capture also saved.

## Findings and history
- First visual comparison found no actionable P0/P1/P2 issues within the requested card update and retained product constraints. No visual correction iteration required.
- Expected differences: reference portrait media, marketing headline and horizontal scrolling are outside this request;4:3 grid and existing toolbar retained. Single real program remains a single card.
- Follow-up: current card imagery is intentionally empty until an admin uploads an image.

## Verification
- Four widths: card radius/background,4:3 image,4/2/1 grid and overflow checks passed.
- Sorting selection and card navigation to detail passed.
- Typecheck and build passed. No new implementation-mirroring tests added for CSS-only layout.

final result: passed
