// id = "canvLine"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvLine",
                                   {axisY: {minimum: 0, maximum: 1, gridThickness: 0, tickThickness: 0,
                                            labelFontColor: "#FFFFFF"},
                                    axisX: {minimum: 0, maximum: 10, gridLength:0},
                                    height: 50, width: 600,
                                    data: [{type: "line"}]});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvPlane"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvPlane",
                                   {axisY: {interval: 2, minimum: 0, maximum: 10, gridThickness: 0},
                                    axisX: {interval: 2, minimum: 0, maximum: 10},
                                    height: 300, width: 300,
                                    data: [{type: "line"}]});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id ="canvPlaneKL"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvPlaneKL",
                                   {axisY: {interval: 2, minimum: 0, maximum: 10, gridThickness: 0},
                                    axisX: {interval: 2, minimum: 0, maximum: 10},
                                    height: 300, width: 300,
                                    data: [{type: "line", dataPoints:[{x: 3, y: 4}]}],});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


function drawLine(data, fromx, fromy, tox, toy, lineColor = "#000000") {
  let angle = Math.atan2(toy - fromy, tox - fromx);
  data.push({type: "line",
             dataPoints: [{x: fromx, y: fromy}, {x: tox, y: toy},],
             markerType: "none",
             lineColor: lineColor});
}

function drawArrow(data, fromx, fromy, tox, toy, lineColor = "#000000", headlen = 0.5, scale = [1, 1]) {
  let angle = Math.atan2(toy - fromy, tox - fromx);
  let headAngle = Math.PI / 6.0;
  drawLine(data, fromx, fromy, tox, toy, lineColor);
  drawLine(data, tox, toy,
           tox - headlen * scale[0] * Math.cos(angle - headAngle),
           toy - headlen * scale[1] * Math.sin(angle - headAngle), lineColor);
  drawLine(data, tox, toy,
           tox - headlen * scale[0] * Math.cos(angle + headAngle),
           toy - headlen * scale[1] * Math.sin(angle + headAngle), lineColor);
}


