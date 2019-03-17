//Отгадываем число от 0 до 10
//число задается игроком в начале
//каждый код выдается в окошко в котором надо ввести число

var count = 0;

begin();
function begin(){
let quest = prompt("Введите число от 0 до 10!");
if(quest < 0 || quest > 10){
    begin();
}else if(quest==""){
    begin();

}else{
    game();
    function game(){
        let answer = prompt("Попробуй угадать число");
        if(answer > quest){
            alert("ты взял многовато");
            count++;
            game();
    }else if(answer < quest){
        alert("ты взял маловато");
        count++;
        game();
    }else if (answer == ""){
        alert("ты забыл ввести данные!");
        game();
    }else{
        alert("ты победил");
        alert("Число попыток:"+count);
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
// })