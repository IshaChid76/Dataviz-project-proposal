import { extent, scaleLinear, scaleLog, scaleOrdinal, schemeCategory10 } from 'd3';
import { axes } from './axes';
import { colorLegend } from './colorLegend';

export const scatterPlot = (
  selection,
  { data, 
   	width,
   	height, 
   	xValue, 
   	yValue, 
    colorValue,
   	xAxisLabel, 
   	yAxisLabel, 
   	margin,
    colorLegendLabel,
    colorLegendX,
    colorLegendY,
   	setHoveredValue,
   	hoveredValue
  }
) => {
  const xScale = scaleLog()
    .domain([30000, 9000000])
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
  	.domain([5000, 260000])
    .range([height - margin.bottom, margin.top]);
  
  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(schemeCategory10);
  
  // var color = scaleOrdinal()
  //   .domain(["English", "Portuguese", "Spanish", "Korean"])
  //   .range([ "#D0270399", "#21908d99", "#fde72599", "#0920E999"])
  
  selection.call(axes, {
    xScale,
    yScale,
    xAxisLabel,
    yAxisLabel,
  });
  
  selection.call(colorLegend, {
    colorScale,
    colorLegendLabel,
    colorLegendX,
    colorLegendY,
    setHoveredValue,
    hoveredValue
  });
  
  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'd3-tooltip')
    .style('position', 'absolute')
    .style('z-index', '10')
    .style('visibility', 'hidden')
    .style('padding', '5px')
    .style('background', 'rgba(0,0,0,0.6)')
    .style('border-radius', '5px')
    .style('color', 'white');

  selection
    .selectAll('circle.mark')
    .data(data)
    .join('circle')
  	.attr('class', 'mark')
    .attr('cx', (d) => xScale(xValue(d)))
    .attr('cy', (d) => yScale(yValue(d)))
  	.attr('fill', (d) =>
      colorScale(colorValue(d))
    )
    .attr('r', 8)
  	.attr('opacity', (d) => 
        hoveredValue 
          ? colorValue(d) === hoveredValue 
          	? 1 
          	: 0
          : 1
    )
  	.on('mouseover', function (e, d) {
        tooltip
          .html(`${d.Channel}`)
          .style('visibility', 'visible');
    })
  	.on('mousemove', function () {
      tooltip
        .style('top', event.pageY - 10 + 'px')
        .style('left', event.pageX + 10 + 'px');
    })
    .on('mouseout', function () {
      tooltip
        .html(``)
        .style('visibility', 'hidden');
    });
};
