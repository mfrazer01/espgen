

// import * from './data'

// const data = 'Hello World'

// console.log(data)

var MainContainer = document.getElementById('MainContainer')
var ul = document.createElement('ul')
var div = document.createElement('div')
MainContainer.appendChild(ul)
MainContainer.appendChild(div)

console.log(MainContainer)

var testdiv = input => `<li>${input}</li>`

// ul.innerHTML = testdiv('Hello World')


var listnames = (data) => {
   var list = ""
   for (var i=0; i<data.length; i++) {
      console.log(data[i].Name)
      list += `<li>${data[i].Name}</li>`
   }
   return list
}

// ul.innerHTML = listnames(data)

var card = datum => {
   const higherlvl = (datum["Higher Level"]) ? `<div class="higher-level"><strong>At Higher Levels:</strong> ${datum["Higher Level"]}</div>` : ''

   return `<div class="card">
   <h2 class="title">${datum.Name}</h2>
   <div class="rank"><em>${datum.Rank}</em></div>
   <div class="activation-time"><strong>Activation Time:</strong> ${datum["Activation Time"]}</div>
   <div class="range"><strong>Range:</strong>${datum.Range}</div>
   <div class="duration"><strong>Duration:</strong>${datum.Duration}</div>
   <div class="description"><strong>Description:</strong>${datum.Description}</div>
   ${higherlvl}
</div>`
} 

var createAllCards = data => {
   var cards = ""
   for (var i=0; i<data.length; i++) {
      console.log(data[i].Name)
      cards += card(data[i])
   }
   return cards
}

div.innerHTML = createAllCards(data)
