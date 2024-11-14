// api key 1nx8rJu4b4XdfJ3cQ0ylVq5IxhQW5vL4so1Qe04OAcJwoASq7eAuZ6Tl

const apiKey = '1nx8rJu4b4XdfJ3cQ0ylVq5IxhQW5vL4so1Qe04OAcJwoASq7eAuZ6Tl'

const api = 'https://api.pexels.com/v1/search?query=videogames&per_page=9'
const Newimg = document.querySelectorAll('img')
fetch(api, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: apiKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Non è stato possibile trovare i dati')
    }
  })
  .then((data) => {
    console.log(data)
    const object = data
    console.log(object.photos[0].src.landscape)
    return object.photos[0].src.landscape
  })

  .then((Nimg) => {
    const loop = function () {
      for (let i = 0; i < Newimg.length; i++) {
        Newimg[i].setAttribute('src', `${Nimg}`)
      }
    }
    const load = document.getElementById('load')
    load.addEventListener('click', loop)
  })
const api2 = 'https://api.pexels.com/v1/search?query=soccer&per_page=9'
const Newimg2 = document.querySelectorAll('img')
fetch(api2, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: apiKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Non è stato possibile trovare i dati')
    }
  })
  .then((data) => {
    console.log(data)
    const object2 = data
    console.log(object2.photos[0].src.landscape)
    return object2.photos[0].src.landscape
  })

  .then((Nimg2) => {
    const loop2 = function () {
      for (let i = 0; i < Newimg2.length; i++) {
        Newimg2[i].setAttribute('src', `${Nimg2}`)
      }
    }
    const anotherLoad = document.getElementById('anotherLoad')
    anotherLoad.addEventListener('click', loop2)
  })

document.querySelectorAll('button').forEach((e) => {
  if (e.textContent.trim() === 'Edit') {
    e.textContent = 'Hide'
    e.classList.add('btnHide')
  }
})
const btnHide = document.querySelectorAll('.btnHide')

btnHide.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card')
    if (card) {
      card.classList.add('d-none')
    }
  })
})

const mins = document.querySelectorAll('small').forEach((e) => {
  if (e.textContent.trim() === '9 mins') {
    e.textContent = 'object.photos.id'
  }
})

//   .catch((error) => {
//     console.error('Errore:', error)
//   })
