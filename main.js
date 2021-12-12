mustacheX=0;
mustacheY=0;

function preload(){
    Mustache = loadImage('https://i.postimg.cc/XqpYT6pP/mustache-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    v = createCapture(VIDEO);
    v.size(300, 300);
    v.hide();

    poseNet = ml5.poseNet(v, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x - 15;
        mustacheY = results[0].pose.nose.y - 5;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}

function draw(){
image(v, 0, 0, 300, 300);
image(Mustache, mustacheX, mustacheY, 35, 35);
}

function take_snapshot(){
    save('myFilterImage.png');
}