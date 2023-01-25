// Styles
import "@fortawesome/fontawesome-free/css/all.css"
import '@mdi/font/css/materialdesignicons.css'
import {aliases, fa} from "vuetify/iconsets/fa"
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          primary: "#C1040C",
        },
      },
    },
  icons: { 
    defaultSet : "fa",
    aliases,
    sets : {
      fa,
    }
  }
  
}
  
)
