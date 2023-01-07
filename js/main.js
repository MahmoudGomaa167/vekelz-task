let dashboardPage = document.querySelector('.dashboard')

if (dashboardPage) {
    document.addEventListener('DOMContentLoaded', () => {
        am4core.ready(function () {

            am4core.useTheme(am4themes_animated);

            // Energy Gauge Chart
            let energyChart = am4core.create("energyChart", am4charts.GaugeChart);
            energyChart.innerRadius = -12;
            energyChart.startAngle = 150
            energyChart.endAngle = 390

            let energyAxis = energyChart.xAxes.push(new am4charts.ValueAxis());
            energyAxis.min = 0;
            energyAxis.max = 100;
            energyAxis.strictMinMax = true;
            energyAxis.renderer.line.strokeWidth = 12;
            energyAxis.renderer.grid.template.disabled = true;
            energyAxis.renderer.labels.template.disabled = true;

            let energyRange1 = energyAxis.axisRanges.create();
            energyRange1.value = 0;
            energyRange1.endValue = 100;
            energyRange1.axisFill.fillOpacity = 1;
            energyRange1.axisFill.fill = am4core.color('rgba(244, 245, 249, 1)');
            energyRange1.axisFill.zIndex = -1;
            energyRange1.grid.disabled = true
            energyRange1.axisFill.cornerRadius = 14
            energyRange1.axisFill.dom.id = 'fullCircle1'

            let energyRange2 = energyAxis.axisRanges.create();
            energyRange2.value = 0;
            energyRange2.endValue = 45;
            energyRange2.axisFill.fillOpacity = 1;
            energyRange2.axisFill.fill = am4core.color('#A162F7');
            energyRange2.axisFill.zIndex = 3;
            energyRange2.axisFill.cornerRadius = 14
            energyRange2.grid.disabled = true
            energyRange2.axisFill.dom.id = 'halfCircle1'


            let energyLabel = energyChart.radarContainer.createChild(am4core.Label);
            energyLabel.isMeasured = false;
            energyLabel.fontSize = "24px";
            energyLabel.fontWeight = "700";
            energyLabel.x = am4core.percent(50);
            energyLabel.paddingBottom = 15;
            energyLabel.horizontalCenter = "middle";
            energyLabel.verticalCenter = "middle";
            energyLabel.text = '45%'
            energyLabel.fill = '#242731'


            // Range Gauge Chart
            let rangeChart = am4core.create("rangeChart", am4charts.GaugeChart);
            rangeChart.innerRadius = -12;
            rangeChart.startAngle = 150
            rangeChart.endAngle = 390

            let rangeAxis = rangeChart.xAxes.push(new am4charts.ValueAxis());
            rangeAxis.min = 0;
            rangeAxis.max = 300000;
            rangeAxis.strictMinMax = true;
            rangeAxis.renderer.line.strokeWidth = 12;
            rangeAxis.renderer.grid.template.disabled = true;
            rangeAxis.renderer.labels.template.disabled = true;

            let rangeRange1 = rangeAxis.axisRanges.create();
            rangeRange1.value = 0;
            rangeRange1.endValue = 300000;
            rangeRange1.axisFill.fillOpacity = 1;
            rangeRange1.axisFill.fill = am4core.color('rgba(244, 245, 249, 1)');
            rangeRange1.axisFill.zIndex = -1;
            rangeRange1.grid.disabled = true
            rangeRange1.axisFill.cornerRadius = 14
            rangeRange1.axisFill.dom.id = 'fullCircle2'

            let rangeRange2 = rangeAxis.axisRanges.create();
            rangeRange2.value = 0;
            rangeRange2.endValue = 157000;
            rangeRange2.axisFill.fillOpacity = 1;
            rangeRange2.axisFill.fill = am4core.color('rgba(255, 126, 134, 1)');
            rangeRange2.axisFill.zIndex = 3;
            rangeRange2.axisFill.cornerRadius = 14
            rangeRange2.grid.disabled = true
            rangeRange2.axisFill.dom.id = 'halfCircle2'

            let rangeLabel = rangeChart.radarContainer.createChild(am4core.Label);
            rangeLabel.isMeasured = false;
            rangeLabel.fontSize = "24px";
            rangeLabel.fontWeight = "700";
            rangeLabel.x = am4core.percent(50);
            rangeLabel.paddingBottom = 15;
            rangeLabel.horizontalCenter = "middle";
            rangeLabel.verticalCenter = "middle";
            rangeLabel.text = '157k%'
            rangeLabel.fill = '#242731'


            // Fluid Gauge Chart

            let fluidChart = am4core.create("fluidChart", am4charts.GaugeChart);
            fluidChart.innerRadius = -12;
            fluidChart.startAngle = 150
            fluidChart.endAngle = 390

            let fluidAxis = fluidChart.xAxes.push(new am4charts.ValueAxis());
            fluidAxis.min = 0;
            fluidAxis.max = 100;
            fluidAxis.strictMinMax = true;
            fluidAxis.renderer.line.strokeWidth = 12;
            fluidAxis.renderer.grid.template.disabled = true;
            fluidAxis.renderer.labels.template.disabled = true;

            let fluidRange1 = fluidAxis.axisRanges.create();
            fluidRange1.value = 0;
            fluidRange1.endValue = 100;
            fluidRange1.axisFill.fillOpacity = 1;
            fluidRange1.axisFill.fill = am4core.color('rgba(244, 245, 249, 1)');
            fluidRange1.axisFill.zIndex = -1;
            fluidRange1.grid.disabled = true
            fluidRange1.axisFill.cornerRadius = 14
            fluidRange1.axisFill.dom.id = 'fullCircle3'

            let fluidRange2 = fluidAxis.axisRanges.create();
            fluidRange2.value = 0;
            fluidRange2.endValue = 9;
            fluidRange2.axisFill.fillOpacity = 1;
            fluidRange2.axisFill.fill = am4core.color('#A162F7');
            fluidRange2.axisFill.zIndex = 3;
            fluidRange2.axisFill.cornerRadius = 14
            fluidRange2.grid.disabled = true
            fluidRange2.axisFill.dom.id = 'halfCircle3'


            let fluidLabel = fluidChart.radarContainer.createChild(am4core.Label);
            fluidLabel.isMeasured = false;
            fluidLabel.fontSize = "24px";
            fluidLabel.fontWeight = "700";
            fluidLabel.x = am4core.percent(50);
            fluidLabel.paddingBottom = 15;
            fluidLabel.horizontalCenter = "middle";
            fluidLabel.verticalCenter = "middle";
            fluidLabel.text = '9%'
            fluidLabel.fill = '#242731'

            // Tire Guage Chart
            let tireChart = am4core.create("tireChart", am4charts.GaugeChart);
            tireChart.innerRadius = -12;
            tireChart.startAngle = 150
            tireChart.endAngle = 390

            let tireAxis = tireChart.xAxes.push(new am4charts.ValueAxis());
            tireAxis.min = 0;
            tireAxis.max = 100;
            tireAxis.strictMinMax = true;
            tireAxis.renderer.line.strokeWidth = 12;
            tireAxis.renderer.grid.template.disabled = true;
            tireAxis.renderer.labels.template.disabled = true;

            let tireRange1 = tireAxis.axisRanges.create();
            tireRange1.value = 0;
            tireRange1.endValue = 100;
            tireRange1.axisFill.fillOpacity = 1;
            tireRange1.axisFill.fill = am4core.color('rgba(244, 245, 249, 1)');
            tireRange1.axisFill.zIndex = -1;
            tireRange1.grid.disabled = true
            tireRange1.axisFill.cornerRadius = 14
            tireRange1.axisFill.dom.id = 'fullCircle4'

            let tireRange2 = tireAxis.axisRanges.create();
            tireRange2.value = 0;
            tireRange2.endValue = 25;
            tireRange2.axisFill.fillOpacity = 1;
            tireRange2.axisFill.fill = am4core.color('#F6CC0D');
            tireRange2.axisFill.zIndex = 3;
            tireRange2.axisFill.cornerRadius = 14
            tireRange2.grid.disabled = true
            tireRange2.axisFill.dom.id = 'halfCircle4'


            let tireLabel = tireChart.radarContainer.createChild(am4core.Label);
            tireLabel.isMeasured = false;
            tireLabel.fontSize = "24px";
            tireLabel.fontWeight = "700";
            tireLabel.x = am4core.percent(50);
            tireLabel.paddingBottom = 15;
            tireLabel.horizontalCenter = "middle";
            tireLabel.verticalCenter = "middle";
            tireLabel.text = '25%'
            tireLabel.fill = '#242731'


            // Miles Chart

            let chart = am4core.create("milesChart", am4charts.XYChart);

            chart.colors.list = [am4core.color("#F4F5F9")]

            chart.data = [
                {
                    "time": "1 PM",
                    "miles": 163
                },
                {
                    "time": "2 PM",
                    "miles": 124
                },
                {
                    "time": '3 PM',
                    "miles": 185
                },
                {
                    'time': '4 PM',
                    'miles': 107
                },
                {
                    'time': '5 PM',
                    'miles': 163
                },
                {
                    'time': '6 PM',
                    'miles': 78
                },
                {
                    'time': '7 PM',
                    'miles': 134
                }
            ]

            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
            categoryAxis.dataFields.category = "time";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.labels.template.fill = am4core.color("#808191");;
            categoryAxis.renderer.labels.template.fontSize = 14;
            categoryAxis.renderer.minGridDistance = 64;
            categoryAxis.startLocation = 0.3;
            categoryAxis.endLocation = 0.7;



            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;

            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "miles";
            series.dataFields.categoryX = "time";
            series.columns.template.tooltipHTML = `
                <span>{time}</span>
                <div class='d-flex align-items-center gap-1'>
                    <span class='blue-circle'></span>
                    <span>{miles}k</span>
                </div>
            `;
            series.tooltip.getFillFromObject = false;
            series.tooltip.getStrokeFromObject = false;
            series.tooltip.label.fill = am4core.color("#fff");
            series.tooltip.label.fontSize = 10;
            series.tooltip.label.fontWeight = 700;
            series.tooltip.label.minWidth = 58;
            series.tooltip.label.minHeight = 31;
            series.tooltip.label.paddingTop = series.tooltip.label.paddingBottom = 2;
            series.tooltip.label.paddingLeft = 8;
            series.tooltip.label.paddingRight = 9;
            series.tooltip.strokeWidth = 9;
            series.tooltip.background.pointerLength = 0
            series.tooltip.background.strokeWidth = 0
            series.tooltip.background.cornerRadius = 5
            series.tooltip.background.fill = am4core.color("#000");
            series.columns.template.fillOpacity = 1;
            series.columns.template.width = 24;


            let shadow = series.tooltip.background.filters.getIndex(0);
            shadow.dx = 0;
            shadow.dy = 0;
            shadow.blur = 0;




            let hoverState = series.columns.template.states.create("hover");
            hoverState.properties.fill = am4core.color("#2884FF");
            hoverState.properties.fillOpacity = 1;

            let columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 0;
            columnTemplate.strokeOpacity = 1;


            // Smooth Line Chart
            let smoothLineChart = am4core.create("smoothLineChart", am4charts.XYChart);
            smoothLineChart.colors.list = [am4core.color("#FF764C")]

            smoothLineChart.data = [
                {
                    "value": 30
                },
                {
                    "time": '7 am',
                    "value": 49
                },
                {
                    "time": '8 am',
                    "value": 60
                },
                {
                    "time": '9 am',
                    "value": 150
                },
                {
                    "time": '10 am',
                    "value": 250
                },
                {
                    "time": '11 am',
                    "value": 170
                },
                {
                    "time": '12 pm',
                    "value": 100
                },
                {
                    "time": '1 pm',
                    "value": 130
                },
                {
                    "time": '2 pm',
                    "value": 60
                },
                {
                    "time": '3 pm',
                    "value": 33
                },
                {
                    "time": '4 pm',
                    "value": 40
                },
                {
                    "time": '5 pm',
                    "value": 30
                },
                {
                    "time": '6 pm',
                    "value": 20
                },
                {
                    "time": '7 pm',
                    "value": 50
                },
                {
                    "time": '8 pm',
                    "value": 90
                },
                {
                    "time": '9 pm',
                    "value": 60
                }
            ]

            let smoothCategoryAxis = smoothLineChart.xAxes.push(new am4charts.CategoryAxis())
            smoothCategoryAxis.dataFields.category = "time";
            smoothCategoryAxis.renderer.grid.template.location = 0;
            smoothCategoryAxis.renderer.labels.template.fill = am4core.color("#808191");;
            smoothCategoryAxis.renderer.labels.template.fontSize = 14;
            smoothCategoryAxis.renderer.minGridDistance = 56;
            smoothCategoryAxis.startLocation = 0.1;
            smoothCategoryAxis.endLocation = 0;

            let smoothValueAxis = smoothLineChart.yAxes.push(new am4charts.ValueAxis());
            smoothValueAxis.renderer.grid.template.disabled = true;
            smoothValueAxis.renderer.labels.template.disabled = true;
            smoothValueAxis.min = -34

            let gradient = new am4core.LinearGradient();
            gradient.addColor(am4core.color("#FF764C3D"));
            gradient.addColor(am4core.color("#FF7E0700"));
            gradient.rotation = 90

            let smoothLineSeries = smoothLineChart.series.push(new am4charts.LineSeries());
            smoothLineSeries.dataFields.categoryX = "time";
            smoothLineSeries.dataFields.valueY = "value";
            smoothLineSeries.strokeWidth = 1;
            smoothLineSeries.smoothing = "bezier";
            smoothLineSeries.tensionX = 0.7
            smoothLineSeries.fill = gradient
            smoothLineSeries.fillOpacity = 1

        })
    })
}

