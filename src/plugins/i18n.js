/*
  Texts in the 'en' section should be in English
  Texts in the 'es' section should be in Spanish

  You might have to copy some keys from one section into another in they are missing
  ...
*/
const messages = {
  en: {
    whatIsOhana: 'What is Ohana?',
    welcome: 'Welcome to Ohana',
    install: 'Install',
    home: 'Home',
    about: 'About',
    getStarted: 'Get started',
    discoverContent: 'Find Movies',
    discoverContent_long: 'Find something great to watch',
    language: 'Language',
    /* Highlighted values on top*/
    prop1: 'Health',
    prop1Desc: 'Mental health aware',
    prop2: 'Choice',
    prop2Desc: 'You decide what you watch',
    prop3: 'Community',
    prop3Desc: 'Built by people like you',
    /* Values displayed on the home view */
    value1: 'Mental health',
    value1Desc:
      'In a world with growing mental health issues, some scenes can harm the viewers. Ohana enables the creation of safe spaces. Ohana means nobody gets left behind.',
    value2: 'Choice',
    value2Desc:
      'Our aim is to empower you as a viewer, giving you the tools to choose what to watch and what not to. With Ohana the choice is yours',
    value3: 'Child protection',
    value3Desc:
      'Chilhood should be a time when kids can grow, explore and develop in a safe enviroment. Ohana helps create a safe enviroment for kids.',
    value4: "Women's rights",
    value4Desc:
      'We are not objects for mens satisfaction. Ohana helps us take action and fight the rape culture that impregnates too many movies.',
    value5: 'Easy peasy',
    value5Desc:
      'We work right on your favourity providers, just install our Chrome extension, tell us your preferences, and keep watching movies as usual while we work for you in the background.',
    value6: 'Community',
    value6Desc:
      'We are no large corporation, we are community of movie fans like you. Ohana is non for profit organization',
    /**/
    advanced_search: 'Advanced search',
    search_subtitle: `Find something great to watch!`,
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
    welcome: 'Bienvenido a Ohana',
    install: 'Instalar',
    ome: 'Portada',
    about: 'Acerca de',
    getStarted: 'Empezar',
    discoverContent: 'Descubre contenido',
    discoverContent_long: 'Encuentra el mejor contenido',
    language: 'Idioma',
    /* Highlighted values on top*/
    prop1: 'Salud',
    prop1Desc: 'Concienciados del cuidado de la salud mental',
    prop2: 'Libertad',
    prop2Desc: 'Tú decides que ver',
    prop3: 'Comunidad',
    prop3Desc: 'Creado por gente como tú',
    /* Values displayed on the home view */
    value1: 'Salud mental',
    value1Desc:
      'En un mundo con crecientes problemas de salud mental algunas escenas pueden dañar a los espectadores. Ohana permite la creación de espacios seguros, nadie se queda atrás.',
    value2: 'Libertad',
    value2Desc:
      'Nuestro objetivo es empoderarte como espectador, brindándote las herramientas para elegir qué ver y qué no. Con Ohana la elección es tuya.',
    value3: 'Protección infantil',
    value3Desc:
      'La infancia debe ser un momento en el que los niños puedan crecer, explorar y desarrollarse en un entorno seguro. Ohana ayuda a crear este entorno seguro para los niños.',
    value4: 'Derechos de la mujer',
    value4Desc:
      'No somos objetos para la satisfacción de los hombres. Ohana nos ayuda a tomar medidas y luchar contra la cultura de la violación que impregna demasiadas películas.',
    value5: 'Fácil y sencillo, para toda la familia',
    value5Desc:
      'Trabajamos directamente en sus proveedores favoritos, solo instale nuestra extensión de Chrome, díganos sus preferencias y siga viendo películas como de costumbre mientras trabajamos para usted en segundo plano.',
    value6: 'Comunidad',
    value6Desc:
      'No somos una gran corporación, somos una comunidad de apasionados del cine, como tú. Ohana es una organización sin animo de lucro.',
    /**/
    advanced_search: 'Búsqueda avanzada',
    search_subtitle: 'Encuentra el mejor contenido',
    whatDoYouSkip: '¿Qué quieres evitar?',
    showAdvanced: 'Ocultar búsqueda avanzada | Mostrar búsqueda avanzada',
    safety: 'Protección',
    movies: 'Películas',
    shows: 'Series',
    providers: 'Proveedores',
    genre: 'Género | Géneros',
    showOnlyClean: 'Mostrar solo películas limpias',
    showOnlyCertified: 'Mostrar solo películas certificadas por Ohana',
    severe: 'Severo',
    moderate: 'Moderado',
    mild: 'Leve',
    slight: 'Ligero',
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
  locale: navigator.language || navigator.userLanguage, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n
