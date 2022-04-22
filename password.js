var length = readInt('How long? ');
function start(){
    generate(length);
    println(pass);
}

var pass = '';
var numKey = [];
function generate(length){
    for(var i = 0; i < length; i++){
        var h = Randomizer.nextInt(0,62);
        numKey.push(h);
    }
    for(var i = 0; i < numKey.length; i++){
            if(numKey[i] == 0){
                pass == pass + '0'
            }else if(numKey[i] == 1){
                pass = pass + '1'
            }else if(numKey[i] == 2){
                pass = pass + '2'
            }else if(numKey[i] == 3){
                pass = pass + '3'
            }else if(numKey[i] == 4){
                pass = pass + '4'
            }else if(numKey[i] == 5){
                pass = pass + '5'
            }else if(numKey[i] == 6){
                pass = pass + '6'
            }else if(numKey[i] == 7){
                pass = pass + '7'
            }else if(numKey[i] == 8){
                pass = pass + '8'
            }else if(numKey[i] == 9){
                pass = pass + '9'
            }else if(numKey[i] == 10){
                pass = pass + 'a'
            }else if(numKey[i] == 12){
                pass = pass + 'b'
            }else if(numKey[i] == 13){
                pass = pass + 'c'
            }else if(numKey[i] == 14){
                pass = pass + 'd'
            }else if(numKey[i] == 15){
                pass = pass + 'e'
            }else if(numKey[i] == 16){
                pass = pass + 'f'
            }else if(numKey[i] == 17){
                pass = pass + 'g'
            }else if(numKey[i] == 18){
                pass = pass + 'h'
            }else if(numKey[i] == 19){
                pass = pass + 'i'
            }else if(numKey[i] == 20){
                pass = pass + 'j'
            }else if(numKey[i] == 21){
                pass = pass + 'k'
            }else if(numKey[i] == 22){
                pass = pass + 'l'
            }else if(numKey[i] == 23){
                pass = pass + 'm'
            }else if(numKey[i] == 24){
                pass = pass + 'n'
            }else if(numKey[i] == 25){
                pass = pass + 'o'
            }else if(numKey[i] == 26){
                pass = pass + 'p'
            }else if(numKey[i] == 27){
                pass = pass + 'q'
            }else if(numKey[i] == 28){
                pass = pass + 'r'
            }else if(numKey[i] == 29){
                pass = pass + 's'
            }else if(numKey[i] == 30){
                pass = pass + 't'
            }else if(numKey[i] == 31){
                pass = pass + 'u'
            }else if(numKey[i] == 32){
                pass = pass + 'v'
            }else if(numKey[i] == 33){
                pass = pass + 'w'
            }else if(numKey[i] == 34){
                pass = pass + 'x'
            }else if(numKey[i] == 35){
                pass = pass + 'y'
            }else if(numKey[i] == 36){
                pass = pass + 'z'
            }else if(numKey[i] == 37){
                pass = pass + 'A'
            }else if(numKey[i] == 38){
                pass = pass + 'B'
            }else if(numKey[i] == 39){
                pass = pass + 'C'
            }else if(numKey[i] == 40){
                pass = pass + 'D'
            }else if(numKey[i] == 41){
                pass = pass + 'E'
            }else if(numKey[i] == 42){
                pass = pass + 'F'
            }else if(numKey[i] == 43){
                pass = pass + 'G'
            }else if(numKey[i] == 44){
                pass = pass + 'H'
            }else if(numKey[i] == 45){
                pass = pass + 'I'
            }else if(numKey[i] == 46){
                pass = pass + 'J'
            }else if(numKey[i] == 47){
                pass = pass + 'K'
            }else if(numKey[i] == 48){
                pass = pass + 'L'
            }else if(numKey[i] == 49){
                pass = pass + 'M'
            }else if(numKey[i] == 50){
                pass = pass + 'N'
            }else if(numKey[i] == 51){
                pass = pass + 'O'
            }else if(numKey[i] == 52){
                pass = pass + 'P'
            }else if(numKey[i] == 53){
                pass = pass + 'Q'
            }else if(numKey[i] == 54){
                pass = pass + 'R'
            }else if(numKey[i] == 55){
                pass = pass + 'S'
            }else if(numKey[i] == 56){
                pass = pass + 'T'
            }else if(numKey[i] == 57){
                pass = pass + 'U'
            }else if(numKey[i] == 58){
                pass = pass + 'V'
            }else if(numKey[i] == 59){
                pass = pass + 'W'
            }else if(numKey[i] == 60){
                pass = pass + 'X'
            }else if(numKey[i] == 61){
                pass = pass + 'Y'
            }else if(numKey[i] == 62){
                pass = pass + 'Z'
            }
    }
}
