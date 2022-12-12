x= ""
y= ""

draw_circle=""
draw_rect=""

var speech_recognition= window.webkitSpeechRecognition
var recognition= new speech_recognition()

function start_drawing()
{
    document.getElementById("status").innerHTML= "System is listening. What do you want to draw?"
    recognition.start()
}

recognition.onresult= function(event){
    console.log(event)

    var content= event.results[0][0].transcript
    document.getElementById("status").innerHTML="The speech has been recognised as: "+content
    
    if(content=="circle")
    {
        x= Math.floor(Math.random()*900)
        y= Math.floor(Math.random()*600)

        document.getElementById("status").innerHTML= "Started drawing circle"
        draw_circle="set"
    }

    if(content=="rectangle")
    {   
        x= Math.floor(Math.random()*900)
        y= Math.floor(Math.random()*600)
        
        document.getElementById("status").innerHTML= "Started drawing rectangle"
        draw_rect="set"
    }
}

function setup()
{
    createCanvas(1000,600)
}

function draw()
{
    if(draw_circle=="set")
    {
        circle(x,y,60)
        document.getElementById("status").innerHTML= "Circle is drawn"
        draw_circle=""
    }

    if(draw_rect=="set")
    {
        rect(x,y,150,70)
        document.getElementById("status").innerHTML= "Rectangle is drawn"
        draw_rect=""
    }
}