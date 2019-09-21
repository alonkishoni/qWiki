// CREATING POPUP ELEMENTS ON DOCUMENT

var div = document.createElement('div')
  div.id = "wikiPopup"
  div.class = "modal"
  div.style.width = "220px"
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
  div.style.overflowY = "auto"
  div.style.fontSize = "12px"
  div.style.boxShadow = " 0px 43px 123px -22px rgba(0,0,0,0.75)"
  div.style.textAlign = "justify"
  div.style.opacity = '0'
  div.style.transition = 'opacity 0.5s'
  document.body.appendChild(div)

var modalContent = document.createElement('div')
  modalContent.class = "modal-content"
  modalContent.id = "modal-content"
  modalContent.style.fontSize = "12px"
  modalContent.style.height = "140px"
  div.appendChild(modalContent)

var modalText = document.createElement('span')
  modalText.style.height = "140px"
  modalText.style.fontSize = "12px"
  
  modalContent.appendChild(modalText)

var header = document.createElement('a')
  header.id = 'a_header'
  header.style.transition = 'opacity 0.5s'
  header.style.fontSize = "30px"
  header.style.fontWeight = "bold"
  header.style.fontSize = "16px"
  header.style.fontFamily = 'Hoefler Text'
  modalText.appendChild(header)

var par = document.createElement('p')
  par.id = 'par'
  par.style.fontSize = "14px"
  par.style.fontFamily = 'Hoefler Text'
  par.style.transition = 'opacity 0.5s'
  modalText.appendChild(par)