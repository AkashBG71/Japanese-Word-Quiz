// Define quizzes with different types of answers (Kanji, Hiragana, English)
const quizzes = {
    "Quiz Ex": {
        "規制": ["きせい", "Regulation", "restriction"],
        "個人主義": ["こじんしゅぎ", "Individualism"],
        "家父長制度": ["かふちょうせいど", "Patriarchal system"],
        "権力": ["けんりょく", "Power", "authority"],
        "モラル": ["モラル", "Morals", "ethics"],
        "支配": ["しはい", "Control", "domination"],
        "美名": ["びめい", "Good reputation", "fine name"],
        "真裏": ["まうら", "The exact opposite", "the reverse side"],
        "見えざる手": ["みえざるて", "Invisible hand"],
        "情報": ["じょうほう", "Information"]
    },
    "Quiz 1": {
        "尊ぶ": ["とうとぶ", "To respect", "To honor"],
        "体制的": ["たいせいてき", "Related to the system or regime"],
        "芸術家": ["げいじゅつか", "Artist", "someone who creates art"],
        "バレリーナ": ["バレリーナ", "Ballerina", "a female ballet dancer"],
        "配給": ["はいきゅう", "To distribute", "to supply"],
        "優遇する": ["ゆうぐうする", "To favor", "To give preferential treatment"],
        "職業": ["しょくぎょう", "Profession", "occupation"],
        "等": ["など", "Etcetera", "and so on"],
        "義務教育": ["ぎむきょういく", "Compulsory education", "mandatory schooling"],
        "教科": ["きょうか", "Subject", "curriculum"]
    },
    "Quiz 1(2)": {
        "時間": ["じかん", "Time", "referring to a period or class time"],
        "減らす": ["へらす", "To reduce", "to decrease"],
        "国策": ["こくさく", "National policy"],
        "科学的": ["かがくてき", "Scientific"],
        "発見": ["はっけん", "Discovery"],
        "迅速な": ["じんそくな", "Swift", "prompt"],
        "役に立たない": ["やくにたたない", "Useless", "not helpful"],
        "感性": ["かんせい", "Sensibility", "sensitivity, the ability to perceive beauty"],
        "執拗な": ["しつような", "Persistent", "tenacious"],
        "努力する": ["どりょくする", "To make an effort", "to strive"],
        "両輪": ["りょうりん", "Two wheels", "used metaphorically for two complementary components"],
        "開く": ["ひらく", "To open", "To develop, to create"],
        "創造する": ["そうぞうする", "To create", "to bring into existence"]

    },

    "Quiz 2(1)": {
        "大同小異": ["だいどうしょうい", "Almost the same"],
        "往き来": ["いきき", "Going back and forth"],
        "小異": ["しょうい", "Small difference"],
        "雑誌": ["ざっし", "Magazine"],
        "求める": ["もとめる", "To ask for"],
        "都市風景": ["としふうけい", "Cityscape"],
        "多角的": ["たかくてき", "From many perspectives"],
        "企画": ["きかく", "Plan", "project"],
        "相談": ["そうだん", "Consultation"],
        "迷わず": ["まよわず", "Without hesitation"],
    },
    "Quiz 2(2)": {
        "大阪湾岸": ["おおさかわんがん", "Osaka Bay area"],
        "工場群": ["こうじょうぐん", "Factory group"],
        "港湾施設": ["こうわんしせつ", "Port facilities"],
        "風景": ["ふうけい", "Landscape"],
        "編集者": ["へんしゅうしゃ", "Editor"],
        "驚く": ["おどろく", "To be surprised"],
        "岸壁": ["がんぺき", "Wharf"],
        "一般市民": ["いっぱんしみん", "General public"],
        "当たり前": ["あたりまえ", "As expected"],
        "事実": ["じじつ", "Fact"],
    },
    "Quiz 3": { //Quiz 2(2) was duplicated, changed to Quiz 3 and added new words
        "港": ["みなと", "Harbor", "Port"],
        "発着場": ["はっちゃくじょう", "Boarding place", "Terminal"],
        "海岸線": ["かいがんせん", "Coastline", "Seashore"],
        "倉庫": ["そうこ", "Warehouse", "Storage"],
        "埋立地": ["うめたてち", "Reclaimed land", "Landfill"],
        "埠頭": ["ふとう", "Pier", "Wharf"],
        "私有地": ["しゆうち", "Private land", "Proprietary land"],
        "管理地": ["かんりち", "Managed land", "Overseen land"],
        "出入口": ["でいりぐち", "Entrance and exit", "Doorway"],
        "閉じる": ["とじる", "To close", "To shut"],
        "開く": ["ひらく", "To open", "To unlock"],
        "文藝春秋": ["ぶんげいしゅんじゅう", "Literary magazine", "Literary journal"],
        "驚愕": ["きょうがく", "Shock", "Astonishment"],
        "自由": ["じゆう", "Freedom", "Liberty"],
        "制限": ["せいげん", "Limitation", "Restriction"]
    },
    // Add more quizzes as needed...
};

