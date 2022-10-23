function userDetails(arr){
    
    let user=JSON.parse(localStorage.getItem('currentUser'))
    // console.log(arr)
    if(user){
        let obj={}
        for(let i=0;i<arr.length;i++){
            document.getElementsByClassName('profile-revertEdit-button')[i].style.display='none'
            document.getElementById(arr[i].id1).style.display='inline-block'
            document.getElementById(arr[i].id1).innerText=user[arr[i].val]
            document.getElementById(arr[i].id2).style.display='none'
            document.getElementsByClassName('profile-edit-button')[i].style.display='inline-block'
            obj[arr[i].val]=arr[i].id1
        }
        localStorage.setItem('profile Details IDs',JSON.stringify(obj))
    }
    else{
        for(let i=0;i<arr.length;i++){
            document.getElementsByClassName('profile-revertEdit-button')[i].style.display='none'
            document.getElementById(arr[i].id1).style.display='inline-block'
            document.getElementById(arr[i].id2).style.display='none'
            document.getElementsByClassName('profile-edit-button')[i].style.display='none'
        }
    }
}