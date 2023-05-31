window.addEventListener('load', () => {
    const main = document.querySelector('main')
    const senhas = ["#forTe1", "senhafraca", "Qu@s1", "Voce@Consegue!2023"]

    senhas.forEach( e => {
        var valor = Verificacao(e)
        if (valor == 4) {
            let senha = document.createElement('h2')
            senha.textContent = e
            main.appendChild(senha)
        }
    })

    function Verificacao(e) {
        let seguranca = 0
        const carac = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        const caracLow = /[a-z]/;
        const caracUp = /[A-Z]/
        
        if (caracUp.test(e.toUpperCase()) == true) {
            seguranca++
            console.log(seguranca, e)
        } if (caracLow.test(e.toLowerCase()) == true) {
            seguranca++
            console.log(seguranca, e)
        } if (e.length >= 7) {
            seguranca++
            console.log(seguranca, e)
        } if (carac.test(e) == true) {
            seguranca++
            console.log(seguranca, e)
        }
        return seguranca
    }
})
