
//const brain = require('brain.js');

const config = {
    iterations: 2000,
    binaryThresh: 0.5,
    hiddenLayers: [2],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid'  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

net.train(
    [
        //Knallig
        {input: arraySmaller([255,198,0]), output: arraySmaller([187,255,12, 232,216,12, 232,149,12, 255,116,14])},
        {input: arraySmaller([255, 155,0]),output: arraySmaller([255,234,13, 232,179,12, 232,100,12, 255,57,14])},
        {input: arraySmaller([255,89,0]),  output: arraySmaller([255,188,13, 232,137,12, 232,40,12, 255,14,91])},
        {input: arraySmaller([255,36,1]),  output: arraySmaller([255,153,12, 255,90,11, 232,11,73, 250,13,255])},
        {input: arraySmaller([255,0,112]), output: arraySmaller([255,89,12, 232,32,12, 209,12,232, 130,14,255])},
        {input: arraySmaller([220,0,255]), output: arraySmaller([255,31,13, 232,12,121, 111,12,232, 23,14,255])},
        {input: arraySmaller([102,0,255]), output: arraySmaller([255,13,156, 190,12,232, 12,15,232, 14,113, 255])},
        {input: arraySmaller([5,0,255]),   output: arraySmaller([217,13,255, 106,12,232, 12,95,232, 14,201,255])},
        {input: arraySmaller([0,79,255]),  output: arraySmaller([135,13,255, 32,12,232, 12,167,232, 14,255,228])},
        {input: arraySmaller([2,171,255]), output: arraySmaller([43,11,255, 10,71,232, 10,232,216, 12,255,134])},
        {input: arraySmaller([0,255,249]), output: arraySmaller([13,67,255, 12,149,232, 12,232,133, 14,255,44])},
        {input: arraySmaller([0,255,160]), output: arraySmaller([13,146,255, 12,220,232, 12,232,56, 81,255,14])},
        {input: arraySmaller([0,255,70]),  output: arraySmaller([13,226,255, 12,232,166, 53,232,12, 187,255,14])},
        {input: arraySmaller([81,255,0]),  output: arraySmaller([13,255,158, 12,232,49, 198,232,12, 255,229,14])},
        {input: arraySmaller([195,255,0]), output: arraySmaller([13,255,70, 64,232,12, 232,213,12, 255,198,14])},
        {input: arraySmaller([255,240,0]), output: arraySmaller([49,255,13, 161,232,12, 232,186,12, 255,167,14])},
        {input: arraySmaller([255,210,0]), output: arraySmaller([147,2255,13, 232,227,12, 232,160,12, 255,132,14])},

        //Mittel
        {input: arraySmaller([255,226,123]), output: arraySmaller([211,255,110, 232,224,100, 232,183,100, 255,172,109])},
        {input: arraySmaller([255,205,124]), output: arraySmaller([255,244,112, 232,202,102, 232,156,102, 255,138,110])},
        {input: arraySmaller([255,175,124]), output: arraySmaller([255,220,111, 232,180,101, 232,123,101, 255,110,135])},
        {input: arraySmaller([255,144,134]), output: arraySmaller([255,191,122, 232,147,111, 232,111,169, 238,120,255])},
        {input: arraySmaller([255,125,163]), output: arraySmaller([255,163,113, 232,120,102, 229,102,232, 192,111,255])},
        {input: arraySmaller([239,128,255]), output: arraySmaller([255,127,116, 232,105,166, 164,105,232, 121,114,255])},
        {input: arraySmaller([184,134,255]), output: arraySmaller([255,121,197, 211,110,232, 110,110,232, 120,173,255])},
        {input: arraySmaller([117,114,255]), output: arraySmaller([231,101,255, 153,92,232, 92,145,232, 100,220,255])},
        {input: arraySmaller([123,179,255]), output: arraySmaller([166,111,255, 101,104,232, 101,209,232, 109,255,220])},
        {input: arraySmaller([124,229,255]), output: arraySmaller([111,112,255, 101,154,232, 101,232,204, 110,255,161])},
        {input: arraySmaller([125,255,216]), output: arraySmaller([112,181,255, 102,216,232, 102,232,138, 138,255,111])},
        {input: arraySmaller([127,255,151]), output: arraySmaller([114,250,255, 104,232,182, 143,232,104, 231,255,113])},
        {input: arraySmaller([191,255,123]), output: arraySmaller([110,255,173, 101,232,102, 232,230,101, 255,231,109])},
        {input: arraySmaller([255,243,118]), output: arraySmaller([143,255,105, 203,232,95, 232,199,95, 255,195,104])},
    ]
);

var input = [];
//--------------------button values RGB----------------------
var button = document.getElementById("button");
button.addEventListener("click", function () {
    var r = document.getElementById("r-val").innerHTML;
    var g = document.getElementById("g-val").innerHTML;
    var b = document.getElementById("b-val").innerHTML;
    console.log(r + "-" + g + "-" + b);
    input[0]= r;
    input[1]= g;
    input[2]= b;
    updateColour(input);
});

//---------------------------------input------------------------
function updateColour(_in) {
    var output = net.run(arraySmaller(_in));

    var Color1 = document.getElementById("harmony1");
    Color1.style.backgroundColor = "rgb(" + bigNum(output[0]) + ", " + bigNum(output[1]) + ", " + bigNum(output[2]) + ")";

    var Color2 = document.getElementById("harmony2");
    Color2.style.backgroundColor = "rgb(" + bigNum(output[3]) + ", " + bigNum(output[4]) + ", " + bigNum(output[5]) + ")";

    var Color3 = document.getElementById("harmony3");
    Color3.style.backgroundColor = "rgb(" + bigNum(output[6]) + ", " + bigNum(output[7]) + ", " + bigNum(output[8]) + ")";

    var Color4 = document.getElementById("harmony4");
    Color4.style.backgroundColor = "rgb(" + bigNum(output[9]) + ", " + bigNum(output[10]) + ", " + bigNum(output[11]) + ")";
}

function bigNum(smallNum){
    return Math.round(smallNum*255);
}

function arraySmaller (_arr){
    for(var i = 0; i<_arr.length; i++){
        var smallArr= [];
        for(var i= 0; i<_arr.length;i++){
            smallArr.push(_arr[i]/255);
        }
        return smallArr;
    }
}


