// 1.graphic


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
