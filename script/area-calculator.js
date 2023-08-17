function calculateTriangleArea(){
//    get triangle base value
    const baseField=document.getElementById('triangle-base')
    const baseValueText=baseField.value
    const base=parseFloat(baseValueText)
    

    // get triangle value
    const heightField=document.getElementById('triangle-height')
    const heightValueText=heightField.value
    const height=parseFloat(heightValueText)

    if(isNaN(base) || isNaN(height)){
        alert("Please enter number")
        return
    }
    

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

    const base=getInputValue('parallelogram-base')
    const height=getInputValue('parallelogram-height')
     
    const Area= base * height
    setElementInnerText('parallelogram-area',Area)
}

function calculateEllipseArea(){
    const majorRadius=getInputValue('ellipse-major-radius')
    const minorRadius=getInputValue('ellipse-minor-radius')
    const AreaTwoDecimal=3.1416 * majorRadius * minorRadius
    const Area=AreaTwoDecimal.toFixed(2)
    setElementInnerText('ellipse-area',Area)
}

// reuseable function
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId)
    const inputValueText=inputField.value
    const value=parseFloat(inputValueText)
    return value
}

function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId)
    element.innerText=area
}