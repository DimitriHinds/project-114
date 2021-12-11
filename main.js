function preload(){
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
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
image(v, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}