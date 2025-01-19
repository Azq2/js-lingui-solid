[![NPM Version](https://img.shields.io/npm/v/@lingui-solid/solid?label=@lingui-solid/solid)](https://www.npmjs.com/package/@lingui-solid/solid)

[![NPM Version](https://img.shields.io/npm/v/@lingui-solid/babel-plugin-lingui-macro?label=@lingui-solid/babel-plugin-lingui-macro)](https://www.npmjs.com/package/@lingui-solid/babel-plugin-lingui-macro)

[![NPM Version](https://img.shields.io/npm/v/@lingui-solid/babel-plugin-extract-messages?label=@lingui-solid/babel-plugin-extract-messages)](https://www.npmjs.com/package/@lingui-solid/babel-plugin-extract-messages)

[![NPM Version](https://img.shields.io/npm/v/@lingui-solid/vite-plugin?label=@lingui-solid/vite-plugin)](https://www.npmjs.com/package/@lingui-solid/vite-plugin)

# Summary

This is fork of the [LinguiJS](https://lingui.dev/) with SolidJS support.

More details in PR: https://github.com/lingui/js-lingui/pull/2101

# Install
1. Install required packages
```sh
npm install @lingui-solid/solid
npm install --save-dev vite-plugin-babel-macros
npm install --save-dev @lingui/cli@5 @lingui/conf@5 @lingui/core@5 @lingui/macro@5
npm install --save-dev @lingui-solid/vite-plugin @lingui-solid/babel-plugin-lingui-macro @lingui-solid/babel-plugin-extract-messages

yarn add @lingui-solid/solid
yarn add -D vite-plugin-babel-macros
yarn add -D @lingui/cli@5 @lingui/conf@5 @lingui/core@5 @lingui/macro@5
yarn add -D @lingui-solid/vite-plugin @lingui-solid/babel-plugin-lingui-macro @lingui-solid/babel-plugin-extract-messages

pnpm add @lingui-solid/solid
pnpm add -D vite-plugin-babel-macros
pnpm add -D @lingui/cli@5 @lingui/conf@5 @lingui/core@5 @lingui/macro@5
pnpm add -D @lingui-solid/vite-plugin @lingui-solid/babel-plugin-lingui-macro @lingui-solid/babel-plugin-extract-messages
```

2. Modify `lingui.config.ts`
```ts
import { LinguiConfig } from '@lingui/conf';
import extractor from '@lingui-solid/babel-plugin-extract-messages/extractor';

const config: LinguiConfig = {
  // .....
  // This is required!
  runtimeConfigModule: {
    Trans: ["@lingui-solid/solid", "Trans"],
    useLingui: ["@lingui-solid/solid", "useLingui"],
    extractors: [extractor]
  }
};
export default config;
```
3. Modify `vite.config.ts`
```ts
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import babelMacrosPlugin from 'vite-plugin-babel-macros';
import { lingui as linguiSolidPlugin } from '@lingui-solid/vite-plugin';

export default defineConfig({
  // .....
  plugins: [
    babelMacrosPlugin(), // this is required
    linguiSolidPlugin(), // this is required
    solidPlugin(),
    // ....
   ],
  // ....
});
```
# Usage
In general, usage is same with [@lingui/react](https://lingui.dev/ref/react).

Main component:
```ts
import { I18nProvider } from "@lingui-solid/solid";
import { i18n } from "@lingui/core";
import { messages as messagesEn } from "./locales/en/messages.js";

i18n.load({
  en: messagesEn,
});
i18n.activate("en");

const App = () => {
  return (
    <I18nProvider i18n={i18n}>
      // rest of the app
    </I18nProvider>
  );
};
```

Each other components:
```ts
import { createEffect } from "solid-js";
import { useLingui, Trans } from "@lingui-solid/solid/macro";

const CurrentLocale = () => {
  const { t, i18n } = useLingui();

  createEffect(() => console.log(`Language chnaged: ${i18n().locale}`));

  return (
    <span>
      {t`Current locale`}: {i18n().locale}<br />
      <Trans>
        See for more info:
        <a href="https://lingui.dev/introduction">official documentation</a>
      </Trans>;
    </span>
  );
};
```

For more info: https://lingui.dev/introduction
