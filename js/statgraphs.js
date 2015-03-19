
function drawStats(){

 var svg = d3.select("#profileSidebar").append("svg")
                .attr("width", 200)
                .attr("height", 200)
                .append("g")
                .attr("transform", "translate(100,100)");
    svg.append("circle")
            .attr("cy",0)
            .attr("cx",0)
            .attr("r",50)
            .style("fill", "#1F0A1D");
}