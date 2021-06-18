import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style.scss'
import iconSet from 'quasar/icon-set/material-icons'
import Quasar, {
  QBtn,
  QCard,
  QCardSection,
  QTable,
  QIcon,
  QTr,
  QTd,
  QTh
} from 'quasar'
import TableBody from './components/TableBody'

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: {
    QBtn,
    QCard,
    QCardSection,
    QTable,
    QIcon,
    QTr,
    QTd,
    QTh,
  },
  iconSet
})
Vue.component('table-body', TableBody)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
