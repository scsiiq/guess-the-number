//Отгадываем число от 0 до 10
//число задается игроком в начале
//каждый код выдается в окошко в котором надо ввести число

var count = 0; //объявляем переменную COUNT - количество попыток

begin();

function begin() {
    let quest = prompt("Введите число от 0 до 10!");
    if (quest < 0 || quest > 10) { //если число меньше нуля или больше десяти, то просим ввести снова, от 0 до 10
        begin();
    } else if (quest == "") {
        begin();

    } else {
        game();

        function game() {
            let answer = prompt("Попробуй угадать число");
            if (answer > quest) {
                if (count >= 2) { //здесь поставили счетчик попыток, при истечении которых игра заканчивается
                    alert("ты пройграл!") //число попыток указываем произвольное, в данном случае, три. 
                    return;
                }
                alert("ты взял многовато"); //показывает сообщение, если вводимое число, больше загаданного числа
                count++;

                game();
            } else if (answer < quest) {
                if (count >= 2) { //снова счетчик попыток
                    alert("ты проиграл!")
                    return;
                }
                alert("ты взял маловато"); //показывает сообщение, если вводимое число, меньше загаданного числа
                count++;

                game();
            } else if (answer == "") {
                alert("ты забыл ввести данные!");
                game();
            } else {
                alert("ты победил");
                alert("Число попыток:" + count);

            }
        }
    }
}


//доп код
//статистика попыток
//игра против компьютера
//либо игра против компьютера, либо угадываение числа


//пример работы scrollTop
// $('.btn').click(function(){
//     $('html,body').animate({
//         scrollTop:2000
//     },5000)
