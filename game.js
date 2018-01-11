var canvas = document.getElementById('screen'),
context = canvas.getContext('2d'),
gameEngine,
i = 0,
k = 0,
j = 0,
anim2 = 0,
move = 0,
dmove = 0,
anim = 4,
speed = 2,
probel = false,
left = false,
right = false,
sw1=false,
sw2=false,
sw3=false,
sw4=false,
sw5=false,
sw6=false,
sw7=false,
sw8=false,
sw9=false,
sw10=false,
a = 0,
b = 0,
back,
list = 0,
brif = false,
lm = 0,
rm = 0,
mdx;


context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;



//----------------------------------
function wrapText(text, marginLeft, marginTop, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.font = lineHeight + 'px Arial';
        context.fillText(line, marginLeft, marginTop);
    };



//персонаж 39 на 127

//Обработчики нажатий

addEventListener("keydown", function(event) {
/*    if (event.keyCode == 37){
      //move+=speed;
      left=true;

    };
    if (event.keyCode == 39){
      //move-=speed;
      right=true;

      };

*/
    if (event.keyCode == 32){
      probel = true;
      setTimeout(function() { probel = false }, 50);
    };
  });

addEventListener("keyup", function(event) {
      if (event.keyCode == 37){
        left=false;
        anim=4;
    };
    if (event.keyCode == 39){
      right=false;
      anim=5;
    };
    if (event.keyCode == 32){
  		probel = false;
    };
  });


//----------------------------------------

//Отрисовка, звук



var knk = new Image();
knk.src = 'Canvas/КнопкиКомп.png';
var space = new Image();
space.src = 'Canvas/Космос.png';
var karabl = new Image();
karabl.src = 'Canvas/Корабль.png';
var pers = new Image();
pers.src = 'Canvas/Персонаж.png';
var inkor = new Image();
inkor.src = 'Canvas/Внутри.png';
var lamp = new Image();
lamp.src = 'Canvas/Лампочка.png';
var komp = new Image();
komp.src = 'Canvas/Компьютер.png';
var knopki = new Image();
knopki.src = 'Canvas/Кнопки.png';
var flag = new Image();
flag.src = 'Canvas/Флажок.png';
var gradient = new Image();
gradient.src = 'Canvas/Градиент.png';
var raz = new Image();
raz.src = 'Canvas/Разлом.png';
var ind = new Image();
ind.src = 'Canvas/Индикатор.png';
var razl = new Image();
razl.src = 'Canvas/Разлом2.png';
var lab = new Image();
lab.src = 'Canvas/Лаборатория.png';
var krist = new Image();
krist.src = 'Canvas/Кристаллы.png';
var mm = new Image();
mm.src = 'Canvas/Меню.png';
var insl = new Image();
insl.src = 'Canvas/Интро.png';
var ihelp = new Image();
ihelp.src = 'Canvas/Помощь.png';
var print = new Image();
print.src = 'Canvas/Принтер.png';

var noisekor = document.createElement ('audio');
noisekor.src = 'Canvas/Корабль.ogg';

var spaceaudio = document.createElement ('audio');
spaceaudio.src = 'Canvas/Космос.ogg';

var probka = document.createElement ('audio');
probka.src = 'Canvas/Пробка.ogg';

var kislota = document.createElement ('audio');
kislota.src = 'Canvas/Кислота.ogg';

var MainMenu = document.createElement ('audio');
MainMenu.src = 'Canvas/Меню.ogg';

var Intro = document.createElement ('audio');
Intro.src = 'Canvas/Интро.ogg';

var prs = document.createElement ('audio');
prs.src = 'Canvas/Принтер.ogg';

var fmus = document.createElement ('audio');
fmus.src = 'Canvas/Конец.ogg';


var izk1 = false;
var izk2 = false;
var izk3 = false;
var izk4 = false;
var izk5 = false;

var pr1 = false;
var pr2 = false;
var pr3 = false;
var pr4 = false;
var pr5 = false;

//функции отрисовки
//-----------------Индикатор кристаллов----------------
var uind = function (x, y) {
  context.drawImage (ind, 0, 0, 270, 108, x, y, 270, 108);

//-----------------------------1-----------------

if (n1) {
  context.drawImage(ind, 270, 0, 54, 54, x, y, 54, 54);
};

if (izk1) {
  context.drawImage(ind, 270 + 54, 54, 54, 54, x, y, 54, 54);
};

if (izk1 & tk1) {
  context.drawImage(ind, 270 + 54, 0, 54, 54, x, y, 54, 54);
};

if (pr1) {
  context.drawImage(ind, 594, 0, 54, 54, x, y, 54, 54);
};


//------------------------------------------------

//-----------------------------2-----------------

if (n2) {
  context.drawImage(ind, 270, 0, 54, 54, x+54, y, 54, 54);
};

if (izk2) {
  context.drawImage(ind, 270 + 54*2, 54, 54, 54, x+54, y, 54, 54);
};

if (izk2 & tk2) {
  context.drawImage(ind, 270 + 54*2, 0, 54, 54, x+54, y, 54, 54);
};

if (pr2) {
  context.drawImage(ind, 594, 0, 54, 54, x+54, y, 54, 54);
};


//------------------------------------------------


//-----------------------------3-----------------

if (n3) {
  context.drawImage(ind, 270, 0, 54, 54, x+54*2, y, 54, 54);
};

if (izk3) {
  context.drawImage(ind, 270 + 54*3, 54, 54, 54, x+54*2, y, 54, 54);
};

if (izk3 & tk3) {
  context.drawImage(ind, 270 + 54*3, 0, 54, 54, x+54*2, y, 54, 54);
};

if (pr3) {
  context.drawImage(ind, 594, 0, 54, 54, x+54*2, y, 54, 54);
};


//------------------------------------------------



//-----------------------------4-----------------

if (n4) {
  context.drawImage(ind, 270, 0, 54, 54, x+54*3, y, 54, 54);
};

if (izk4) {
  context.drawImage(ind, 270 + 54*4, 54, 54, 54, x+54*3, y, 54, 54);
};

if (izk4 & tk4) {
  context.drawImage(ind, 270 + 54*4, 0, 54, 54, x+54*3, y, 54, 54);
};

if (pr4) {
  context.drawImage(ind, 594, 0, 54, 54, x+54*3, y, 54, 54);
};


//------------------------------------------------

//-----------------------------5-----------------

if (n5) {
  context.drawImage(ind, 270, 0, 54, 54, x+54*4, y, 54, 54);
};

if (izk5) {
  context.drawImage(ind, 270 + 54*5, 54, 54, 54, x+54*4, y, 54, 54);
};

if (izk5 & tk5) {
  context.drawImage(ind, 270 + 54*5, 0, 54, 54, x+54*4, y, 54, 54);
};

if (pr5) {
  context.drawImage(ind, 594, 0, 54, 54, x+54*4, y, 54, 54);
};


//------------------------------------------------




};













//Разлом
var razlom = function functionName(x,y, size) {
  size=size ? size:1;
  if (a==66) {
    a=0;
  };
  x+=move;

  if (b==46) {
    b=0;
  };

  context.shadowColor = "#e1e6e8";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 7;

  context.drawImage(lab, 0,0, 238, 152, x-34,y, 238*size, 152*size);

  context.drawImage(raz, 34*a, 0,34,38*4,x-52,y,34*size,38*4*size);

  context.drawImage(raz, 34*a, 38*4,34,38*4,x+170+16,y,34*size,38*4*size);

  context.drawImage(razl, 0, 24*b, 238, 24, x-35, y-24, 238*size, 24*size);

  context.drawImage(razl, 238, 24*b, 238, 24, x-35, y+38*4, 238*size, 24*size);
  context.shadowBlur = 0;
  a++;
  b++;
};
//--------------------------------------------------------
var mX, mY, cl;


canvas.addEventListener("mousemove", setMousePosition, false);
canvas.addEventListener("mousedown", maused, false);
canvas.addEventListener("click", clk, false);


function clk() {
  cl = true;
  setTimeout(function() { cl = false }, 50);

};

var de = canvas.getBoundingClientRect();

function setMousePosition(e) {
  mX = e.clientX - de.left - 3;
  mY = e.clientY - de.top - 3;
};

function maused() {
  mdx = mX;
};




//--------------------------

var ui = function functionName() {

context.shadowColor = "black";

if (25+56+25<mX & mX<25+56+25+56 & 425<mY & mY<425+56) {
  context.shadowBlur = 5;
  context.drawImage (knk, 0, 0, 56, 56, 25+56+25, 425, 56, 56);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (knk, 0, 0, 56, 56, 25+56+25, 425, 56, 56);
};

if (25+56+25<mX & mX<25+56+25+56 & 425<mY & mY<425+56 & cl) {
  cl=false;
  list--;
};

if (25+56+25+70<mX & mX<25+56+25+56+70 & 425<mY & mY<425+56 & cl) {
  cl=false;
  list++;
};


if (25+56+25+70<mX & mX<25+56+25+56+70 & 425<mY & mY<425+56) {
  context.shadowBlur = 5;
  context.drawImage (knk, 56, 0, 56, 56, 25+56+25+70, 425, 56, 56);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (knk, 56, 0, 56, 56, 25+56+25+70, 425, 56, 56);
};





if (25<mX & mX<25+56 & 425<mY & mY<425+56) {
  context.shadowBlur = 5;
  context.drawImage (knk, 56*2, 0, 56, 56, 25, 425, 56, 56);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (knk, 56*2, 0, 56, 56, 25, 425, 56, 56);
};

if (25<mX & mX<25+56 & 425<mY & mY<425+56 & cl) {
  cl=false;
  probel=true;
};



};
//---------------------------------------------------------------------


var ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8;

var swr = function functionName() {
  sw1 = false;
  sw2 = false;
  sw3 = false;
  sw4 = false;
  sw5 = false;
  sw6 = false;
  sw7 = false;
  sw8 = false;
  sw9 = false;
  sw10 = false;
};



var chr = function functionName() {
  ch1 = false;
  ch2 = false;
  ch3 = false;
  ch4 = false;
  ch5 = false;
  ch6 = false;
  ch7 = false;
  ch8 = false;
};





