const img = document.getElementById('img');
const input = document.getElementById('image_file');
const result = document.getElementById('prediction');


let model;
$('#image_file').change(function() {
    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
        img.onload = () => {
            doPrediction();
        };
        img.src = reader.result;
        // result.innerText = "Loading...";
       
    };

    if (file) {
        reader.readAsDataURL(file);
    }
})


function doPrediction() {
    if (model) {
        model.classify(img).then(predictions => {
            showPrediction(predictions);
        });
    } else {
        mobilenet.load().then(_model => {
            model = _model;
            model.classify(img).then(predictions => {
                showPrediction(predictions);
            });
        });
    }
}

async function showPrediction(predictions) {
    
    $('.ocrloader').removeClass('active');
    let nama = predictions[0].className;
    console.log(nama);
    let hasil = predictions[0].className + " " + predictions[0].probability.toFixed(2);
    // result.innerText = "Hasil : " + hasil;

    window.ReactNativeWebView.postMessage(nama);

}