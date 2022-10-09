function saveProfile(arr){
    let user=JSON.parse(localStorage.getItem('currentUser'))
    // let fname=user.firstName
    // let lname=user.lastName
    let email=user.email
    let check=false //to check if change occured in firstname or lastname or email
    arr.forEach(element => {
        if(document.getElementById(element.id).value && (element.val=='firstName' || element.val=='lastName' || element.val=='email') && user[element.val]!=document.getElementById(element.id).value){
            check=true
        }
        if(document.getElementById(element.id).value){
            user[element.val]=document.getElementById(element.id).value
        }
    });
    // console.log(check)
    let UsersData=JSON.parse(localStorage.getItem('Data'))
    UsersData[localStorage.getItem('currentUserID')]=user
    localStorage.setItem('currentUser',JSON.stringify(user))
    localStorage.setItem('Data',JSON.stringify(UsersData))
    if(check){
        let cards=JSON.parse(localStorage.getItem('cards'))
        cards=cards.map(ele=>{
            if(ele.email==email){
                ele.name=user.firstName+' '+user.lastName
                ele.email=user.email
            }
            return ele
        })
        localStorage.setItem('cards',JSON.stringify(cards))
    }
    window.location.href='../Profile/profile.html'
}