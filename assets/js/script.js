// Toggle the visibility of extra profile details
function toggleProfileDetails() {
  const extra = document.getElementById('extra-profile');
  if (extra.style.display === 'none' || extra.style.display === '') {
    extra.style.display = 'block';
  } else {
    extra.style.display = 'none';
  }
}

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.textContent = '⬆';
scrollButton.id = 'scrollToTopBtn';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.display = 'none';
scrollButton.style.padding = '10px';
scrollButton.style.borderRadius = '50%';
scrollButton.style.border = 'none';
scrollButton.style.background = '#333';
scrollButton.style.color = '#fff';
scrollButton.style.cursor = 'pointer';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Image Zoom Modal for Pfp
const profilePic = document.getElementById('profile-pic');
profilePic.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '9999';
  modal.innerHTML = `<img src="${profilePic.src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;

  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
});

// Highlight section scroll
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 1.5 && rect.bottom > 0) {
      section.querySelector('h2').style.color = '#9b59b6';
    } else {
      section.querySelector('h2').style.color = '';
    }
  });
});

// Audio player
const audio = new Audio('assets/audio/CustomMusic.mp3');

let isPlaying = false;

function toggleSound() {
  const button = document.getElementById('soundBtn');
  
  if (!isPlaying) {
    audio.play();
    button.textContent = 'Pause Sound';
  } else {
    audio.pause();
    button.textContent = 'Play Sound';
  }

  isPlaying = !isPlaying;

  audio.onended = () => {
    isPlaying = false;
    button.textContent = 'Play Sound';
  };
}
