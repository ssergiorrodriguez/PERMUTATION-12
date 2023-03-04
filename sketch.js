let red1,green1,blue1;

function setup() {
 createCanvas(1100, 660);
  background(0);
    fill(255);
  text("DÍA",21,23);
   text("MES",21,63);
   text("AÑO",21,103);
  fill(50);
  fill(255);
  textSize(15);
   text("pulse  'ENTER'",78,148);
  textSize(75);
  text("PERMUTACION-12", 220,80);
  textSize(17);
  text("PERMUTACION-12 es un programa que le permite generar su propia obra de arte viva ",226, 120); 
       text("y personal. Ponga una fecha de creación (por ejemplo, su cumpleaños) y déjela actuar.",227, 140);
  textSize(20);
  text("(moviendo el cursor de izquierda a derecha podrá acelerar o relentizar su obra)",110,550);
  text("(También funciona mediante respuesta táctil en smartphones y tablets)",140,580);
monoSynth = new p5.MonoSynth();
 
  


}
let t=1;

function draw() {
   userStartAudio();
  if (keyCode === ENTER) {
    if (t==1){
    red1=random(0,255);
      green1=random(0,255);
      blue1=random(0,255);
      computer_hour();
      t=t+1;
    }
  arduino_draw();
  pintar();
  avance();
  cronometro();
  }
}

let monoSynth;
let f0 = 200;
let f1 = 250;
let f2 = 300;
let f3 = 350;
let f4 = 400;
let f5 = 450;
let f6=  500;
let f7 = 550;
let f8 = 600;
let f9 = 650;
let f10= 700;
let f11= 750;

let note=[f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11];

let a, b, c, d, e, f, g, h, i, j, k, l;




  function computer_hour(){
  
  let year_i=input3.value();
  let month_i=input2.value();
  let day_i=input.value();
  let hour_i=0;
  let minute_i=0;
  let second_i=0;

let N;
    
N=(2021-year_i)*12*30*24*60*60+(month()-month_i)*30*24*60*60+(day()-day_i)*24*60*60+(hour()-hour_i)*60*60+(minute()-minute_i)*60+(second()-second_i);
 print(year_i);
print(month_i);
     print(day_i);

    
l=N%12;
k=round(N/pow(12,1))%12;
j=round(N/pow(12,2))%12;
i=round(N/pow(12,3))%12;
h=round(N/pow(12,4))%12;
g=round(N/pow(12,5))%12;
f=round(N/pow(12,6))%12;
e=round(N/pow(12,7))%12;
d=round(N/pow(12,8))%12;
c=round(N/pow(12,9))%12;
b=round(N/pow(12,10))%12;
a=round(N/pow(12,11))%12;

}

let avan=1;
let z=0;

function avance() {

  if (l==12) {
    k=k+1;
    l=0;
  }

  if (k==12) {
    k=0;
    j=j+1;
    
  }  

  if (j==12) {
    j=0;
    i=i+1;
    
  }  

  if (i==12) {
     i=0;
    h++;
   
  }  

  if (h==12) {
    h=0;
    g++;
    
  }  
  if (g==12) {
    f++;
    g=0;
  }  
  if (f==12) {
    e++;
    f=0;
  }
  if (e==12) {
    d++;
    e=0;
  }
  if (d==12) {
    c++;
    d=0;
  }
  if (c==12) {
    b++;
    c=0;
  }  
  if (b==12) {
    a++;
    b=0;
  }
  if (a==12) {
    print("complete");
    a=0;
  }

  if (millis()>avan) {
    z=z+1;
    if (z==12) {
      avan=millis();
      z=0; 
      l=l+1;
    }
    avan=avan+1*v;
  }
}

let v=50;

function arduino_draw(){
  if (mouseX<width){
  v=map(mouseX,0,width,1000,10);
}
  fill(0,0,0,20);
  rect(0,0,width,height);

}

let s,m,hr,di,me,y; 
let sec,mi,hor,dia,mes,yer;

function cronometro() {

  s=((14*v)*(((12-a)*pow(12,11)+(12-b)*pow(12,10)+(12-c)*pow(12,9)+(12-d)*pow(12,8)+(12-e)*pow(12,7)+(12-f)*pow(12,6)+(12-g)*pow(12,5)+(12-h)*pow(12,4)+(12-i)*pow(12,3)+(12-j)*pow(12,2)+(12-k)*pow(12,1)+(12-l)*pow(12,0))))/1000;
 
  sec=s%60;
  m=s/60;
  mi=m%60;
  hr=m/60;
  hor=hr%24;
  di=hr/24;
  dia=di%30;
  me=di/30;
  mes=me%12;
  y=me/12;
  yer=y%100;


  fill(6,6,6,230);
  rect(0, h1, 1200, h2);
  
  fill(255, 255, 255);
  textSize(25);
  text("There are "+round(y)+" years, "+round(mes)+" months, "+round(dia)+" days, "+round(hor)+" hours, "+round(mi)+" minutes y "+round(sec)+" sec ",25, h1+50);
  text("left for your artwork to finish. Be patient...",200, h1+100);
}

let x,r;
let h1=265,h2=130,ancho=78;


function pintar() {

   fill(0);
   rect(z*ancho,0,ancho,height);
  
  if (z==0) {
    monoSynth.play(note[a]);
    x=a;
  }
  if (z==1) {
    
    monoSynth.play(note[b]);
    x=b;
  } 
  if (z==2) {
    
    monoSynth.play(note[c]);
    x=c;
  } 
  if (z==3) {
    
    monoSynth.play(note[d]);
    x=d;
  }
  if (z==4) {
    
    monoSynth.play(note[e]);
    x=e;
  }
  if (z==5) {
    
    monoSynth.play(note[f]);
    x=f;
  }
  if (z==6) {
   
    monoSynth.play(note[g]);
    x=g;
  }
  if (z==7) {

    monoSynth.play(note[h]);
    x=h;
  }
  if (z==8) {
  
    monoSynth.play(note[i]);
    x=i;
  }
  if (z==9) {
    
    monoSynth.play(note[g]);
    x=j;
  }
  if (z==10) {
    
    monoSynth.play(note[k]);
    x=k;
  }
  if (z==11) {
   
   monoSynth.play(note[l]);
    x=l;
  }

  fill(red1,green1,blue1);
  r=100+x*15;
  rect(z*ancho, h1+h2,ancho, r);
  rect(z*ancho, h1, ancho, -r);
  
}
