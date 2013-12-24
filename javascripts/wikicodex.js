
var line;
var line_color = 'green';

function drawing_paper() {
    
    var paper = d3.select("body").append("svg")
        .on("mousedown", mousedown)
        .on("mouseup", mouseup);

    function mousedown() {
 
        var mouse = d3.mouse(this);
        line = paper.append("line")
            .attr("x1", mouse[0])
            .attr("y1", mouse[1])
            .attr("x2", mouse[0])
            .attr("y2", mouse[1])
            .attr("style", 'stroke: line_color');
        
        paper.on("mousemove", mousemove);
    }

    function mousemove() {
        
        var mouse = d3.mouse(this);

        var stop_x = (parseInt(line.attr("x1")) + parseInt(mouse[0]))/2;
        var stop_y = (parseInt(line.attr("y1")) + parseInt(mouse[1]))/2;
    
        line.attr("x2", stop_x)
            .attr("y2", stop_y)
            .attr("style", 'stroke: '+line_color);
    
        line = paper.append("line")
            .attr("x1", stop_x)
            .attr("y1", stop_y)
            .attr("x2", stop_x)
            .attr("y2", stop_y)
            .attr("style", 'stroke: '+line_color);
    
    };

    function mouseup() {

        var mouse = d3.mouse(this);
        
        line.attr("x2", mouse[0])
            .attr("y2", mouse[1]);
        
        paper.on("mousemove", null); 

    };


    function change_color(ball){
        line_color = ball.getAttribute('color_me')
        console.log(line_color)
    }



    function gen_circle(x, y, cir_col){

        var circle = paper.append("circle")
                            .attr("cx", x)
                            .attr("cy", y)
                            .attr("r", 10)
                            .attr("color_me", cir_col)
                            .style("fill", cir_col);
     
        circle.on('mousedown', function(){change_color(this)})
    }


    gen_circle(10, 20, 'red')
    gen_circle(30, 20, 'green')
    gen_circle(50, 20, 'blue')
    gen_circle(70, 20, 'black')

};