# Hero Module Redesign - Testing Checklist

## Build & Lint Validation
- [x] Build completes successfully (`npm run build`)
- [x] No TypeScript errors
- [x] Linting passes with no warnings (`npm run lint`)
- [x] All pages render without errors
- [x] ISR configuration preserved (1h revalidate on all routes)

## Component Rendering

### Button Component
- [ ] Primary variant renders with correct styling
- [ ] Secondary variant renders with correct styling
- [ ] Outline variant renders with correct styling
- [ ] Small size renders correctly
- [ ] Medium size renders correctly
- [ ] Large size renders correctly
- [ ] Full-width option works
- [ ] Disabled state shows correct visual feedback
- [ ] Custom className overrides work

### Hero Component
- [ ] Title renders correctly
- [ ] Subtitle renders correctly (when provided)
- [ ] Description renders correctly (when provided)
- [ ] Eyebrow text renders correctly (when provided)
- [ ] CTAs render as Button components
- [ ] Media slot renders content (when provided)
- [ ] Center alignment works
- [ ] Left alignment works
- [ ] Default background works
- [ ] Gradient background works
- [ ] Muted background works

## Responsive Behavior

### Desktop (lg: 1024px+)
- [ ] Hero uses split layout when media is present
- [ ] Buttons displayed in horizontal row
- [ ] Typography uses largest scale (text-7xl for title)
- [ ] Generous spacing applied (pt-32, pb-24)

### Tablet (md: 768px)
- [ ] Medium typography scale applied
- [ ] Spacing optimized (pt-24, pb-20)
- [ ] Layout remains functional
- [ ] Buttons remain horizontal on larger tablets

### Mobile (sm: 640px and below)
- [ ] Content stacks vertically
- [ ] Media appears first (if present)
- [ ] Buttons stack vertically
- [ ] Smaller typography scale (text-4xl for title)
- [ ] Reduced spacing (pt-20, pb-16)
- [ ] Text remains readable

## Accessibility

### Keyboard Navigation
- [ ] All buttons are focusable with Tab key
- [ ] Focus visible indicator appears (2px accent outline)
- [ ] Focus order is logical
- [ ] Enter/Space activates buttons
- [ ] Can navigate through all interactive elements

### Screen Readers
- [ ] Title reads as h1
- [ ] Subtitle reads as h2
- [ ] Button ARIA labels are announced
- [ ] Disabled buttons announced as disabled
- [ ] Semantic structure is logical

### Motion Preferences
- [ ] With `prefers-reduced-motion: reduce`:
  - [ ] Scale transforms disabled on buttons
  - [ ] Hero media animations disabled
  - [ ] Transition durations reduced
  - [ ] No motion-induced discomfort
- [ ] With `prefers-reduced-motion: no-preference`:
  - [ ] Hover scale on buttons works (1.02)
  - [ ] Active scale on buttons works (0.98)
  - [ ] Media fade-in animation works
  - [ ] Transitions smooth with Apple easing

## Visual Design

### Typography
- [ ] Font family uses SF Pro / system font stack
- [ ] Title uses tight line-height (1.25)
- [ ] Subtitle uses snug line-height (1.375)
- [ ] Description uses relaxed line-height (1.625)
- [ ] Text-balance applied to titles
- [ ] Text-pretty applied to descriptions
- [ ] Max-width constraints prevent long lines

### Spacing
- [ ] Generous whitespace around hero content
- [ ] Consistent gap between elements (4-6 units)
- [ ] Proper padding on mobile (px-4)
- [ ] Content max-width constraint works (.container-max)

### Colors
- [ ] Primary button uses semantic tokens
- [ ] Secondary button uses semantic tokens
- [ ] Outline button uses semantic tokens
- [ ] Text color contrasts meet WCAG AA
- [ ] Background colors appropriate

### Shadows & Effects
- [ ] Button hover states smooth
- [ ] No jarring visual transitions
- [ ] Rounded corners consistent (rounded-full on buttons)

## Functional Testing

### Page Integrations

