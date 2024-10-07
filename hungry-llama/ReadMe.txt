Heimasíða fyrir The Hungry Llama veitingarstaðinn.

Varðandi CSS þá stillti ég Tailwind að setja sjálfkrafa fonts sem staðurinn vill (sjá tailwind.config.js)

NPM pakkar utan NPM install:

Fyrir navigation milli síða
npm install react-router-dom

Fyrir CSS / Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Fyrir format á kóðum / prettier
npm install prettier-plugin-tailwindcss --save-dev

Þessir pakkar sjá til þess að allt sé formattað með prettier fyrir commit
npx husky-init && npm install
npm install lint-staged --save-dev

