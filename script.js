const main = document.getElementById('main')
const totalScore = document.getElementById('score')

const categories = [
    {
        topic : "Lorem Ipsum",
        questions : [
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "100",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "200",
            },   
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "300",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "400",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "500",
            },  
        ],
    },
    {
        topic : "Lorem Ipsum Revealed",
        questions : [
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "100",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "200",
            },    
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "300",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "400",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "500",
            },    
        ],
    },    
    {
        topic : "The Lorem Ipsum",
        questions : [
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "100",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "200",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "300",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "400",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "500",
            },        
        ],
    },    

    {
        topic : "Beyond Lorem Ipsum",
        questions : [
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "100",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "200",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "300",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "400",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "500",
            },        
        ],
    },
    {
        topic : "Lorem Ipsum Unplugged",
        questions : [
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "100",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "200",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "300",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "400",
            },
            {
                question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                answer: ["Apple", "Sunshine", "Bicycle", "Ocean"],
                correct : "Apple",
                level: "500",
            },        
        ],
    },
]


function addCategory(category) {
    const col = document.createElement('div')
    col.classList.add('topic-column')

    const topicTitle = document.createElement('div')
    topicTitle.classList.add('topic-title')
    topicTitle.innerText = category.topic

    col.appendChild(topicTitle)
    main.append(col)


    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        col.append(card)
        if (question.level === '100') {
            card.innerHTML = 100
        }
        if (question.level === '200') {
            card.innerHTML = 200
        }
        if (question.level === '300') {
            card.innerHTML = 300
        }
        if (question.level === '400') {
            card.innerHTML = 400
        }
        if (question.level === '500') {
            card.innerHTML = 500
        }

        

        card.setAttribute('data-q', question.question)
        card.setAttribute('data-o-1', question.answer[0])
        card.setAttribute('data-o-2', question.answer[1])
        card.setAttribute('data-o-3', question.answer[2])
        card.setAttribute('data-o-4', question.answer[3])
        card.setAttribute('data-c', question.correct)
        card.setAttribute('data-v', card.getInnerHTML())
        card.addEventListener('click', flipCard)
    
    })
}

categories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ""
    this.style.fontSize="25px"
    this.style.lineHeight ="20px"
    const textBox = document.createElement('div')
    textBox.classList.add('card-text')
    textBox.innerHTML = this.getAttribute('data-q')

    const option1 = document.createElement('button')
    const option2 = document.createElement('button')
    const option3 = document.createElement('button')
    const option4 = document.createElement('button')

    option1.classList.add('option1')
    option2.classList.add('option2')
    option3.classList.add('option3')
    option4.classList.add('option4')

    option1.innerHTML= this.getAttribute('data-o-1')
    option2.innerHTML= this.getAttribute('data-o-2')
    option3.innerHTML= this.getAttribute('data-o-3')
    option4.innerHTML= this.getAttribute('data-o-4')

    option1.addEventListener('click', getAns)
    option2.addEventListener('click', getAns)
    option3.addEventListener('click', getAns)
    option4.addEventListener('click', getAns)

    this.append(textBox, option1, option2, option3, option4)

    const allCard = Array.from(document.querySelectorAll('.card'))
    allCard.forEach(card => card.removeEventListener('click', flipCard))
}

let score = 0

function getAns() {
    const allCard = Array.from(document.querySelectorAll('.card'))
    allCard.forEach(card => card.addEventListener('click', flipCard))

    const cardButton = this.parentElement

    if (cardButton.getAttribute('data-c') == this.innerHTML) {
        score = score + parseInt(cardButton.getAttribute('data-v'))
        totalScore.innerHTML = score
        cardButton.classList.add('c-ans')
        setTimeout(() =>{
            while (cardButton.firstChild) {
                cardButton.removeChild(cardButton.lastChild)
            }

            cardButton.innerHTML = cardButton.getAttribute('data-v')
            cardButton.style.fontSize = "60px"
            cardButton.style.color = "blue"
        }, 100)
        
    } 
    else {
        cardButton.classList.add('w-ans')
        setTimeout(() =>{
            while (cardButton.firstChild) {
                cardButton.removeChild(cardButton.lastChild)
            }

            cardButton.innerHTML = 0
            cardButton.style.fontSize = "60px"
            cardButton.style.color = "red"
        }, 100)
    }
    cardButton.removeEventListener('click', flipCard)
}