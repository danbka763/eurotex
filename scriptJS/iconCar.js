let iconBlock = document.getElementById("logoCar")

icons = iconCarData.map(car => 
  `
  <div key="${car.id}">
    <img style="${car.paramSize}: ${car.size}px; top: ${car.top}px" 
         src="PNG/logo_car/${car.image}" 
         alt="логотип машины ${car.name}">
  </div>  
  `
)

for (let i = 0; i < icons.length; i++) iconBlock.innerHTML += icons[i]