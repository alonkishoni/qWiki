//CREATE A CONTEXT MENU ITEM

chrome.contextMenus.create({title: '"%s" On Wikipedia',
                            id: "wiki",
                            contexts:["selection"],
})


//select a word | get wikipedia API endpoint | send JSON to selected tab (content.js is receiving end)

const onClickHandler = async (info, tab) => {
    const query = info.selectionText


// get result turn to json

    let response = await fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search='+ query +'&format=json')
    const data = await response.text()
    const json = await JSON.parse(data)


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