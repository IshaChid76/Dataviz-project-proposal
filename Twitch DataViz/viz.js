import { csvParse, select, map } from 'd3';
import { scatterPlot } from './scatterPlot';

export const viz = (
  container,
  { state, setState }
) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const svg = select(container)
    .selectAll('svg')
    .data([null])
    .join('svg')
    .attr('width', width)
    .attr('height', height);

  // state.data could be:
  // * undefined
  // * 'LOADING'
  // * An array of objects
  const { data, hoveredValue } = state;
  
  const setHoveredValue = (d) => {
    setState((state) => ({
    	...state,
      hoveredValue: d
    }));
  };

  if (data && data !== 'LOADING') {
    svg.call(scatterPlot, {
      data,
      width,
      height,
      xValue: (d) => d.Followers,
      yValue: (d) => d.Stream_time_minutes,
      colorValue: (d) => d.Language,
      xAxisLabel: 'Total Followers',
      yAxisLabel: 'Total Streaming Time (minutes)',
      margin: {
        top: 10,
        right: 30,
        bottom: 50,
        left: 80,
      },
      colorLegendLabel: 'Languages',
      colorLegendX: 850,
      colorLegendY: 50,
      setHoveredValue,
      hoveredValue,
    });
  }

  if (data === undefined) {
    setState((state) => ({
      ...state,
      data: 'LOADING',
    }));
    fetch('data.csv')
      .then((response) => response.text())
      .then((csvString) => {
        const data = csvParse(csvString);
      
        for (const d of data) {
          d.Watch_time_minutes = +d.Watch_time_minutes;
          d.Stream_time_minutes = +d.Stream_time_minutes;
          d.Peak_viewers = +d.Peak_viewers;
          d.Average_viewers = +d.Average_viewers;
          d.Followers = +d.Followers;
          d.Followers_gained = +d.Followers_gained;
          d.Views_gained = +d.Views_gained;
        }
        setState((state) => ({
          ...state,
          data,
        }));
      });
  }
};
