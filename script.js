function converter() {
    let anosluz = document.getElementById('txtn')
    let res = document.getElementById('res')
   

    if (anosluz.value.length == 0 || anosluz.value.length == ''){
        window.alert('Ora Ora, está querendo me enganar ? digite um valor padawan')
    } else {
        var ano = Number(anosluz.value)
        var km = Number(300000) 
        var seg = Number(31536000)
        var r = seg * km
        var resultado = r * ano
      res.innerHTML = ` ${ano} Ano(s) Luz Equivalem a  ${resultado} Km`   
    
    }
   



}