/*

var polka = function functionName(y) {
  context.fillStyle = '#e1e6e8';
  context.fillRect(0,0, 864, 486);

  context.drawImage (r, 0, 173, 864, 56, 0, y, 864, 56);

  context.shadowColor = "blue";



//1


  if (10+10<mX & mX<10+10 +94 & y-173<mY & mY<y-173 +173) {
    context.shadowBlur = 5;
    context.drawImage (r, 49, 0, 94, 173, 10+10, y-173, 94, 173);
    context.shadowBlur = 0;
  }
  else {
    context.shadowBlur = 0;
    context.drawImage (r, 49, 0, 94, 173, 10+10, y-173, 94, 173);
  };
    if (10+10<mX & mX<10+10 +94 & y-173<mY & mY<y-173 +173 & cl) {
      cl = false;
      if (ch1) {
      ch1 = false;
      }
      else {
      ch1 = true;
    };

      };

      if (ch1) {
        context.shadowColor = "green";
        context.shadowBlur = 8;
        context.drawImage (r, 49, 0, 94, 173, 10+10, y-173, 94, 173);
        context.shadowBlur = 0;
        context.shadowColor = "blue";
      };





//2

      if (10+10*2+94<mX & mX<10+10*2+94 +94 & y-173<mY & mY<y-173 +173) {
        context.shadowBlur = 5;
        context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, y-173, 94, 173);
        context.shadowBlur = 0;
      }
      else {
        context.shadowBlur = 0;
        context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, y-173, 94, 173);
      };
        if (10+10*2+94<mX & mX<10+10*2+94 +94 & y-173<mY & mY<y-173 +173 & cl) {
          cl = false;
          if (ch2) {
          ch2 = false;
          }
          else {
          ch2 = true;
        };

          };

          if (ch2) {
            context.shadowColor = "green";
            context.shadowBlur = 8;
            context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, y-173, 94, 173);
            context.shadowBlur = 0;
            context.shadowColor = "blue";
          };








//3
          if (10+10*3+94*2<mX & mX<10+10*3+94*2 +94 & y-173<mY & mY<y-173 +173) {
            context.shadowBlur = 5;
            context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, y-173, 94, 173);
            context.shadowBlur = 0;
          }
          else {
            context.shadowBlur = 0;
            context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, y-173, 94, 173);
          };
            if (10+10*3+94*2<mX & mX<10+10*3+94*2 +94 & y-173<mY & mY<y-173 +173 & cl) {
              cl = false;
              if (ch3) {
              ch3 = false;
              }
              else {
              ch3 = true;
            };

              };

              if (ch3) {
                context.shadowColor = "green";
                context.shadowBlur = 8;
                context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, y-173, 94, 173);
                context.shadowBlur = 0;
                context.shadowColor = "blue";
              };



//4

if (10+10*4+94*3<mX & mX<10+10*4+94*3 +94 & y-173<mY & mY<y-173 +173) {
  context.shadowBlur = 5;
  context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, y-173, 94, 173);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, y-173, 94, 173);
};
  if (10+10*4+94*3<mX & mX<10+10*4+94*3 +94 & y-173<mY & mY<y-173 +173 & cl) {
    cl = false;
    if (ch4) {
    ch4 = false;
    }
    else {
    ch4 = true;
  };

    };

    if (ch4) {
      context.shadowColor = "green";
      context.shadowBlur = 8;
      context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, y-173, 94, 173);
      context.shadowBlur = 0;
      context.shadowColor = "blue";
    };





//5
if (10+10*5+94*4<mX & mX<10+10*5+94*4 +94 & y-173<mY & mY<y-173 +173) {
  context.shadowBlur = 5;
  context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, y-173, 94, 173);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, y-173, 94, 173);
};
  if (10+10*5+94*4<mX & mX<10+10*5+94*4 +94 & y-173<mY & mY<y-173 +173 & cl) {
    cl = false;
    if (ch5) {
    ch5 = false;
    }
    else {
    ch5 = true;
  };

    };

    if (ch5) {
      context.shadowColor = "green";
      context.shadowBlur = 8;
      context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, y-173, 94, 173);
      context.shadowBlur = 0;
      context.shadowColor = "blue";
    };





//6
if (10+10*6+94*5<mX & mX<10+10*6+94*5 +94 & y-173<mY & mY<y-173 +173) {
  context.shadowBlur = 5;
  context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, y-173, 94, 173);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, y-173, 94, 173);
};
  if (10+10*6+94*5<mX & mX<10+10*6+94*5 +94 & y-173<mY & mY<y-173 +173 & cl) {
    cl = false;
    if (ch6) {
    ch6 = false;
    }
    else {
    ch6 = true;
  };

    };

    if (ch6) {
      context.shadowColor = "green";
      context.shadowBlur = 8;
      context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, y-173, 94, 173);
      context.shadowBlur = 0;
      context.shadowColor = "blue";
    };



//7
if (10+10*7+94*6<mX & mX<10+10*7+94*6 +94 & y-173<mY & mY<y-173 +173) {
  context.shadowBlur = 5;
  context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, y-173, 94, 173);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, y-173, 94, 173);
};
  if (10+10*7+94*6<mX & mX<10+10*7+94*6 +94 & y-173<mY & mY<y-173 +173 & cl) {
    cl = false;
    if (ch7) {
    ch7 = false;
    }
    else {
    ch7 = true;
  };

    };

    if (ch7) {
      context.shadowColor = "green";
      context.shadowBlur = 8;
      context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, y-173, 94, 173);
      context.shadowBlur = 0;
      context.shadowColor = "blue";
    };

//8

if (n3) {



if (10+10*8+94*7<mX & mX<10+10*8+94*7 +94 & y-173<mY & mY<y-173 +173) {
  context.shadowBlur = 5;
  context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, y-173, 94, 173);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, y-173, 94, 173);
};
  if (10+10*8+94*7<mX & mX<10+10*8+94*7 +94 & y-173<mY & mY<y-173 +173 & cl) {
    cl = false;
    if (ch8) {
    ch8 = false;
    }
    else {
    ch8 = true;
  };

    };

    if (ch8) {
      context.shadowColor = "green";
      context.shadowBlur = 8;
      context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, y-173, 94, 173);
      context.shadowBlur = 0;
      context.shadowColor = "blue";
    };

};





if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56) {
  context.shadowBlur = 5;
  context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
  context.shadowBlur = 0;
}
else {
  context.shadowBlur = 0;
  context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
};

if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56 & cl) {
  cl=false;
  probel=true;
};










//if (!ch1 & !ch2 & !ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
  comix('Выбери реактивы');
//};


if (!ch1 & ch2 & !ch3 & ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
  comix('Кристалл №1?');
  if (probel) {
    probel = false;
    sw1 = true;
    gameEngineSet(vz);
  };
};

if (!ch1 & ch2 & ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
  comix('Кристалл №2? Раствор нужно подкислить...', 30);
};

if (!ch1 & ch2 & ch3 & !ch4 & !ch5 & !ch6 & ch7 & !ch8) {
  comix('Кристалл №2?');
};

if (ch1 & ch2 & !ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
  comix('Кристалл №3?');
};

if (!ch1 & !ch2 & !ch3 & !ch4 & ch5 & ch6 & !ch7 & !ch8) {
  comix('Кристалл №4?');
};

if (!ch1 & !ch2 & !ch3 & !ch4 & !ch5 & ch6 & !ch7 & ch8) {
  comix('Кристалл №5?');
};








};

*/

var n1, n2, n3, n4, n5;







//----------------------------------------
var comix = function functionName(text, size) {
  size=size ? size:40;
  context.font = "italic " + size + "px Arial";
  context.textAlign = "center";
  context.drawImage (gradient, 0, 0);
  context.fillStyle = "black";
  context.fillRect (0, 486-55, 864, 100);
  context.fillStyle = "white";
  context.fillRect (4, 486-51, 859-3, 47);
  context.fillStyle = "black";
  context.fillText (text, 864/2, 486-15);
};

var action = function(x, y, dx){
	context.drawImage (lamp, x+dx, y+5);
};

var drawspace = function(){
	x = move/2;
	context.drawImage (space, x, 0);
	if (x>0) {context.drawImage (space, x-864, 0)};
	if (x<0) {context.drawImage (space, x+864, 0)};
};

var drawkarabl = function(){
	x = 450+move;
	context.drawImage (karabl, x, 150);
};

var drawpers = function (x, y, dx) {
  dx = dx ? dx : 0;
  if (left) {
  if (anim>3) {
    anim=3;
  };
  if (Math.abs(dmove - move)>speed*6) {
    dmove = move;
    anim-=1
  };
  if (anim<0) {
    anim=3
  };
  move+=speed;
  lm+=speed;
  };

  if (right) {
  if (anim<6) {
    anim=6;
  };
  if (Math.abs(dmove - move)>speed*6) {
    dmove = move;
    anim+=1
  };
  if (anim>9) {
    anim=6
  };
  move-=speed;
  rm+=speed;
  };
context.drawImage (pers, 39*anim, 0, 39, 127, x+dx, y, 39,127);
};

var play = function (nameaudio) {
  nameaudio.play();
};

var stop = function (nameaudio) {
  nameaudio.pause();
  nameaudio.currentTime = 0;
};

//Инструкция на компьютере
/*var instr = function(list) {
context.drawImage (komp, 864*list, 0, 864, 486, 0, 0, 864, 486);
};
*/

//-----------------------------------------------
  var mess = function (text, x, y, dx, size) {
      size = size ? size : 14;
      context.font = size + "px Arial";
      context.shadowColor = "black";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fillStyle = "#FFFAFA"
      context.shadowBlur = 4;

  if (((context.measureText(text).width)/2)>(x+dx)){
      context.drawImage (flag, x+dx-19, y);
      context.fillRect(5, y-size,context.measureText(text).width +size, size*1.5);
      context.fillStyle = "black";
      context.textAlign = "start";
      context.shadowColor = "#696969";
      context.shadowBlur = 1;
      context.fillText(text, 10, y);
    };

  if (((context.measureText(text).width)/2)<(x+dx) &((context.measureText(text).width)/2)+(x+dx)<864){
  context.textAlign = "center";
  context.drawImage (flag, x+dx-19, y);
  context.fillRect(dx+x-((context.measureText(text).width)/2)-size*0.5, y-size,context.measureText(text).width +size, size*1.5);
  context.fillStyle = "black";
  context.shadowColor = "#696969";
  context.shadowBlur = 1;
  context.fillText(text, x+dx, y);
  };

  if (((context.measureText(text).width)/2)+(x+dx)>864){
    context.textAlign = "end";
    context.drawImage (flag, x+dx-19, y);
    context.fillRect(864-size*1.2-context.measureText(text).width, y-size,context.measureText(text).width +size, size*1.5);
    context.fillStyle = "black";
    context.shadowColor = "#696969";
    context.shadowBlur = 1;
    context.fillText(text, 854, y);
  };
context.shadowBlur = 0;
};

//-------------------------------------------------------

var reset = function () {
  probel = false;
  move = 0;
  i = 0;
  k = 0;
  j = 0;
  sw1 = false;
  sw2 = false;
  sw3 = false;
  sw4 = false;
  sw5 = false;
  sw6 = false;
  sw7 = false;
  sw8 = false;
  sw9 = false;
  sw10 = false;
};




//-----------------------------------------------------

//Игровой движок

var nextGameStep = (function () {
	return requestAnimationFrame ||
	webkitRequestAnimationFrame ||
	mozRequestAnimationFrame ||
	oRequestAnimationFrame ||
	msRequestAnimationFrame ||
	function (callback){
		setTimeout(callback, 1000/60);
	}
})();

var gameEngineStart = function (callback) {
	gameEngine = callback;
	gameEngineStep();
};

var gameEngineStep = function () {
	gameEngine();
	nextGameStep(gameEngineStep);
};

var gameEngineSet = function  (callback) {
  gameEngine = callback;
};







//-----------------------------------------------------
//Игровой цикл
//--------------------------------------------





//Первое действие внутри
var In0 = function() {
play (noisekor);
context.clearRect (0, 0, 900, 900);
var de = canvas.getBoundingClientRect();
mause(50);
context.drawImage (inkor, 0, 0);
context.drawImage (krist, 288, 0, 95, 103, 733, 216, 95, 103);
drawpers(50, 235, -move);
/*
if (k<500) {
  if (j>3) {
    j=0;
    anim2 += 1;
  };
  if (anim2 > 5) {
    anim2 = 0;
  };
  k++;
  j++;
  //context.drawImage (knopki, 276*anim2, 0, 276, 71, 864/2-276/2, 400, 276, 71);
};
*/
if (move>=56-8) {move=56-8};
if (move<=-782+8) {move=-782+8};

//подсветка действия
if (move<=40 & move>=-40) {
  action(50, 230-35, -move);
};
if (move<=-90 & move>=-206) {
  action(50, 230-35, -move);
};
if (move<=-266 & move>=-380) {
  action(50, 230-35, -move);
};
if (move<=-436 & move>=-604) {
  action(50, 230-35, -move);
};
if (move<=-656 & move>=-768) {
  action(50, 230-35, -move);
};
//------------------------------

if (k<500) {
  k++;
    context.fillStyle = 'rgba(0,0,0,' + (1 - k/500) + ')';
    context.fillRect(0, 0, 864, 486);
};

//------------------------------
//выход

if (probel & move<=40 & move>=-40 & sw7 & sw8 & sw9 & sw10) {
  reset();
  stop (noisekor);
  gameEngineSet(universe);
};

//Инструкция (надпись)
//Свитчи
if (probel & move<=40 & move>=-40) {
  probel = false;
  sw1=true;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  i = 0;
};

if (probel & move<=-90 & move>=-206) {
  probel = false;
  sw1=false;
  sw2=true;
  sw3=false;
  sw4=false;
  sw5=false;
  sw7=true;
  i = 0;
};

if (probel & move<=-266 & move>=-380) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=true;
  sw4=false;
  sw5=false;
  sw8=true;
  i = 0;
};

if (probel & move<=-436 & move>=-604) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=true;
  sw5=false;
  sw9=true;
  i = 0;
};

if (probel & move<=-656 & move>=-768) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=true;
  sw10=true;
  i = 0;
};

//Действия свитчей

