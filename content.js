 //ADD HEADER WIKIPEDIA LINK   
 //WIDEN POPUP DIV  
 //ADD PHOTO  



// CREATING POPUP ELEMENTS ON DOCUMENT  

var div = document.createElement('div')
  div.id = "wikiPopup"
  div.class = "modal"
  div.style.width = "160px"
  div.style.backgroundColor = '#FFFAF0'
  div.style.color = "#2F4F4F"
  div.style.textAlign = "left"
  div.style.borderRadius = "6px"
  div.style.padding = "8px 6px"
  div.style.position = "absolute"
  div.style.zIndex = "10100"
  div.style.bottom = "125%"
  div.style.marginLeft = "-80px"
  div.style.dispaly = "block"
  div.style.height = "140px"
  div.style.overflowY = "scroll"
  div.style.fontSize = "12px"
  div.style.boxShadow = "-1px 1px 25px -1px rgba(0,0,0,0.75)"
  document.body.appendChild(div)

var modalContent = document.createElement('div')
  modalContent.class = "modal-content"
  modalContent.id = "modal-content"
  modalContent.style.height = "140px"
  div.appendChild(modalContent)

var modalText = document.createElement('span')
  modalText.style.height = "140px"
  modalContent.appendChild(modalText)

var header = document.createElement('h')
  header.id = 'header'
  modalText.appendChild(header)

var par = document.createElement('p')
  par.id = 'par'
  modalText.appendChild(par)



// HIDING OLD POPUP ON EVERY 'CONTEXT MENU OPEN' AND SETTING POPUP LOCATION

document.addEventListener('contextmenu', function popup (e){
  var div = document.getElementById('wikiPopup')

  if(div.style.display !== "none"){
    div.style.display = "none"
  }

  div.style.top = e.pageY + 'px'
  div.style.left = e.pageX + 'px'
})



// RETREIVING DATA FROM API -> TO POPUP ELEMENTs => DISPLAYING THE POPUP

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    console.log(request.msg[0])
    console.log(request.msg[2])
  
    if(div.style.display === "none"){
      div.style.display = "block"
      div.scrollTop = 0
    }

    var header = document.getElementById('header')
    header.innerHTML = request.msg[0]
    header.style.fontWeight = "bold"
    header.style.fontSize = "12px"

    var par = document.getElementById('par')
    par.innerHTML = request.msg[2]
})

if(div.style.display !== "none"){
  window.onclick = function(event) {
  div.style.display = "none" 
 }
}