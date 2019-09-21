
//ADD PHOTO  

//TAB NEW PAGE
//FLOAT ELEMENT SHOULD BE USED FOR CLOSING SIGN AND PHOTO


// 'CONTEXT MENU' EVENT LISTENER IS CHECKING FOR OLD POPUP AND IS SETTING UP NEW POPUP LOCATION ON CLICK (POPUP IS HIDDEN)

document.addEventListener('contextmenu', function popup (e){
  var div = document.getElementById('wikiPopup')
  div.style.display = "none"
  div.style.top = e.pageY + 'px'
  div.style.left = e.pageX + 'px'
})

// RETREIVE DATA FROM API

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

    //DISPLAY FETCHED DATA IN POPUP
      div.style.display = "block"
      div.scrollTop = 0
      setTimeout(function () {
        div.style.opacity = '1';
      }, 5)


    var header = document.getElementById('a_header')
    header.innerHTML = request.msg[1][0]
    header.href = request.msg[3][0]

    var par = document.getElementById('par')
    par.innerHTML = request.msg[2][0]
    

    //CLICK ON POPUP FOR NEXT RESULT FOR SELECTED WORD
    let i = 0

    div.addEventListener('click', function(ev){
      ev.stopPropagation()
      if(request.msg[2][i] === 'undefined'){
        i++
        
      }
      console.log(i)
      div.scrollTop = 0
      header.style.opacity = '0'
      par.style.opacity = '0'

      setTimeout(function () {
        header.style.opacity = '1'
        par.style.opacity = '1'
        header.href = request.msg[3][i]
        header.innerHTML = request.msg[1][i]
        par.innerHTML = request.msg[2][i]
      }, 500)

      i++

  })

  //MAKE IT IMMUNE TO CHANGES SO CORRECT LINK IS OPEN ON HEADER LINK PRESS

  header.addEventListener("click", function (ev) {
    ev.stopPropagation()
})

})

//CLOSE THAT DAMN THING

if(div.style.display !== "none"){
  window.onclick = function(event) {
    div.style.opacity = '0'
    setTimeout(function () {
      div.style.display = "none";
    }, 500)
    
 }
}