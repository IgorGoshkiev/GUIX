import { el, setChildren, setAttr } from 'redom'
import imgButtonSound from '../assets/img/showreel/volume-high.svg'
import { createButTelega } from '../js/butTelega'
import inFileBackground from '../assets/video/showreel/1.mp4'

const containerShowreel = document.getElementById('idShowreel')

export function createBlockShowreel () {

  const divSectionShowreel = el('div', {
    class: 'container section-showreel',
  })

  const divSectionShowreelVideo = el('video', {
    class: 'section-showreel__video',
    autoplay: true,
    loop: true,
  })

  const divSectionShowreelSource = el('source', {
    class: 'section-showreel__source',
    src: inFileBackground,
    type: 'video/mp4',
  })


  //--------------------------------------------------
  const divUpContainerShowreel = el('div', {
    class: 'section-showreel__up'
  })

  const contentUp = el('div', {
    class: 'section-showreel__up-content',
  })

  const contantUpFirstText = el('span', {
    class: 'section-showreel__up-content-first',
    textContent: '2023'
  })

  const contantUpSecondText = el('span', {
    class: 'section-showreel__up-content-second',
    textContent: 'SHOWREEL'
  })

  setChildren(contentUp, [
    contantUpFirstText,
    contantUpSecondText
  ])

  const butSound = el('button', {
    class: 'section-showreel__butSound',
  })

  const butSoundImg = el('img', {
    class: 'section-showreel__butSound-img',
    src: imgButtonSound
  })

  setChildren(butSound, butSoundImg)

  setChildren(divUpContainerShowreel, [
    contentUp,
    butSound
  ])
//----------------------------------------------------

  const divDownContainerShowreel = el('div', {
    class: 'section-showreel__down'
  })

  const contentDown = el('div', {
    class: 'section-showreel__down-content'
  })

  const contentDownFirstText = el('span', {
    class: 'section-showreel__down-content-first-text',
    textContent: '250+'
  })

  const contentDownSecondText = el('span', {
    class: 'section-showreel__down-content-second-text',
    textContent: 'проектов выполнено'
  })

  const contentDownThirdText = el('span', {
    class: 'section-showreel__down-content-third-text',
    textContent: 'за все время'
  })

  setChildren(contentDown, [
    contentDownFirstText,
    contentDownSecondText,
    contentDownThirdText
  ])

  const buttonTelegram = createButTelega()

  setChildren(divDownContainerShowreel, [
    contentDown,
    buttonTelegram
  ])
  //-----------------

  setChildren(divSectionShowreelVideo, divSectionShowreelSource)

  setChildren(divSectionShowreel, [
    divUpContainerShowreel,
    divDownContainerShowreel,
    divSectionShowreelVideo
  ])

  setChildren(containerShowreel, divSectionShowreel)
}