if (sw7 & sw8 & sw9 & sw10 & k<1500 & k>499) {
    context.drawImage (inkor, 648-((k-700)/6), 214, 216, 122, 0, 0, 864, 486);
    if (k<=1250) {
    comix ('Мне не подчинить кристаллы без лаборатории...', 34);
    mdx = 20 +50 - move;
    };
    if (k>1250) {
      comix ('Пора выйти наружу...');
      mdx = 20 +50 - move;
    };
    k++;
};

if (sw1 & i<120) {
  if (sw7 || sw8 || sw9 || sw10) {
  mess ('Я ещё не всё осмотрел', 70, 230-35, -move);
  }
  else {
    mess ('Мне нужно оценить повреждения', 70, 230-35, -move);
  };
  i++;
};

if (sw2 & i<200) {
  context.drawImage (inkor, 177, 230+i/10, 87, 49, 0, 0, 864, 486)
  comix('Компьютер работает...');
  mdx = 20 +50 - move;
  i++;
  move = -115;
};

if (sw3 & i<200) {
  context.drawImage (inkor, 331, 223+i/10, 124, 70, 0, 0, 864, 486)
  comix('Что-то типа 3D принтера. Работает...');
  mdx = 20 +50 - move;
  i++;
  move = -312;
};

if (sw4 & i<275) {
  context.drawImage (inkor, 507, 200+i/3, 161, 90, 0, 0, 864, 486)
  comix('Лаборатория повреждена, доступ закрыт...');
  mdx = 20 +50 - move;
  i++;
  move = -520;
};

if (sw5 & i<200) {
  context.drawImage (inkor, 710, 212+i/4.4, 140, 78, 0, 0, 864, 486);
  comix('Кристаллы повреждены, перемещения недоступны...', 31);
  mdx = 20 +50 - move;
  i++;
  move = -702;
};

};
//----------------------------------------

//Комикс про вселенную
var universe = function () {
  context.clearRect (0, 0, 900, 900);
  play(spaceaudio);
  de = canvas.getBoundingClientRect();
  left  = false;
  right = false;
  context.fillStyle = "black";
  context.fillRect (0,0, 900, 900);
  drawspace ();
  move+=speed/3;
  i++;
  comix ('Похоже, что пространство-время нарушено...', 35);
  if (i>200) {
    reset();
    GameState = 'Out0';
  //  save();
    gameEngineSet(Out0);
  };
};


//--------------------------------------------
var cosmp = function functionName() {
  play (spaceaudio);
  context.clearRect (0, 0, 900, 900);
  de = canvas.getBoundingClientRect();
  mausec();
  drawspace ();
//  mause();
  drawkarabl ();
  razlom(-432, 192);
  razlom(432+864, 192);
  drawpers(500, 215, 0);

  if (move>864) {move=-864};
  if (move<-864) {move=864};
  //подсветка действия
  if (move<=40 & move>=-40) {
    action(500, 215-35, 0);
  };

  if (move<=-756 || move>=760) {
    action(500, 215-35, 0);
  };

  //onsole.log(move);
  //console.log(i);
            //выход
  if (probel & move<=40 & move>=-40) {
    reset();
    stop (spaceaudio);
    GameState = back;
    //save();
    gameEngineSet(back);
  };



  //Свитчи
  if ((move<=-756 || move>=760) & probel) {
    probel=false;
    sw4=true;
    i=0;
  };

  //Действия свитчей
  if (sw4 & i<200) {
    mess ('Мне нужно посмотреть инструкции в компьютере', 500+20, 215-30, 0, 14);
    i++;
};
};




//-----------------------------------------
//Первый выход
var Out0 = function() {
//  console.log(move, mdx);
play (spaceaudio);
context.clearRect (0, 0, 900, 900);
de = canvas.getBoundingClientRect();
mausec();
drawspace ();
drawkarabl ();
razlom(-432, 192);
razlom(432+864, 192);
drawpers(500, 215, 0);

if (move>864) {move=-864};
if (move<-864) {move=864};
//подсветка действия
if (move<=40 & move>=-40) {
  action(500, 215-35, 0);
};

if (move<=-756 || move>=760) {
  action(500, 215-35, 0);
};

//onsole.log(move);
//console.log(i);
          //выход
if (probel & move<=40 & move>=-40 & sw6) {
  reset();
  stop (spaceaudio);
  GameState = 'In1';
  //save();
  gameEngineSet(In1);
};



//Свитчи
if (probel & move<=40 & move>=-40) {
  sw1 = true;
  sw2 = false;
  i=0;
};

if ((move>350 || move<-500) & !sw3) {
  sw2=true;
  sw1=false;
  i=0;
};

if ((move<=-756 || move>=760) & probel) {
  probel=false;
  sw4=true;
  sw2=false;
  i=0;
};

//Действия свитчей
if (sw1 & i<230) {
  mess ('Я ещё не осмотрелся', 500+20, 215-30, 0, 14);
  i++;
};

if (sw2 & i<230) {
    sw3=true;
    if (i<=90) {
      sw1=false;
      mess ('Что это?', 500+20, 215-30, 0, 14);
      i++;
    }
      else {
    mess ('Разлом пространства-времени?', 500+20, 215-30, 0, 14);
    i++;
  };
};


if (sw4 & i<400) {
  context.drawImage(lab, 16, 40-i/10, 206, 116, 0, 0, 864, 486);
  if (i<=200) {
      comix('Странно, но теперь у меня есть лаборатория', 33);
  };

  if (i>200) {
  comix('Это значит, что я смогу выбраться', 35);
  };
  i++;
  move=864;
  sw6=true;
};

if (sw6 & j<300 & i>=400) {
  mess ('В компьютере есть инструкции', 500+20, 215-30, 0, 14);
  j++;
};

};
//------------------------------

//Второе действие внутри
var In1 = function() {
back = In1;
play (noisekor);
context.clearRect (0, 0, 900, 900);
de = canvas.getBoundingClientRect();
context.drawImage (inkor, 0, 0);
context.drawImage (krist, 288, 0, 95, 103, 733, 216, 95, 103);
mause(50);
drawpers(50, 235, -move);
if (move>=56-8) {move=56-8};
if (move<=-782+8) {move=-782+8};

//подсветка действия
if (move<=40 & move>=-40) {
  action(50, 230-35, -move);
};
if (move<=-90 & move>=-206) {
  action(50, 230-35, -move);
};
if (move<=-266 & move>=-380) {
  action(50, 230-35, -move);
};
if (move<=-436 & move>=-604) {
  action(50, 230-35, -move);
};
if (move<=-656 & move>=-768) {
  action(50, 230-35, -move);
};

//выход

if (probel & move<=40 & move>=-40) {
  reset();
  stop (noisekor);
  if (sw10){
  gameEngineSet(universe);
  }
  else {
    GameState = 'cosmp';
  //  save();
  gameEngineSet(cosmp);
  };
};

//Инструкция (надпись)
//Свитчи
if (probel & move<=40 & move>=-40) {
  probel = false;
  sw1=true;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  i = 0;
};

if (probel & move<=-90 & move>=-206) {
  probel = false;
  sw1=false;
  sw2=true;
  sw3=false;
  sw4=false;
  sw5=false;
  sw7=true;
  i = 0;
};

if (probel & move<=-266 & move>=-380) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=true;
  sw4=false;
  sw5=false;
  sw8=true;
  i = 0;
};

if (probel & move<=-436 & move>=-604) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=true;
  sw5=false;
  sw9=true;
  i = 0;
};

if (probel & move<=-656 & move>=-768) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=true;
  sw10=true;
  i = 0;
};

//Действия свитчей
//sw2=true;
if (sw2) {
  reset();
  GameState = 'k1';
//  save();
  gameEngineSet(k1);
  brif  = true;
};

if (sw3 & i<200) {
  mess ('У меня нет материала', 70, 230-35, -move);
  i++;
};

if (sw4 & i<275) {
  mess ('Лаборатория закрыта', 70, 230-35, -move);
  i++;
};

if (sw5 & i<200) {
  mess ('Сердце корабля... сломано', 70, 230-35, -move);
  i++;
};

};


//------------Инструкции------------

var k1 = function functionName() {
  context.clearRect(0,0, 900, 900);
  play(noisekor);
  de = canvas.getBoundingClientRect();
  if (right & i>25) {
    list++;
    i=0;
  };
  if (left & i>25) {
    list--;
    i=0;
  };
  if (i<26) {
    i++;
  };
  if (list<0) {
    list=0;
  };
  if (list>5) {
    list=5;
  };

context.drawImage (komp, 864*list, 0, 864, 486, 0, 0, 864, 486);

switch (list) {
  case 1:
  context.font = '21px Arial';
  context.textAlign = 'left';
  context.fillStyle = 'black';
  context.fillText(t1kcl + '°C.', 493, 67+7*21);
  context.fillText(KCl + ' г.', 172, 60+10*21);
    break;

    case 2:
    context.font = '21px Arial';
    context.textAlign = 'left';
    context.fillStyle = 'black';
    context.fillText(t1K2Cr2O7 + '°C.', 285, 67+7*21);
    context.fillText(K2Cr2O7 + ' г.', 90, 60+10*21);
      break;

    case 3:
    context.font = '30px Arial';
    context.textAlign = 'left';
    context.fillStyle = 'black';
    context.fillText(CuSO4 + ' г раствора с массовой долей', 220, 181);
      break;

    case 4:
    context.font = '30px Arial';
    context.textAlign = 'left';
    context.fillStyle = 'black';
    context.fillText(CH3COONa + ' Дж энергии.', 25, 265);
    break;

    case 5:
    context.font = '30px Arial';
    context.textAlign = 'left';
    context.fillStyle = 'black';
    context.fillText(CH3COO2Cu + ' г.', 140, 181);
    break;

};

  move = -130;

  ui();



  if (probel) {
    probel = false;
    sw2 = false;
  //  GameState = 'InLoop';
  //  save();
    gameEngineSet(InLoop);
  };
};



//-------------------------------------------
//--------------------Задачи-----------------
var KCl =  20+Math.floor(Math.random()*80+1);
var t1kcl = Math.floor(Math.random()*5+1);
var dkcl;
switch (t1kcl) {
  case 1: t1kcl = 0;
          dkcl = 56.3 - 28;
    break;
  case 2: t1kcl = 15;
          dkcl = 56.3 - 32.7;
    break;
  case 3: t1kcl = 20;
          dkcl = 56.3 - 34.4;
    break;
  case 4: t1kcl = 25;
          dkcl = 56.3 - 36;
    break;
  case 5: t1kcl = 30;
          dkcl = 56.3 - 37.4;
    break;
};
var t2 = 100;

dkcl = +dkcl.toPrecision(3);



var K2Cr2O7 =  20+Math.floor(Math.random()*80+1);
var t1K2Cr2O7 = Math.floor(Math.random()*5+1);
var dK2Cr2O7;
switch (t1K2Cr2O7) {
  case 1: t1K2Cr2O7 = 0;
          dK2Cr2O7 = 102 - 4.7;
    break;
  case 2: t1K2Cr2O7 = 15;
          dK2Cr2O7 = 102 - 9.7;
    break;
  case 3: t1K2Cr2O7 = 20;
          dK2Cr2O7 = 102 - 12.5;
    break;
  case 4: t1K2Cr2O7 = 25;
          dK2Cr2O7 = 102 - 15.2;
    break;
  case 5: t1K2Cr2O7 = 30;
          dK2Cr2O7 = 102 - 18.1;
    break;
};

dK2Cr2O7 = +dK2Cr2O7.toPrecision(3);




var CuSO4 =  100+Math.floor(Math.random()*400+1);
var CH3COONa =  1000+Math.floor(Math.random()*2000+1);
var CH3COO2Cu =  20+Math.floor(Math.random()*80+1);

console.log('Нужно KCl - ' + KCl);
console.log('t1 KCl - ' + t1kcl);
console.log('dKCl - ' + dkcl);
console.log('t2 KCl - ' + t2);
console.log('Нужно K2Cr2O7 - ' + K2Cr2O7);
console.log('t1 K2Cr2O7 - ' + t1K2Cr2O7);
console.log('dK2Cr2O7 - ' + dK2Cr2O7);
console.log('Нужно CuSO4 - ' + CuSO4);
console.log('Нужно CH3COONa - ' + CH3COONa);
console.log('Нужно CH3COO2Cu - ' + CH3COO2Cu);


