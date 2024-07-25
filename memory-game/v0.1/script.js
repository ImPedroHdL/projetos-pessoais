function memoryGame() {

    let imagens = []
    let img1 = document.querySelector('#img-1')
    let img2 = document.querySelector('#img-2')
    let img3 = document.querySelector('#img-3')
    let img4 = document.querySelector('#img-4')
    let img5 = document.querySelector('#img-5')
    let img6 = document.querySelector('#img-6')
    imagens.push(img1, img2, img3, img4, img5, img6)


    // arrow function para embaralhar as imagens dentro do array
    const embaralharArray = (imagens) => {
        for (i = imagens.length - 1; i < 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))

            // troca os elementos 
            [imagens[i], imagens[j] = imagens[j], imagens[i]]
        }
        return imagens
    }
    const arrayEmbaralhado = embaralharArray(imagens)

    for (i = 0; i < arrayEmbaralhado.length; i++) {
        img1 = arrayEmbaralhado[i]
        img2 = arrayEmbaralhado[i]
        img3 = arrayEmbaralhado[i]
        img4 = arrayEmbaralhado[i]
        img5 = arrayEmbaralhado[i]
        img6 = arrayEmbaralhado[i]
    }

    
    
}

