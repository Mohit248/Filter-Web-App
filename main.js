noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(330,300);
    video.hide();
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache,noseX,noseY,60,40)
}

function takeSnapshot(){
    save('my_Filter_Image.png');
}

function modelLoaded(){
    console.log("PoseNet is Intiated");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-45;
        noseY = results[0].pose.nose.y+2;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}