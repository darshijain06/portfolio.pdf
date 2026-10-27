# Webpage audit

Review of the personal profile page in `index.html`, `style.css`, and `script.js`.

## Summary

The page meets the requested structure: a document title, one main heading, an About section, a Skills list, and a Projects section with links. Styling lives in `style.css` with no inline `style` attributes. Unknown personal details are marked with **PLACEHOLDER** so they can be found and replaced.

## Requirements checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| HTML in `index.html` | Met | Semantic layout with header, main, footer, and section IDs. |
| All styling in `style.css` | Met | Linked from the document head. |
| No inline style attributes | Met | Appearance is class- and token-based. |
| Page title | Met | Browser tab title uses PLACEHOLDER Full Name. |
| One main heading | Met | A single `h1` in the hero. |
| About section | Met | `#about` with bio and contact links. |
| Skills as a list | Met | Unordered list of six skill items. |
| Projects with links | Met | Three project titles are links. |
| PLACEHOLDER markers | Met | Name, location, bio, email, social URLs, skills, and project copy. |
| `script.js` | Met | Greeting, copyright year, and theme toggle with localStorage. |

## Accessibility

- Skip link, landmark regions, and labelled sections are present.
- Theme control exposes `aria-pressed` and updates its label.
- External links use `rel="noopener noreferrer"`.
- Color tokens switch in dark theme; after filling real copy, re-check contrast on links and muted text.

## JavaScript behavior

- Sets the footer year from the current date.
- Changes the hero greeting by time of day.
- Toggles light/dark theme and remembers the choice.

## Follow-up before publishing

1. Search the project for `PLACEHOLDER` and replace every instance with real details.
2. Point project and profile links at live URLs.
3. Open `index.html` in a browser and check navigation, theme toggle, and mobile width.
4. Add a real photo or extra sections only if you want them; they are not required for this page.
