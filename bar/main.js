let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "Lion";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "Taipei_Zoo";
trace1.x[1] = "Taoyuan_Xpark";
trace1.y[0] = animal_Taipei_Zoo[0]['count'];
trace1.y[1] = Taoyuan_Xpark[0]['count'];


let trace2 = {};
trace2.type = "bar";
trace2.name = "Tiger";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "Taipei_Zoo";
trace2.x[1] = "Taoyuan_Xpark";
trace2.y[0] = animal_Taipei_Zoo[1]['count'];
trace2.y[1] = Taoyuan_Xpark[1]['count'];


let trace3 = {};
trace3.type = "bar";
trace3.name = "Monkey";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "Taipei_Zoo";
trace3.x[1] = "Taoyuan_Xpark";
trace3.y[0] = animal_Taipei_Zoo[2]['count'];
trace3.y[1] = Taoyuan_Xpark[2]['count'];


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin: {
        t: 0
    },
    barmode: 'stack'
};


Plotly.newPlot(myGraph, data, layout);