//-----------------------------------------------------
//----------------------------------------------------





//-----------------------Mause--------------------------------------
var mause = function (x) {

  var raw = Math.abs(mdx-20 -x + move);

//console.log(raw);

    if (raw <=5) {
      //  mdx = 50;
        if (left) {
        left = false;
        anim = 4;
      };

      if (right) {
      right = false;
      anim = 5;
    };



  };


  if (cl & mX> x-move & mX<x-move+40) {
    cl = false;
    probel = true;
    setTimeout(function () {probel=false;}, 50);
  };



  if (cl & raw>=20) {
    //cl = false;

if (mdx-20 > x-move) {
  right = true;
  left = false;
};

if (mdx-20 < x-move) {
  left = true;
  right = false;
};




  };


};

var pmove;

//-----------------------------------------------------------------------
var mausec = function (x) {
x = 500;
var raw = Math.abs(mdx - 500);



if ((raw - lm)<=5 || (raw - rm)<=5) {
    mdx = 50;
    lm = 0;
    rm = 0;
    if (left) {
    left = false;
    anim = 4;
  };

  if (right) {
  right = false;
  anim = 5;
};

};

if (cl) {
//cl = false;
lm = 0;
rm = 0;

if (mX>x+40) {
right = true;
left = false;
};

if (mX<x) {
left = true;
right = false;
};




};






















if (cl & mX>x & mX<x+40) {

  probel = true;
  cl = false;
  setTimeout(function () {probel=false;}, 50);
};




/*
var raw = Math.abs(pmove - Math.abs(move));

//console.log(raw);

  if (Math.abs(raw - mdx) <=5) {
      mdx = 50;
      if (left) {
      left = false;
      anim = 4;
    };

    if (right) {
    right = false;
    anim = 5;
  };



};


if (cl & mX>x & mX<x+40) {
  probel = true;
  setTimeout(function () {probel=false;}, 50);
};

//console.log(pmove);

if (cl) {
pmove = Math.abs(move);


if (mX>x+40) {
right = true;
left = false;
};

if (mX<x) {
left = true;
right = false;
};




};

*/
};











//--------------Внутри одно и то же--------------------
var InLoop = function() {
back = InLoop;
play (noisekor);
context.clearRect (0, 0, 900, 900);
de = canvas.getBoundingClientRect();

context.drawImage (inkor, 0, 0);
context.drawImage (krist, 288, 0, 95, 103, 733, 216, 95, 103);

if (pr1) {
  context.drawImage(krist, 136, 57, 17, 17, 773, 273, 17, 17);
};

if (pr2) {
  context.drawImage(krist, 114, 33, 15, 15, 751, 249, 15, 15);
};

if (pr3) {
  context.drawImage(krist, 159, 34, 12, 12, 796, 250, 12, 12);
};

if (pr4) {
  context.drawImage(krist, 135, 85, 19, 17, 772, 301, 19, 17);
};

if (pr5) {
  context.drawImage(krist, 137, 10, 15, 15, 774, 226, 15, 15);
};



//console.log(move);
//console.log(mX);


if (pr1 & tk1) {
  context.drawImage(krist, 41, 58, 17, 17, 773, 273, 17, 17);
};

if (pr2 & tk2) {
  context.drawImage(krist, 18, 33, 15, 15, 751, 249, 15, 15);
};

if (pr3 & tk3) {
  context.drawImage(krist, 63, 34, 12, 12, 796, 250, 12, 12);
};

if (pr4 & tk4) {
  context.drawImage(krist, 40, 86, 19, 17, 772, 301, 19, 17);
};

if (pr5 & tk5) {
  context.drawImage(krist, 41, 10, 15, 15, 774, 226, 15, 15);
};









mause(50);

drawpers(50, 235, -move);
uind(50, 50);





//------------------------------------------------------------------------

if (move>=56-8) {move=56-8};
if (move<=-782+8) {move=-782+8};

//подсветка действия
if (move<=40 & move>=-40) {
  action(50, 230-35, -move);
};
if (move<=-90 & move>=-206) {
  action(50, 230-35, -move);
};
if (move<=-266 & move>=-380) {
  action(50, 230-35, -move);
};
if (move<=-436 & move>=-604) {
  action(50, 230-35, -move);
};
if (move<=-656 & move>=-768) {
  action(50, 230-35, -move);
};

//выход

if (probel & move<=40 & move>=-40) {
  reset();
  stop (noisekor);
  GameState = 'OutLoop';
  //save();
  gameEngineSet(OutLoop);
};

//Инструкция (надпись)
//Свитчи
if (probel & move<=40 & move>=-40) {
  probel = false;
  sw1=true;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  i = 0;
};

if (probel & move<=-90 & move>=-206) {
  probel = false;
  sw1=false;
  sw2=true;
  sw3=false;
  sw4=false;
  sw5=false;
  i = 0;
};

if (probel & move<=-266 & move>=-380) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=true;
  sw4=false;
  sw5=false;
  i = 0;
};

if (probel & move<=-436 & move>=-604) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=true;
  sw5=false;
  i = 0;
};

if (probel & move<=-656 & move>=-768) {
  probel = false;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=true;
  i = 0;
};

//Действия свитчей
//sw2=true;
if (sw2) {
  reset();


  //------------------Конец------------------------
  if (pr1 & pr2 & pr3 & pr4 & pr5) {
  //  GameState = 'fin';
  //  save();

  if (tk1) {
    a1+=1;
  };
  if (tk2) {
    a1+=1;
  };
  if (tk3) {
    a1+=2;
  };
  if (tk4) {
    a1+=2;
  };
  if (tk5) {
    a1+=2;
  };



    gameEngineSet(fin);
  }
  else {
    gameEngineSet(k1);
  };



//  GameState = 'k1';
//  save();



  //brif  = true;
};

if (sw3) {
  if (!n1 & !n2 & !n3 & !n4 & !n5 & i<200 & !sw10) {
    mess ('У меня нет материала', 70, 230-35, -move);
    i++;
  };

  if (sw10 & i<400 || n1 || n2 || n3 || n4 || n5) {
    mess ('Готово!', 70, 230-35, -move);
    if (i<200) {
    play(prs);
    context.drawImage(print, 0, 0, 864/8, 486/8, 0, 0, 864, 486);
    context.drawImage (gradient, 0, 0);
    };
    i++;
  };

//---------------------1-------------------------
if (n1) {
  n1 = false;
  sw10 = true;
  izk1 = true;
  if (tn1) {
    tk1 = true;
    //a1++;
  };
};
//----------------------------------------------

//---------------------2-------------------------
if (n2) {
  n2 = false;
  sw10 = true;
  izk2 = true;
  if (tn2) {
    tk2 = true;
  //  a1++;
  };
};
//----------------------------------------------

//---------------------3-------------------------
if (n3) {
  n3 = false;
  sw10 = true;
  izk3 = true;
  if (tn3) {
    tk3 = true;
    //a1++;
  };
};
//----------------------------------------------

//---------------------4-------------------------
if (n4) {
  n4 = false;
  sw10 = true;
  izk4 = true;
  if (tn4) {
    tk4 = true;
  //  a1++;
  };
};
//----------------------------------------------

//---------------------5-------------------------
if (n5) {
  n5 = false;
  sw10 = true;
  izk5 = true;
  if (tn5) {
    tk5 = true;
  //  a1++;
  };
};
//----------------------------------------------



};





if (sw4 & i<275) {
  mess ('Лаборатория закрыта', 70, 230-35, -move);
  i++;
};

if (sw5) {
  if (!izk1 & !izk2 & !izk3 & !izk4 & !izk5 & i<200 & !sw10 & !sw9) {
    mess ('Сердце корабля... сломано', 70, 230-35, -move);
    i++;
  };

  if (sw10 & i<200) {
    mess ('Готово!', 70, 230-35, -move);
    i++;
  };

if (pr1 & pr2 & pr3 & pr4 & pr5 & i<200) {
  sw9 = true;
  mess ('Всё готово. Наверное...', 70, 230-35, -move);
  i++;
};



//---------------------------1--------------------------
if (izk1) {
  izk1 = false;
  sw10 = true;
  pr1 = true;
};
//------------------------------------------------------

//---------------------------2--------------------------
if (izk2) {
  izk2 = false;
  sw10 = true;
  pr2 = true;
};
//------------------------------------------------------

//---------------------------3--------------------------
if (izk3) {
  izk3 = false;
  sw10 = true;
  pr3 = true;
};
//------------------------------------------------------

//---------------------------4--------------------------
if (izk4) {
  izk4 = false;
  sw10 = true;
  pr4 = true;
};
//------------------------------------------------------

//---------------------------5--------------------------
if (izk5) {
  izk5 = false;
  sw10 = true;
  pr5 = true;
};
//------------------------------------------------------






};


if (pr1 & pr2 & pr3 & pr4 & pr5 & j<300) {
mess ('Если уверен, подойди к компьютеру', 70, 230-35, -move);
j++;
};




};

var r = new Image();
r.src = 'Canvas/Реактивы.png';












