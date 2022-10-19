## Exercise 1

Before beginning this exercise, we must quickly switch to the pages-and-routing branch.

```sh
git checkout pages-and-routing
```

Let’s create our first page! Throughout this training, we will build the Bitovi eCommerce shop, the premier stop for all fake store items. Let’s start by creating a landing page. This should be the first page users see when they visit this site.

Once you set up this page, add a CSS module of the same name and include the following markup and styles.

**Markup**

```tsx
<div className={styles.container}>
  <h1 className={styles.title}>New Arrivals are Here!</h1>
  <h2 className={styles.subtitle}>
    The new arrivals have, well, newly arrived. Checkout the latest options from
    our summer small-batch release while they are still in stock!
  </h2>
  <button className={styles.button}>Shop Now!</button>
</div>
```

**Styles**

```css
.container {
  background-color: var(--bitovi-red-600);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing) \* 4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  height: 600px;
}

.title {
  font-size: 48px;
  color: white;
}

.subtitle {
  font-size: 24px;
  color: white;
}

.button {
  width: 200px;
  height: 55px;
  border-radius: var(--border-radius);
  margin: calc(var(--spacing) \* 2) 0;

  font-size: 24px;
  background-color: white;
  border: white;
  color: var(--bitovi-red-600);
}

.button:hover {
  cursor: pointer;
  background-color: var(--bitovi-red-800);
  color: white;
}
```

To confirm you have it set up properly, run `npm run dev`, and navigate to the application. There should be a red container with text rendered white.
