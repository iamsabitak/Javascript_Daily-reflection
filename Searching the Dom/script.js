// Change the card title to red
let ctitle = document.getElementsByClassName("card-title")[1];
ctitle.style.color = "blue";

let title = document. getElementById("firstcardtitle")
 title.style.color = "red"

 let cctitle = document. getElementsByClassName("card-title")[2]
 cctitle.style.color = "pink"
 
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}



