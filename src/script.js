const container = document.querySelector('#data-container')

// function to generate bars
function generatebars(num = 20) {
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1

    // To create element "div"
    const bar = document.createElement('div')

    // To add class "bar" to "div"
    bar.classList.add('bar')

    // Provide height to the bar
    bar.style.height = `${value * 3}px`

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`

    // To create element "label"
    const barLabel = document.createElement('label')

    // To add class "bar_id" to "label"
    barLabel.classList.add('bar_label')

    // Assign value to "label"
    barLabel.innerHTML = value

    // Append "Label" to "div"
    bar.appendChild(barLabel)

    // Append "div" to "data-container div"
    container.appendChild(bar)
  }
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll('.bar')
  // Assign 0 to min_idx
  var min_idx = 0
  for (var i = 0; i < bars.length; i += 1) {
    // Assign i to min_idx
    min_idx = i

    // Provide indigo color to the ith bar
    bars[i].style.backgroundColor = 'rgb(79, 70, 229)'
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide fuchsia color to the jth bar
      bars[j].style.backgroundColor = 'rgb(192, 38, 211)'

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 300)
      )

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML)

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML)

      // For selecting section having id "selected"
      var barval = document.getElementById('selected')

      // For dynamically Updating the selected element
      barval.innerHTML = `<h3>Comparing ${val1} and ${val2}</h3>`

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = 'rgb(125, 211, 252)'
        }
        min_idx = j
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = 'rgb(125, 211, 252)'
      }
    }

    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height
    var temp2 = bars[min_idx].childNodes[0].innerText
    bars[min_idx].style.height = bars[i].style.height
    bars[i].style.height = temp1
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText
    bars[i].childNodes[0].innerText = temp2

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 300)
    )

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = 'rgb(125, 211, 252)'

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = 'rgb(49, 226, 13)'
  }

  barval.innerHTML = '<h3>Sorted successfully!</h3>'

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById('btn-generate').disabled = false
  document.getElementById('btn-generate').style.cursor = 'pointer'

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById('btn-sort').disabled = false
  document.getElementById('btn-sort').style.cursor = 'pointer'
}

// Call "generatebars" function
generatebars()

// function to generate new random array
function generate() {
  window.location.reload()
}

// function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById('btn-generate').disabled = true
  document.getElementById('btn-generate').style.cursor = 'not-allowed'

  // To disable the button "Selection Sort"
  document.getElementById('btn-sort').disabled = true
  document.getElementById('btn-sort').style.cursor = 'not-allowed'
}
