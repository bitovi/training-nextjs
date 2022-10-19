## Exercise 1

Our application could use some standardization. Our catalog page is squished; there's no navigation bar or footer. Let’s use what we’ve learned about the `_app.tsx` page and create a `Layout` component to add some additional structure to our pages.

Inside the `src/` directory is a `components/` folder; here, create a `Layout.tsx` file and a similarly named CSS module. Create a `Layout` component with the following markup and styles (Footer and Nav can be found in the `components/` folder as well).
**Markup**

```tsx
<div className={styles.container}>
  <Nav />
  <div className={styles.content}>
    <main className={styles.main}>{children}</main>
  </div>
  <Footer />
</div>
```

**Styles**

```css
.container {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  padding: 0 1rem;
}

.main {
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Once you have created the `Layout` component, use it to wrap the pages we have created.

To check that everything is working properly, run `npm run dev`, and navigate to the application. Once there, you should see a header and footer on every page we’ve created.
