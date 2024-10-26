// Функция для запуска салюта с конфетти
function launchConfetti() {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  }
  
  // Функция для плавной прокрутки наверх
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Функция для отображения кнопки "Наверх" при прокрутке вниз
  window.onscroll = function() { toggleScrollButton(); };
  
  function toggleScrollButton() {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }
  }
  
  // Установка текущего года в футере
  document.getElementById("currentYear").textContent = new Date().getFullYear();