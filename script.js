const main = document.getElementById('main')
const totalScore = document.getElementById('score')

const categories = [
    {
        topic : "Phishing",
        questions : [
            {
                question : "What is phishing?",
                answer: [
                            "An online game",
                            "A fishing activity", 
                            "An attempt to steal personal information online",
                            "A legitimate way to obtain personal information",
                        ],
                correct : "An attempt to steal personal information online",
                level: "100",
            },
            {
                question : "What is a common method of phishing?",
                answer: [
                            "Sending spam emails", 
                            "Making phone calls", 
                            "Sending text messages",
                            "Sending handwritten letters",
                        ],
                correct : "Sending spam emails",
                level: "200",
            },
            {
                question : "What should you do if you suspect an email is a phishing attempt?",
                answer: [
                            "Forward the email to all your contacts", 
                            "Click on all the links in the email to see if they're legitimate", 
                            "Reply to the email and ask for clarification", 
                            "Delete the email immediately",],
                correct : "Delete the email immediately",
                level: "300",
            },
            {
                question : "What is a phishing email?",
                answer: [
                            "An email that looks like it's from a legitimate source but is trying to steal personal information", 
                            "An email that advertises a legitimate product or service", 
                            "An email that contains only text and no links",  
                            "An email that always asks for a small donation to a charity"],
                correct : "An email that looks like it's from a legitimate source but is trying to steal personal information",
                level: "400",
            },
            {
                question : "How can you spot a phishing email?",
                answer: [
                            "It will always be sent from a known source", 
                            "It will contain urgent or threatening language", 
                            "It will always ask for personal or financial information.", 
                            "The email will be grammatically correct with no spelling errors.", ],
                correct : "It will contain urgent or threatening language",
                level: "500",
            },
        ],
    },
    {
        topic : "Ransomware",
        questions : [
            {
                question : "Which of the following actions should you take if you become a victim of ransomware?",
                answer: [
                            "Pay the ransom immediately to receive the decryption key", 
                            "Report the attack to law enforcement", 
                            "Ignore the attack and hope it goes away", 
                            "Disconnect your computer from the internet and power source"],
                correct : "Report the attack to law enforcement",
                level: "100",
            },
            {
                question : "Which of the following is a common way to prevent ransomware attacks from occurring",
                answer: [
                            "Regularly backing up important data", 
                            "Disabling anti-virus software", 
                            "Clicking on links in emails from unknown senders", 
                            "Using weak passwords for all accounts"],
                correct : "Regularly backing up important data",
                level: "200",
            },
            {
                question : "Which of the following is NOT a common delivery method for ransomware?",
                answer: [
                            "Phishing emails", 
                            "Social media posts", 
                            "USB drives", 
                            "Online gaming sites"],
                correct : "Social media posts",
                level: "300",
            },
            {
                question : "Which of the following is an example of a high-profile ransomware attack?",
                answer: ["WannaCry", "Maze Runner", "NanoCore", "Emotet"],
                correct : "WannaCry",
                level: "400",
            },
            {
                question : "Which type of ransomware encrypts files on a victim's computer until a ransom is paid?",
                answer: ["Scareware", "Locker ransomware", "Crypto ransomware", "Screen locker ransomware"],
                correct : "Locker ransomware",
                level: "500",
            },
        ],
    },
    {
        topic : "Denial of Service",
        questions : [
            {
                question : "What is the primary purpose of a DoS attack?",
                answer: ["To steal sensitive data", "To hijack a victim's device", "To render a service or network unavailable", "To gain control over a network"],
                correct : "To render a service or network unavailable",
                level: "100",
            },
            {
                question : "What type of botnet is used to orchestrate a Distributed Denial of Service (DDoS) attack?",
                answer: ["Trojan horse botnet", " Worm botnet", "Rootkit botnet", "Fileless botnet"],
                correct : "Trojan horse botnet",
                level: "200",
            },
            {
                question : "Which of the following is NOT an example of a Layer 7 (application layer) DoS attack?",
                answer: ["HTTP flood attack", "Slowloris attack", "Ping of Death attack", "XML attack"],
                correct : "Ping of Death attack",
                level: "300",
            },
            {
                question : "Which type of Denial of Service (DoS) attack involves flooding a victim's network with traffic to cause it to crash or become inaccessible?",
                answer: ["DNS amplification attack", "Smurf attack", "UDP flood attack", "SYN flood attack"],
                correct : "SYN flood attack",
                level: "400",
            },
            {
                question : "Which of the following is a technique used to prevent or mitigate the effects of DoS attacks?",
                answer: ["Installing anti-virus software", "Implementing network firewalls", "Enabling two-factor authentication", "Using load balancing and traffic shaping technologies"],
                correct : "Implementing network firewalls",
                level: "500",
            },
        ],
    },

    {
        topic : "Ethical Hacking",
        questions : [
            {
                question : "Which of the following is not a type of ethical hacking?",
                answer: ["White-hat hacking", "Black-hat hacking", "Gray-hat hacking", "Red-hat hacking"],
                correct : "Black-hat hacking",
                level: "100",
            },
            {
                question : "Which of the following is an ethical consideration that an ethical hacker must always adhere to?",
                answer: ["Maximizing profits for the client", "Preserving data integrity and confidentiality", "Keeping vulnerabilities secret for future use", "Utilizing any and all available means to identify vulnerabilities"],
                correct : "Preserving data integrity and confidentiality",
                level: "200",
            },
            {
                question : "An ethical hacker can legally perform which of the following activities without prior permission from the target organization?",
                answer: ["Password cracking", "Network scanning", "Website defacement", "Malware installation"],
                correct : "Network scanning",
                level: "300",
            },
            {
                question : "Which of the following is not an essential component of a well-designed ethical hacking framework?",
                answer: ["Planning and preparation", "Vulnerability assessment", "Exploitation and dissemination", "Reporting and documentation"],
                correct : "Exploitation and dissemination",
                level: "400",
            },
            {
                question : "In ethical hacking, what does the term social engineering refer to?",
                answer: ["The use of physical access to gain unauthorized entry into a secure facility", "The use of software tools to perform automated scans for vulnerabilities", "The exploitation of psychological vulnerabilities to gain unauthorized access to information", "The use of encryption algorithms to secure sensitive data during transmission"],
                correct : "The use of encryption algorithms to secure sensitive data during transmission",
                level: "500",
            },
        ],
    },
    {
        topic : "Fuzzing",
        questions : [
            {
                question : "Which of the following is NOT a common form of mutation-based fuzzing?",
                answer: ["Random mutation", "Intelligent mutation", " Hybrid mutation", "Semantic mutation"],
                correct : "Semantic mutation",
                level: "100",
            },
            {
                question : "What is the term used to describe repeatedly testing an input field with a wide range of values in fuzzing?",
                answer: ["Incremental testing", "Mutational testing", "Boundary testing", "Exhaustive testing"],
                correct : "Mutational testing",
                level: "200",
            },
            {
                question : "What is the purpose of fuzzing in cyber security?",
                answer: ["To detect and exploit vulnerabilities in software", "To secure networks against cyber attacks", "To identify and eliminate potential coding errors", "To monitor and analyze network traffic"],
                correct : "To detect and exploit vulnerabilities in software",
                level: "300",
            },
            {
                question : "Which of the following is NOT a type of network protocol-based fuzzing?",
                answer: ["IP protocol fuzzing", "XML protocol fuzzing", "HTTP protocol fuzzing", "SSH protocol fuzzing"],
                correct : "SSH protocol fuzzing",
                level: "400",
            },
            {
                question : "What is the term used to describe a fuzzing approach where an input field is tested with values that are intentionally crafted to break the target application?",
                answer: ["Intelligent fuzzing", "Negative testing", "Anti-pattern testing", "Exploit-based testing"],
                correct : "Negative testing",
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
    this.style.fontSize="20px"
    this.style.lineHeight ="18px"
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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        display.textContent = "00:00";
        const allCard = Array.from(document.querySelectorAll('.card'))
        allCard.forEach(card => card.removeEventListener('click', flipCard))
      }
    }, 1000);
  }
  
  window.onload = function () {
    var setTime = 299,
      display = document.querySelector('#timer');
    startTimer(setTime, display);
  };