//---------------------------Выбор реактивов--------------------
 var choises = function() {
   play(spaceaudio);
   context.clearRect (0, 0, 900, 900);
   de = canvas.getBoundingClientRect();
  // polka(300);
   move=800;





   context.fillStyle = '#e1e6e8';
   context.fillRect(0,0, 864, 486);

   context.drawImage (r, 0, 173, 864, 56, 0, 300, 864, 56);

   context.shadowColor = "blue";



   //1


   if (10+10<mX & mX<10+10 +94 & 300-173<mY & mY<300-173 +173) {
     context.shadowBlur = 5;
     context.drawImage (r, 49, 0, 94, 173, 10+10, 300-173, 94, 173);
     context.shadowBlur = 0;
   }
   else {
     context.shadowBlur = 0;
     context.drawImage (r, 49, 0, 94, 173, 10+10, 300-173, 94, 173);
   };
     if (10+10<mX & mX<10+10 +94 & 300-173<mY & mY<300-173 +173 & cl) {
       cl = false;
       if (ch1) {
       ch1 = false;
       }
       else {
       ch1 = true;
     };

       };

       if (ch1) {
         context.shadowColor = "green";
         context.shadowBlur = 8;
         context.drawImage (r, 49, 0, 94, 173, 10+10, 300-173, 94, 173);
         context.shadowBlur = 0;
         context.shadowColor = "blue";
       };

   //2

       if (10+10*2+94<mX & mX<10+10*2+94 +94 & 300-173<mY & mY<300-173 +173) {
         context.shadowBlur = 5;
         context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, 300-173, 94, 173);
         context.shadowBlur = 0;
       }
       else {
         context.shadowBlur = 0;
         context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, 300-173, 94, 173);
       };
         if (10+10*2+94<mX & mX<10+10*2+94 +94 & 300-173<mY & mY<300-173 +173 & cl) {
           cl = false;
           if (ch2) {
           ch2 = false;
           }
           else {
           ch2 = true;
         };

           };

           if (ch2) {
             context.shadowColor = "green";
             context.shadowBlur = 8;
             context.drawImage (r, 49+94, 0, 94, 173, 10+10*2+94, 300-173, 94, 173);
             context.shadowBlur = 0;
             context.shadowColor = "blue";
           };


   //3
           if (10+10*3+94*2<mX & mX<10+10*3+94*2 +94 & 300-173<mY & mY<300-173 +173) {
             context.shadowBlur = 5;
             context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, 300-173, 94, 173);
             context.shadowBlur = 0;
           }
           else {
             context.shadowBlur = 0;
             context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, 300-173, 94, 173);
           };
             if (10+10*3+94*2<mX & mX<10+10*3+94*2 +94 & 300-173<mY & mY<300-173 +173 & cl) {
               cl = false;
               if (ch3) {
               ch3 = false;
               }
               else {
               ch3 = true;
             };

               };

               if (ch3) {
                 context.shadowColor = "green";
                 context.shadowBlur = 8;
                 context.drawImage (r, 49+94*2, 0, 94, 173, 10+10*3+94*2, 300-173, 94, 173);
                 context.shadowBlur = 0;
                 context.shadowColor = "blue";
               };


   //4

   if (10+10*4+94*3<mX & mX<10+10*4+94*3 +94 & 300-173<mY & mY<300-173 +173) {
   context.shadowBlur = 5;
   context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, 300-173, 94, 173);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, 300-173, 94, 173);
   };
   if (10+10*4+94*3<mX & mX<10+10*4+94*3 +94 & 300-173<mY & mY<300-173 +173 & cl) {
     cl = false;
     if (ch4) {
     ch4 = false;
     }
     else {
     ch4 = true;
   };

     };

     if (ch4) {
       context.shadowColor = "green";
       context.shadowBlur = 8;
       context.drawImage (r, 49+94*3, 0, 94, 173, 10+10*4+94*3, 300-173, 94, 173);
       context.shadowBlur = 0;
       context.shadowColor = "blue";
     };



   //5
   if (10+10*5+94*4<mX & mX<10+10*5+94*4 +94 & 300-173<mY & mY<300-173 +173) {
   context.shadowBlur = 5;
   context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, 300-173, 94, 173);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, 300-173, 94, 173);
   };
   if (10+10*5+94*4<mX & mX<10+10*5+94*4 +94 & 300-173<mY & mY<300-173 +173 & cl) {
     cl = false;
     if (ch5) {
     ch5 = false;
     }
     else {
     ch5 = true;
   };

     };

     if (ch5) {
       context.shadowColor = "green";
       context.shadowBlur = 8;
       context.drawImage (r, 49+94*4, 0, 94, 173, 10+10*5+94*4, 300-173, 94, 173);
       context.shadowBlur = 0;
       context.shadowColor = "blue";
     };


   //6
   if (10+10*6+94*5<mX & mX<10+10*6+94*5 +94 & 300-173<mY & mY<300-173 +173) {
   context.shadowBlur = 5;
   context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, 300-173, 94, 173);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, 300-173, 94, 173);
   };
   if (10+10*6+94*5<mX & mX<10+10*6+94*5 +94 & 300-173<mY & mY<300-173 +173 & cl) {
     cl = false;
     if (ch6) {
     ch6 = false;
     }
     else {
     ch6 = true;
   };

     };

     if (ch6) {
       context.shadowColor = "green";
       context.shadowBlur = 8;
       context.drawImage (r, 49+94*5, 0, 94, 173, 10+10*6+94*5, 300-173, 94, 173);
       context.shadowBlur = 0;
       context.shadowColor = "blue";
     };


   //7
   if (10+10*7+94*6<mX & mX<10+10*7+94*6 +94 & 300-173<mY & mY<300-173 +173) {
   context.shadowBlur = 5;
   context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, 300-173, 94, 173);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, 300-173, 94, 173);
   };
   if (10+10*7+94*6<mX & mX<10+10*7+94*6 +94 & 300-173<mY & mY<300-173 +173 & cl) {
     cl = false;
     if (ch7) {
     ch7 = false;
     }
     else {
     ch7 = true;
   };

     };

     if (ch7) {
       context.shadowColor = "green";
       context.shadowBlur = 8;
       context.drawImage (r, 49+94*6, 0, 94, 173, 10+10*7+94*6, 300-173, 94, 173);
       context.shadowBlur = 0;
       context.shadowColor = "blue";
     };

   //8

   if (CuSO430) {



   if (10+10*8+94*7<mX & mX<10+10*8+94*7 +94 & 300-173<mY & mY<300-173 +173) {
   context.shadowBlur = 5;
   context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, 300-173, 94, 173);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, 300-173, 94, 173);
   };
   if (10+10*8+94*7<mX & mX<10+10*8+94*7 +94 & 300-173<mY & mY<300-173 +173 & cl) {
     cl = false;
     if (ch8) {
     ch8 = false;
     }
     else {
     ch8 = true;
   };

     };

     if (ch8) {
       context.shadowColor = "green";
       context.shadowBlur = 8;
       context.drawImage (r, 49+94*7, 0, 94, 173, 10+10*8+94*7, 300-173, 94, 173);
       context.shadowBlur = 0;
       context.shadowColor = "blue";
     };



};


// Кнопка крестик



   if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
   };

   if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56 & cl) {
   cl=false;

   if (ch1 || ch2 || ch3 || ch4 || ch5 || ch6 || ch7 || ch8) {
     chr();
   }
   else {
     probel=true;
   };

   };










   //if (!ch1 & !ch2 & !ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
   comix('Выбери реактивы');
   //};

//Кнопки подтверждения


//1
   if (!ch1 & ch2 & !ch3 & ch4 & !ch5 & !ch6 & !ch7 & !ch8) {

     if (pr1 || n1 || izk1) {
       comix('Переделать кристалл № 1?')


       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
       context.shadowBlur = 5;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       context.shadowBlur = 0;
       }
       else {
       context.shadowBlur = 0;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       };

       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
         cl = false;
         probel = false;
         sw1 = true;

         pr1 = false;
         n1 = false;
         izk1 = false;
         tn1 = false;

         if (tk1) {
           tk1 = false;
          // a1--;
         };

         chr();
         GameState = 'vz';
        // save();
         gameEngineSet(vz);
       };

     }
     else {




   comix('Кристалл №1?');
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   };

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
     cl = false;
     probel = false;
     sw1 = true;
     chr();
     GameState = 'vz';
     //save();
     gameEngineSet(vz);
   };

 };
   };





//2

   if (!ch1 & ch2 & ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {
   comix('Кристалл №2? Раствор нужно подкислить...', 30);
   };



//2

   if (!ch1 & ch2 & ch3 & !ch4 & !ch5 & !ch6 & ch7 & !ch8) {



     if (pr2 || n2 || izk2) {
       comix('Переделать кристалл № 2?')


       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
       context.shadowBlur = 5;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       context.shadowBlur = 0;
       }
       else {
       context.shadowBlur = 0;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       };

       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
         cl = false;
         probel = false;
         sw2 = true;

         pr2 = false;
         n2 = false;
         izk2 = false;
         tn2 = false;

         if (tk2) {
           tk2 = false;
          // a1--;
         };

         chr();
         GameState = 'vz';
        // save();
         gameEngineSet(vz);
       };

     }
     else {




   comix('Кристалл №2?');
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   };

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
     cl = false;
     probel = false;
     sw2 = true;
     chr();
     GameState = 'vz';
  //   save();
     gameEngineSet(vz);
   };
 };
   };

  // };




//3

   if (ch1 & ch2 & !ch3 & !ch4 & !ch5 & !ch6 & !ch7 & !ch8) {




     if (pr3 || n3 || izk3) {
       comix('Переделать кристалл № 3?')


       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
       context.shadowBlur = 5;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       context.shadowBlur = 0;
       }
       else {
       context.shadowBlur = 0;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       };

       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
         cl = false;
         probel = false;
         sw3 = true;

         pr3 = false;
         n3 = false;
         izk3 = false;
         tn3 = false;

         if (tk3) {
           tk3 = false;
        //   a1--;
         };

         chr();
         GameState = 'vz';
        // save();
         gameEngineSet(vz);
       };

     }
     else {





   comix('Кристалл №3?');
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   };

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
     cl = false;
     probel = false;
     sw3 = true;
     chr();
    // GameState = 'vz';
    // save();
     gameEngineSet(vz);
   };
 };
   };


//4

   if (!ch1 & !ch2 & !ch3 & !ch4 & ch5 & ch6 & !ch7 & !ch8) {





     if (pr4 || n4 || izk4) {
       comix('Переделать кристалл № 4?')


       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
       context.shadowBlur = 5;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       context.shadowBlur = 0;
       }
       else {
       context.shadowBlur = 0;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       };

       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
         cl = false;
         probel = false;
         sw4 = true;

         pr4 = false;
         n4 = false;
         izk4 = false;
         tn4 = false;

         if (tk4) {
           tk4 = false;
        //   a1--;
         };

         chr();
      //   GameState = 'vz';
        // save();
         gameEngineSet(vz);
       };

     }
     else {





   comix('Кристалл №4?');
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   };

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
     cl = false;
     probel = false;
     sw4 = true;
     chr();
     gameEngineSet(vz);
   };
 };
   };

//5

   if (!ch1 & !ch2 & !ch3 & !ch4 & ch5 & ch6 & !ch7 & ch8) {






     if (pr5 || n5 || izk5) {
       comix('Переделать кристалл № 5?')


       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
       context.shadowBlur = 5;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       context.shadowBlur = 0;
       }
       else {
       context.shadowBlur = 0;
       context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
       };

       if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
         cl = false;
         probel = false;
         sw5 = true;

         pr5 = false;
         n5 = false;
         izk5 = false;
         tn5 = false;

         if (tk5) {
           tk5 = false;
        //   a1--;
         };

         chr();
        // GameState = 'vz';
        // save();
         gameEngineSet(vz);
       };

     }
     else {










   comix('Кристалл №5?');
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
   context.shadowBlur = 5;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   context.shadowBlur = 0;
   }
   else {
   context.shadowBlur = 0;
   context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
   };

   if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
     cl = false;
     probel = false;
     sw5 = true;
     chr();
  //   GameState = 'vz';
    // save();
     gameEngineSet(vz);
   };
 };
   };


   if (probel) {
     probel = false;
     chr ();
     GameState = 'OutLoop';
    // save();
     gameEngineSet(OutLoop);
   };




   };




//----------Взвешивание переменные--------
var tb1 = false;
var tb2 = false;

//-------ТБ------
var tbd = new Image();
tbd.src = 'Canvas/ТБ.png';

var vs = new Image();
vs.src = 'Canvas/Весы.png';
var raznoves = 0;



var kn2 = new Image();
kn2.src = 'Canvas/Кн2.png'

//--------------------------------

var treug = function (x, y, z) {
  if (mX<316+x+22 & mX>316+x & mY>259+y & mY<259+y+22) {
  context.shadowColor = 'blue';
  context.shadowBlur = 5;
  context.drawImage (kn2, 22*z, 0, 22, 22, 316+x, 259+y, 22, 22);
  context.shadowBlur = 0;
  }
  else {
  context.drawImage (kn2, 22*z, 0, 22, 22, 316+x, 259+y, 22, 22);
    };




};
//------------------------------


var CuSO430 = false;
var trv = 0;
var sravn3 = false;


//----------------------------------
var ui2 = function () {
  treug(0, 0, 0);
  treug(22+6, 0, 0);
  treug((22+6)*2, 0, 0);

  if (mX<316+22 & mX>316 & mY>259 & mY<259+22 & cl) {
    raznoves+=100;
    cl = false;
  };

  if (mX<316+22+6+22 & mX>316+22+6 & mY>259 & mY<259+22 & cl) {

    raznoves+=10;
    cl = false;
  };

  if (mX<316+(22+6)*2+22 & mX>316+(22+6)*2 & mY>259 & mY<259+22 & cl) {

    raznoves+=1;
    cl = false;
  };


  treug(0, 6+22, 1);
  treug(22+6, 6+22, 1);
  treug((22+6)*2, 6+22, 1);

  if (mX<316+22 & mX>316 & mY>259+6+22 & mY<259+22+6+22 & cl) {
    raznoves-=100;
    cl = false;
  };

  if (mX<316+22+6+22 & mX>316+22+6 & mY>259+6+22 & mY<259+22+6+22 & cl) {

    raznoves-=10;
    cl = false;
  };

  if (mX<316+(22+6)*2+22 & mX>316+(22+6)*2 & mY>259+6+22 & mY<259+22+6+22 & cl) {

    raznoves-=1;
    cl = false;
  };




  treug(22+6+23+44, 6+22, 1);
  treug((22+6)*2+23+44, 6+22, 1);

  if (mX<316+22+6+23+44+22 & mX>316+22+6+23+44 & mY>259+6+22 & mY<259+22+6+22 & cl) {
    raznoves-=0.1;
    cl = false;

  };

  if (mX<316+(22+6)*2+22+23+44 & mX>316+(22+6)*2+23+44 & mY>259+6+22 & mY<259+22+6+22 & cl) {

    raznoves-=0.01;
    cl = false;

  };



  treug(22+6+23+44, 0, 0);
  treug((22+6)*2+23+44, 0, 0);

  if (mX<316+22+6+23+44+22 & mX>316+22+6+23+44 & mY>259 & mY<259+22 & cl) {
    raznoves+=0.1;
    cl = false;

  };

  if (mX<316+(22+6)*2+22+23+44 & mX>316+(22+6)*2+23+44 & mY>259 & mY<259+22 & cl) {

    raznoves+=0.01;
    cl = false;

  };


if (raznoves < 0) {
  raznoves = 0;
};

if (raznoves>999.99) {
  raznoves = 999.99
}


if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56) {
context.shadowColor = "red";
context.shadowBlur = 5;
context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
context.shadowBlur = 0;
}
else {
context.shadowBlur = 0;
context.drawImage (knk, 56*2, 0, 56, 56, 25, 425-70, 56, 56);
};

