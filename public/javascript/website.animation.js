// Tab Animation 
const title = [
    'Rapguide.net'
]

let index = 0;
let Backspace = false;

function animatedTitle() {
    const titleElement = document.getElementById('animated-title')
}

// Role Changes Every 3 Seconds Animation
const roles = [
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'GTA SA-MP Scripter',
];

let currentRoleIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % roles.length;

    const currentRole = roles[currentIndex];
    console.log('Current Role:', currentRole);
}, 3000);

