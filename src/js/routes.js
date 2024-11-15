
import { createBlockHeader } from '../js/blockHeader'
import { createBlockMain, effectHoverButton } from '../js/blockMain'
import { createSliderBlockMain } from '../js/sliderBlockMain'
import { createBlockShowreel } from '../js/blockShowreel'
import { createBlockServices } from '../js/blockServices'
import { createBlockPortfolio } from '../js/blockPortfolio'
import { createSliderBlockPortfolio } from '../js/sliderBlockPortfolio'
import { createBlockTestimonials } from '../js/blockTestimonials'
import { createBlockFooter } from '../js/blockFooter'
import { scrollTrigger } from '../js/scrolTrigger'
import { getWidth } from '../js/getWidth'
import Navigo from 'navigo'

export function myRouter () {
  window.addEventListener('load', () => {
    const router = new Navigo('/')
    router
      .on({
        '/': () => {
          createBlockHeader()
          createBlockMain()
          // effectHoverButton()
          createSliderBlockMain()
          createBlockShowreel()
          createBlockServices()
          createBlockPortfolio()

          createBlockTestimonials()
          createBlockFooter()
          createSliderBlockPortfolio()
          const widthSleder = getWidth(".portfolio-slider")
          const container = document.querySelector(".portfolio-slider");
          container.style.setProperty('--slider-wraper-width', widthSleder);

        }

      })

      .notFound(() => {
        router.navigate('/')
      })

      .resolve()
  })
}
