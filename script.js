function filterProjects(category) {
    let tiles = document.querySelectorAll('.tile');
    let buttons = document.querySelectorAll('.filter-options button');

    tiles.forEach(tile => {
        if (category === 'All' || tile.getAttribute('data-category') === category) {
            tile.classList.remove('hidden');
        } else {
            tile.classList.add('hidden');
        }
    });

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active-filter'));

    // Add active class to the selected button
    let activeButton = document.querySelector(`.filter-options button[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active-filter');
    }
}
//

function scrollToProjects() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

// Navigate to project pages when clicking tiles
document.addEventListener('DOMContentLoaded', () => {
    let projectLinks = {
        'pihead-fx~': '/projects/pihead-fx.html',
        'LINE Baito': '/projects/linebaito.html',
        'MusiCol': '/projects/musicol.html'
    };
    
    document.querySelectorAll('.tile').forEach(tile => {
        let projectName = tile.querySelector('p').innerText;
        if (projectLinks[projectName]) {
            tile.addEventListener('click', () => {
                window.location.href = projectLinks[projectName];
            });
        }
    });
});


//Typing line animations
document.addEventListener("DOMContentLoaded", function () {
    const text = "I envision creative solutions, and I make music!";
    const typingSpeed = 50; // Speed per letter (ms)
    let index = 0;
    const typedTextElement = document.getElementById("typed-text");
    const typingTextContainer = document.querySelector(".typing-text");

    // Ensure text is visible before typing starts
    typingTextContainer.style.visibility = "visible";

    function typeLetter() {
        if (index < text.length) {
            typedTextElement.innerHTML += text[index];
            index++;
            setTimeout(typeLetter, typingSpeed);
        }
    }

    function restartTyping() {
        index = 0;
        typedTextElement.innerHTML = ""; // Clear existing text
        typeLetter(); // Restart typing animation
    }

    // Start typing animation on load
    setTimeout(typeLetter, 500);

    // Restart typing animation when clicking the text
    typingTextContainer.addEventListener("click", function () {
        if (index < text.length) return; // Prevent interrupting an ongoing animation
        restartTyping();
    });
});

