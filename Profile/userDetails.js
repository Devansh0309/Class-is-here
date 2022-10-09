function userDetails(arr){
    let user=JSON.parse(localStorage.getItem('currentUser'))
    // console.log(arr)
    arr.forEach(element => {
        document.getElementById(element.id1).style.display='inline-block'
        document.getElementById(element.id1).innerText=user[element.val]
        document.getElementById(element.id2).style.display='none'
    });
}