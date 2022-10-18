## Exercise 1

We have the makings of an eCommerce site, but currently, there’s nothing about who we are as brand. This information often lives in a CMS so marketing and other departments can update the data. Let’s create an about page that is statically generated.

To start, create an about page in the `pages/` directed with the following props, markup, and styles.

```ts
import type { About } from "@shared/about";

interface AboutPageProps {
  aboutUs: About;
}
```

**Markup**

```tsx
<>
  <h1 className={styles.title}>About Us!</h1>
  <div className={styles.container}>
    <div className={styles.aboutSection}>
      <h2>{aboutUs.location.title}</h2>
      <p>{aboutUs.location.description}</p>
    </div>
    <div className={styles.aboutSection}>
      <h2>{aboutUs.about.title}</h2>
      <p>{aboutUs.about.description}</p>
    </div>
    <div className={styles.aboutSection}>
      <h2>{aboutUs.team.title}</h2>
      <p>{aboutUs.team.description}</p>
    </div>
  </div>
</>
```

**Styles**

```css
.container {
  padding: var(--spacing);
  display: grid;
  gap: var(--spacing);
  grid-template-columns: repeat(1, 800px);
}

.aboutSection {
  background-color: var(--background-gray);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}
```

Once created, add the needed infrastructure to instruct Next to generate the page statically. This project comes equipped with a function to gather the about us data, which can be found here.

```ts
import { getAboutUsContent } from "@shared/about";
```

Once completed, run npm run dev, and navigate to the application. Click the About link in the header, and there should be a page displaying the about us data.
