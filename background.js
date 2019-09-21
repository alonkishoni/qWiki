

//CREATE A CONTEXT MENU ITEM

chrome.contextMenus.create({title: '"%s" On Wikipedia',
                            id: "wiki",
                            contexts:["selection"],
})

//CREATE A FETCH FROM WIKIPEDIA FUNCTION

var language
var response

async function wiki (query){
    // get result convert to json

 chrome.i18n.detectLanguage(query, async function(result){
      language = result.languages[0].language   
   })

   if(language === 'iw'){
    response = await fetch('https://he.wikipedia.org/w/api.php?action=opensearch&search='+ query +'&format=json')
   }else{
    response = await fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search='+ query +'&format=json')
   }

    const data = await response.text()
    return await JSON.parse(data)
}

//select a word | get wikipedia API endpoint | send JSON to selected tab (content.js is receiving end)

const onClickHandler = async (info, tab) => {
    const query = info.selectionText

    const json = await wiki(query)
    console.log(json)

//setup a send function

    const sendJSON = async () => {
        //find active tab
        await chrome.tabs.query({active: true, currentWindow: true}, function (tab){
            //send to open tab [0]
            chrome.tabs.sendMessage(tab[0].id, {msg: json})
        })
    }

sendJSON()
}

chrome.contextMenus.onClicked.addListener(onClickHandler)