if (25<mX & mX<25+56 & 425-70<mY & mY<425-70+56 & cl) {
cl=false;

if (raznoves>0) {
  raznoves = 0;
}
else {
  GameState = 'OutLoop';
  //save();
  gameEngineSet(OutLoop);
};



};



if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56) {
context.shadowColor = 'blue';
context.shadowBlur = 5;
context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
context.shadowBlur = 0;
}
else {
context.shadowBlur = 0;
context.drawImage (knk, 56, 0, 56, 56, 864-25-56, 425-70, 56, 56);
};




raznoves = +raznoves.toFixed(2);
//console.log(raznoves);
context.fillStyle = 'black';
context.font = "40px Arial"
context.textAlign = "right"
context.fillText(raznoves + 'г', 290,249+50);

};
//------------------------------------------

var sravn1 = false, sravn2 = false;
var tn1 = false, tn2 = false, tn3 = false, tn4 = false, tn5 = false;
var tk1 = false, tk2 = false, tk3 = false, tk4 = false, tk5 = false;




//----------------------------------------
//-------Цикл взвешивания

var vz = function () {
  de = canvas.getBoundingClientRect();
  play(spaceaudio);
  context.clearRect (0, 0, 900, 900);
  context.drawImage (vs, 0,0);




  //------------------------------Взвешивания---------------------


  //---------------1--------------------------
    if (sw1) {
      if (!sw6) {
        context.drawImage (r, 49+94*3, 0, 94, 173, 600, 4, 94*2, 173*2);
      //  trv = ((((KCl*100)/dkcl))*100)/56.3;
        trv = (KCl*56.3)/dkcl;
        trv = +trv.toFixed(2);
        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;


          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
          sravn1 = true;
          }
          else {
            sravn1 = false;
          };
          raznoves = 0;
          sw6 = true;
        };
      };

      if (sw6) {
        context.drawImage (r, 49+94*1, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;
          trv = (KCl*100)/dkcl;
          trv = +trv.toFixed(2);

          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01) ) {
          sravn2 = true;
          }
          else {
            sravn2 = false;
          };
          raznoves = 0;
          swr();
          if (sravn1 & sravn2) {
            tn1 = true;
          };
          n1 = true;
          swr();
          sravn1 = false;
          sravn2 = false;
          GameState = 'OutLoop';
        //  save();
          gameEngineSet(OutLoop);
        };
      };
};
  //--------------------------------------------------------------------------





  //-----------------------------------------2--------------------------------
    if (sw2) {
      if (!sw6) {
        context.drawImage (r, 49+94*2, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;
          trv = (K2Cr2O7*102)/dK2Cr2O7;
          trv = +trv.toFixed(2);

          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01) ) {
          sravn1 = true;
          }
          else {
            sravn1 = false;
          };
          raznoves = 0;
          sw6 = true;
        };
      };

      if (sw6) {
        context.drawImage (r, 49+94*1, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;

          trv = (K2Cr2O7*100)/dK2Cr2O7;
          trv = +trv.toFixed(2);
          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01) ) {
          sravn2 = true;
          }
          else {
            sravn2 = false;
          };
          raznoves = 0;
          swr();
          if (sravn1 & sravn2) {
            tn2 = true;
          };
          n2 = true;
          swr();
          sravn1 = false;
          sravn2 = false;
          GameState = 'OutLoop';
        //  save();
          gameEngineSet(OutLoop);
        };
      };
  };
  //--------------------------------------------------------------------------


  //-----------------------------------------3--------------------------------
    if (sw3) {
      if (!sw6) {
        context.drawImage (r, 49+94*0, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;
          trv = ((CuSO4*0.3)/160)*250;
          trv = +trv.toFixed(2);

          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
          sravn1 = true;
          }
          else {
            sravn1 = false;
          };
          raznoves = 0;
          sw6 = true;
        };
      };

      if (sw6) {
        context.drawImage (r, 49+94*1, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;

          trv = CuSO4 - ((CuSO4*0.3)/160)*250;
          trv = +trv.toFixed(2);
          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
          sravn2 = true;
          }
          else {
            sravn2 = false;
          };
          raznoves = 0;
          swr();
          if (sravn1 & sravn2) {
            tn3 = true;
          };
          n3 = true;
          CuSO430 = true;
          swr();
          sravn1 = false;
          sravn2 = false;
          GameState = 'OutLoop';
        //  save();
          gameEngineSet(OutLoop);
        };
      };
  };
  //--------------------------------------------------------------------------

  //-----------------------------------------4--------------------------------
    if (sw4) {
      if (!sw6) {
        context.drawImage (r, 49+94*5, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;

          trv = (CH3COONa*6000)/(82*70*264);
          trv = +trv.toFixed(2);

          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
          sravn1 = true;
          }
          else {
            sravn1 = false;
          };
          raznoves = 0;
          sw6 = true;
        };
      };

      if (sw6) {
        context.drawImage (r, 49+94*4, 0, 94, 173, 600, 4, 94*2, 173*2);

        if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
          cl = false;
          probel = false;

          trv = (CH3COONa*4000)/(82*30*264);
          trv = +trv.toFixed(2);

          if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
          sravn2 = true;
          }
          else {
            sravn2 = false;
          };
          raznoves = 0;
          swr();
          if (sravn1 & sravn2) {
            tn4 = true;
          };
          n4 = true;
          swr();
          sravn1 = false;
          sravn2 = false;
          GameState = 'OutLoop';
        //  save();
          gameEngineSet(OutLoop);
        };
      };
  };

//--------------------------------------------------


//-----------------------------------------5--------------------------------
  if (sw5) {

    if (!sw6) {
      context.drawImage (r, 49+94*4, 0, 94, 173, 600, 4, 94*2, 173*2);

      if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
        cl = false;
        probel = false;

        trv = (CH3COO2Cu*80*100)/(162*30);
        trv = +trv.toFixed(2);

        if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
        sravn1 = true;
        }
        else {
          sravn1 = false;
        };
        raznoves = 0;
        sw6 = true;
        sw7 = true;
      };
    };

    if (sw7) {
      context.drawImage (r, 49+94*7, 0, 94, 173, 600, 4, 94*2, 173*2);

      if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
        cl = false;
        probel = false;

        trv = (CH3COO2Cu*160*100)/(162*30);
        trv = +trv.toFixed(2);

        if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
        sravn2 = true;
        }
        else {
          sravn2 = false;
        };
        raznoves = 0;
        sw7 = false;
        sw8 = true;
      };
    };


    if (sw8) {
      context.drawImage (r, 49+94*5, 0, 94, 173, 600, 4, 94*2, 173*2);

      if (864-25-56<mX & mX<864-25-56+56 & 425-70<mY & mY<425-70+56 & cl) {
        cl = false;
        probel = false;

        trv = (100*CH3COO2Cu*120)/(162*70);
        trv = +trv.toFixed(2);

        if (raznoves == trv || raznoves == (trv + 0.01) || raznoves == (trv - 0.01)) {
        sravn3 = true;
        }
        else {
          sravn3 = false;
        };
        raznoves = 0;
        n5 = true;
        if (sravn1 & sravn2 & sravn3) {
          tn5 = true;
        };
        swr();
        sravn1 = false;
        sravn2 = false;
        sravn3 = false;
        GameState = 'OutLoop';
      //  save();
        gameEngineSet(OutLoop);
      };

    };





};






context.fillStyle = '#e1e6e8';
context.fillRect (600+50, 0, 100, 36);
context.fillRect (600+68, 0, 52, 100);
ui2();





comix ('Сколько взвесить?')




  //--------------------------------------------------------------------------



















//------------ТБ1----------------------------------------
  if (!tb1) {
    context.fillStyle = '#e1e6e8';
    context.fillRect(0,0, 864, 486);

context.drawImage(tbd, (864/2)*0,0, 864/2, 486, 0, 0, 864/2, 486);
context.drawImage(tbd, (864/2)*1,0, 864/2, 486, 864/2, 0, 864/2, 486);


//-----------Левая часть--------------------------------
  if (mX>0 & mX<432-5 & mY>0 & mY<486-100) {
    context.fillStyle = 'rgba(0,0,0,0.25)';
    context.fillRect (864/2 + 5, 0, 864/2, 486);
  };


//---------Правая часть-------------------------
if (mX>432 + 5 & mX<864 & mY>0 & mY<486-100) {
context.fillStyle = 'rgba(0,0,0,0.25)';
context.fillRect (0, 0, 864/2 - 5, 486);
context.shadowBlur = 0;
};



//---------Общее------------
if (mY>486-100 & mY<486 || mX>432-5 & mX<432 + 5 & mY>0 & mY<486-100 || mX === undefined || mX<1 || mY<1 || mX>864 || mY>486) {
  context.fillStyle = 'rgba(0,0,0,0.25)';
  context.fillRect (0, 0, 864, 486);
  cl = false
};



//------------Продолжение ТБ--------
  comix ('Как положить пробку?');

  if (mX>0 & mX<432-5 & mY>0 & mY<486-100 & cl) {
    cl = false;
    a1 += 0.5;
    tb1 = true;

  };

  if (mX>432 + 5 & mX<864 & mY>0 & mY<486-100 & cl) {
    cl = false;
    tb1 = true;

    GameState = 'tbcom1';
  //  save();
    gameEngineSet(tbcom1);

  };

  };




  //------------ТБ2----------------------------------------
    if (!tb2 & sw2) {
      context.fillStyle = '#e1e6e8';
      context.fillRect(0,0, 864, 486);

  context.drawImage(tbd, (864/2)*2,0, 864/2, 486, 0, 0, 864/2, 486);
  context.drawImage(tbd, (864/2)*3,0, 864/2, 486, 864/2, 0, 864/2, 486);


  //-----------Левая часть--------------------------------
    if (mX>0 & mX<432-5 & mY>0 & mY<486-100) {
      context.fillStyle = 'rgba(0,0,0,0.25)';
      context.fillRect (864/2 + 5, 0, 864/2, 486);
    };


  //---------Правая часть-------------------------
  if (mX>432 + 5 & mX<864 & mY>0 & mY<486-100) {
  context.fillStyle = 'rgba(0,0,0,0.25)';
  context.fillRect (0, 0, 864/2 - 5, 486);
  context.shadowBlur = 0;
  };



  //---------Общее------------
  if (mY>486-100 & mY<486 || mX>432-5 & mX<432 + 5 & mY>0 & mY<486-100 || mX === undefined || mX<1 || mY<1 || mX>864 || mY>486) {
    context.fillStyle = 'rgba(0,0,0,0.25)';
    context.fillRect (0, 0, 864, 486);
    cl = false
  };



  //------------Продолжение ТБ--------
    comix ('Как правильно?');

    if (mX>0 & mX<432-5 & mY>0 & mY<486-100 & cl) {
      cl = false;
      //a1 += 1;
      tb2 = true;
      GameState = 'tbcom2';
      //save();
      gameEngineSet(tbcom2);

    };

    if (mX>432 + 5 & mX<864 & mY>0 & mY<486-100 & cl) {
      cl = false;
      a1 += 0.5;
      tb2 = true;
    };
  };






//------------------------------------------------------------------

  };

//---------------------------------------------------------


//----------------------------------------------------------
var tbcom1 = function () {
  play(probka);
  de = canvas.getBoundingClientRect();
  context.clearRect (0, 0, 900, 900);
  context.drawImage(tbd, 864*2, 0, 864, 486, 0, 0, 864, 486);


  //context.fillStyle = 'rgba(2,2,2, 1)';
  //context.fillRect(864/2, 0, 864/2, 486);


  context.drawImage(gradient, 0, 0);

  //console.log(probka.currentTime);

  //i++;
  if (probka.currentTime >= 2) {
    stop(probka);
  //  i = 0;
    GameState = 'vz';
  //  save();
  gameEngineSet(vz);
  };


};





