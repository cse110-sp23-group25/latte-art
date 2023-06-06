let profilepic = document.getElementById('profile-pic')

let inputFile = document.getElementById('input-file')

inputFile.onchange = function () {
    profilepic.style.display = 'block'
    profilepic.src = URL.createObjectURL(inputFile.files[0])
}


let submit = document.getElementById('submit')
let fortune = document.getElementById('fortune')

submit.addEventListener('click', function () {
    fortune.innerHTML = fortuneSelector(profilepic.src.toString()[profilepic.src.toString().length-36].charCodeAt(0))
})
