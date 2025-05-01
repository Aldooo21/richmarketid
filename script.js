// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Modal functionality
const modal = document.getElementById('product-modal');
const serviceButtons = document.querySelectorAll('.btn-service');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const productsContainer = document.getElementById('products-container');

// WhatsApp number for product purchase (replace with your actual number)
const whatsappNumber = "6281234610140";

// Product data for each category
const products = {
    'whatsapp-bot': [
        {
            name: "PANEL PEMULA",
            image: "/image/panel.jpg",
            rating: 5,
            price: "Rp 5.000",
            description: "Cocok Untuk Penggunakan Ringan dengan Spesifikasi ram 2GB CPU 50 % DISK 2GB SSD ANTI DDOS."
        },
        {
            name: "PANEL BEGINNER",
            image: "/image/panel.jpg",
            rating: 5,
            price: "Rp 8.000",
            description: "Cocok Untuk Penggunakan Ringan dengan Spesifikasi RAM 5GB CPU 120 % DISK 5GB SSD ANTI DDOS."
        },
        {
            name: "PANEL PRO",
            image: "/image/panel.jpg",
            rating: 4,
            price: "Rp 12.000",
            description: "Cocok Untuk Penggunakan Lumayan Berat dengan Spesifikasi RAM 9GB CPU 180 % DISK 9GB SSD ANTI DDOS."
        },
        {
            name: "PANEL SEPUH",
            image: "/image/panel.jpg",
            rating: 5,
            price: "Rp 15.000",
            description: "UNLIMITEDD BOSS ANTI DELAYYY."
        },
    ],
    'premium-apps': [
        {
            name: "netflix",
            image: "https://i.pinimg.com/736x/bb/d3/5a/bbd35af1170b0cbaa9578bd1af3860dd.jpg",
            rating: 5,
            price: "Rp 35.000/bulan",
            description: "Akses Netflix Premium dengan kualitas 4K."
        },
        {
            name: "spotify",
            image: "https://i.pinimg.com/736x/ae/5d/70/ae5d708876f43447c6688fbafd67c6bf.jpg",
            rating: 5,
            price: "Rp 18.000/bulan",
            description: "Nikmati musik tanpa iklan dan download offline."
        },
        {
            name: "youTube",
            image: "https://i.pinimg.com/736x/6c/c5/3f/6cc53fcb6be4bba0291c3eb17b09105e.jpg",
            rating: 4,
            price: "Rp 10.000/bulan",
            description: "YouTube tanpa iklan dengan background play."
        },
        {
            name: "disney",
            image: "https://i.pinimg.com/736x/6f/61/09/6f6109cb704c4451782df20a361cd1d9.jpg",
            rating: 5,
            price: "Rp 45.000/bulan",
            description: "Streaming Disney, Marvel, Star Wars, dan lainnya."
        },
        {
            name: "capcut",
            image: "https://i.pinimg.com/736x/fd/e4/6a/fde46ad530b5352eccaaa9ceea438278.jpg",
            rating: 5,
            price: "Rp 20.000/bulan",
            description: "Akses Premium ke semua fitur capcut."
        },
        {
            name: "canva",
            image: "https://i.pinimg.com/736x/9f/62/bb/9f62bb89a06b4f7e6b0b032051108100.jpg",
            rating: 5,
            price: "Rp 10.000/bulan",
            description: "akses lengkap ke semua premium canva."
        },
        {
            name: "aligmotion",
            image: "https://i.pinimg.com/736x/ad/ec/02/adec021dc67aaa1e6e8216b81e7f77cf.jpg",
            rating: 5,
            price: "Rp 10.000/tahun",
            description: "akses lengkap ke semua premium aligmtion."
        }
    ],
    'game-topup': [
        {
            name: "TOPUP ALL GAME",
            image: "https://i.pinimg.com/736x/d1/98/31/d1983117bd4fdd0866593ee192c45345.jpg",
            rating: 5,
            price: "Mulai Rp 1.000",
            description: "Top up Game kesayangan kamu disini yaa."
        },
    ],
    'whatsapp-scripts': [
        {
            name: "BOT STORE",
            image: "https://i.pinimg.com/736x/17/5f/a7/175fa7a67a025063eefbc239e35a2a85.jpg",
            rating: 5,
            price: "Rp 50.000",
            description: "Script Cocok untuk menampilkan list produk cocok untuk jualan."
        },
        {
            name: "BOT TOP UP V2",
            image: "https://i.pinimg.com/736x/7c/d4/33/7cd4330f413bcfcadfba0fc442a55385.jpg",
            rating: 4,
            price: "Rp 200.000",
            description: "Bot Top Up Cocok Untuk kamu yang pengen jualan kamu serba automatis dengan interaksi Digiflazz dan payment gate away order kouta."
        },
        {
            name: "BOT TOP UP V1",
            image: "https://i.pinimg.com/736x/52/1d/78/521d78fd80cdf7af9f28a463957e710f.jpg",
            rating: 5,
            price: "Rp 150.000",
            description: "Bot Top Up cocok untuk kamu pengguna OKE CONECT pokonya srba automatis dehhh."
        },
    ]
};

// Open modal with specific category
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        openProductModal(category);
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to open modal with products
function openProductModal(category) {
    // Set modal title based on category
    let title;
    switch(category) {
        case 'whatsapp-bot':
            title = 'Panel Bot WhatsApp';
            break;
        case 'premium-apps':
            title = 'Aplikasi Premium';
            break;
        case 'game-topup':
            title = 'Top Up Game';
            break;
        case 'whatsapp-scripts':
            title = 'Script Bot WhatsApp';
            break;
        default:
            title = 'Produk Kami';
    }
    
    modalTitle.textContent = title;
    
    // Clear previous products
    productsContainer.innerHTML = '';
    
    // Create product cards
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Create rating stars
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < product.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${stars}</div>
                <div class="product-price">${product.price}</div>
                <p>${product.description}</p>
                <div style="margin-top: auto; padding-top: 15px;">
                    <a href="https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan produk ${product.name}" class="buy-btn" target="_blank">
                        Beli Sekarang
                    </a>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Slider Auto-scroll
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

function scrollTestimonials() {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    const scrollPosition = testimonialItems[currentIndex].offsetLeft - testimonialSlider.offsetLeft;
    testimonialSlider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Scroll testimonials every 5 seconds
setInterval(scrollTestimonials, 5000);

// Scroll header style change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});
