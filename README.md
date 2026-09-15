# Le voyage dans le temps / Time Travel Physics

An educational website in French that explains the physics of time travel across
four theory modules, built with plain HTML, CSS and JavaScript. The presentation
is styled as a message sent from the year 2040, framed by a character from the
anime *Steins;Gate*.

**Live site:** https://TYXBM.github.io/time-travel-physics/

## Content

| Page | Topic |
| --- | --- |
| `index.html` | Landing page with an animated typewriter introduction |
| `first_theory.html` | Special relativity and time dilation |
| `second_theory.html` | General relativity, black holes and wormholes |
| `third_theory.html` | The Tipler cylinder |
| `fourth_theory.html` | The Novikov self-consistency principle |

## Features

- **Typewriter animation** that types the introduction character by character
  using `setInterval`, triggered once the device is in landscape orientation.
- **Custom navigation** shared across all five pages, with the current page
  marked via `aria-current` and an underline indicator.
- **Responsive layout** handled with CSS media queries. The desktop design uses
  fixed margins and floated images; below 768px the content switches to fluid
  gutters and images stack in the flow. A separate query targets phones in
  landscape, where the screen is wide but short, and caps image height instead
  of width.
- **Orientation prompt** asking phone users to rotate for the landing page,
  whose character-and-speech-bubble layout is designed for a wide viewport.

## Built with

Plain HTML, CSS and JavaScript, no frameworks or build step. Fonts are loaded
from Google Fonts. Layout uses CSS Grid and Flexbox with custom properties for
the colour and typography scale.

## Running locally

No build step or dependencies. Clone the repository and open `index.html` in a
browser.

## Accessibility

- `lang="fr"` set on every page to match the content, so screen readers apply
  French pronunciation rules
- `<meta charset="UTF-8">` so accented characters render reliably
- Semantic `<main>`, `<section>`, `<header>` and `<nav>` elements
- One `<h1>` per page for a correct heading outline; the landing page uses a
  visually hidden heading so the design is unaffected
- Descriptive `alt` text on informative images, empty `alt` on decorative ones
  so screen readers skip them
- `aria-live="polite"` on the typed text so it is announced as it appears

Full conformance has not been verified with assistive technology; this covers
the structural basics only.

## Known limitations

- The landing page requires landscape orientation on phones rather than adapting
  its layout, because the character and speech bubble are positioned using
  viewport-width units tuned for wide screens.
- Images are not compressed or served in a modern format, so initial load is
  heavier than necessary.
- Content is French only.

## Context

Built as a personal project to combine physics research with front-end
development. All explanatory text was written from research into special and
general relativity, closed timelike curves, and time travel paradoxes.
