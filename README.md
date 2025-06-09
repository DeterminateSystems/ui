# `@determinate-systems/ui`

## Usage

The only special note here is that there is a bundled CSS file that needs to be imported alongside the usual React components. Most bundlers are able to ingest CSS, so this import statement should suffice:

```javascript
import "@determinate-systems/ui/index.css";
```

## Development

Run these two commands in two separate terminals. (Storybook needs to see the CSS, so it's better to have Rollup complete its CSS work.)

1. `npm run watch`
2. `npm run storybook`

Remember to use `npm run format:fix` to match Prettier's expected formatting style.
