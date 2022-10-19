## Exercise

We’ve been talking with marketing, and they are unwilling to wait 35 seconds to trigger a revalidation. Instead, they want it now. We’re a big, constantly evolving company, after all. To give them what they want, let’s add an API route called `revalidate-about` to trigger a rebuild manually. We talked to cyber, and they generated a secure secret for use, listed below.

```
password123
```

To add a .env variable to Next, create a .env file at the project's root and define and assign your variable within it.

```
FAKE_VARIABLE=fake-variable-value
```

to test it:

```sh
npm run build
npm start
```

If you have `curl` on your machine:

```sh
# should fail
curl 'http://localhost:3000/api/revalidate-about?revalidationSecret=password12'
# {"message":"Invalid secret"}

# should succeed
curl 'http://localhost:3000/api/revalidate-about?revalidationSecret=password123'
# {"revalidated":true}
```

Otherwise, you can visit the following in your browser:

```
http://localhost:3000/api/revalidate-about?revalidationSecret=password12
http://localhost:3000/api/revalidate-about?revalidationSecret=password123
```
