# Data Visualization Project

## Data

The data I propose to visualize for my project is the Top Streamers Data on Twitch which consists of different attributes like number of viewers, number of active viewers, followers gained and many other relevant columns regarding a particular streamer. It has 11 different columns with all the necessary information that is needed.

- Finding out the number of streamers with respect to language spoken.
- Who is the top most streamer?
- Which streamer gained more percentage of followers?

## Prototypes

I’ve created a proof of concept visualization of this data. It shows a scatter plot of [the Twitch Dataset](https://gist.github.com/IshaChid76/8e2a2a29d869d47ddf17b6dd10acac3c). It shows the total followers with respect to the total stream time for English, Portuguese, Spanish and Korean streamers. 
- Red is English streamers
- Blue is Portuguese streamers
- Green is Korean streamers
- Yellow is Spanish streamers

[![image](https://github.com/IshaChid76/Dataviz-project-proposal/blob/main/Screen%20Shot%202023-02-19%20at%205.44.44%20PM.png)](https://vizhub.com/IshaChid76/f7fe51e418a0492bbf4d4390540b4c47)

## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Finding out the number of streamers with respect to language spoken.
 * Who is the top most streamer?
 * Which streamer gained more percentage of followers?
 * Comparison between total streaming time and total followers for each streamer.

## Sketches

The Sketches below show the two interactions that I have added to the visualization.

First is the feature of Interactive Color Legend. I have scaled the data points that are shown in the prototype image because of overlapping of data but that leads to the exclusions of other outling data points. To stop that from happening, I think color legend interaction would me a very good option. No data points will be missing and data points can be seen more clearly for each language as well.

[![image](https://github.com/IshaChid76/Dataviz-project-proposal/blob/main/Screen%20Shot%202023-04-06%20at%207.33.29%20PM.png)](https://vizhub.com/IshaChid76/35ec48f8de934797b213739fad8e3d52?edit=files)

Second feature is getting more information with mouse-hover on a data point. I can add useful information like channel name so that the visualization gives more meaning to the user.

![image](https://github.com/IshaChid76/Dataviz-project-proposal/blob/main/WhatsApp%20Image%202023-02-19%20at%206.20.40%20PM.jpeg)

You can view the final viz that combines both the interactions mentioned above. [Final DataViz](https://vizhub.com/IshaChid76/08125ce095754b51a32de17c0be0c97a)

## Open Questions

Currently for adding the interactions I am not sure how to add it to the SVG variable. Also, is it possible to add 2 interactions for the same SVG variable?

## Milestones

1. Add Two more languages to the graph. So basically top five most spoken languages by streamers.
2. Add a table on the right side of the graph that gives meaning to the colors.
3. Impement mouse-hover for the actual dataset.
4. Go over feedbacks from students and professor and analyse what else can be added.
5. Improve the overall visual appearance of the dataviz.
6. Iterate for the final time over the visualization.
7. Adding the last touches to the visualization and creating the final documentation.

## Future Scope

1. Add zoom in and zoom out interaction.
2. Add a dropdown list.
