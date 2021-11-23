const search_btn = document.getElementById("search_btn")
const search_input = document.getElementById("search_input")
const weather_list = document.getElementById("weather_list")
const add_btn = document.getElementById("add_btn")
const select_location_list = document.getElementById("select_location_list")

// Array mit Temperaturwerten für die Orte im Selecet Element
const temperatures = [
  {name: "Hamburg", temp: 2},
  {name: "Paris", temp: 22},
  {name: "New York", temp: 222},
  {name: "Sydney", temp: 2222}
]

function add_new_location(location_name, temperature) {
  const new_location = document.createElement("div")
  new_location.classList.add("weather_location")

  new_location.innerHTML = `
    <div class="location">${location_name}</div>
      <div class="weather_info">
        <span>
          <span class="temperature">${temperature} Grad</span>
          <span class="condition">bewölkt</span>
        </span>
        <img
          class="weather_img"
          src="https://cdn.glitch.com/c569e324-22c3-491c-ab27-94a3498d6207%2Fcloudy-line.png?v=1633008253459"
          alt="Wolken"
        />
    </div>
  `
  weather_list.appendChild(new_location)

}

function doSearch() {
  add_new_location(search_input.value, 12)
}

function doAddLocation() {
  const location_name = select_location_list.value
  const temperature = temperatures.find(
    (temp) => temp.name === location_name
  ).temp
  add_new_location(location_name, temperature)
}

search_btn.addEventListener("click", doSearch)
add_btn.addEventListener("click", doAddLocation)
