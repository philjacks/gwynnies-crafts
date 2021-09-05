// EMAIL SUBJECT
document.querySelector('#subject').addEventListener('input', (e) => {
  return document.querySelector('#email-response').setAttribute('value', e.target.value)
})