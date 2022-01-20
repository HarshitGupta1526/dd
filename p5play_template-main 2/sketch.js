var box;

function setup(){
  creatcanvas(400,400);

box = creatsprite(200,200,30,30)
}

function draw()

if(keyisdown(right_arrow)){
background ("red");
}
if(keyisdown(lift_arrow)){
background ("blue");
}
if(keyisdown(dwon_arrow)){
background ("Yellow");
}
if(keyisdown(up_arrow)){
background ("pink");
}
drawsprite();
