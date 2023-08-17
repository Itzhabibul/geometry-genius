function calculateTriangleArea(){
//    get triangle base value
    const baseField=document.getElementById('triangle-base')
    const baseValueText=baseField.value
    const base=parseFloat(baseValueText)
    

    // get triangle value
    const heightField=document.getElementById('triangle-height')
    const heightValueText=heightField.value
    const height=parseFloat(heightValueText)
    

    const Area=0.5*base*height
    

    // area
    const spanArea= document.getElementById('triangle-area')
    spanArea.innerText=Area

}
function calculateRectangleArea(){
    //    get rectangle width value
    const widthField=document.getElementById('rectangle-width')
    const widthValueText=widthField.value
    const width=parseFloat(widthValueText)
    

    // get rectangle length value
    const lengthField=document.getElementById('rectangle-length')
    const lengthValueText=lengthField.value
    const length=parseFloat(lengthValueText)

    const Area= width * length

    // area
    const spanArea= document.getElementById('rectangle-area')
    spanArea.innerText=Area
}

function calculateParallelogramArea(){
     //    get parallelogram base value
     const baseField=document.getElementById('parallelogram-base')
     const baseValueText=baseField.value
     const base=parseFloat(baseValueText)
     
 
     // get parallelogram height value
     const heightField=document.getElementById('parallelogram-height')
    const heightValueText=heightField.value
    const height=parseFloat(heightValueText)
 
     const Area= base * height
     // area
     const spanArea= document.getElementById('parallelogram-area')
     spanArea.innerText=Area
}