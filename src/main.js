import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'


//createApp(App).mount('#app')
const app = createApp(App)

app.use(Maska) //lib criada para o vue. Criada em formato de plugin
app.config.globalProperties.$moment = moment //não é um plugin pro vue, é uma lib javascript genérica. Propriedade global
app.config.globalProperties.$moment.locale('pt-br')

app.mount('#app')