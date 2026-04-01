# @slate-ui/react

A generic, themeable React component library built with TypeScript, Tailwind CSS v4, and Framer Motion.

Slate UI is designed to be dropped into any React project. It uses **CSS custom properties** for theming, so your app controls the look — the library just handles the behavior and structure.

---

## Installation

```bash
npm install @slate-ui/react framer-motion lucide-react clsx
```

> `framer-motion`, `lucide-react`, and `clsx` are peer dependencies and need to be installed in your app.

---

## CSS Variables Contract

Slate UI assumes your app defines these CSS custom properties. Without them, components will render without color.

```css
:root {
  /* Accent / brand color */
  --color-accent: #6366f1;
  --color-accent-hover: #4f46e5;
  --color-on-accent: #ffffff;       /* Text on accent backgrounds */

  /* Foreground / background */
  --color-fg: #0f0f0f;
  --color-bg: #f9f9f9;
  --color-surface: #ffffff;
  --color-content-bg: #ffffff;

  /* Borders */
  --color-border: #e4e4e7;
  --color-card-border: #e4e4e7;

  /* Text */
  --color-muted: #71717a;

  /* Danger / destructive */
  --color-danger: #ef4444;
  --color-on-danger: #ffffff;

  /* Focus ring */
  --color-ring: #6366f1;
}
```

Define these in your global CSS (e.g., `globals.css`) for both light and dark modes.

---

## Components

### `Button`

```tsx
import { Button } from "@slate-ui/react";

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

**Variants:** `primary`, `accent`, `secondary`, `ghost`, `danger`, `dangerSubtle`, `outline`, `glass`, `matte`, `minimal`  
**Sizes:** `sm`, `md`, `lg`, `icon`, `iconSm`, `iconLg`  
**Props:** `fullWidth`, `loading`

---

### `Input`

```tsx
import { Input } from "@slate-ui/react";

<Input placeholder="Enter text..." isInvalid={false} />
```

---

### `Card`

```tsx
import { Card } from "@slate-ui/react";

<Card title="My Card" variant="glass" padding="md">
  Content here
</Card>
```

**Variants:** `default`, `subtle`, `danger`, `glass`  
**Padding:** `none`, `sm`, `md`, `lg`  
**Width:** `full`, `2/3`, `1/2`, `1/3`, `1/4`

---

### `Modal`

```tsx
import { Modal } from "@slate-ui/react";

<Modal isOpen={open} onClose={() => setOpen(false)} title="Hello">
  Modal content
</Modal>
```

On mobile: renders as a bottom sheet with swipe-to-dismiss. On desktop: centered dialog.

---

### `Drawer`

```tsx
import { Drawer } from "@slate-ui/react";

<Drawer isOpen={open} onClose={() => setOpen(false)} title="Settings">
  Drawer content
</Drawer>
```

Supports multiple navigation views via `views`, `currentViewId`, `onViewChange`, and `onBack` props.

---

### `Dropdown`

```tsx
import { Dropdown } from "@slate-ui/react";

<Dropdown
  label="Options"
  items={[
    { label: "Edit", onClick: () => {} },
    { label: "Delete", onClick: () => {} },
  ]}
/>
```

---

### `Tooltip`

```tsx
import { Tooltip } from "@slate-ui/react";

<Tooltip content="Hello!" side="right">
  <button>Hover me</button>
</Tooltip>
```

---

### `ConfirmDialog`

```tsx
import { ConfirmDialog } from "@slate-ui/react";

<ConfirmDialog
  isOpen={open}
  title="Delete item?"
  variant="danger"
  requiredText="DELETE"
  onCancel={() => setOpen(false)}
  onConfirm={async () => { /* do work */ }}
/>
```

---

### `EmptyState`

Compound component with `Hero`, `Features`, `Feature`, `Preview`, and `MockCard`.

```tsx
import { EmptyState } from "@slate-ui/react";

<EmptyState>
  <EmptyState.Hero
    title="Nothing here yet"
    description="Get started by creating your first item."
    action={<Button>Create</Button>}
  />
  <EmptyState.Features>
    <EmptyState.Feature icon={<SomeIcon />} title="Fast" description="Really fast." />
  </EmptyState.Features>
</EmptyState>
```

---

### `FadeIn`

```tsx
import { FadeIn } from "@slate-ui/react";

<FadeIn delay={0.1}>
  <p>Fades in on mount</p>
</FadeIn>
```

---

## License

MIT
