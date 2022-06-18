function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classify = ml5.sound.classifier('https://teachablemachine.withgoogle.com/models/qkXKxUCMj/model.json', modelLoaded)
}

function modelLoaded() {
    Classifier.classify();
    console.log('Model Loaded Successfully');
}

function gotResult(error, results){
    console.log('gotResult')
}
