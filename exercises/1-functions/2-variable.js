"use strict"

let canvas =document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines() { 
    context.beginPath();

    //context.lineWidth = 2;
    context.moveTo(margin,50);
    context.lineTo(width - margin, 50);
    context.lineTo(50, 150);
    context.lineTo(width - margin, 150);
    context.lineTo(50, 250);
    context.lineTo(width - margin, 250);
    context.lineTo(50, 350);
    context.lineTo(width - margin, 350);
    context.lineTo(50, 50);

    context.stroke();
    
    

    }



