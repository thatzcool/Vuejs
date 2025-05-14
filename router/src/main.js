import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//라우터 인스턴스를 생성하는 코드가 작성된 파일 불러오기(./router/index.js 파일을 불러온다.)
import router from './router'  

const app = createApp(App)

//애플리케이션 인스턴스에  내장된 use()메소드를 사용하여 전달된 뷰 라우터 인스턴스를 뷰 애플리케이션에 등록한다.
app.use(router)   

app.mount('#app')