let mistakes = JSON.parse(localStorage.getItem('mistakes')) || [];
let currentWord = "",
    currentQuiz = "Quiz Ex",
    wrongAttempts = 0;
let questionType = ""; // Variable to store the question type (reading or meaning)
let activeSidebar = null; // Track active sidebar
const hiraganaMap = {
    'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
    'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
    'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
    'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
    'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
    'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
    'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
    'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
    'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
    'wa': 'わ', 'wi': 'ゐ', 'we': 'ゑ', 'wo': 'を',
    'n': 'ん',
    'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
    'za': 'ざ', 'ji': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
    'da': 'だ', 'di': 'ぢ', 'du': 'づ', 'de': 'で', 'do': 'ど',
    'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
    'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',
    'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
    'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
    'cha': 'ちゃ', 'chu': 'ちゅ', 'cho': 'ちょ',
    'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
    'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
    'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
    'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
    'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
    'ja': 'じゃ', 'ju': 'じゅ', 'jo': 'じょ',
    'dha': 'ぢゃ', 'dhu': 'ぢゅ', 'dho': 'ぢょ',
    'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
    'pya': 'ぴゃ', 'pyu': 'ぷゅ', 'pyo': 'ぴょ',
    'vu': 'ゔ', 'va': 'ヴぁ', 'vi': 'ヴぃ', 've': 'ヴぇ', 'vo': 'ヴぉ',
    'fa': 'ふぁ', 'fi': 'ふぃ', 'fe': 'ふぇ', 'fo': 'ふぉ',
    'xtsu': 'っ', 'ltu': 'っ',
};


function loadQuizzes() {
    let quizList = document.getElementById("quiz-list");
    quizList.innerHTML = "";
    for (let quiz in quizzes) {
        let li = document.createElement("li");
        li.textContent = quiz;
        li.onclick = () => {
            currentQuiz = quiz;
            newQuestion();
            closeSidebars(); // Close sidebar after quiz selection
        };
        quizList.appendChild(li);
    }
}

function newQuestion() {
    let words = quizzes[currentQuiz];
    let keys = Object.keys(words);
    currentWord = keys[Math.floor(Math.random() * keys.length)];
    let wordData = words[currentWord];
    questionType = Math.random() < 0.5 ? "reading" : "meaning"; // Randomly choose question type

    if (questionType === "reading") {
        document.getElementById("question").innerText = `What is the Hiragana reading of Kanji: ${currentWord}?`;
    } else {
        document.getElementById("question").innerText = `What is the English meaning of: ${currentWord} or ${wordData[0]}?`;
    }
    document.getElementById("answer").value = "";
    document.getElementById("show-answer").style.display = "none";
    document.getElementById("next-quiz").style.display = "none";
    document.getElementById("result").innerText = "";
    wrongAttempts = 0;
    document.getElementById("answer").focus(); // Automatically focus on the input for better UX
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    let correctAnswers;

    if (questionType === "reading") {
        correctAnswers = [quizzes[currentQuiz][currentWord][0].toLowerCase()]; // Only accept Hiragana
    } else {
        correctAnswers = quizzes[currentQuiz][currentWord].slice(1).map(answer => answer.toLowerCase()); // Accept English meanings
    }


    // Check if the answer is correct
    if (correctAnswers.includes(userAnswer)) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("result").className = 'correct-answer-text';
        document.getElementById("answer").className = 'correct-answer-input';

        document.getElementById("answer").disabled = true;
        document.getElementById("submit-button").disabled = true;

        setTimeout(newQuestion, 1200);

        setTimeout(() => {
            document.getElementById("result").innerText = "";
            document.getElementById("result").className = '';
            document.getElementById("answer").className = '';
            document.getElementById("answer").disabled = false;
            document.getElementById("submit-button").disabled = false;
        }, 1200);


    } else {
        wrongAttempts++;
        document.getElementById("result").innerText = "Incorrect! Try again.";
        document.getElementById("result").className = 'incorrect-answer-text';
        document.getElementById("answer").className = 'incorrect-answer-input';


        if (!mistakes.some(item => item.word === currentWord)) {
            mistakes.push({
                word: currentWord,
                correctAnswer: quizzes[currentQuiz][currentWord].join(", ")
            });
            localStorage.setItem('mistakes', JSON.stringify(mistakes));
            updateMistakes();
        }

        document.getElementById("show-answer").style.display = "inline-block";
    }
}

function showAnswer() {
    let correctAnswer = quizzes[currentQuiz][currentWord].join(", ");
    document.getElementById("result").innerText = `Correct Answer: ${correctAnswer}`;
    document.getElementById("result").className = 'show-answer-text';
    document.getElementById("next-quiz").style.display = "inline-block";
    document.getElementById("show-answer").style.display = "none";
}

