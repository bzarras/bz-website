# bz-website

Ben Zarras's personal website, built with React, TypeScript and Tailwind CSS (bootstrapped with [Create React App](https://create-react-app.dev/)).

## Scripts

- `npm start`: run the dev server at http://localhost:3000
- `npm test`: run the tests in watch mode
- `npm run build`: build for production into `build/`

## Ben's notes

### Styles
I am using Tailwind CSS.

Tailwind resources:
- [Using tailwind with create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
- [Video about grid layout](https://www.youtube.com/watch?v=_r2qB44o_Fs)


### Custom Domain and DNS
Well, DNS and networking always prove to be a source of complication. I have decided
to run the website on [AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html)
because it was dead simple to configure CICD and deploy the website to the web,
but now setting up a custom domain is proving to be complicated with Google Domains.
When I am ready to publish the site, check out these docs:
1. https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-google-domains.html
2. https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html
