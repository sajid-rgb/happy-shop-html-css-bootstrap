function openNav() {
    document.getElementById('side-bar').style.width = '250px'
    document.getElementById('side-bar').style.backgroundColor = "black"
    document.getElementById('side-li').style.display = 'block'
    document.getElementById('side-bar').style.height = '100vh'
}
function closeNav() {
    document.getElementById('side-bar').style.width = '0px'
    document.getElementById('side-bar').style.backgroundColor = "white"
    document.getElementById('side-li').style.display = 'none'
    document.getElementById('side-bar').style.height = '0vh'

}