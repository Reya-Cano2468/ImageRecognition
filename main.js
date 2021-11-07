

function setup() {

    canvas = createCanvas(640, 480);
    canvas.position(400, 100);
    video = createCapture(VIDEO);
    video.hide();

    console.log('ml5 version', ml5.version)
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BOpsmdnoh/model.json', modelLoaded)


}



function draw() {
    image(video, 0, 0, 640, 480);
classifier.classify(video , gotResult);
}

function modelLoaded() {
    console.log('model is loaded')
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        document.getElementById("object").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2)
    }
}