var tbcom2 = function () {
  de = canvas.getBoundingClientRect();
  play(kislota);
  context.clearRect (0, 0, 900, 900);
  context.drawImage(tbd, 864*3, 0, 864, 486, 0, 0, 864, 486);
  context.drawImage(gradient, 0, 0);

  //i++;
  if (kislota.currentTime >= 3) {
  //  i = 0;
  stop(kislota);
    GameState = 'vz';
  //  save();
  gameEngineSet(vz);
  };


};











//--------------------------------------------------------





















//};








//};

//};
//---------------Переменная оценки----------------
var a1 = 0;



//-----------------------------------------------------------
//----------------------------Снаружи одно и то же...........
var OutLoop = function() {
play (spaceaudio);
back = OutLoop;
de = canvas.getBoundingClientRect();
context.clearRect (0, 0, 900, 900);
drawspace ();
drawkarabl ();
razlom(-432, 192);
razlom(432+864, 192);
mausec();
drawpers(500, 215, 0);
uind(50,50);









if (move>864) {move=-864};
if (move<-864) {move=864};
//подсветка действия
if (move<=40 & move>=-40) {
  action(500, 215-35, 0);
};

if (move<=-756 || move>=760) {
  action(500, 215-35, 0);
};

//onsole.log(move);
//console.log(i);
          //выход
if (probel & move<=40 & move>=-40) {
  reset();
  stop (spaceaudio);
  gameEngineSet(InLoop);
};



//Свитчи
if ((move<=-756 || move>=760) & probel) {
  probel=false;
  sw2=true;
  };

//Действия свитчей
if (sw2) {
  probel = false;
  reset();
  GameState = "choises";
//  save();
  gameEngineSet(choises);
  };


};




//-----------------Конец-------------------------

var fin = function () {

  de = canvas.getBoundingClientRect();
  context.clearRect (0, 0, 900, 900);
  play(fmus);
  context.fillStyle = 'white';
  context.font = 40 + "px Arial";
  context.textAlign = "center";
  context.shadowColor = 'rgb(200, 200, 200)';
  context.shadowBlur = 5;
  context.fillText('Путешествия во времени', 864/2, 486/3 - 100);
  context.fillText('носят вероятностный характер.', 864/2, 486/3 +45 - 100);
  context.fillText('Вероятность успешного перемещения', 864/2, 486/3 +45*2 - 100);
  context.fillText('зависит от качества кристаллов', 864/2, 486/3 +45*3 - 100);
  context.fillText('и действий оператора...', 864/2, 486/3 +45*4 - 100);

  context.fillText('Ваша вероятность успешного возвращения:', 864/2, 486/3 +45*6 - 100);
  context.font = 50 + "px Arial";
  context.fillText( a1*10 + ' %', 864/2, 486/3 +45*8 - 100);
  context.shadowBlur = 0;


};

//--------------------------------


var circle = function (x, y, r) {

var rast = Math.sqrt((Math.pow (x-mX,2)+Math.pow (y-mY,2)));
var rad = 400;
var ir = r;
var ix = x;
var iy = y;


if (rast<=rad+r) {

r = (ir/(rad+ir))*rast;

}
else {
r = ir;
};


/*


  var ddx;
  var ddy;
  var rad = 20;
//-------------------Расстояния-------------------------
  if (mX<=x) {
    ddx = x - mX;
  };

  if (mX>=x) {
    ddx = mX - x;
  };



  if (mY<=y) {
    ddy = y - mY;
  };

  if (mY>=y) {
    ddy = mY - y;
  };
//----------------------------------------------------



//--------------------------Убегание-----------------------------------
  if (ddx<=rad & mX<=x & ddy<=rad & mY<=y) {
    x = mX + rad;
    y = y + mX - x;
  };


  if (ddx <= rad & mX <= x) {
    x = mX + rad;
  };




  if (ddx <= rad & mX >= x) {
    x= mX - rad;
  };

  */
//------------------------------------------------------



context.beginPath();
context.arc(x, y, r, 0, Math.PI*2, false);
context.closePath();
context.fillStyle = 'white';
context.fill();




};




var grid = function () {
  var n = 19, m = 87;
  var mas = [];
      for (var i = 0; i < m; i++){
        circle(27*i, 0, 5);
          //mas[i] = [];
            for (var j = 0; j < n; j++){
        //mas[i][j] = 0;
        circle(27*i, 27*j, 5);
}}
};

//---------------------------Intro-----------------------------------
var Intr0 = function () {
  de = canvas.getBoundingClientRect();
  context.clearRect (0, 0, 900, 900);
  stop(MainMenu);
  play(Intro);

  var x = Intro.currentTime*12*20,
      y = Intro.currentTime*2*20,
      f = Intro.currentTime*1*20;

  if (x>=240) {
  x = 240;
  };

  if (y >= 40) {
  y = 40;
};

if (f >= 20) {
  f = 20;
};


  context.fillStyle = 'white';
  context.fillRect(0, 0, 864, 486);

  context.fillStyle = "rgba(0, 0, 0, 1)";
  context.font = 40 + f + "px Arial";
  context.textAlign = "center";
  context.shadowColor = '#666';
  context.shadowBlur = 5;
  context.fillText('Time traveler', 570+265/2 - x, 100 - y);
  context.shadowBlur = 0;


//console.log(y);

/*

      if (localStorage.length>0) {

        context.drawImage(mm, 570, 134, 265, 51, 570, 134, 265, 51);

      };


      context.drawImage(mm, 570, 134+15+51, 265, 51, 570, 134+15+51, 265, 51);


      context.drawImage(mm, 570, 134+15+51+15+51, 265, 51, 570, 134+15+51+15+51, 265, 51);





      context.fillStyle = 'rgba(255,255,255,' + Intro.currentTime + ')';
      context.fillRect(570, 134, 266, 266);
*/
//console.log(ops);


  tick++;

  //Drawing the background. Basically clearing the frame that was before
//  canvas.fillStyle = opts.backgroundColor;
//  canvas.fillRect(0,0,w,h);

  //Executing particle functions
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].draw();
  }
  //Executing lines
  for(var a = 0; a < particles.length; a++){
    communicatePoints(particles[a], particles);
  };


  //mm.getImageData(0, 0, 200, 200);


  //mm.style.opacity = 0.5;


//console.log(Intro.currentTime);

if (Intro.currentTime >= 2) {
  context.fillStyle = 'rgba(255,255,255,' + (Intro.currentTime-2) + ')';
  context.fillRect(0, 0, 864, 486);
};





//1
if (Intro.currentTime > 3) {
  context.drawImage(insl, 123, 37-Intro.currentTime*4, 216, 122, 0, 0, 864, 486);
};

if (Intro.currentTime > 3) {
  context.drawImage(insl, 346, 11-Intro.currentTime*1.2, 27, 16, 0, 0, 864, 486);
};


if (Intro.currentTime > 3) {
  context.fillStyle = 'rgba(255,255,255,' + (4 + Intro.currentTime*(-1)) + ')';
  context.fillRect(0, 0, 864, 486);
};



if (Intro.currentTime >= 6) {
  context.fillStyle = 'rgba(255,255,255,' + (Intro.currentTime-7) + ')';
  context.fillRect(0, 0, 864, 486);
};




//2
    if (Intro.currentTime >= 8) {
      context.drawImage(insl, 0, 0, 123, 100, 70-Intro.currentTime*8, 0, 123*8, 100*8);
    };



    if (Intro.currentTime >= 8) {
      context.fillStyle = 'rgba(255,255,255,' + (9 + Intro.currentTime*(-1)) + ')';
      context.fillRect(0, 0, 864, 486);
    };

    if (Intro.currentTime >= 12) {
      context.fillStyle = 'rgba(255,255,255,' + (Intro.currentTime-13) + ')';
      context.fillRect(0, 0, 864, 486);
    };



//3




if (Intro.currentTime >= 14) {
  context.drawImage(insl, 812+90-Intro.currentTime*8, 0, 432, 243, 0, 0, 432*2, 243*2);
  context.fillStyle = 'rgba(76, 162, 202,'+ (Math.abs(Math.sin(Intro.currentTime)) - 0.3) +')'
  context.fillRect(-325+Intro.currentTime*8*2, 17*2, 147*2+3, 198*2+3);
};

if (Intro.currentTime >= 34) {
  //context.drawImage(insl, 812+90-Intro.currentTime*8, 0, 432, 243, 0, 0, 432*2, 243*2);
  context.fillStyle = 'rgba(76, 162, 202,'+ (Intro.currentTime - 35) +')'
  context.fillRect(-325+Intro.currentTime*8*2, 17*2, 147*2+3, 198*2+3);
};

if (Intro.currentTime >= 36) {
  context.fillStyle = 'rgba(255, 255, 255,'+ (Intro.currentTime - 37) +')'
  context.fillRect(-325+Intro.currentTime*8*2, 17*2, 147*2+3, 198*2+3);
}




if (Intro.currentTime >= 14) {
  context.fillStyle = 'rgba(255,255,255,' + (15 + Intro.currentTime*(-1)) + ')';
  context.fillRect(0, 0, 864, 486);
};

/*
if (Intro.currentTime >= 13) {
  context.fillStyle = 'rgba(255,255,255,' + (Intro.currentTime-13) + ')';
  context.fillRect(0, 0, 864, 486);
};
*/

//4





//exit

if (Intro.currentTime >= 37) {
  context.fillStyle = 'rgba(0,0,0,' + (Intro.currentTime-38) + ')';
  context.fillRect(0, 0, 864, 486);
};

    if (Intro.currentTime.toFixed(0) == 46) {
        gameEngineSet(In0);
        //console.log('hello');
    };



//-------------------Пропустить----------------------------------
    if (722<mX & mX<722+118 & 409<mY & mY<409+42) {
    context.shadowColor = 'blue';
    context.shadowBlur = 10;
    context.drawImage(mm, 722, 409, 118, 42, 722, 409, 118, 42);
    context.shadowBlur = 0;
    }
    else {
    context.shadowBlur = 0;
    context.drawImage(mm, 722, 409, 118, 42, 722, 409, 118, 42);
    };



  if (722<mX & mX<722+118 & 409<mY & mY<409+42 & cl) {

    stop(Intro);
    gameEngineSet(In0);
    mdx = 20 +50 - move;
  };









};













//------------------------Menu-------------------------
var menu = function () {
  de = canvas.getBoundingClientRect();
  context.clearRect (0, 0, 900, 900);
  play(MainMenu);
  context.fillStyle = 'white';
  context.fillRect(0, 0, 864, 486);

  context.fillStyle = "rgba(0, 0, 0, 255)";
  context.font = "40px Arial";
  context.textAlign = "center";
  context.shadowColor = '#666';
  context.shadowBlur = 5;
  context.fillText('Time traveler', 570+265/2, 100);
  context.shadowBlur = 0;


  tick++;

  //Drawing the background. Basically clearing the frame that was before
//  canvas.fillStyle = opts.backgroundColor;
//  canvas.fillRect(0,0,w,h);

  //Executing particle functions
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].draw();
  }
  //Executing lines
  for(var a = 0; a < particles.length; a++){
    communicatePoints(particles[a], particles);
  }





//---------------------Next-------------------
/*
  if (localStorage.length>0) {



  if (570<mX & mX<570+265 & 134<mY & mY<134+51) {
  context.shadowColor = 'blue';
  context.shadowBlur = 10;
  context.drawImage(mm, 570, 134, 265, 51, 570, 134, 265, 51);
  context.shadowBlur = 0;
  }
  else {
  context.shadowBlur = 0;
  context.drawImage(mm, 570, 134, 265, 51, 570, 134, 265, 51);
  };


  if (570<mX & mX<570+265 & 134<mY & mY<134+51 & cl) {
    stop(MainMenu);
    //load();
    gameEngineSet(GameState);

  };



};

*/





//-----------------------------------------------------------



//--------------------------New Game----------------------------
  if (570<mX & mX<570+265 & 134+15+51<mY & mY<134+51+15+51) {
  context.shadowColor = 'blue';
  context.shadowBlur = 10;
  context.drawImage(mm, 570, 134+15+51, 265, 51, 570, 134+15+51, 265, 51);
  context.shadowBlur = 0;
  }
  else {
  context.shadowBlur = 0;
  context.drawImage(mm, 570, 134+15+51, 265, 51, 570, 134+15+51, 265, 51);
  };

