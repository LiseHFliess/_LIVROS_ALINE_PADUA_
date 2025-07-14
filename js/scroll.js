document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    // const navHeight = 80; // REMOVA ou COMENTE esta linha

    // Seleciona a sua navegação fixa
    const navBar = document.querySelector('.nav-fixa'); 

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 100);
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (scrollDownBtn) {
        scrollDownBtn.classList.add('show');

        scrollDownBtn.addEventListener('click', () => {
            // Obtenha a altura REAL da navegação no momento do clique
            const navHeight = navBar ? navBar.offsetHeight : 0; // Se a nav existir, pega a altura, senão 0
            
            const headings = Array.from(document.querySelectorAll('[id] h2, footer[id] h1'));

            // O +5 é uma pequena margem extra para garantir que o h2 não fique grudado demais
            const currentScroll = window.scrollY + navHeight + 5; 

            // Encontrar o próximo <h2> que ainda não está visível
            const nextHeading = headings.find(h2 => {
                const offset = h2.getBoundingClientRect().top + window.scrollY;
                return offset > currentScroll;
            });

            if (nextHeading) {
                // Calcula o ponto exato para rolar, subtraindo a altura da navegação fixa
                const targetOffset = nextHeading.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetOffset, behavior: 'smooth' });
            }
        });
    }
});
