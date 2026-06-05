document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const btn = document.querySelector('.login-btn');
      const originalText = btn.textContent;
      btn.disabled = true;

      setTimeout(() => {
        window.location.href = "home.html";   // ou "index.html" se preferir
      }, 800);
    });