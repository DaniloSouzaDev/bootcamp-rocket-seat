 module.exports = {
   env: {
     es6: true,
     node: true,
   },
   extends: [
     'airbnb-base', 'prettier'
   ],
   plugins: ['prettier'],
    globals: {
     Atomics: 'readonly',
     SharedArrayBuffer: 'readonly',
   },
   parserOptions: {
     ecmaVersion: 2018,
     sourceType: 'module',
   },
   rules: {
     "prettier/prettier": "error",
     "class-methods-use-this": "off",
     "no-param-reassign": "off",
     "camelcase": "off",
     "no-unused-vars": ["error", {"argsIgnorePattern": "next"}]
     /*Todo no ESLint retornar erro, por exemplo se a
     linha de código ficar muito grande */
     //"prettier/prettier": "error",
     /* Existe uma regra padrão no ESLint que
     todo método de uma classe precisa usar a palavra this e não iremos descordar.*/
     //"class-methods-use-this": "off",
     /* Permite que receba um parametro e altere esse parametro, o que não é
     permitido pelo ESLint.*/
     //"no-param-reassign": "off",
     /* Por padrão o ESLint exige que as variáveis sejam camelsace e nós
     desabilitaremos, pois precisaremos mudar isso em algumas ocasiões.*/
     //"camelcase": "off",
     /* No ESLint existe uma regra que diz que não podemos declarar uma variável
     que não iremos usar, mas em aguns casa precisaremos declarar o "next" do middleware
     mesmo sem usar*/
     //"no-unused-vars": ["error", {"argsIgnorePattern": "next" }]
   },
 };


