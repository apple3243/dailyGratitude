const startBtn = document.querySelector('.btn-start')
const lead = document.querySelectorAll('.lead')
const textBox = document.querySelector('.text-box')
const title = document.querySelector('.title')
const textArea = document.createElement('div')
const placeHolder = document.createElement('p')
const submitBtn = document.createElement('button')
const result = document.querySelector('.result')
const dateArea = document.createElement('p')
const redo = document.querySelector('.redo')

// get date & time with YY/MM/DD 00:00:00 format
const date = new Date();
let dateStr =
  ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
  ("00" + date.getDate()).slice(-2) + "/" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);

// when 'start' button is clicked
startBtn.addEventListener('click', function(){
    // add class 'remove' to remove
    lead.forEach(leads => {
        leads.classList.add('remove')
    })
    // create textarea element
    textBox.appendChild(textArea)
    textArea.contentEditable = "true"
    textArea.classList.add('text-area')
    textArea.placeholder = "I am grateful..."
    // create submit button
    textBox.appendChild(submitBtn)
    submitBtn.classList.add('btn-submit')
    submitBtn.type = "submit"
    submitBtn.innerHTML = "Submit"
    // create placeholder for textarea
    textArea.appendChild(placeHolder)
    placeHolder.classList.add('placeholder')
    placeHolder.innerHTML = "I am grateful for..."
    // create date & time
    textBox.appendChild(dateArea)
    dateArea.classList.add('date-area')
    dateArea.classList.add('remove')
    dateArea.innerHTML = dateStr
})
// when 'textarea' is focused
textArea.addEventListener('focus', function(){
    placeHolder.classList.add('remove')
})
// when 'submit' button is clicked
submitBtn.addEventListener('click', function(){
    // remove 'remove' class to show the result
    result.classList.remove('remove')
    submitBtn.classList.add("remove")
    dateArea.classList.remove('remove')

    //remove border from textBox
    textBox.style.border = 0
    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(textBox,{useCORS: true , backgroundColor: null, allowTaint : true} ).then(
        function (canvas) {
            var a = document.createElement('a')
            a.href = canvas.toDataURL("image/jpeg");
            a.download = "mygratitude.jpeg"
            result.appendChild(canvas)
            result.appendChild(a)
            a.click()
    })
    
})

// when 'redo' button is clicked, reload page
if(redo){
    redo.addEventListener('click', function(){
        location.reload()
    })
}
