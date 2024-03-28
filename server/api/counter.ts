export default defineEventHandler(event => {
  // Read counter cookie
  let counter = getCookie(event, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(event, 'counter', ++counter)

  console.log('counter', counter)
  console.log(getCookie(event, 'counter'))

  // Send JSON response
  return { counter }
})
