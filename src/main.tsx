import { render } from '@builder.io/qwik'
import { App } from './components/App'
import '@builder.io/qwik/qwikloader.js'
import "./global.css";

render(document.getElementById('app') as HTMLElement, <App />)
