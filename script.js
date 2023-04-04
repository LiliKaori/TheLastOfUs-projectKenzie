const episodes = [
    {
        id: 01,
        img: "./img/The_Last_of_Us_-_When_You're_Lost_in_the_Darkness 3.png",
        title: "When You're Lost in the Darkness",
        description:
            " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },

    {
        id: 02,
        img: "./img/The_Last_of_Us_-_Infected 4.png",
        title: "Infected",
        description:
            " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
        id: 03,
        img: "./img/The_Last_of_Us_-_Long_Long_Time 2.png",
        title: "Long, Long Time",
        description:
            " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
        id: 04,
        img: "./img/The_Last_of_Us_-_Please_Hold_to_My_Hand 2.png",
        title: "Please Hold to My Hand",
        description:
            " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
]

const insides = [
   {
    text: "SURVIVAL",
    img: "./img/EP 2 2.png"
   },
   {
    text: "RELATIONSHIP",
    img: "./img/the-last-of-us 1.png"
   },
   {
    text: "ADVENTURE",
    img: "./img/FF3P7D3VJ5DZ5FGALN2YYQU3ZM 1.png"
   } 
]

const list = document.querySelector(".episodes-list")

function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {
        renderCard(episodes[i])
    }
}

addCard(episodes)

function renderCard(episode) {
    const listItem = document.createElement("li")
    listItem.classList.add("card")

    listItem.innerHTML = `
    <img
    src="${episode.img}"
    alt= episode-${episode.id}
    />
    <div class="card-text">
    <h4>${episode.title}</h4>
    <p>
    ${episode.description}
    </p>
    </div>
    `
    list.appendChild(listItem)
}



const sheet = document.querySelector(".inside-list")

const addTopic = (insides) => {
    for(let i=0; i<insides.length; i++){
        renderInside(insides[i])
    }    
}

addTopic(insides)

function renderInside(inside){
    const listTopic = document.createElement("li")
    

    listTopic.innerHTML = `   
    <figure class="inside">
        <img src="${inside.img}">
        <figcaption>${inside.text}</figcaption>
    </figure>
    `

    sheet.appendChild(listTopic)
}