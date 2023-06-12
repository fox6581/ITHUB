const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
const sliderThumb = document.querySelector('.slider-thumb');
const sliderScale = document.querySelector('.slider-scale');
const sliderScaleValues = document.querySelector('.slider-scale-values');
let isDragging = false;
let minValue = 0;
let maxValue = 100;
let currentValue = 0;


function updateSliderColor() {
    const sliderRect = sliderTrack.getBoundingClientRect();
    const percentage = (currentValue - minValue) / (maxValue - minValue) * 100;
  
    // Изменяем цвет шкалы
    const trackColor = `linear-gradient(to right, #00FF00 ${percentage}%, #999999 ${percentage}%)`;
    sliderTrack.style.background = trackColor;
  
    // Изменяем цвет рисок
    const scaleMarks = sliderScale.querySelectorAll('span');
    scaleMarks.forEach((scaleMark, index) => {
      const markPercentage = (index * 10) / 50 * 100;
      if (markPercentage <= percentage) {
        scaleMark.style.background = '#00FF00';
      } else {
        scaleMark.style.background = '#999999';
      }
    });
  }

function updateSliderValue() {
  sliderScaleValues.textContent = currentValue;
}

sliderTrack.addEventListener('click', (event) => {
  const sliderRect = sliderTrack.getBoundingClientRect();
  const mouseX = event.clientX - sliderRect.left;

  const position = Math.max(0, Math.min(sliderRect.width, mouseX));
  const percentage = (position / sliderRect.width) * 100;
  const newValue = (percentage / 100) * (maxValue - minValue) + minValue;
  currentValue = Math.round(newValue);

  updateSliderValue();
  updateSliderColor();

  const thumbPosition = `${percentage}%`;
  sliderThumb.style.left = thumbPosition;
});


function handleThumbMove(event) {
  if (!isDragging) return;

  const sliderRect = sliderTrack.getBoundingClientRect();
  const mouseX = event.clientX - sliderRect.left;

  // Учитываем границы шкалы
  let position = mouseX;
  if (position < 0) {
    position = 0;
  } else if (position > sliderRect.width) {
    position = sliderRect.width;
  }

  const percentage = (position / sliderRect.width) * 100;
  const newValue = (percentage / 100) * (maxValue - minValue) + minValue;
  currentValue = Math.round(newValue);

  if (currentValue < minValue) {
    currentValue = minValue;
  } else if (currentValue > maxValue) {
    currentValue = maxValue;
  }

  updateSliderValue();

  const thumbPosition = `${percentage}%`;
  sliderThumb.style.left = thumbPosition;

  updateSliderColor();
}

sliderThumb.addEventListener('mousedown', () => {
    isDragging = true;
    document.addEventListener('mousemove', handleThumbMove);
  });
  

  sliderThumb.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleThumbMove);
  });
  
  document.addEventListener('mouseleave', () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleThumbMove);
  });



document.addEventListener('mouseup', () => {
  if (!isDragging) return;

  isDragging = false;
  document.removeEventListener('mousemove', handleThumbMove);
});

// Добавление рисок на шкалу
for (let i = 0; i <= 5; i++) {
  const scaleMark = document.createElement('span');
  scaleMark.style.left = `${(i / 5) * 100}%`;
  sliderScale.appendChild(scaleMark);
}

// Инициализация значения слайдера
updateSliderValue();
updateSliderColor();
