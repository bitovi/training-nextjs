## Exercise 2

Let’s build out our own custom 404 page. This page can have whatever you want inside of it. If you don’t want to come up with anything, some styles and markup are below!
**Markup**

```tsx
<div className={styles.container}>
  <h1 className={styles.title}>404!</h1>
  <h2 className={styles.subtitle}>Whoops. This page is not available.</h2>
</div>
```

**Styles**

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 88px;
  font-weight: bold;
  color: var(--bitovi-red-800);
}

.subtitle {
  font-size: 40px;
}
```

To check that everything was properly implemented, run npm run dev and navigate to `/does-not-exit` (or any other non-existent path!). You should see your custom 404 page!
