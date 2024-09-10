// Function to render LaTeX equations
function renderEquation() {
    const equationInput = document.getElementById('equation-input').value;
    const equationOutput = document.getElementById('equation-output');
    
    // Clear previous output
    equationOutput.innerHTML = '';

    // Use MathJax to render LaTeX equations (you'll need to include MathJax in your HTML for this to work)
    MathJax.texReset();
    const options = MathJax.getMetricsFor(equationOutput);
    MathJax.tex2chtmlPromise(equationInput, options).then(function(node) {
        equationOutput.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
    }).catch(function (err) {
        equationOutput.innerHTML = '<p style="color:red;">Invalid equation. Please check your syntax.</p>';
    });
}

// Function to plot graphs using a graphing library (e.g., Plotly)
function plotGraph() {
    const functionInput = document.getElementById('function-input').value;

    // Generate x values from -10 to 10
    const xValues = [];
    for (let i = -10; i <= 10; i += 0.1) {
        xValues.push(i);
    }

    // Generate y values using the entered function
    let yValues;
    try {
        yValues = xValues.map(x => eval(functionInput.replace('^', '**')));
    } catch (error) {
        alert("Invalid function. Please check your input.");
        return;
    }

    // Plot the graph using Plotly (you'll need to include Plotly in your HTML for this to work)
    const trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
    };

    const data = [trace];

    const layout = {
        title: `Graph of ${functionInput}`,
        xaxis: { title: 'x' },
        yaxis: { title: 'y' }
    };

    Plotly.newPlot('graph', data, layout);
}
