let slickBlock = document.getElementById("slick")
const link = "PNG/our_work/"

const slick = sliderWorkData.map(item => `<div key="${item.id}">
                                            <img 
                                                 src="${link}${item.image}"
                                                 style="width: 320px; 
                                                        margin-left: 20px" 
                                                 alt="${item.alt}">
                                          </div>`)

for (let i = 0; i < slick.length; i++) slickBlock.innerHTML += slick[i]