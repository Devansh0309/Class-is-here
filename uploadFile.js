let hindiList=document.getElementById('hindi-list')
let englishList=document.getElementById('english-list')
let mathsList=document.getElementById('maths-list')
let physicsList=document.getElementById('physics-list')
let bioList=document.getElementById('bio-list')
let cards=[]

function upload(file){
    let fileAddress=file.value
    let imageAddr=JSON.parse(localStorage.getItem('Image Address'))
    if(localStorage.getItem('Logged')=='yes' && !Object.keys(imageAddr).includes(fileAddress)){
        // console.log(currentUser)
        imageAddr[fileAddress]=fileAddress
        localStorage.setItem('Image Address',JSON.stringify(imageAddr))
        let card=document.createElement('div')
        let img=document.createElement('img')
        let list=document.createElement('ul')
        let fileLink=document.createElement('a')
        let currentUser=JSON.parse(localStorage.getItem('currentUser'))

        card.className='subject-card'
        fileLink.className='file-address'

        img.setAttribute('alt','not found')
        img.setAttribute('src',fileAddress)
        list.setAttribute('type','none')
        fileLink.innerText='Click to Open'
        fileLink.addEventListener('click',isLogged(fileLink,fileAddress))

        // console.log(fileLink.href)

        list.innerHTML=`
        <li>Class:${currentUser.classInput}</li>
        <li>Section:${currentUser.section}</li>
        <li>Submitted By:${currentUser.firstName}   ${currentUser.lastName}</li>
        <li>Subject:${subject}</li>
        <li>Material:${material}</li>`
        list.appendChild(fileLink)
        card.append(img,list)

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
                document.getElementById(option.value).style.display='block'
            }
        }
        console.log(subject)
        if(subject=='Hindi'){
            hindiList.insertBefore(card,hindiList.firstChild)
            document.getElementById('Hindi').style.display='block'
        }
        else if(subject=='English'){
            englishList.insertBefore(card,englishList.firstChild)
            document.getElementById('English').style.display='block' 
        }
        else if(subject=='Mathematics'){
            mathsList.insertBefore(card,mathsList.firstChild)
            document.getElementById('Mathematics').style.display='block'
        }
        else if(subject=='Physics'){
            physicsList.insertBefore(card,physicsList.firstChild)
            document.getElementById('Physics').style.display='block'
        }
        else{
            bioList.insertBefore(card,bioList.firstChild)
            document.getElementById('Biology').style.display='block'
        }
        if(localStorage.getItem('cards')){
            cards=JSON.parse(localStorage.getItem('cards'))
        }
        cards.push({
            class:currentUser.classInput,
            section:currentUser.section,
            name:currentUser.firstName+currentUser.lastName,
            subject:subject,
            material:material,
            link:fileAddress
        })
        localStorage.setItem('cards',JSON.stringify(cards))
    }
    else if(imageAddr && Object.keys(imageAddr).includes(fileAddress)){
        alert('File already uploaded, delete to reload')
    }
    else{
        document.getElementById('popup').style.display='block'
        document.body.style.opacity='0.5'
        // document.getElementById('popup').style.opacity='1'
    }
}