if (570<mX & mX<570+265 & 134+15+51<mY & mY<134+51+15+51 & cl) {
//  localStorage.clear();

  gameEngineSet(Intr0);
};

//console.log(MainMenu.currentTime);
//console.log(MainMenu.currentTime.toFixed(0));

//----------------------------------------------------------------


//------------------------Help-----------------------------------
if (570<mX & mX<570+265 & 134+15+51+15+51<mY & mY<134+51+15+51+15+51) {
context.shadowColor = 'blue';
context.shadowBlur = 10;
context.drawImage(mm, 570, 134+15+51+15+51, 265, 51, 570, 134+15+51+15+51, 265, 51);
context.shadowBlur = 0;
}
else {
context.shadowBlur = 0;
context.drawImage(mm, 570, 134+15+51+15+51, 265, 51, 570, 134+15+51+15+51, 265, 51);
};

if (570<mX & mX<570+265 & 134+15+51+15+51<mY & mY<134+51+15+51+15+51 & cl) {
gameEngineSet(helpgs);
};


};



var helpgs = function () {
  de = canvas.getBoundingClientRect();
  context.clearRect (0, 0, 900, 900);
  play(MainMenu);
  context.drawImage(ihelp, 0, 0);

  if (790<mX & mX<790+56 & 80-70<mY & mY<80-70+56) {
  context.shadowBlur = 5;
  context.drawImage (knk, 56*2, 0, 56, 56, 790, 80-70, 56, 56);
  context.shadowBlur = 0;
  }
  else {
  context.shadowBlur = 0;
  context.drawImage (knk, 56*2, 0, 56, 56, 790, 80-70, 56, 56);
  };

  if (790<mX & mX<790+56 & 80-70<mY & mY<80-70+56 & cl) {
  cl=false;
    gameEngineSet(menu);
  };

};


//--------------------------------------------------------------------






  //play(Intro);
  //console.log(Intro.currentTime);


//  drawspace ();

  //grid();
  //circle(mX, mY, 50);




//circle(100, 100, 30);
//console.log(mY);



/*
var GameState;

var save = function () {
  localStorage.setItem('n1', n1);
  if (n1 = "true") {
    n1 = true;
  }
  else {
    n1 = false;
  }
  localStorage.setItem('n2', n2);
  localStorage.setItem('n3', n3);
  localStorage.setItem('n4', n4);
  localStorage.setItem('n5', n5);

  localStorage.setItem('tn1', tn1);
  localStorage.setItem('tn2', tn2);
  localStorage.setItem('tn3', tn3);
  localStorage.setItem('tn4', tn4);
  localStorage.setItem('tn5', tn5);

  localStorage.setItem('tk1', tk1);
  localStorage.setItem('tk2', tk2);
  localStorage.setItem('tk3', tn3);
  localStorage.setItem('tk4', tk4);
  localStorage.setItem('tk5', tk5);

  localStorage.setItem('izk1', izk1);
  localStorage.setItem('izk2', izk2);
  localStorage.setItem('izk3', izk3);
  localStorage.setItem('izk4', izk4);
  localStorage.setItem('izk5', izk5);

  localStorage.setItem('pr1', pr1);
  localStorage.setItem('pr2', pr2);
  localStorage.setItem('pr3', pr3);
  localStorage.setItem('pr4', pr4);
  localStorage.setItem('pr5', pr5);

  localStorage.setItem('a1', a1);
  localStorage.setItem('CuSO430', CuSO430);

  localStorage.setItem('tb1', tb1);
  localStorage.setItem('tb2', tb2);

  localStorage.setItem('KCl', KCl);
  localStorage.setItem('t1kcl', t1kcl);
  localStorage.setItem('dkcl', dkcl);
  localStorage.setItem('K2Cr2O7', K2Cr2O7);
  localStorage.setItem('t1K2Cr2O7', t1K2Cr2O7);
  localStorage.setItem('dK2Cr2O7', dK2Cr2O7);
  localStorage.setItem('CuSO4', CuSO4);
  localStorage.setItem('CH3COONa', CH3COONa);
  localStorage.setItem('CH3COO2Cu', CH3COO2Cu);

  localStorage.setItem('GameState', GameState);


  localStorage.setItem('sw1', sw1);
  localStorage.setItem('sw2', sw2);
  localStorage.setItem('sw3', sw3);
  localStorage.setItem('sw4', sw4);
  localStorage.setItem('sw5', sw5);
  localStorage.setItem('sw6', sw6);
  localStorage.setItem('sw7', sw7);
  localStorage.setItem('sw8', sw8);
  localStorage.setItem('sw9', sw9);
  localStorage.setItem('sw10', sw10);

};


var load = function () {
  n1 = localStorage.getItem('n1');
  n2 = localStorage.getItem('n2');
  n3 = localStorage.getItem('n3');
  n4 = localStorage.getItem('n4');
  n5 = localStorage.getItem('n5');

  tn1 = localStorage.getItem('tn1');
  tn2 = localStorage.getItem('tn2');
  tn3 = localStorage.getItem('tn3');
  tn4 = localStorage.getItem('tn4');
  tn5 = localStorage.getItem('tn5');

  tk1 = localStorage.getItem('tk1');
  tk2 = localStorage.getItem('tk2');
  tn3 = localStorage.getItem('tk3');
  tk4 = localStorage.getItem('tk4');
  tk5 = localStorage.getItem('tk5');

  izk1 = localStorage.getItem('izk1');
  izk2 = localStorage.getItem('izk2');
  izk3 = localStorage.getItem('izk3');
  izk4 = localStorage.getItem('izk4');
  izk5 = localStorage.getItem('izk5');

  pr1 = localStorage.getItem('pr1');
  pr2 = localStorage.getItem('pr2');
  pr3 = localStorage.getItem('pr3');
  pr4 = localStorage.getItem('pr4');
  pr5 = localStorage.getItem('pr5');

  a1 = localStorage.getItem('a1');
  CuSO430 = localStorage.getItem('CuSO430');

  tb1 = localStorage.getItem('tb1');
  tb2 = localStorage.getItem('tb2');

  KCl = localStorage.getItem('KCl');
  t1kcl = localStorage.getItem('t1kcl');
  dkcl = localStorage.getItem('dkcl');
  K2Cr2O7 = localStorage.getItem('K2Cr2O7');
  t1K2Cr2O7 = localStorage.getItem('t1K2Cr2O7');
  dK2Cr2O7 = localStorage.getItem('dK2Cr2O7');
  CuSO4 = localStorage.getItem('CuSO4');
  CH3COONa = localStorage.getItem('CH3COONa');
  CH3COO2Cu = localStorage.getItem('CH3COO2Cu');

  GameState = localStorage.getItem('GameState');

  switch (GameState) {
    case 'In0':
    GameState = In0;
      break;

    case 'In1':
    GameState = In1;
      break;

      case 'InLoop':
      GameState = InLoop;
        break;

        case 'k1':
        GameState = k1;
          break;

          case 'OutLoop':
          GameState = OutLoop;
            break;

            case 'choises':
            GameState = choises;
              break;

              case 'vz':
              GameState = vz;
                break;

  };


  sw1 = localStorage.getItem('sw1');
  sw2 = localStorage.getItem('sw2');
  sw3 = localStorage.getItem('sw3');
  sw4 = localStorage.getItem('sw4');
  sw5 = localStorage.getItem('sw5');
  sw6 = localStorage.getItem('sw6');
  sw7 = localStorage.getItem('sw7');
  sw8 = localStorage.getItem('sw8');
  sw9 = localStorage.getItem('sw9');
  sw10 = localStorage.getItem('sw10');

};
*/

//--------------Particle--------------------------------
var   w = 864, //Full width
      h = 486, //Full height

			tick = 0, //Tick in time

			//YOU CAN CHANGE OPTIONS HERE. DO NOT REALLY MESS WITH STUFF BELOW THAT
			opts = { //Options, you can change those
				particleColor: "#222",
				particleAmount: 40,
				defaultSpeed: 1,
				addedSpeed: 2,

				defaultRadius: 1,
				addedRadius: 2,

				communicationRadius: 150, //The radius for the line
			},
			particles = [],

			Particle = function(Xpos, Ypos){
				this.x = Xpos ? Xpos : Math.random()*w; //If there is not position stated, it takes a random position
				this.y = Ypos ? Ypos : Math.random()*h; //Same here
				this.speed = opts.defaultSpeed + Math.random()*opts.addedSpeed; //Speed + a bit of random one
				this.directionAngle = Math.floor(Math.random()*360); //The angle of this particle its moving. !!!! TRUE ONLY ON INIT
				this.color = opts.particleColor;
				this.radius = opts.defaultRadius + Math.random()*opts.addedRadius; //Radius + a bit of random radius
				this.d = { //Object, stores directions. Computes directions according to the random this.directionAngle
					x: Math.cos(this.directionAngle)*this.speed,
					y: Math.sin(this.directionAngle)*this.speed
				};
				this.update = function(){ //The update function. The function that calculates next coordinates
					this.border(); //Checks if this particles touches the border and THEN computes the next coordinates
					this.x += this.d.x; //Just adding the direction to the X
					this.y += this.d.y; //Same but with Y
				};
				this.border = function(){ //The border function. Checks if this thing touches the border
					if(this.x >= w || this.x <= 0){ //X walls
						this.d.x *= -1;
					}
					if(this.y >= h || this.y <= 0){ //Floor and ceiling
						this.d.y *= -1;
					}
					this.x > w ? this.x = w : this.x; //This is really important.
					this.y > h ? this.y = h : this.y; //Same
					this.x < 0 ? this.x = 0 : this.x; //Same
					this.y < 0 ? this.y = 0 : this.y; //Same
					/* line ~49 explanation
						Because sometimes the speed of the particle can be faster, so it doesn't touch the border - it goes through. And when it goes back it doesn't go all the way inside - it stucks there. So, you have to set the X to the point when it touches. Same with Y
					*/

				};
				this.draw = function(){ //Just draws the points. Pretty easy. Takes the coords, color, radius - draws.
					context.beginPath();
					context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
					context.closePath();
					context.fillStyle = this.color;
					context.fill();
				};
			},
			checkDistance = function(x1, y1, x2, y2){ //You got it. The point on the graph distance formula.
				return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
			},
			//Here goes the function that makes lines!
			// @param point1 -	The point that check for neighboors
			// @param father - 	The array the point suppose to take thing from
			communicatePoints = function(point1, father){
				for(var i = 0; i < father.length; i++){
					var distance = checkDistance(point1.x, point1.y, father[i].x, father[i].y);
					var opacity = 1 - distance/opts.communicationRadius;
					if (opacity > 0){ //Draws the line
						context.lineWidth = opacity;
						context.strokeStyle = "rgba(30,100,150,0.5)";
						context.beginPath();
						context.moveTo(point1.x, point1.y);
						context.lineTo(father[i].x, father[i].y);
						context.closePath();
						context.stroke();
					}
				}
			};

	function setup(){ //Function called once to set everything up
		for(var i = 0; i < opts.particleAmount; i++){
			particles.push( new Particle() );
		}
		//window.requestAnimationFrame(loop);
	}


/*


	function loop(){ //Function of loop that will be called for a frame of the animation
		window.requestAnimationFrame(loop);
		tick++;

		//Drawing the background. Basically clearing the frame that was before
		canvas.fillStyle = opts.backgroundColor;
		canvas.fillRect(0,0,w,h);

		//Executing particle functions
		for(var i = 0; i < particles.length; i++){
			particles[i].update();
			particles[i].draw();
		}
		//Executing lines
		for(var a = 0; a < particles.length; a++){
			communicatePoints(particles[a], particles);
		}
	}

  */

	//Executing the animation
	setup();













//---------------------------------------------

//Конец игрового цикла
//----------------------------------------------------

//gameEngineStart(In0);
//gameEngineStart(universe);
//gameEngineStart(Out0);
//gameEngineStart(In1);
//gameEngineStart(k1);
//gameEngineStart(cosmp);
//gameEngineStart(choises);
//gameEngineStart(OutLoop);
//gameEngineStart(InLoop);
//gameEngineStart(vz);
//gameEngineStart(fin);
gameEngineStart(menu);
