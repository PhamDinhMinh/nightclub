# AGENTS.md

## Tech Stack

* Next.js + TypeScript.
* Tailwind CSS.
* shadcn/ui.
* Zustand for global state.
* next-intl for i18n.
* ESLint + Prettier.

---

## Theme

* Support both light mode and dark mode.
* Use theme tokens and CSS variables.
* Do not hardcode colors.

---

## Internationalization

* All user-facing text must support i18n.
* Never hardcode text in components.
* Add translation keys for new content.

---

## Components

* Use arrow function components.

Correct:

```tsx
const HomePage = () => {
  return <div />;
};

export default HomePage;
```

Do not use:

```tsx
function HomePage() {
  return <div />;
}
```

---

## Component Structure

* Keep components small and readable.
* Split reusable components.
* Reuse existing components whenever possible.

---

## Event Handlers

Avoid too many arrow functions inside a component.

Prefer:

```tsx
const handleSubmit = () => {};

<Button onClick={handleSubmit} />
```

Avoid:

```tsx
<Button
  onClick={() => {
    // complex logic
  }}
/>
```

Extract handlers, hooks, or child components when logic grows.

---

## State Management

* Use Zustand only for global state.
* Do not store server state in Zustand.

---

## Styling

* Use Tailwind classes.
* Use shadcn/ui components before creating custom components.
* Avoid inline styles.

---

## Performance

* Avoid unnecessary re-renders.
* Use useMemo and useCallback only when necessary.

---

## File Structure

```
src/
  app/
  components/
    ui/
    common/
  features/
  hooks/
  lib/
  stores/
  i18n/
```

---

## Before Writing Code

Always:

1. Read existing code first.
2. Follow existing patterns.
3. Reuse existing components.
4. Avoid creating a new architecture if one already exists.
5. Keep code simple and maintainable.
