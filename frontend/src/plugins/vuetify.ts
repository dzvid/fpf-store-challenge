import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import theme from '@/global/styles/theme';

import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: theme.lightThemeColors,
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
