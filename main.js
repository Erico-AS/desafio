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
        
        caracUp.test(e.toUpperCase()) ? seguranca++ : null
        caracLow.test(e.toLowerCase()) ? seguranca++ : null
        e.length >= 7 ? seguranca++ : null
        carac.test(e) ? seguranca++ : null

        return seguranca
    }
})