const $images = document.querySelector('.images')
const display = ['./images/small-1.jpg', './images/small-2.jpg', './images/small-3.jpg', './images/small-4.jpg', './images/small-5.jpg', './images/small-6.jpg', './images/small-7.jpg', './images/small-8.jpg', './images/small-9.jpg', './images/small-10.jpg', './images/small-11.jpg', './images/small-12.jpg', ]

const textData = ["The Common Kingfishers (Alcedo atthis) are known by other names: the European Kingfisher.The Eurasian Kingfisher and the River Kingfisher.", "The quintessential early bird, American Robins are common sights on lawns across North America, where you often see them tugging earthworms out of the ground. Robins are popular birds for their warm orange breast, cheery song, and early appearance at the end of winter.", "", "The northern cardinal is a medium-sized songbird, with males slightly larger than females. Males are bright red with a black mask around their red bill and a prominent crest on the top of their head.", "The Rainbow Lorikeet is unmistakable with its bright red beak and colourful plumage. Both sexes look alike, with a blue (mauve) head and belly, green wings, tail and back, and an orange/yellow breast. ... Rainbow Lorikeets are such colourful parrots that it is hard to mistake them for other species.", "The Eurasian blue tit (Cyanistes caeruleus) is a small passerine bird in the tit family, Paridae. It is easily recognisable by its blue and yellow plumage and small size.Eurasian blue tits, usually resident and non-migratory birds, are widespread and a common resident breeder throughout temperate and subarctic Europe and western Asia in deciduous or mixed woodlands with a high proportion of oak. They usually nest in tree holes, although they easily adapt to nest boxes where necessary.", "Blue Parrots are Popular as pets for many years, these birds hail from the forests of South America. One of the most striking features about blue and gold macaws are the bare white patches of skin around their eyes, typical of most macaw species. Their green foreheads offer a beautiful contrast to the blue and yellow of their bodies.", "Owls are birds from the order Strigiformes, which includes about 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.", " Male Australian King-Parrots are the only Australian parrots with a completely red head. Females are similar to males except that they have a completely green head and breast. Both sexes have a red belly and a green back, with green wings and a long green tail.", "Sparrows are a family of small passerine birds. ... Many species nest on buildings and the house and Eurasian tree sparrows, in particular, inhabit cities in large numbers, so sparrows are among the most familiar of all wild birds. They are primarily seed-eaters, though they also consume small insects.", "Since its introduction into captivity, the Budgerigar (or 'budgie') has been bred into a variety of colour forms, including pure white, blue, yellow, mauve, olive and grey. In the wild, Budgerigars are small green and yellow parrots, with black barring above, and a small patch of blue on the cheek.", "Bird food is food (often varieties of seeds, nuts, or dried fruits) eaten by birds.The various types of bird food reflect the species of bird that can be fed, whether they are carnivores or nectar eating birds.", ]


const $htmlContent = []



const array = ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInupRight', ]


var random = array[Math.floor(Math.random() * array.length)];



for (let i = 0; i < display.length; i++) {
    $htmlContent.push(`<img class="thumbnail" src=${display[i]} data-text="${textData[i]}" alt="birds">`)
}

$images.innerHTML = $htmlContent.join(' ')

const element = document.getElementById("myelement");

const elementimg = document.getElementById("img01")
const elementText = document.querySelector(".caption")
$images.addEventListener('click', function (event) {
    const $img = event.target.closest('.thumbnail')
    random = array[Math.floor(Math.random() * array.length)];


    element.classList = `element animated ${random}`
    element.style.display = "block";
    
    elementimg.src = $img.src.replace("small", "large");
    
    elementText.textContent = $img.dataset.text;
})




const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    element.style.display = "none";
}

document.addEventListener('keypress', function (event) {
    if (event.keyCode == 27) {
        span.getElementsByClassName("close");
    }
    element.style.display = "none";
})