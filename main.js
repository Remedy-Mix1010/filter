function preload(){

}
function setup(){
canvas = createCanvas(640,480);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 70, 80, 500, 300);
    stroke("black");
    fill("black");
    circle(20,20,10);
    circle(620,460,10);
    circle(620,20,10);
    circle(20,460,10);
}