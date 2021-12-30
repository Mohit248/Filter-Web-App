function preload(){

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
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}