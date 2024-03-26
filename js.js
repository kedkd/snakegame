function rock(){
    newImg = document.createElement("img"); /*создает тег изображения*/
    newImg.src = "https://avatars.mds.yandex.net/i?id=10fb41dc813b5fb85fbc7d595328ec9f89aacbb6-10959457-images-thumbs&n=13"
    newImg.style.width = "200px"; /*ширина выводимой картинки*/
    newImg.style.height = "200px"; /*высота выводимой картинки*/
    var oldImg = document.getElementById("player-zone").firstChild;  /*взять старую картинку из области*/
    document.getElementById("player-zone").replaceChild(newImg, oldImg); /*заменить старую на новую*/
    computerChoice("камень"); //из функции камня
}

function cut(){
    newImg = document.createElement("img"); /*создает тег изображения*/
    newImg.src = "https://avatars.mds.yandex.net/i?id=55aa16e9eaff1922a8cdcce89ef9c8f89b85392d-10848716-images-thumbs&n=13"
    newImg.style.width = "200px"; /*ширина выводимой картинки*/
    newImg.style.height = "200px"; /*высота выводимой картинки*/
    var oldImg = document.getElementById("player-zone").firstChild;  /*взять старую картинку из области*/
    document.getElementById("player-zone").replaceChild(newImg, oldImg); /*заменить старую на новую*/
    computerChoice("ножницы"); //из функции ножницы
}

function paper(){
    newImg = document.createElement("img"); /*создает тег изображения*/
    newImg.src = "https://avatars.mds.yandex.net/i?id=75ce30e5742057749ab7e679447ec43881034c0d-5661135-images-thumbs&n=13"
    newImg.style.width = "200px"; /*ширина выводимой картинки*/
    newImg.style.height = "200px"; /*высота выводимой картинки*/
    var oldImg = document.getElementById("player-zone").firstChild;  /*взять старую картинку из области*/
    document.getElementById("player-zone").replaceChild(newImg, oldImg); /*заменить старую на новую*/
    computerChoice("бумага"); //из функции бумаги
}

// варианты для компьютера
const choices = ['камень', 'ножницы', 'бумага'];

// функция выбора компьютера
function computerChoice(userChoice){

    // определение рандомного числа 
    const randomIndex = Math.floor(Math.random() * 3);

    // создание тега 
    newImg = document.createElement("img");
    if (randomIndex == 0){
        newImg.src="https://avatars.mds.yandex.net/i?id=10fb41dc813b5fb85fbc7d595328ec9f89aacbb6-10959457-images-thumbs&n=13"
        newImg.style.width = "200px"; /*ширина выводимой картинки*/
        newImg.style.height = "200px"; /*высота выводимой картинки*/
    }
    if (randomIndex == 1){
        newImg.src="https://avatars.mds.yandex.net/i?id=55aa16e9eaff1922a8cdcce89ef9c8f89b85392d-10848716-images-thumbs&n=13"
        newImg.style.width = "200px"; /*ширина выводимой картинки*/
        newImg.style.height = "200px"; /*высота выводимой картинки*/
    }
    if (randomIndex == 2){
        newImg.src= "https://avatars.mds.yandex.net/i?id=75ce30e5742057749ab7e679447ec43881034c0d-5661135-images-thumbs&n=13"
        newImg.style.width = "200px"; /*ширина выводимой картинки*/
        newImg.style.height = "200px"; /*высота выводимой картинки*/
    }


    // добавление случайного значения в область компьютера
    newImg.innerHTML = choices[randomIndex];

    // замена старого на новое
    var oldComp = document.getElementById("comp-zone").firstChild;
    document.getElementById("comp-zone").replaceChild(newImg, oldComp);

    //Определение последнего значения компьютера
    compChoice =  choices[randomIndex];

    Game(userChoice, compChoice)

}

function Game(userChoice, compChoice){
    if (userChoice === compChoice) {document.getElementById("kk").innerHTML = "Ничья!";}
    else{
        if((userChoice === 'камень' && compChoice === 'ножницы') ||
           (userChoice === 'ножницы' && compChoice === 'бумага') ||
           (userChoice === 'бумага' && compChoice === 'камень')) {
            document.getElementById("kk").innerHTML = "Победа!"
        }
        else{
            document.getElementById("kk").innerHTML = "Поражение"
        }
    }
}
