import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import theme from "@/global/styles/theme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: theme.lightThemeColors,
    },
  },
});
