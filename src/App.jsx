import './App.css'
import trecco from './assets/trecco.png'

export function App() {
  return (
    <div id='page' className='flex'>
      <header class="flex">
        <img src={trecco} alt="foto de perfil" />
        <span>@treccoloja</span>
      </header>
      <main className='flex'>
         <ul class="flex">
          <li>
            <a href="#" target="_blank">LINK</a>
          </li>
          <li>
            <a href="#" target="_blank">LINK</a>
          </li>
          <li>
            <a href="#" target="_blank">LINK</a>
          </li>
          <li>
            <a href="#" target="_blank">LINK</a>
          </li>
        </ul>
        <div>
          <a href="">
            <img src="assets/twitter.svg" alt="twitter"/>
          </a>
          <a href="">
            <img src="assets/twitch.svg" alt="twitch"/>
          </a>
          <a href="">
            <img src="assets/linkedin.svg" alt="linkedin"/>
          </a>
      
          <a href="">
            <img src="assets/instagram.svg" alt="instagram"/>
          </a>
      
          <a href="">
            <img src="assets/github.svg" alt="github"/>
          </a>
        </div>
      </main>
    </div>
  )
}