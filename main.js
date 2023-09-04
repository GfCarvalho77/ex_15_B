function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero;
        var corpel = document.getElementsByName('corpel')
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
    }
    if (fsex[0].checked){
            gênero = 'Homem'
            if (corpel [0].checked){
                if (idade >=0 && idade <=10) {
                    //criança branca//
                    img.setAttribute('src','branco_homem_criança.png')                    
                }
                else if (idade > 10 && idade < 21){
                    //jovem branco
                    img.setAttribute('src','branco_homem_jovem.png')
                }
                else if (idade > 21 && idade < 60){
                    //adulto branco
                    img.setAttribute('src','branco_homem_adulto.png')
                }
                else {
                    //idoso branco
                    img.setAttribute('src','branco_homem_idoso.png')    
                }
            }
            else if (corpel [1].checked){
                if (idade >=0 && idade <=10) {
                    //criança negra
                    img.setAttribute('src','negro_homem_crianca.png')
                    
                }
                else if (idade < 21){
                    //jovem negro
                    img.setAttribute('src','negro_homem_adolescente.png')
                }
                else if (idade < 60){
                    //adulto negro
                    img.setAttribute('src','negro_homem_adulto.png')
                }
                else if (idade > 60){
                    //idoso negro
                    img.setAttribute('src','negro_homem_idoso.png')
                }
            }
            else if (corpel [2].checked){
                if (idade >=0 && idade <=10) {
                    //criança pardo
                    img.setAttribute('src','pardo_homem_crianca.png')                        
                    }
                    else if (idade < 21){
                        //jovem pardo
                        img.setAttribute('src','pardo_homem_adolescente.png')
                    }
                    else if (idade < 60){
                        //adulto pardo
                        img.setAttribute('src','pardo_homem_adulto.png')
                    }
                    else if (idade > 60){
                        //idoso pardo
                        img.setAttribute('src','pardo_homem_idoso.png')
                    }
            }
        }
    else if (fsex[1].checked){
            gênero = 'Mulher'
            if (corpel [0].checked){
                if (idade >=0 && idade <=10) {
                    //criança branca//
                    img.setAttribute('src','branco_mulher_crianca.png')                    
                }
                else if (idade > 10 && idade < 21){
                    //jovem branco
                    img.setAttribute('src','branco_mulher_adolescente.png')
                }
                else if (idade > 21 && idade < 60){
                    //adulto branco
                    img.setAttribute('src','branco_mulher_adulta.png')
                }
                else {
                    //idoso branco
                    img.setAttribute('src','branco_mulher_idosa.png')    
                }
            }
            else if (corpel [1].checked){
                if (idade >=0 && idade <=10) {
                    //criança negra
                    img.setAttribute('src','negro_mulher_crianca.png')
                    
                }
                else if (idade < 21){
                    //jovem negro
                    img.setAttribute('src','negro_mulher_adolescente.png')
                }
                else if (idade < 60){
                    //adulto negro
                    img.setAttribute('src','negro_mulher_adulta.png')
                }
                else if (idade > 60){
                    //idoso negro
                    img.setAttribute('src','negro_mulher_idoso.png')
                }
            }
            else if (corpel [2].checked){
                if (idade >=0 && idade <=10) {
                    //criança pardo
                    img.setAttribute('src','pardo_mulher_crianca.png')                        
                    }
                    else if (idade < 21){
                        //jovem pardo
                        img.setAttribute('src','pardo_mulher_adolescente.png')
                    }
                    else if (idade < 60){
                        //adulto pardo
                        img.setAttribute('src','pardo_mulher_adulto.png')
                    }
                    else if (idade > 60){
                        //idoso pardo
                        img.setAttribute('src','pardo_mulher_idosa.png')
                    }
            }
        }

    
        res.style.textAlign='center'
        res.innerHTML = `Indetificamos que é um(a) ${gênero} e a idade é ${idade} anos`
        res.appendChild(img)
}


