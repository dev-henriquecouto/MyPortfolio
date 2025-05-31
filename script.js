// interative cursor 
// recebe a div para a instrução de seguir o cursor
const cursor = document.querySelector('#cursor')
// configura o evento de movimentação da div pelo cursor com a tag (e)
document.addEventListener("mousemove", (e) => { 
    // rastreia as posição vertical e horizontal do cursor simultaneamente
    let x = e.pageX //horizontal
    let y = e.pageY //vertical 
   
    //função para a div recebida seguir o ponteiro do mouse
    cursor.style.top = y + "px" //horizontal
    cursor.style.left = x + "px" //vertical
})

//link p/ os projetos 
// Store Shoes 
const project1 = document.getElementById('project1')
project1.addEventListener("click", () => {
    window.location.href = "https://dev-henriquecouto.github.io/StoreShoes/"
})

// Web Crud 
const project2 = document.getElementById('project2')
project2.addEventListener("click", () => {
    window.location.href = "https://dev-henriquecouto.github.io/Web-CRUD/"
})

//curriculo 
const curriculo = document.getElementById('curriculo')
curriculo.addEventListener("click", () => {
    window.location.href = "curriculo/Currículo - Henrique Andrade Couto .pdf"
})

//contatos 
const whatsapp = document.getElementById('whatsapp')
const linkedin = document.getElementById('linkedin')
const github = document.getElementById('github')
const email = document.getElementById('email')
const boxemail = document.getElementById('box-email')

whatsapp.addEventListener("click", () => {
    window.location.href = "https://wa.me/5531983597088"
})
linkedin.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/henrique-andrade-couto/"
})
github.addEventListener("click", () => {
    window.location.href = "https://github.com/dev-henriquecouto"
})
email.addEventListener('mouseover', () => {
    boxemail.classList.add('open')
});
email.addEventListener('mouseout', () => {
    boxemail.classList.remove('open')
});