function updateMistakes() {
    let mistakeList = document.getElementById("mistake-list");
    mistakeList.innerHTML = "";

    mistakes.forEach(mistake => {
        let li = document.createElement("li");
        li.classList.add("mistake-item");
        li.textContent = mistake.word;
        let answer = document.createElement("span");
        answer.classList.add("mistake-answer");
        answer.textContent = ` - ${mistake.correctAnswer}`;
        li.appendChild(answer);

        li.onclick = () => answer.style.display = answer.style.display === "none" ? "inline" : "none";
        mistakeList.appendChild(li);
    });
}

function clearMistakes() {
    mistakes = [];
    localStorage.removeItem('mistakes');
    updateMistakes();
}

function closeSidebars() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("right-sidebar").classList.remove("active");
    document.getElementById("toggle-sidebar").style.display = 'block'; // Show Menu button
    document.getElementById("toggle-right-sidebar").style.display = 'block'; // Show Mistakes button
    activeSidebar = null;
}

function openSidebar(sidebarId) {
    closeSidebars(); // Close other sidebars first
    document.getElementById(sidebarId).classList.add("active");
    document.getElementById("toggle-sidebar").style.display = sidebarId === 'sidebar' ? 'none' : 'block'; // Hide Menu button if sidebar is open
    document.getElementById("toggle-right-sidebar").style.display = sidebarId === 'right-sidebar' ? 'none' : 'block'; // Hide Mistakes button if right sidebar is open
    activeSidebar = sidebarId === 'sidebar' ? 'left' : 'right';
}


// Sidebar toggle
document.getElementById("toggle-sidebar").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent immediate closing by document click listener
    openSidebar('sidebar');
});

document.getElementById("toggle-right-sidebar").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent immediate closing by document click listener
    openSidebar('right-sidebar');
});

// Toggle night mode and store preference in localStorage
document.getElementById("night-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('lightMode', isLightMode ? 'enabled' : 'disabled');
});

// Function to set initial theme based on localStorage
function setInitialTheme() {
    const lightModeSetting = localStorage.getItem('lightMode');
    if (lightModeSetting === 'enabled') {
        document.body.classList.add('light-mode');
    }
};

// Function to convert romaji to hiragana for 'answer' input field
document.getElementById('answer').addEventListener('input', function () {
    if (questionType === 'reading') {
        let inputText = this.value.toLowerCase();
        let convertedText = '';
        let inputIndex = 0;

        while (inputIndex < inputText.length) {
            let matchedHiragana = false;

            // **Priority 1: Check for 'n' + vowel/y combinations (na, ni, nu, ne, no, nya, nyu, nyo)**
            if (inputText[inputIndex] === 'n' && inputIndex + 1 < inputText.length) {
                let nextChar = inputText[inputIndex + 1];
                if (['a', 'i', 'u', 'e', 'o', 'y'].includes(nextChar)) {
                    let combinedRomaji = 'n' + nextChar;
                    if (hiraganaMap[combinedRomaji]) {
                        convertedText += hiraganaMap[combinedRomaji];
                        inputIndex += 2;
                        matchedHiragana = true;
                    }
                }
            }

            // **Priority 2: Check for 'n' + space conversion (only if Priority 1 wasn't matched)**
            if (!matchedHiragana && inputText[inputIndex] === 'n' && inputIndex + 1 < inputText.length && inputText[inputIndex + 1] === ' ') {
                convertedText += hiraganaMap['n']; // Convert 'n' to 'ん'
                inputIndex += 2; // Skip 'n' and space
                matchedHiragana = true;
            }

            // **If neither Priority 1 nor 2 matched, handle other Romaji or just keep the character**
            if (!matchedHiragana) {
                let currentChunk = inputText.substring(inputIndex);
                let foundGeneralMatch = false;
                for (let length = Math.min(3, currentChunk.length); length >= 1; length--) {
                    let romajiChunk = currentChunk.substring(0, length);
                    if (hiraganaMap[romajiChunk] && romajiChunk !== 'n') { // Exclude single 'n' from general match
                        convertedText += hiraganaMap[romajiChunk];
                        inputIndex += length;
                        matchedHiragana = true;
                        foundGeneralMatch = true;
                        break; // Important: break after finding a general match
                    }
                }
                if (!foundGeneralMatch) {
                    convertedText += inputText[inputIndex]; // If no Romaji match, keep the character as is
                    inputIndex++;
                }
            }
        }
        this.value = convertedText;
    }
});


loadQuizzes();
newQuestion();
updateMistakes();
setInitialTheme();

document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const toggleRightSidebarButton = document.getElementById('toggle-right-sidebar');

    if (!sidebar.contains(event.target) && !rightSidebar.contains(event.target) &&
        event.target !== toggleSidebarButton && event.target !== toggleRightSidebarButton) {
        closeSidebars();
    }
});


// submit when pressing enter
document.getElementById("answer").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-button").click();
    }
});