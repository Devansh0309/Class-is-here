
function render(){
    hindiList.innerHTML=''
    englishList.innerHTML=''
    mathsList.innerHTML=''
    physicsList.innerHTML=''
    bioList.innerHTML=''
    let subjectCards=JSON.parse(localStorage.getItem('cards'))
    if(subjectCards){
        if(subject!='Subject..'){
            document.getElementById(subject).style.display='block'
            for (let option of document.getElementById("subject").options){
                if(option.value!=subject && option.value!='Subject..'){
                    document.getElementById(option.value).style.display='none'
                }
            }
        }
        else{
            for (let option of document.getElementById("subject").options){
                if(option.value!='Subject..'){
                document.getElementById(option.value).style.display='block'
            }
        }
    }
        
        subjectCards.forEach(element => {
            if(localStorage.getItem('Logged')=='no'){
                if(subject=='Subject..' && material=='Class Material..'){
                    createCard(element)
                }
                else if(material=='Class Material..' && element.subject==subject){
                    createCard(element)
                }
                else if(subject=='Subject..' && element.material==material){
                    createCard(element)
                }
                else if(element.subject==subject && element.material==material){
                    createCard(element)
                }
            }
            else if(element.class==JSON.parse(localStorage.getItem('currentUser')).classInput && element.section==JSON.parse(localStorage.getItem('currentUser')).section){
                console.log('you are inside')
                if(subject=='Subject..' && material=='Class Material..'){
                    createCard(element)
                }
                else if(material=='Class Material..' && element.subject==subject){
                    createCard(element)
                }
                else if(subject=='Subject..' && element.material==material){
                    createCard(element)
                }
                else if(element.subject==subject && element.material==material){
                    createCard(element)
                }
            }
        })
    }
}

function createCard(ele){
    // console.log('hi')
    let card=document.createElement('div')
    let img=document.createElement('img')
    let list=document.createElement('ul')
    let fileLink=document.createElement('a')
    card.className='subject-card'
    fileLink.className='file-address'
    
    img.setAttribute('alt','not found')
    img.setAttribute('src',ele.link)
    list.setAttribute('type','none')
    fileLink.innerText='Click to Open'
    fileLink.addEventListener('click',isLogged(fileLink,ele.link))
    
    list.innerHTML=`
    <li>Class:${ele.class}</li>
    <li>Section:${ele.section}</li>
    <li>Submitted By:${ele.name}</li>
    <li>Subject:${ele.subject}</li>
    <li>Material:${ele.material}</li>`
    list.appendChild(fileLink)
    card.append(img,list)
    
    if(ele.subject=='Hindi'){
        hindiList.insertBefore(card,hindiList.firstChild)
    }
    else if(ele.subject=='English'){
        englishList.insertBefore(card,englishList.firstChild)
    }
    else if(ele.subject=='Mathematics'){
        mathsList.insertBefore(card,mathsList.firstChild)
    }
    else if(ele.subject=='Physics'){
        physicsList.insertBefore(card,physicsList.firstChild)
    }
    else{
        bioList.insertBefore(card,bioList.firstChild)
    }       
}