// id = "canvPlaneMap"
{
  let canvFunc = function() {
    let data = [{type: "line", dataPoints: [{x: 3, y: 4}]}]
    drawArrow(data, 3, 4, 0, 1);
    let chart = new CanvasJS.Chart("canvPlaneMap",
                                   {axisY: {interval: 2, minimum:0, maximum:10, gridThickness:0},
                                    axisX: {interval: 2, minimum:0, maximum:10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvPL"
{
  let canvFunc = function() {
    let dataPoints = [];
    for (let ix = 1; ix < 10; ix += 1) { dataPoints.push({x: ix, y: ix + 1}); }
    let data = [{type: "line", dataPoints: dataPoints}];
    drawArrow(data, 9, 10, 0, 1);
    let chart = new CanvasJS.Chart("canvPL",
                                   {axisY: {interval: 2, minimum:0, maximum:10, gridThickness:0},
                                    axisX: {interval: 2, minimum:0, maximum:10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvBreak"
{
  let canvFunc = function() {
    let data = [];
    for(let ib = -10; ib <= 10; ++ib) {
      let dataPoints = [];
      for (let ix = 0; ix <= 10; ++ix) {
        let iy = ix + ib;
        if(0 <= iy && iy <= 10) { dataPoints.push({x: ix, y: iy}); }
      }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvBreak",
                                   {axisY: {interval: 2, minimum:0, maximum:10, gridThickness:0},
                                    axisX: {interval: 2, minimum:0, maximum:10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvBreak2"
{
  let canvFunc = function() {
    let data = [];
    for(let ib = -10; ib <= 10; ++ib) {
      let dataPoints = [];
      for (let ix = 0; ix <= 10; ++ix) {
        let iy = ix + ib;
        if(0 <= iy && iy <= 10) { dataPoints.push({x: ix, y: iy}); }
      }
      data.push({type: "scatter", dataPoints: dataPoints});
    }
    for(let ib = -10; ib <= 10; ++ib) {
      let dataPoints = [];
      for (let ix = 0; ix <= 10; ix += 0.5) {
        let iy = ix + ib - 0.5;
        if(0 <= iy && iy <= 10) { dataPoints.push({x: ix, y: iy}); }
      }
      data.push({type: "line", markerType: "none", color: "grey", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvBreak2",
                                   {axisY: {interval: 2, minimum:0, maximum:10, gridThickness:0},
                                    axisX: {interval: 2, minimum:0, maximum:10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvBreakQ"
{
  let canvFunc = function() {
    let data = [];
    for(let ib = -10; ib <= 10; ++ib) {
      let dataPoints = [];
      for (let ix = 0; ix <= 10; ++ix) {
        let iy = ix + ib;
        if(0 <= iy && iy <= 10) { dataPoints.push({x: ix, y: iy}); }
      }
      data.push({type: "scatter", dataPoints: dataPoints});
    }
    for(let ib = -10; ib <= 10; ++ib) {
      let dataPoints = [];
      for (let ix = 0; ix <= 10; ix += 0.5) {
        let iy = ix + ib - 0.5;
        if(0 <= iy && iy <= 10) { dataPoints.push({x: ix, y: iy}); }
      }
      data.push({type: "line", markerType: "none", color: "grey", dataPoints: dataPoints});
    }
    drawArrow(data, 5, 5, 0.5, 9.5);
    drawArrow(data, 5, 5, 9.5, 0.5);
    let chart = new CanvasJS.Chart("canvBreakQ",
                                   {axisY: {interval: 2, minimum: 0, maximum: 10, gridThickness: 0},
                                    axisX: {interval: 2, minimum: 0, maximum: 10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvZ"
{
  let canvFunc = function() {
    let data = [{type: "line"}];
    drawArrow(data, 0, 0.5, -10, 0.5, "#000000", 0.7, [1, 5]);
    drawArrow(data, 0, 0.5,  10, 0.5, "#000000", 0.7, [1, 5]);
    let chart = new CanvasJS.Chart("canvZ",
                                   {axisY: {minimum: -5, maximum: 5, gridThickness: 0, tickThickness: 0,
                                            labelFontColor: "#FFFFFF"},
                                    axisX: {minimum: -10, maximum: 10, gridLength: 0, interval: 2},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvEli"
{
  let canvFunc = function() {
    let canv = document.getElementById("canvEli");
    let ctx = canv.getContext("2d");
    ctx.ellipse(100, 100, 100, 45, 0, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.font = "italic 30px Ariel";
    ctx.fillText("A", 10, 50,50);
    ctx.font = "italic 20px Ariel";
    ctx.fillText("x", 80, 90,50);
    ctx.beginPath();
    ctx.arc(90, 95, 1.5, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 74);
    ctx.lineTo(20, 128);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(50, 61);
    ctx.lineTo(50, 139);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(110, 54);
    ctx.lineTo(110, 146);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(175, 69);
    ctx.lineTo(175, 131);
    ctx.stroke();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvZPlus"
{
  let canvFunc = function() {
    let data = [{type: "line", dataPoints: [{x: 0, y: 3}]},
                {type: "line", dataPoints: [{x: 6, y: 0}]}];
    drawArrow(data, 0, 3, 6, 3);
    drawArrow(data, 6, 0, 6, 3);
    drawArrow(data, 6, 3, 3, 0, "#FF00FF");
    let chart = new CanvasJS.Chart("canvZPlus",
                                   {axisY: {interval: 2, minimum: 0, maximum: 10, gridThickness: 0},
                                    axisX: {interval: 2, minimum: 0, maximum: 10},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvZProd"
{
  let canvFunc = function() {
    let data = [{type: "line", dataPoints: [{x: 1, y: 3}]},
                {type: "line", markerType: "none", lineDashType: "dash", lineColor: "grey",
                 dataPoints: [{x: 0, y: 0}, {x: 14, y: 14}]}];
    drawArrow(data, 0, 0, 1, 3);
    drawArrow(data, 1, 3, 4, 12);
    drawArrow(data, 0, 0, 3, 1, "#55AA55");
    drawArrow(data, 4, 12, 7, 13, "#55AA55");
    drawArrow(data, 7, 13, 0, 6, "#FF00FF");
    let chart = new CanvasJS.Chart("canvZProd",
                                   {axisY:{interval: 2, minimum: 0, maximum: 14, gridThickness: 0},
                                    axisX:{interval: 2, minimum: 0, maximum: 14},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvQQ"
{
  let canvFunc = function() {
    let data = [];
    let xmin =-15;
    let xmax = 15;
    let M = 15;
    for(let i = 0; i < M; i += 1) {
      let a = Math.tan(i * Math.PI / M)
      data.push({type: "line", dataPoints: [{x: xmin, y:a * xmin}, {x:xmax, y:a * xmax}]});
    }
    let chart = new CanvasJS.Chart("canvQQ",
                                   {axisY:{interval: 2, minimum: xmin + 1, maximum: xmax - 1, gridThickness: 0,
                                           labelFormatter: function(e) { return (e.value == 0 ? "0" : ""); },
                                           tickLength: 0,
                                           stripLines: [{value: 0, thickness: 1, color: "grey"}]},
                                    axisX:{interval: 2, minimum: xmin + 1, maximum: xmax - 1,
                                           labelFormatter: function(e) { return (e.value == 0 ? "0" : ""); },
                                           tickLength: 0,
                                           stripLines: [{value: 0, thickness: 1, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// rho_n
var an = [{x: 0, y: 1},];
for(let i = 1; i < 15; ++i) {
  let x0 = an[an.length - 1].x;
  let y0 = an[an.length - 1].y
  let x1 = x0 + 1;
  let y1 = 1.0 + 1.0 / (1.0 + y0);
  an.push({x: x1, y: y1});
}

var canvSqr2Timer;
var canvSqr2XBegin = 0;

// id = "canvSqr2"
var sqr2Func = function() {
  let dataPoints = [];
  let anDataPoints = [];
  let delta = 1.0 / 10.0;
  let xRange = 3;
  let xMin = canvSqr2XBegin;
  let xMax = xMin + xRange;
  let yMin = 10;
  let yMax = 0;
  for(let n = Math.floor(xMin); n < Math.ceil(xMax); ++n) {
    if(an.length < n) { continue; }
    for(let x = n; x < n + 1; x += delta) {
      if(x <= xMin || xMax <= x) { continue; }
      anDataPoints.push(an[n]);
      let y = an[n].y + (x - n) * (an[n + 1].y - an[n].y);
      dataPoints.push({x: x, y:y});
      if(y < yMin) { yMin = y; }
      if(y > yMax) { yMax = y; }
    }
  }
  let sqrt2 = Math.sqrt(2.0);
  let yRangeHalf = Math.max(yMax - sqrt2, sqrt2 - yMin);
  let yMax1 = sqrt2 + yRangeHalf;
  let yMin1 = sqrt2 - yRangeHalf;
  let chart = new CanvasJS.Chart("canvSqr2",
                                 {axisY: {includeZero: false, gridThickness: 0, minimum: yMin1, maximum: yMax1,
                                          stripLines: [{value:sqrt2, lineThickness: 0, color: "magenta"}]},
                                  axisX: {minimum: xMin, interval: 1},
                                  height: 300, width: 300,
                                  data: [{type: "line", dataPoints: dataPoints},
                                         {type: "scatter", dataPoints: anDataPoints}]});
  chart.render();
}
window.addEventListener("load", sqr2Func, false);

// id = "canvSqr2s"
var sqr2sFunc = function() {
  let dataPoints = [];
  let anDataPoints = [];
  let delta = 1.0 / 10.0;
  let xRange = 3;
  let xMin = canvSqr2XBegin;
  let xMax = xMin + xRange;
  let yMin = 10;
  let yMax = 0;
  for(let n = Math.floor(xMin); n < Math.ceil(xMax); ++n) {
    if(an.length < n) { continue; }
    for(let x = n; x < n + 1; x += delta) {
      if(x <= xMin || xMax <= x) { continue; }
      anDataPoints.push(an[n]);
      let y = an[n].y + (x - n) * (an[n + 1].y - an[n].y);
      dataPoints.push({x: x, y:y});
      if(y < yMin) { yMin = y; }
      if(y > yMax) { yMax = y; }
    }
  }
  let sqrt2 = Math.sqrt(2.0);
  let yRangeHalf = Math.max(yMax - sqrt2, sqrt2 - yMin);
  let yMax1 = sqrt2 + yRangeHalf;
  let yMin1 = sqrt2 - yRangeHalf;
  let chart = new CanvasJS.Chart("canvSqr2s",
                                 {axisY: {includeZero: false, gridThickness: 0, minimum: yMin1, maximum: yMax1,
                                          stripLines: [{value: sqrt2, lineThickness: 0, color: "magenta"},
                                                       {value: 1.414, lineThickness: 0}]},
                                  axisX: {minimum: xMin, interval: 1},
                                  height: 300, width: 300,
                                  data: [{type: "line", dataPoints: dataPoints},
                                         {type: "scatter", dataPoints: anDataPoints}]});
  chart.render();
}
window.addEventListener("load", sqr2sFunc, false);


var updateCanvSqr2 = function() {
  let canvSqr2ZoomShift = 1.0;
  let canvSqr2Counter = 0;
  let canvSqr2XBeginDelta = 0.05;
  clearInterval(canvSqr2Timer);
  canvSqr2Timer = setInterval(function() {
    canvSqr2XBegin += canvSqr2XBeginDelta;
    sqr2Func();
    sqr2sFunc();
    canvSqr2Counter++;
    if(canvSqr2Counter > canvSqr2ZoomShift / canvSqr2XBeginDelta) { clearInterval(canvSqr2Timer); }}, 50);
}


// id = "canvQinf"
{
  let canvFunc = function() {
    let data = [];
    let M = 15;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: Math.random()}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: Math.sin(i * 0.2)}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: (i * i + 2.0 * i) / (M * M + 2.0 * M)}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: 1.2}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: 0.2}); }
      dataPoints[6].y = 1.3;
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvQinf",
                                   {axisY: {gridThickness: 0, tickLength: 0,
                                            labelFormatter: function(e) { return (e.value == 0 ? "" : ""); }},
                                    axisX: {labelFormatter: function(e) { return (e.value == 0 ? "" : ""); },
                                            tickLength: 0,},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvDiver"
{
  let canvFunc = function() {
    let data = [];
    let M = 15;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y:i / M + Math.random() * 0.3}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y:2.0 * Math.sin(i * 2.0) - 3.}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y:(-Math.exp(i * i/ (3 * M)) - 1 * i - 1) / (M + 1)}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvDiver",
                                   {axisY: {gridThickness: 0, tickLength: 0,
                                            labelFormatter: function(e) { return (e.value == 0 ? "" : ""); }},
                                    axisX: {labelFormatter: function(e) { return (e.value == 0 ? "" : ""); },
                                            tickLength: 0,},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = canvCauchy
{
  let canvFunc = function() {
    let data = [];
    let M = 25;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x:i, y: (Math.random() - 0.5) / (i * i + 20) + 3.0}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvCauchy",
                                   {axisY: {includeZero: false, minimum: 2.97, maximum: 3.03,
                                            stripLines: [{startValue: 2.997, endValue: 3.003}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = canvConv
{
  let canvFunc = function() {
    let data = [];
    let M = 25;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: (Math.sin((Math.random() - 0.5) * 3.14)) / (i * i + 20) + 1.0}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvConv",
                                   {axisY: {includeZero: false, minimum: 0.97, maximum: 1.03,
                                            stripLines: [{value: 1.0},]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = canvConv2Cauchy
{
  let canvFunc = function() {
    let data = [];
    let M = 25;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: (Math.cos((Math.random() - 0.5) * 2.0 * Math.PI)) / (i * i + 20) + 1.0}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvConv2Cauchy",
                                   {axisY: {includeZero: false, minimum: 0.97, maximum: 1.03,
                                            stripLines :[{startValue: 0.995, endValue: 1.005, opacity: 0.5},
                                                         {value: 1.0}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvRn"
var rn = [];
for(let i = 0; i < 15; ++i) { rn.push({x: i, y: 1.0 / (i * i + 1.0)}); }
var canvRnTimer;
var canvRnXBegin = 0;
var rnFunc = function() {
  let dataPoints = [];
  let rnDataPoints = [];
  let delta = 1.0 / 10.0;
  let xRange = 3;
  let xMin = canvRnXBegin;
  let xMax = xMin + xRange;
  let yMin = 10;
  let yMax = 0;
  for(let n = Math.floor(xMin); n < Math.ceil(xMax); ++n) {
    if(rn.length < n) { continue; }
    for(let x = n; x < n + 1; x += delta) {
      if(x <= xMin || xMax <= x) { continue; }
      rnDataPoints.push(rn[n]);
      let y = rn[n].y + (x - n) * (rn[n + 1].y - rn[n].y);
      dataPoints.push({x: x, y:y});
      if(y < yMin) { yMin = y; }
      if(y > yMax) { yMax = y; }
    }
  }
  let yMax1 = yMax;
  let yMin1 = 0;
  let chart = new CanvasJS.Chart("canvRn",
                                 {axisY: {includeZero: true, gridThickness: 0, minimum: yMin1, maximum: yMax1,
                                          stripLines: [{value: 0.015}]},
                                  axisX: {minimum: xMin, interval: 1},
                                  height: 300, width: 300,
                                  data: [{type: "line", dataPoints : dataPoints},
                                         {type: "scatter", dataPoints: rnDataPoints}]});
  chart.render();
}
window.addEventListener("load", rnFunc, false);


var updateCanvRn = function() {
  let canvRnZoomShift = 1.0;
  let canvRnCounter = 0;
  let canvRnXBeginDelta = 0.05;
  clearInterval(canvRnTimer);
  canvRnTimer = setInterval(function() {
    canvRnXBegin += canvRnXBeginDelta;
    rnFunc();
    canvRnCounter++;
    if(canvRnCounter > canvRnZoomShift / canvRnXBeginDelta) { clearInterval(canvRnTimer); }}, 50);
}


// id = "canvPi"
var pn = [];
for(let i = 0; i < 20; ++i) {
  let sum = 0;
  let pow2 = 2.0;
  let pow3 = 3.0;
  //let pow5 = 5.0;
  //let pow239 = 239.0;
  for(let j = 0; j < i; ++j) {
    //sum += ((j % 2 == 0) ? 1.0 : -1.0) / (2.0 * j + 1.0);  // Leibniz
    //sum +=(4.0 / pow5 - 1.0 / pow239) * ((j % 2 == 0) ? 1.0 : -1.0) / (2.0 * j + 1.0) // Machin
    sum += (1.0 / pow2 + 1.0 / pow3) * ((j % 2 == 0) ? 1.0 : -1.0) / (2.0 * j + 1.0) // Euler
    pow2 *= 2.0 * 2.0;
    pow3 *= 3.0 * 3.0;
    //pow5 *= 5.0 * 5.0;
    //pow239 *= 239.0 * 239.0;
  }
  pn.push({x: i, y: sum * 4.0});
}
var canvPiTimer;
var canvPiXBegin = 0;
var piFunc = function() {
  let dataPoints = [];
  let pnDataPoints = [];
  let delta = 1.0 / 10.0;
  let xRange = 4;
  let xMin = canvPiXBegin;
  let xMax = xMin + xRange;
  let yMin = 10;
  let yMax = 0;
  for(let n = Math.floor(xMin); n < Math.ceil(xMax); ++n) {
    if(pn.length < n) { continue; }
    for(let x = n; x < n + 1; x += delta) {
      if(x <= xMin || xMax <= x) { continue; }
      pnDataPoints.push(pn[n]);
      let y = pn[n].y + (x - n) * (pn[n + 1].y - pn[n].y);
      dataPoints.push({x: x, y:y});
      if(y < yMin) { yMin = y; }
      if(y > yMax) { yMax = y; }
    }
  }
  let yRangeHalf = Math.max(yMax - Math.PI, Math.PI - yMin);
  let yMax1 = Math.PI + yRangeHalf;
  let yMin1 = Math.PI - yRangeHalf;
  let chart = new CanvasJS.Chart("canvPi",
                                 {axisY: {includeZero: false, gridThickness: 0, minimum: yMin1, maximum: yMax1,
                                          stripLines: [{value: Math.PI, lineThickness: 0, color: "magenta"},
                                                       {value: 3.141592, lineThickness: 0}]},
                                  axisX: {minimum: xMin, interval: 1},
                                  height: 300, width: 300,
                                  data: [{type: "line", dataPoints: dataPoints},
                                         {type: "scatter", dataPoints: pnDataPoints}]});
  chart.render();
}
window.addEventListener("load", piFunc, false);

var canvPiZoomShift = 1.0;
var updateCanvPi = function() {
  let canvPiXBeginDelta = 0.05;
  let canvPiCounter = 0;
  clearInterval(canvPiTimer);
  canvPiTimer = setInterval(function() {
    canvPiXBegin += canvPiXBeginDelta;
    piFunc();
    canvPiCounter++;
    if(canvPiCounter > canvPiZoomShift / canvPiXBeginDelta) { clearInterval(canvPiTimer); }}, 50);
}


// id = "canvSimc"
{
  let canvFunc = function() {
    let data = [];
    let M = 35;
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: (Math.random() - 0.5) / (i * i + 20) + 3.0}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    {
      let dataPoints = [];
      for(let i = 0; i < M; ++i) { dataPoints.push({x: i, y: (Math.sin(i * 3.14 * 2.0) - 0.5) / (1.5 * i * i + 2) + 3.0}); }
      data.push({type: "line", dataPoints: dataPoints});
    }
    let chart = new CanvasJS.Chart("canvSimc",
                                   {axisY: {includeZero: false, minimum: 2.97, maximum: 3.03,
                                            stripLines: [{startValue: 2.997, endValue: 3.003}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvSegms"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvSegms",
                                   {axisY: {minimum: 0, maximum: 4, gridThickness: 0, tickThickness: 0, interval: 1,
                                            labelFontSize: 30,
                                            labelFormatter: function(e) { return (e.value == 1 ? "A" : e.value == 2 ? "B" : ""); }},
                                    axisX: {minimum: 0, maximum: 6, gridLength: 0},
                                    height: 200, width: 600,
                                    data: [{type: "line", dataPoints: [{x: 1, y: 1}, {x: 5, y: 1}]},
                                           {type: "line", dataPoints: [{x: 1, y: 2}, {x: 3, y: 2}], color: "red"},
                                           {type: "line", dataPoints: [{x: 4, y: 2}, {x: 5, y: 2}], color: "red"}]});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvSegms2"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvSegms2",
                                   {axisY: {minimum: 0, maximum: 4, gridThickness: 0, tickThickness: 0, interval: 1,
                                            labelFontSize: 30,
                                            labelFormatter: function(e) { return (e.value == 1 ? "A" : e.value == 2 ? "B" : ""); }},
                                    axisX: {minimum: 0, maximum: 6, gridLength: 0},
                                    height: 200, width: 600,
                                    data: [{type: "line", dataPoints: [{x: 1, y: 1}, {x: 5, y: 1}]},
                                           {type: "line", dataPoints: [{x: 1, y: 2}, {x: 3, y: 2}], color: "red"},
                                           {type: "line", dataPoints: [{x: 4, y: 2}, {x: 5, y: 2}], color: "red"}]});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvSegms3"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvSegms3",
                                   {axisY: {minimum: 0, maximum: 4, gridThickness: 0, tickThickness: 0, interval: 1,
                                            labelFontSize: 30,
                                            labelFormatter: function(e) { return (e.value == 1 ? "A" : e.value == 2 ? "B" : ""); }},
                                    axisX: {minimum: 0, maximum: 6, gridLength: 0},
                                    height: 200, width: 600,
                                    data: [{type: "line", dataPoints: [{x: 1, y: 1}, {x: 5, y: 1}]},
                                           {type: "line", dataPoints: [{x: 1, y: 2}, {x: 3, y: 2}], color: "red"},
                                           {type: "line", dataPoints: [{x: 4, y: 2}, {x: 5, y: 2}], color: "red"}]});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvCont"
{
  let canvFunc = function() {
    let f = function(x) { return 3.0 + x + 0.15 * x * x; };
    let finv = function(y) { return 2.0 / 3.0 * (Math.sqrt(5.0) * Math.sqrt(3.0 * y - 4.0) - 5.0); }
    let data = [];
    let M = 10;
    {
      let dataPoints = [];
      let deltaX = 0.01
      for(let x = 0; x < M; x += deltaX) {
        dataPoints.push({x: x, y: f(x)});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "blue"});
    }
    drawLine(data, 0, 10.0, finv(10.0), 10.0);
    drawLine(data, 0, 20.0, finv(20.0), 20.0);
    drawLine(data, finv(10.0), 10.0, finv(10.0), 0);
    drawLine(data, finv(20.0), 20.0, finv(20.0), 0);
    let chart = new CanvasJS.Chart("canvCont",
                                   {axisY: {gridThickness: 0, minimum: 0, maximum: 30,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: 0, maximum: M, interval: 5,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvCont1"
{
  let canvFunc = function() {
    let data = [];
    let M = 5;
    {
      let dataPoints = [];
      let deltaX = 0.01
      for(let x = 0.01; x < M; x += deltaX) {
        dataPoints.push({x: x, y: 1/x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "blue"});
    }
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = -M; x < 0; x += deltaX) {
        dataPoints.push({x: x, y: x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "blue"});
    }
    drawLine(data, 0, -1.0, -1.0, -1.0);
    drawLine(data, 0,  1.0,  1.0,  1.0);
    drawLine(data, 1.0, 1.0, M, 1.0, "#ccccff");
    drawLine(data, -1.0, -1.0, -1.0, 0);
    //drawLine(data,  1.0,  1.0,  1.0, 0);
    let chart = new CanvasJS.Chart("canvCont1",
                                   {axisY: {gridThickness: 0, minimum: -M, maximum: M,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -M, maximum: M, interval: 5,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvCont2"
{
  let canvFunc = function() {
    let data = [];
    let M = 5;
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = -M; x < M; x += deltaX) {
        dataPoints.push({x: x, y: x * x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none"});
    }
    let chart = new CanvasJS.Chart("canvCont2",
                                   {axisY: {gridThickness: 0, minimum: -5, maximum: 25,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvS1"
{
  let canvFunc = function() {
    let data = [];
    let M = 5;
    {
      let dataPoints = [];
      let deltaX = 0.01
      for(let x = 0; x < 2.0 * Math.PI; x += deltaX) {
        dataPoints.push({x: Math.sin(x), y: Math.cos(x)});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none"});
    }
    let chart = new CanvasJS.Chart("canvS1",
                                   {axisY: {gridThickness: 0, minimum: -1.1, maximum: 1.1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -1.1, maximum: 1.1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvXY"
{
  let canvFunc = function() {
    let data = [];
    {
      let dataPoints = [];
      let deltaX = 0.01
      for(let x = -1; x <= 1; x += deltaX) {
        dataPoints.push({x: x, y: 0});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "blue"});
    }
    {
      let dataPoints = [];
      let deltaX = 0.01
      for(let x = -1; x <= 1; x += deltaX) {
        dataPoints.push({x: 0, y: x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "blue"});
    }
    let chart = new CanvasJS.Chart("canvXY",
                                   {axisY: {gridThickness: 0, minimum: -1, maximum: 1, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -1, maximum: 1, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvVecScale"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    drawArrow(data, 0, 0, 3, 4);
    let chart = new CanvasJS.Chart("canvVecScale",
                                   {axisY: {gridThickness: 0, minimum: 0, maximum: 5, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: 0, maximum: 5, interval: 1,
                                           stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvVecScale1"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    drawArrow(data, 0, 0, 6, 8, "#000000", 1.0);
    let chart = new CanvasJS.Chart("canvVecScale1",
                                   {axisY: {gridThickness: 0, minimum: 0, maximum: 10, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: 0, maximum: 10, interval: 1,
                                           stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 300,
                                    data: data,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvVec"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    drawArrow(data, 0, 0, 3, 4);
    let chart = new CanvasJS.Chart("canvVec",
                                   {axisY: {gridThickness: 0, minimum: 0, maximum: 5, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -5, maximum: 5, interval: 1,
                                           stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 600,
                                    data: data,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

// id = "canvVec1"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    drawArrow(data, 0, 0, 3, 4);
    drawLine(data, 0, 0, 5, 5);
    drawLine(data, 0, 0, 5, 5, "grey");
    drawLine(data, 0, 0, 5, 5, "grey");
    drawLine(data, 0, 0, -5, 5, "grey");
    let chart = new CanvasJS.Chart("canvVec1",
                                   {axisY: {gridThickness: 0, minimum: 0, maximum: 5, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -5, maximum: 5, interval: 1,
                                            stripLines: [{value: 0, color: "grey"}]},
                                    height: 300, width: 600,
                                    data: data,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}

var dataF = [];
{
  let dataPoints = [];
  let deltaX = 0.1
  for(let x = 0; x < 2.0 * Math.PI; x += deltaX) {
    dataPoints.push({x: 1.2 * Math.sin(x), y: Math.cos(x)});
  }
  dataF.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#000080"});
}
{
  let dataPoints = [];
  let deltaX = 0.1
  for(let x = 0; x < 2.0 * Math.PI; x += deltaX) {
    dataPoints.push({x: 0.96 * Math.sin(x), y: 0.8 * Math.cos(x)});
  }
  dataF.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#008080"});
}
{
  let dataPoints = [];
  let deltaX = 0.1
  for(let x = 0; x < 2.0 * Math.PI; x += deltaX) {
    dataPoints.push({x: 0.6 * Math.sin(x), y: 0.5 * Math.cos(x)});
  }
  dataF.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF1493"});
}
{
  let dataPoints = [];
  let deltaX = 0.1
  for(let x = 0; x < 2.0 * Math.PI; x += deltaX) {
    dataPoints.push({x: 0.3 * Math.sin(x), y: 0.2 * Math.cos(x)});
  }
  dataF.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
}
drawArrow(dataF, -0.75, -0.75, -0.32, -0.32, "#000000", 0.2);

// id = "canvF"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvF",
                                   {axisY: {gridThickness: 0, minimum: -2, maximum: 2, labelFontColor:"#FFFFFF",
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -2, maximum: 2, stripLines: [{value: 0, color: "grey"}], interval: 10},
                                    height: 300, width: 300,
                                    data: dataF,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}
// id = "canvF1"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvF1",
                                   {axisY: {gridThickness: 0, minimum: -2, maximum: 2, labelFontColor:"#FFFFFF",
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -2, maximum: 2, stripLines: [{value: 0, color: "grey"}], interval: 10},
                                    height: 200, width: 200,
                                    data: dataF,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}
// id = "canvF2"
{
  let canvFunc = function() {
    let chart = new CanvasJS.Chart("canvF2",
                                   {axisY: {gridThickness: 0, minimum: -2, maximum: 2, labelFontColor:"#FFFFFF",
                                            stripLines: [{value: 0, color: "grey"}]},
                                    axisX: {minimum: -2, maximum: 2, stripLines: [{value: 0, color: "grey"}], interval: 10},
                                    height: 200, width: 200,
                                    data: dataF,});
    chart.render();
  }
  window.addEventListener("load", canvFunc, false);
}


// id = "canvCt"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    drawArrow(data, 0, 0, 5, 0);
    let chart = new CanvasJS.Chart("canvCt",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1, maximum: 6, gridLength: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return (e.value == 0) ? "c(t) = p" : e.value == 5 ? "c(t+ Δt)" : ""; }, labelFontSize: 16},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvCt5"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=1;
    drawArrow(data, 0, 0, 5 * scale, 0);
    let chart = new CanvasJS.Chart("canvCt5",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 1},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvCt3cm"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=1;
    drawArrow(data, 0, 0, 3 * scale, 0);
    let chart = new CanvasJS.Chart("canvCt3cm",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 1,
                                            labelFormatter: function(e) { return e.value + "cm"; }},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvCt5cm"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=1;
    drawArrow(data, 0, 0, 5 * scale, 0,);
    let chart = new CanvasJS.Chart("canvCt5cm",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 1,
                                            labelFormatter: function(e) { return e.value + "cm"; }},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvCt5cm_mm"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=10;
    drawArrow(data, 0, 0, 5 * scale, 0, "#000000", 0.5, [scale, 1]);
    let chart = new CanvasJS.Chart("canvCt5cm_mm",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 10,
                                            labelFormatter: function(e) { return e.value + "mm"; }},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvCt5cm_sun"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=33.0/100.0;
    drawArrow(data, 0, 0, 5 * scale, 0, "#000000", 0.5, [scale, 1]);
    let chart = new CanvasJS.Chart("canvCt5cm_sun",
                                   {axisY: {minimum: -2, maximum: 2, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return ""; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 1,
                                            labelFormatter: function(e) { return e.value + "寸"; }},
                                    height: 60, width: 600,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}


// id = "canvMF"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=1;
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = -1 * scale; x <= 6 * scale; x += deltaX) {
        dataPoints.push({x: x, y: 2 * x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
    }
    drawArrow(data, 0, 0.5, 5 * scale, 0.5, "#000000", 0.5, [scale, 1]);
    let chart = new CanvasJS.Chart("canvMF",
                                   {axisY: {minimum: 0, maximum: 10, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return e.value + "℃"; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 1,
                                            labelFormatter: function(e) { return e.value + "cm"; }},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvMFmm"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let scale=10;
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = -1 * scale; x <= 6 * scale; x += deltaX) {
        dataPoints.push({x: x, y: 2 * x / scale});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
    }
    drawArrow(data, 0, 0.5, 5 * scale, 0.5, "#000000", 0.5, [scale, 1]);
    let chart = new CanvasJS.Chart("canvMFmm",
                                   {axisY: {minimum: 0, maximum: 10, gridThickness: 0, tickThickness: 0,
                                            labelFormatter: function(e) { return e.value + "℃"; }},
                                    axisX: {minimum: -1 * scale, maximum: 6 * scale, gridLength: 0, interval: 10,
                                            labelFormatter: function(e) { return e.value + "mm"; }},
                                    height: 300, width: 300,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}


// id = "canvFa1"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let a = 1.0
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = 0; x <= 10; x += deltaX) {
        dataPoints.push({x: x, y: a * x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
    }
    let chart = new CanvasJS.Chart("canvFa1",
                                   {axisY: {minimum: 0, maximum: 10, gridThickness: 0, tickThickness: 0},
                                    axisX: {minimum: 0, maximum: 10, gridLength: 0, interval: 2},
                                    height: 100, width: 100,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvFa2"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let a = 2.0
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = 0; x <= 10; x += deltaX) {
        dataPoints.push({x: x, y: a * x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
    }
    let chart = new CanvasJS.Chart("canvFa2",
                                   {axisY: {minimum: 0, maximum: 10, gridThickness: 0, tickThickness: 0},
                                    axisX: {minimum: 0, maximum: 10, gridLength: 0, interval: 2},
                                    height: 100, width: 100,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
// id = "canvFa3"
{
  let canvFunc = function() {
    let data = [{type:"line"}];
    let a = 3.0
    {
      let dataPoints = [];
      let deltaX = 0.1
      for(let x = 0; x <= 10; x += deltaX) {
        dataPoints.push({x: x, y: a * x});
      }
      data.push({type: "line", dataPoints: dataPoints, markerType: "none", color: "#FF0000"});
    }
    let chart = new CanvasJS.Chart("canvFa3",
                                   {axisY: {minimum: 0, maximum: 10, gridThickness: 0, tickThickness: 0},
                                    axisX: {minimum: 0, maximum: 10, gridLength: 0, interval: 2},
                                    height: 100, width: 100,
                                    data: data});
    chart.render();}
  window.addEventListener("load", canvFunc, false);
}
