// import './style.css'

console.log('hi')

const route = (event /* click event*/) => {
  console.log('hi')
  event.preventDefault() /* prevents a tag to navigate to its href target */
  console.log(event.target.href)
  window.history.pushState({}, '', event.target.href)
}

const routes = {
  404: '/pages/404.html',
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/lorem': '/pages/lorem.html'
}

const handleLocation = async () => {
  const path = window.location.pathname
  const route = routes[path] || routes[404]
  const html = await fetch(route).then(data => data.text())
  document.getElementById('main-page').innerHTML = html
}

window.onpopstate = handleLocation
window.route = route /* give global access to route function */

handleLocation()
