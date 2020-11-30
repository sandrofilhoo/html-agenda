function login(){
    const user = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    console.log(user,senha)
    router.push('./contacts.html')
}