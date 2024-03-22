import { useState } from "react"
import ReactApexChart from "react-apexcharts"


const options = {
    chart: {
        width: 380,
        type: 'donut',
    },
    colors: ['#c4c4c4', '#2abe11', '#ebeb0a', '#e7750a', '#d72020'],
    labels: ['Very Low', 'Low', 'Normal', 'Warning', 'Danger'],
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270,
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        }
    },
    fill: {
        type: 'gradient',
    },
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        },
        position: 'bottom'
    },
    title: {
        text: '',
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
    }],
}

const PieChart = () => {
    const [state, setState] = useState({
        series: [4.78, 5.0, 6.78, 8.53, 9.14]
    })
    return (
        <div className="w-full h-full flex justify-center items-center pie-chart-container">
            <ReactApexChart options={options} series={state.series} type="donut" width={380} />
        </div>
    )
}

export default PieChart