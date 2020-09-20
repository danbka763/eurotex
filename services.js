let services = document.getElementById("services")

console.log(servicesData)

for (let i = 0; i < servicesData.length; i++) {
  let logo = ""
  if (i === 0) {
    logo = '<img src="PNG/logo_services.png" alt="" width="100%" style="margin-top: 7px">'
  }

  services.innerHTML += 
  `
  <div id="${servicesData[i].id}">
  <div class="left-div">
    <img src="${servicesData[i].image}" alt="" width="100%">
    ${logo}
  </div>
  <div class="right-div">
    <div>
      <article>${servicesData[i].article}</article>
      <p>
        ${servicesData[i].text}
      </p>
    </div>
    <button>Записаться</button>
  </div>
</div>
  `
}