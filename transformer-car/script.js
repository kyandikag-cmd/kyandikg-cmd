// Get elements
const transformerCar = document.querySelector('.transformer-car');
const transformBtn = document.getElementById('transformBtn');
const resetBtn = document.getElementById('resetBtn');

let isTransformed = false;

// Transform button event listener
transformBtn.addEventListener('click', () => {
    if (!isTransformed) {
        transform();
    }
});

// Reset button event listener
resetBtn.addEventListener('click', () => {
    reset();
});

// Transform function
function transform() {
    transformerCar.classList.add('transformed');
    isTransformed = true;
    transformBtn.textContent = 'Transformed!';
    transformBtn.disabled = true;
    transformBtn.style.opacity = '0.6';
    transformBtn.style.cursor = 'not-allowed';
}

// Reset function
function reset() {
    transformerCar.classList.remove('transformed');
    isTransformed = false;
    transformBtn.textContent = 'Transform!';
    transformBtn.disabled = false;
    transformBtn.style.opacity = '1';
    transformBtn.style.cursor = 'pointer';
}

// Optional: Add keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        if (!isTransformed) {
            transform();
        } else {
            reset();
        }
    }
});

// Log initialization
console.log('🚗 Transformer Car Animation loaded!');
console.log('Press Space bar or click buttons to transform!');
