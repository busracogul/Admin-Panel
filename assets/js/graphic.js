// 1.graphic
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "DDD",
            minimum: new Date(2017, 1, 5, 23),
            maximum: new Date(2017, 1, 12, 1)
        },
        axisY: {
            title: "",
            lineColor: "white",
            gridColor: "#8E8E93",
            gridDashType: "dash"
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
            dockInsidePlotArea: false
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                name: "Paris",
                showInLegend: true,
                legendMarkerType: "circle",
                type: "area",
                color: "#F4A26C",
                markerSize: 0,
                dataPoints: [
                    { x: new Date(2017, 1, 6), y: 320 },
                    { x: new Date(2017, 1, 7), y: 420 },
                    { x: new Date(2017, 1, 8), y: 244 },
                    { x: new Date(2017, 1, 9), y: 362 },
                    { x: new Date(2017, 1, 10), y: 129 },
                    { x: new Date(2017, 1, 11), y: 149 },
                    { x: new Date(2017, 1, 12), y: 259 }
                ]
            },
            {
                name: "Bangkok",
                showInLegend: true,
                legendMarkerType: "circle",
                type: "area",
                color: "#3FAEA3",
                markerSize: 0,
                dataPoints: [
                    { x: new Date(2017, 1, 6), y: 220 },
                    { x: new Date(2017, 1, 7), y: 120 },
                    { x: new Date(2017, 1, 8), y: 144 },
                    { x: new Date(2017, 1, 9), y: 162 },
                    { x: new Date(2017, 1, 10), y: 129 },
                    { x: new Date(2017, 1, 11), y: 109 },
                    { x: new Date(2017, 1, 12), y: 129 }
                ]
            },
            {
                name: "San Francisco",
                showInLegend: true,
                legendMarkerType: "circle",
                type: "area",
                color: "#914DF0",
                markerSize: 0,
                dataPoints: [
                    { x: new Date(2017, 1, 6), y: 42 },
                    { x: new Date(2017, 1, 7), y: 34 },
                    { x: new Date(2017, 1, 8), y: 29 },
                    { x: new Date(2017, 1, 9), y: 42 },
                    { x: new Date(2017, 1, 10), y: 53 },
                    { x: new Date(2017, 1, 11), y: 15 },
                    { x: new Date(2017, 1, 12), y: 12 }
                ]
            }]
    });
    chart.render();
}

// 2.graphic
var options = {
    series: [14, 15, 25, 25, 30, 40, 55],
    labels: ['KFC', 'FIAT-Chrysler LLC', 'KLM', 'Aeroflot', 'Lukoil', 'American Express', 'Daimler'],
    colors: ['#EB5757', '#EAAB00', '#A84069', '#00B2A9', '#2D9CDB', '#BB6BD9', '#4CD964'],
    chart: {
        type: 'donut',
    },
    legend: {
        position: 'bottom',
        formatter: function (seriesName, opts) {
            if (opts.seriesIndex < 7) {
                return `<div style="cursor:pointer;padding:8px;">${seriesName}</div>`;
            } else {
                return '';
            }
        },
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%'
            }
        }
    },
    dataLabels: {
        enabled: false,
        formatter: function (val) {
            return val + "%"
        },
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#donutGraphic"), options);
chart.render();

var textElement = document.createElement("div");
textElement.innerHTML = "Projects by <br> account";
textElement.style.position = "absolute";
textElement.style.top = "43%";
textElement.style.left = "67%";
textElement.style.transform = "translate(-50%, -50%)";
textElement.style.fontSize = "15px";
textElement.style.color = "#000";
textElement.style.fontWeight = "500";
textElement.style.textAlign = "center";

document.body.appendChild(textElement);
