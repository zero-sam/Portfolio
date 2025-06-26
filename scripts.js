document.addEventListener('DOMContentLoaded', () => {
    const certificates = [
        'assets/certificate1.jpg',
        'assets/certificate2.jpg',
        'assets/certificate3.jpg'
    ];

    const gallery = document.getElementById('cert-gallery');
    certificates.forEach(cert => {
        const img = document.createElement('img');
        img.src = cert;
        img.alt = 'Certificate';
        img.classList.add('certificate-img');
        gallery.appendChild(img);
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Light animation on hero section load
    const heroText = document.querySelector('.hero h1');
    heroText.classList.add('fade-in');
});
