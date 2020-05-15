import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ストアをインポートする
import store from './store'
// ルートコンポーネントをインポートする
import App from './App.vue'
// 
import './bootstrap'

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  store, // ストアを読み込む
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App />' // ルートコンポーネントを描画する
})
