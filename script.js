const loginCont = document.querySelector('.login')
	let loginBtn = document.querySelector('.login-btn')
	let cont = document.querySelector('.some')
	
	let signinStatus = localStorage.getItem('status')
	let checkID = JSON.parse(localStorage.getItem('usedIDS') || '[]')
	let selfchats = JSON.parse(localStorage.getItem('selfchats') || '[]')
	let selfmessages = JSON.parse(localStorage.getItem('selfmessages') || '[]')
	let chats = JSON.parse(localStorage.getItem('chats') || '[]')
	let messages = JSON.parse(localStorage.getItem('messages') || '[]')
	let myid = localStorage.getItem('myid') || ''
	let friendsid = localStorage.getItem('friendsid') || ''
	
	let yourRealChat = document.createElement('div')
	let messageCont = document.createElement('div')
	let selfmessageCont = document.createElement('div')
	let otherRealChat = document.createElement('div')
	yourRealChat.classList.add('your-chatting')
	otherRealChat.classList.add('your-chatting')
	let back = document.createElement('button')
	back.innerText = '<-'
	back.classList.add('back-button')
	let yaoprompt = document.createElement('input')
	yaoprompt.classList.add('your-input-prompt')
	let messegeBtn = document.createElement('button')
	messegeBtn.innerText = '<--'
	messegeBtn.classList.add('messege-button')
			
	let addFriend = document.querySelector('.add-chat-friend')
	let append = document.querySelector('.some .add')
	let friendChat = document.querySelector('.some')
	
	let friendname = document.querySelector('#onename')
	let friendid = document.querySelector('#oneid')
	
	let name = document.querySelector('#name')
	let id = document.querySelector('#id')
	
	let premuim = document.querySelector('.premuim')
	let close = document.querySelectorAll('.close')
	let close1 = document.querySelector('.close1')
	let close2 = document.querySelectorAll('.close2')
	let close3 = document.querySelector('.close3')
	let close4 = document.querySelectorAll('.close4')
	let explore = document.querySelector('.explore')
	let subscribe = document.querySelector('.subscribe')
    let backk = document.querySelector('.backk')

	let searchOne = document.querySelector('.search-one')
	
	let chatIDS = []
	
	let circle = document.querySelector('.circle-photo')
	loginBtn.onclick = function() {
	    loginCont.style.opacity = '0'
		loginCont.style.pointerEvents = 'none'
	    localStorage.setItem('status',true)
	    window.nameVal = name.value
		window.idVal = id.value
		chatIDS.push(window.idVal)
		localStorage.setItem('myid',JSON.stringify(window.idVal))
		localStorage.setItem('username',window.nameVal || '')
		localStorage.setItem('userid',window.idVal)
			
		if(checkID.includes(window.idVal)) {
		    alert('you can not use this id')
		} else {
			checkID.push(window.idVal)
			localStorage.setItem('usedIDS',JSON.stringify(checkID))
			
			let chatObj = { name: window.nameVal , id: window.idVal }
			selfchats.push(chatObj)
			localStorage.setItem('selfchats',JSON.stringify(selfchats))
			
			loadSelfChat(chatObj.name + '(انت)')
		}
	}
	localStorage.setItem('myid',JSON.stringify(window.idVal))
	function loadSelfChat(name) {
	    let yourChat = document.createElement('div')
		yourChat.classList.add('user-chat')
		let yourname = document.createElement('p')
		yourname.innerText = name
		yourname.classList.add('user-name')
		window.circle = document.createElement('div')
		window.circle.classList.add('circle-photo')
		yourChat.appendChild(yourname)
		yourChat.appendChild(window.circle)
		
		document.body.appendChild(yourChat)
		
		yourRealChat.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
		selfmessageCont.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
		
		yourChat.onclick = function() {
				let prompt = document.createElement('input')
				prompt.classList.add('your-input-prompt')
				let messegBtn = document.createElement('button')
				messegBtn.innerText = '<--'
				messegBtn.classList.add('messege-button')
				let backBtn = document.createElement('button')
				backBtn.innerText = '<-'
				backBtn.classList.add('back-button')
				yourRealChat.setAttribute("style", "pointer-events: auto;opacity: 1;transform: translateX(0);");
				selfmessageCont.setAttribute("style", "pointer-events: auto;opacity: 1;transform: translateX(0);");
				messegBtn.onclick = function() {
					window.messageP = prompt.value
					if(window.messageP) {
					    selfmessages.push({text: window.messageP, sender: 'me'})
						localStorage.setItem('selfmessages',JSON.stringify(selfmessages))
						prompt.innerHTML = ''
						prompt.value = ''
						loadSelfMessage(window.messageP)
					} else { return }
				}
					selfmessages.forEach(loading)
					function loading(message) {
					    loadSelfMessage(message.text)
					
					}
				backBtn.onclick = function() {
					yourRealChat.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
					selfmessageCont.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
				}
				yourRealChat.appendChild(prompt)
				yourRealChat.appendChild(messegBtn)
				yourRealChat.appendChild(backBtn)
				yourRealChat.appendChild(selfmessageCont)
				document.body.appendChild(yourRealChat)
				selfmessageCont.scrollTop = selfmessageCont.scrollHeight
				
		}
	}
	
	
	function loadSelfMessage(text) {
		let message = document.createElement('p')
		message.classList.add('message')
		message.innerText = text
		selfmessageCont.appendChild(message)
		selfmessageCont.scrollTop = selfmessageCont.scrollHeight
		selfmessageCont.classList.add('message-cont')
		yourRealChat.appendChild(selfmessageCont)
	}
	setTimeout(function() {
		if(signinStatus !== 'true'){
		    loginCont.style.transform = 'scale(1) translate(-50%,-50%)'
			loginCont.style.opacity = '1'
			loginCont.style.pointerEvents = 'auto'
			window.onload = function() {
			    if(chats.name || chats.id) {
			        loadChat(chats.name)
		    	}
			}
			if(window.messageP) {
			    loadMessage(window.messageP)
			}
		} else { 
		    loginCont.style.opacity = '0'
		    loginCont.style.pointerEvents = 'none' 
	    	if(chats.name && chats.id) {
			    loadChat(chats.name)
			}
			if(window.messageP) {
			    loadMessage(window.messageP)
			}
		}
	},700)
	
	
	
	function adds() {
	    friendChat.style.transform = 'scale(1) translate(-50%,-50%)'
		friendChat.style.opacity = '1'
		friendChat.style.pointerEvents = 'auto'
	}
	addFriend.onclick = function () { adds() }
	append.onclick = function() {
	    window.friendName = friendname.value
		window.friendId = friendid.value
		localStorage.setItem('friendsid',JSON.stringify(window.friendId))
		let chatObj = { name: window.friendName , id: window.friendId }
		chats.push(chatObj)
		localStorage.setItem('chats',JSON.stringify(chats))
		friendChat.setAttribute("style", "pointer-events: none;opacity: 0;");
		document.body.setAttribute("style","pointer-events: auto;-webcit-backdrop-filter: blur(0px);backdrop-filter: blur(0px);")
		loadChat(window.friendName)
	}
	localStorage.setItem('friendsid',JSON.stringify(window.friendId))
	chatIDS.push(window.friendId)
	window.onload = function() {
		if (localStorage.getItem('selfchats')) {
			checkID.push(window.idVal)
			localStorage.setItem('usedIDS',JSON.stringify(checkID))
			
			let chatObj = { name: window.nameVal , id: window.idVal }
			selfchats.push(chatObj)
			localStorage.setItem('selfchats',JSON.stringify(selfchats))
			let savedSelf = JSON.parse(localStorage.getItem('selfchats'))
			if(savedSelf) {
			    loadSelfChat(savedSelf[0].name + '(انت)')
			} else {
			    loadSelfChat('')
		    }
		}
		if (localStorage.getItem('chats')) {    		
			let savedOther = JSON.parse(localStorage.getItem('chats'))
			chats = savedOther
			if(savedOther) {
			    if(Array.isArray(savedOther)) {
			        savedOther.forEach(function (chat) {
					    if(chat.name) {
				            loadChat(chat.name)
						} else if(savedOther.name) {
						    loadChat(savedOther.name)
						}
				    })
				}
				
			} else {
			    return
		    }
		}
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register("/sw.js");
		}
    }
	
	function loadChat(name) {
	    let otherChat = document.createElement('div')
		otherChat.classList.add('other-chat')
		let nameText = document.createElement('p')
		nameText.classList.add('user-name')
		nameText.innerText = name
		let friendcircle = document.createElement('div')
		friendcircle.classList.add('circle-photo')
		otherChat.appendChild(nameText)
		otherChat.appendChild(friendcircle)
		document.body.appendChild(otherChat)
		
		otherRealChat.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
		messageCont.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
		
		otherChat.onclick = function() {
			otherRealChat.setAttribute("style", "pointer-events: auto;opacity: 1;transform: translateX(0);");
			messageCont.setAttribute("style", "pointer-events: auto;opacity: 1;transform: translateX(0);");
			
			let savedId = /*localStorage.getItem('myid') ||*/ 'user0000'
			let friendSavedId = /*localStorage.getItem('friendsid') ||*/ 'friend0000'
			
			savedId = String(savedId).replace(/[^a-zA-Z0-9]/g,'')
			friendSavedId = String(friendSavedId).replace(/[^a-zA-Z0-9]/g,'')
			
			console.log(savedId)
			console.log(friendSavedId)
			
			let channel = 'room_' + savedId + '_' + friendSavedId
			
			
			
			const socket = new WebSocket('wss://echo.websocket.org')
			
			socket.onopen = function() {
			    console.log ('connected')
				socket.send('Ready to communicate!');
				messegeBtn.onclick = function() {
					window.FriendPrompt = yaoprompt.value
					if(window.FriendPrompt) {
						messages.push({text: window.FriendPrompt, sender: 'friend'})
						localStorage.setItem('messages',JSON.stringify(messages))
						yaoprompt.innerHTML = ''
						yaoprompt.value = ''
						loadMessage(window.FriendPrompt)
						socket.send(window.FriendPrompt)
					} else { return }
				}
			}
			socket.onmessage = function(event) {
			    console.log(event.data)
			}
			socket.onerror = function(err) {
			    console.log(err)
			}
            
			messages.forEach(loading)
			function loading(message) {
				loadMessage(message.text)
			}
			messageCont.scrollTop = selfmessageCont.scrollHeight
		}
		back.onclick = function() {
			otherRealChat.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
			messageCont.setAttribute("style", "pointer-events: none;opacity: 0;transform: translateX(1000px);");
		}
		messageCont.scrollTop = selfmessageCont.scrollHeight
		otherRealChat.appendChild(yaoprompt)
		otherRealChat.appendChild(messegeBtn)
		otherRealChat.appendChild(back)
		otherRealChat.appendChild(messageCont)
		document.body.appendChild(otherRealChat)
	    messageCont.scrollTop = messageCont.scrollHeight
	}
	function loadMessage(text) {
	    let message = document.createElement('p')
		message.classList.add('message')
		message.innerText = text
		messageCont.appendChild(message)
		messageCont.scrollTop = selfmessageCont.scrollHeight
		messageCont.classList.add('message-cont')
		otherRealChat.appendChild(messageCont)
	}
	
	setTimeout(function() {
	    premuim.setAttribute("style","pointer-events: auto;opacity: 1;")
		document.body.setAttribute("style","pointer-events: none;-webcit-backdrop-filter: blur(20px);backdrop-filter: blur(20px);")
	},150000)
	
	explore.onclick = function() {
	    document.querySelector('.explorer').setAttribute("style","pointer-events: auto;opacity: 1;transform: translate(-50%,-50%);")
		document.body.setAttribute("style","pointer-events: none;-webcit-backdrop-filter: blur(20px);backdrop-filter: blur(20px);")
	}
	backk.onclick = function() {
		document.querySelector('.explorer').setAttribute("style", "pointer-events: none;opacity: 0;transform: translate(-50%,-50%);");
	}
	document.body.ondblclick = function() {
		let settingsPage = document.createElement('div')
		settingsPage.setAttribute('style','width: 100%;height: 100%;background: #0a144d;color: beige;pointer-events: auto;opacity: 1;z-index: 99999;display: flex;justify-content: center;align-items: center;flex-direction: column;position: fixed;bottom: 0;')
		let photo = document.createElement('input')
		photo.type = 'file'
		photo.onchange = function() {
			let realPhoto = photo.value
		    alert(`url("${realPhoto}")`)
			document.querySelector('.circle-photo').style.background = `url("${realPhoto}")`
		}
		photo.setAttribute('style','width: 140px;height: 140px;border: 2px dashed beige;border-radius: 50%;')
		let close3 = document.createElement('button')
		close3.classList.add('close3')
		close3.innerText = 'X'
		close3.onclick = function() {
			settingsPage.setAttribute('style','width: 100%;height: 100%;background: #0a144d;color: beige;pointer-events: none;opacity: 0;z-index: 99999;display: flex;justify-content: center;align-items: center;flex-direction: column;position: fixed;bottom: 0;')
		}
		let language = document.createElement('input')
		language.type = 'text'
		language.oninput = function() {
			if( language.value==='english' || language.value === 'English' || language.value === 'US' ) {
				alert('your lang is english')
			} else {
				alert('your lang is arabic')
			}
		}
		language.setAttribute('style','width: 20%;height: 30px;background: #121212;color: beige;pointer-events: auto;opacity: 1;z-index: 99999;position: fixed;bottom: 80%;border-radius: 10px;border: 1px dashed beige;padding: 5px;')
		settingsPage.appendChild(language)
		settingsPage.appendChild(close3)
		settingsPage.appendChild(photo)
		document.body.appendChild(settingsPage)
	}