#### Home Page (`/`)
- [ ] HomeHero component renders
- [ ] Hero displays correct title, subtitle, description
- [ ] "即刻体验" button opens correct URL
- [ ] "了解更多" button opens QR modal
- [ ] Navigation button in header works
- [ ] CTA section button works
- [ ] Models section button navigates to /models

#### Products Page (`/products`)
- [ ] All category buttons render with Button component
- [ ] Primary action buttons work
- [ ] Outline buttons work
- [ ] CTA section buttons render
- [ ] Button variants styled correctly

#### Company Page (`/company`)
- [ ] Page renders without errors
- [ ] Contact section buttons render
- [ ] Button hover states work
- [ ] Click handlers don't throw errors

#### Tools Page (`/tools`)
- [ ] ToolsCTA component renders
- [ ] "立即体验" button works
- [ ] "联系我们" button opens modal

### CTAs & Actions
- [ ] "即刻体验" opens URL in new tab
- [ ] "了解更多" opens QR modal
- [ ] External links have noopener,noreferrer
- [ ] Navigation buttons change routes
- [ ] Modal triggers work correctly

## Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Performance
- [ ] First Load JS under 120 kB
- [ ] No layout shift on load
- [ ] Buttons respond instantly to clicks
- [ ] No unnecessary re-renders
- [ ] Images/media lazy load

## Edge Cases
- [ ] Hero with no CTAs renders correctly
- [ ] Hero with many CTAs (3+) wraps properly
- [ ] Long titles wrap appropriately
- [ ] Very short content doesn't break layout
- [ ] Empty onClick handlers don't throw errors
- [ ] Missing media prop doesn't break layout

## Documentation
- [ ] Hero.example.md is accurate
- [ ] Button.example.md is accurate
- [ ] HERO_REDESIGN_SUMMARY.md reflects implementation
- [ ] Props match documentation

## Code Quality
- [ ] No console errors in browser
- [ ] No React warnings
- [ ] No TypeScript type errors
- [ ] Components follow project conventions
- [ ] Proper use of semantic HTML
- [ ] No unused imports
- [ ] Consistent code formatting

## Visual Regression Testing

### Home Page Hero
- [ ] Layout matches Apple minimal style
- [ ] Whitespace feels generous
- [ ] Typography hierarchy clear
- [ ] CTA buttons prominent but not overwhelming

### Button Variants
- [ ] Primary stands out as main action
- [ ] Secondary clearly secondary
- [ ] Outline appropriate for tertiary actions
- [ ] Hover states subtle but noticeable

## Recommendations for Manual Testing

1. **Test Keyboard Navigation**:
   - Disconnect mouse and navigate site with keyboard only
   - Check all buttons are reachable and activatable

2. **Test Screen Reader**:
   - macOS: Enable VoiceOver (Cmd+F5)
   - Windows: Use NVDA or JAWS
   - Verify all content is announced logically

3. **Test Motion Preferences**:
   - macOS: System Settings → Accessibility → Display → Reduce motion
   - Windows: Settings → Ease of Access → Display → Show animations
   - Verify animations stop when enabled

4. **Test Responsive**:
   - Use browser DevTools responsive mode
   - Test breakpoints: 320px, 640px, 768px, 1024px, 1440px
   - Verify layout doesn't break at any width

5. **Test Dark Mode**:
   - macOS: System Settings → Appearance → Dark
   - Windows: Settings → Personalization → Colors → Dark
   - Verify colors maintain WCAG AA contrast

## Known Limitations

1. Button component does not include icon support yet
2. Hero component does not include video controls for media slot
3. Loading states are not built into Button component (must be implemented per use case)
4. No Storybook stories yet for isolated component testing

## Future Enhancements

1. Add icon prop to Button component
2. Add loading state to Button component
3. Create Hero variants (full-bleed, split-screen, etc.)
4. Add video controls support to Hero media slot
5. Add unit tests with Jest and React Testing Library
6. Add Storybook stories for visual testing
7. Add performance monitoring
