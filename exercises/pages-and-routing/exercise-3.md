## Exercise 3

Let’s add a catch all route in the catalog section of our application that prompts people to return to the catalog page. This page can be named whatever you want and can contain any prompt. If you don’t want to come up with anything, some markup and styles are below.
**Markup**

```tsx
<div className={styles.container}>
  <h1>We cannot find what you are looking for</h1>
  <h2>Maybe you can find it in our catalog.</h2>
  <button className={styles.button}>To Catalog</button>
</div>
```

**Styles**

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: calc(var(--spacing) * 2);
}

.button {
  width: 150px;
  height: 50px;
  border-radius: var(--border-radius);
  margin: calc(var(--spacing) * 2) 0;

  font-size: 24px;
  border: var(--bitovi-red-600);
  background-color: var(--bitovi-red-600);
  color: white;
}

.button:hover {
  cursor: pointer;

  background-color: var(--bitovi-red-800);
}
```

Once finished, run `npm run dev` and navigate to `catalog/2/3` or any variant thereof. You should see the page you just created.
