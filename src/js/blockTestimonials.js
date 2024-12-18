import { el, setChildren, setAttr, text } from 'redom'
import { createButSleder } from '../js/butSlider'
import inFile1 from '../assets/video/testimonials/5.mp4'
import inFile2 from '../assets/video/testimonials/3.mp4'
import inFile3 from '../assets/video/testimonials/1.mp4'
import inFile4 from '../assets/video/testimonials/2.mp4'
import inFile5 from '../assets/video/testimonials/4.mp4'
// import butPlay from '../assets/img/showreel/volume-high.svg'

const containerTestimonials = document.getElementById('idTestimonials')

export function createBlockTestimonials () {

  const buttonSlider = createButSleder()

  const wraperButSlider = el('div', {
    class: 'section-testimonials_wraper-button-slider'
  })

  setChildren(wraperButSlider, buttonSlider)

  const sectionTestimonials = el('div', {
    class: 'container section-testimonials'
  })

  const sectionTestimonialsTitle = el('h4', {
    class: 'section-testimonials__title',
    textContent: 'Живые отзывы'
  })

  const sectionTestimonialsVideo = el('div', {
    class: 'section-testimonials__video',
  })

  const sectionTestimonialsWraper = el('div', {
    class: 'section-testimonials__video-wraper'
  })

  function createCardBox(inFile, textName, textJob) {

    const cardBoxWraper = el('div', {
      class: 'section-testimonials__card-box-wraper',
    })

    const cardTextName = el('h3', {
      class: 'section-testimonials__card-text-name',
      textContent: textName
    })

    const cardTextJob = el('p', {
      class: 'section-testimonials__card-text-job',
      textContent: textJob
    })

    const customPlay = el('span', {
      class: 'section-testimonials__playpause section-testimonials__play',
    })

    const cardBox = el('video', {
      class: 'section-testimonials__card-box card-box-not-active',
      // controls: true
    })

    const video = el('source', {
      class: 'section-testimonials__mp4',
      src: inFile,
      type: 'video/mp4'
    });

    setChildren(cardBox, video)

    setChildren(cardBoxWraper , [
      cardBox,
      cardTextName,
      cardTextJob,
      customPlay
    ])

    return cardBoxWraper
  }

  const card1 = createCardBox(inFile1, 'Никита Ивановский', 'Директор')
  const card2 = createCardBox(inFile2, 'Валентина Левицкая', 'Директор')
  const card3 = createCardBox(inFile3, 'Грисько Евгений', 'Директор')
  const card4 = createCardBox(inFile4, 'Анна Клочкова', 'Директор')
  const card5 = createCardBox(inFile5, 'Евгений Грисько', 'Директор')

  setChildren(sectionTestimonialsVideo, sectionTestimonialsWraper)

  setChildren(sectionTestimonialsWraper, [
    card1,
    card2,
    card3,
    card4,
    card5
  ])

  setChildren(sectionTestimonials, [
    sectionTestimonialsTitle,
    sectionTestimonialsVideo,
    wraperButSlider
  ])

  setChildren(containerTestimonials, sectionTestimonials)
}
