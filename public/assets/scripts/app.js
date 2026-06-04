// Efeito hover no botão principal
    const btn = document.querySelector('.cta-button');
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff4d4d, #DA291C)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.background = '#DA291C';
    });