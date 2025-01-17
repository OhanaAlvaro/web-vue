/*
  Texts in the 'en' section should be in English
  Texts in the 'es' section should be in Spanish
  ...
*/
const messages = {
  en: {
    whatIsOhana: 'What is Ohana?',
    welcome: 'Welcome to Ohana',
    install: 'Install',
    getStarted: 'Get started',
    simplicity: 'Simplicity',
    simplicityDesc: "It's time for unwanted content to go away with one click.",
    simplicityShortDesc: 'As easy as pressing play',
    yourWay: 'Your way',
    yourWayDesc:
      'We just provide the information and the tools. You decide what is good for you to watch.',
    yourWayShortDesc: 'You decide what you watch',
    community: 'Community',
    communityDesc:
      'We are a community of developers and movie fans like you. We work passionately to make Ohana possible.',
    communityShortDesc: 'Built by people like you',
    filterContent: 'Filter content on your favourite providers',
    onlyOnChrome: '*As of now, only available when you watch using Chrome browser',
    discoverContent: 'Discover content',
    whatDoYouSkip: 'What do you want to skip?',
    showAdvanced: 'Hide Advenced Search | Show Advanced Search',
    safety: 'Safety',
    movies: 'Movies',
    shows: 'Shows',
    providers: 'Providers',
    genre: 'Genre | Genres',
    showOnlyClean: 'Show only clean movies',
    showOnlyCertified: 'Show only Ohana certified movies',
    severe: 'Severe',
    moderate: 'Moderate',
    mild: 'Mild',
    slight: 'Slight',
  },
  es: {
    whatIsOhana: '¿Qué es Ohana?',
    welcome: 'Welcome to Ohana',
    install: 'Instalar',
    getStarted: 'Get started',
    /* Highlighted values on top*/
    prop1: 'Health',
    prop1Desc: 'As easy as pressing play',
    prop2: 'Choice',
    prop2Desc: 'You decide what you watch',
    prop3: 'Community',
    prop3Desc: 'Built by people like you',
    /* Values displayed on the home view */
    value1: 'Mental health',
    value1Desc: 'In a world with growing mental health issues, some scenes can harm the viewers. Ohana enables the creation of safe spaces. Ohana means nobody gets left behind.',
    value2: 'Choice',
    value2Desc: 'Our aim is to empower you as a viewer, giving you the tools to choose what to watch and what not to. With Ohana the choice is yours',
    value3: 'Child protection',
    value3Desc: 'Chilhood should be a time when kids can grow, explore and develop in a safe enviroment. Ohana helps create a safe enviroment for kids.',
    value4: "Women's rights",
    value4Desc: 'We are not objects for mens satisfaction. Ohana helps us take action and fight the rape culture that impregnates too many movies.',
    value5: 'Easy pissy',
    value5Desc: 'We work right on your favourity providers, just install our Chrome extension, tell us your preferences, and keep watching movies as usual while we work for you in the background.',
    value6: 'Community',
    value6Desc: 'We are no large corporation, we are community of movie fans like you. Ohana is non for profit organization',
    /*filterContent: 'Filter content on your favourite providers',
    onlyOnChrome: '*As of now, only available when you watch using Chrome browser',*/
    discoverContent: 'Discover content',
    whatDoYouSkip: 'What do you want to skip?',
    showAdvanced: 'Hide Advenced Search | Show Advanced Search',
    safety: 'Safety',
    movies: 'Movies',
    shows: 'Shows',
    providers: 'Providers',
    genre: 'Genre | Genres',
    showOnlyClean: 'Show only clean movies',
    showOnlyCertified: 'Show only Ohana certified movies',
    severe: 'Severe',
    moderate: 'Moderate',
    mild: 'Mild',
    slight: 'Slight',

  },
}

/*****************************************/
/* DO NOT TOUCH ANYTHING UNDER THIS LINE */
/*****************************************/

/* How to translate a text

On other files. Replace the text to be translated with:
  a) {{ $t('whatIsOhana') }} if it does NOT contain html tags (<p>, <b>, <a> ...)
  b) <span v-html="$t('whatIsOhana')"></span> otherwise

On this file. Add the (translated) text under each language, eg:
  en: {
    whatIsOhana: 'What is Ohana?',
    ....
  },
  es: {
    whatIsOhana: '¿Qué es Ohana?',
    ...
  },

*/

import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages, // set locale messages
})

export default i18n
