// ============================================
// TechNova — Shared Components & Utilities
// ============================================

const CURRENCY = '₦';
function formatPrice(amount) { return CURRENCY + amount.toLocaleString('en-NG'); }

// ---- Product Data ----
const allProducts = [
    { id: 1, name: "iPhone 15 Pro Max", category: "phones", brand: "Apple", price: 1799000, originalPrice: 1999000, rating: 4.8, reviews: 342, badge: "hot", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", description: "Titanium design with A17 Pro chip, 48MP camera system, and all-day battery life. Features USB-C, Action Button, and the most powerful iPhone chip ever.", specs: { Display: "6.7\" Super Retina XDR", Chip: "A17 Pro", Camera: "48MP Main", Battery: "29hr video", Storage: "256GB-1TB" } },
    { id: 2, name: "Samsung Galaxy S24 Ultra", category: "phones", brand: "Samsung", price: 1599000, originalPrice: 1899000, rating: 4.7, reviews: 289, badge: "sale", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80", description: "Galaxy AI built in. Titanium frame, 200MP camera, and S Pen included. Circle to Search, Live Translate, and generative edit for photos.", specs: { Display: "6.8\" Dynamic AMOLED", Chip: "Snapdragon 8 Gen 3", Camera: "200MP Main", Battery: "5000mAh", Storage: "256GB-1TB" } },
    { id: 3, name: "MacBook Pro 16\" M3 Max", category: "laptops", brand: "Apple", price: 3499000, originalPrice: 3999000, rating: 4.9, reviews: 156, badge: "new", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", description: "M3 Max chip with up to 16-core CPU and 40-core GPU. 36GB unified memory, stunning Liquid Retina XDR display, and 22-hour battery life.", specs: { Display: "16.2\" Liquid Retina XDR", Chip: "M3 Max", RAM: "36GB Unified", Battery: "22 hours", Storage: "512GB-8TB" } },
    { id: 4, name: "Sony WH-1000XM5", category: "audio", brand: "Sony", price: 449000, originalPrice: 599000, rating: 4.8, reviews: 521, badge: "sale", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80", description: "Industry-leading noise cancellation with Auto NC Optimizer and crystal clear hands-free calling. 30-hour battery with quick charging.", specs: { Type: "Over-ear Wireless", ANC: "Industry-leading", Battery: "30 hours", Driver: "30mm", Weight: "250g" } },
    { id: 5, name: "Canon EOS R6 Mark II", category: "cameras", brand: "Canon", price: 3299000, originalPrice: 3599000, rating: 4.7, reviews: 98, badge: "new", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", description: "24.2MP full-frame mirrorless camera with 40fps continuous shooting, advanced subject detection AF, and 4K 60p oversampled video.", specs: { Sensor: "24.2MP Full-frame", AF: "1053 points", Video: "4K 60p", Burst: "40fps", ISO: "100-102400" } },
    { id: 6, name: "Apple Watch Ultra 2", category: "wearables", brand: "Apple", price: 1199000, originalPrice: 1399000, rating: 4.6, reviews: 213, badge: "hot", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80", description: "The most rugged and capable Apple Watch with precision dual-frequency GPS, 36-hour battery, and the brightest Always-On display.", specs: { Display: "49mm Always-On", Chip: "S9 SiP", Battery: "36 hours", Water: "100m", Material: "Titanium" } },
    { id: 7, name: "Dell XPS 15 OLED", category: "laptops", brand: "Dell", price: 2399000, originalPrice: 2799000, rating: 4.5, reviews: 178, badge: "sale", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&q=80", description: "15.6\" 3.5K OLED display with 100% DCI-P3, Intel Core i7-13700H, 16GB DDR5 RAM, NVIDIA RTX 4060 graphics.", specs: { Display: "15.6\" 3.5K OLED", CPU: "i7-13700H", GPU: "RTX 4060", RAM: "16GB DDR5", Storage: "512GB SSD" } },
    { id: 8, name: "AirPods Pro 2nd Gen", category: "audio", brand: "Apple", price: 299000, originalPrice: 379000, rating: 4.7, reviews: 834, badge: "hot", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80", description: "Adaptive Audio, personalized Spatial Audio, and up to 2x more Active Noise Cancellation. USB-C charging case with speaker and lanyard loop.", specs: { Type: "In-ear Wireless", ANC: "2x Active", Battery: "6hr + 30hr case", Chip: "H2", Water: "IPX4" } },
    { id: 9, name: "Samsung Galaxy Watch 6", category: "wearables", brand: "Samsung", price: 449000, originalPrice: 529000, rating: 4.4, reviews: 167, badge: "sale", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80", description: "Advanced health monitoring with BioActive Sensor, sleep coaching, body composition analysis, and Wear OS powered by Samsung.", specs: { Display: "1.5\" AMOLED", Sensor: "BioActive 3-in-1", Battery: "425mAh", OS: "Wear OS", Water: "5ATM+IP68" } },
    { id: 10, name: "Sony Alpha A7 IV", category: "cameras", brand: "Sony", price: 3199000, originalPrice: 3599000, rating: 4.8, reviews: 132, badge: null, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80", description: "33MP full-frame Exmor R CMOS sensor with real-time Eye AF for humans, animals, and birds. 4K 60p 10-bit recording and 10fps burst.", specs: { Sensor: "33MP Full-frame", AF: "759 points", Video: "4K 60p 10-bit", Burst: "10fps", ISO: "100-51200" } },
    { id: 11, name: "Google Pixel 8 Pro", category: "phones", brand: "Google", price: 1299000, originalPrice: 1499000, rating: 4.6, reviews: 245, badge: "new", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80", description: "Google Tensor G3 chip with best-in-class camera featuring Magic Eraser, Photo Unblur, and Best Take. 7 years of OS and security updates.", specs: { Display: "6.7\" LTPO OLED", Chip: "Tensor G3", Camera: "50MP Main", Battery: "5050mAh", Storage: "128GB-1TB" } },
    { id: 12, name: "Bose QuietComfort Ultra", category: "audio", brand: "Bose", price: 569000, originalPrice: 649000, rating: 4.6, reviews: 298, badge: null, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80", description: "World-class noise cancellation with Immersive Audio and CustomTune technology. Luxurious comfort with up to 24 hours of battery life.", specs: { Type: "Over-ear Wireless", ANC: "World-class", Battery: "24 hours", Audio: "Immersive Spatial", Weight: "250g" } },
    { id: 13, name: "ASUS ROG Zephyrus G16", category: "laptops", brand: "ASUS", price: 2799000, originalPrice: 3199000, rating: 4.5, reviews: 89, badge: "hot", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80", description: "Intel Core Ultra 9 185H, NVIDIA RTX 4070, 16\" 240Hz OLED display. Ultra-slim gaming laptop with Nebula HDR display technology.", specs: { Display: "16\" 240Hz OLED", CPU: "Core Ultra 9", GPU: "RTX 4070", RAM: "16GB DDR5", Storage: "1TB SSD" } },
    { id: 14, name: "GoPro Hero 12 Black", category: "cameras", brand: "GoPro", price: 529000, originalPrice: 599000, rating: 4.5, reviews: 412, badge: "sale", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", description: "5.3K60 ultra-HD video, HDR photos, HyperSmooth 6.0 stabilization, and waterproof to 33ft without a housing. Bluetooth audio support.", specs: { Video: "5.3K60", Stabilization: "HyperSmooth 6.0", Photo: "27MP HDR", Waterproof: "33ft/10m", Battery: "Enduro" } },
    { id: 15, name: "Fitbit Sense 2", category: "wearables", brand: "Fitbit", price: 379000, originalPrice: 449000, rating: 4.3, reviews: 345, badge: null, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80", description: "Advanced health smartwatch with continuous EDA stress management, ECG app, SpO2 monitoring, skin temperature sensing, and 6+ day battery.", specs: { Display: "1.58\" AMOLED", Sensors: "EDA, ECG, SpO2", Battery: "6+ days", GPS: "Built-in", Water: "50m" } },
    { id: 16, name: "OnePlus 12", category: "phones", brand: "OnePlus", price: 1049000, originalPrice: 1199000, rating: 4.5, reviews: 198, badge: "sale", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", description: "Snapdragon 8 Gen 3, Hasselblad 4th gen camera system, 100W SUPERVOOC charging fills to 100% in 26 minutes. 2K 120Hz ProXDR display.", specs: { Display: "6.82\" 2K LTPO", Chip: "Snapdragon 8 Gen 3", Camera: "50MP Hasselblad", Battery: "5400mAh", Charging: "100W SUPERVOOC" } },
];

const trendingItems = [
    { id: 101, name: "USB-C Hub 7-in-1", price: 35000, originalPrice: 49000, discount: 29, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&q=80", category: "accessories" },
    { id: 102, name: "Mechanical Keyboard RGB", price: 65000, originalPrice: 89000, discount: 31, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&q=80", category: "accessories" },
    { id: 103, name: "Wireless Mouse Pro", price: 42000, originalPrice: 59000, discount: 25, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80", category: "accessories" },
    { id: 104, name: "4K Webcam Ultra HD", price: 95000, originalPrice: 129000, discount: 24, image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=300&q=80", category: "cameras" },
    { id: 105, name: "Portable SSD 1TB", price: 65000, originalPrice: 89000, discount: 25, image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&q=80", category: "accessories" },
];

// ---- Cart State ----
let cart = [];
let wishlist = [];

function loadCart() {
    try { const s = localStorage.getItem('technova-cart'); if (s) cart = JSON.parse(s); } catch(e) {}
    try { const s = localStorage.getItem('technova-wishlist'); if (s) wishlist = JSON.parse(s); } catch(e) {}
}
function saveCart() {
    try { localStorage.setItem('technova-cart', JSON.stringify(cart)); } catch(e) {}
    try { localStorage.setItem('technova-wishlist', JSON.stringify(wishlist)); } catch(e) {}
}

function addToCart(productId, qty = 1) {
    const product = allProducts.find(p => p.id === productId) || trendingItems.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.qty = Math.min(existing.qty + qty, 10); }
    else { cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty }); }
    saveCart(); updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
    openCart();
}
function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCart(); updateCartUI(); if (typeof renderCartPage === 'function') renderCartPage(); }
function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty = Math.min(Math.max(item.qty + delta, 1), 10);
    saveCart(); updateCartUI(); if (typeof renderCartPage === 'function') renderCartPage();
}
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) { wishlist.splice(idx, 1); showToast('Removed from wishlist', 'success'); }
    else { wishlist.push(productId); const p = allProducts.find(p => p.id === productId); showToast(`${p ? p.name : 'Item'} added to wishlist!`, 'success'); }
    saveCart();
    document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wishlist.length);
}
function getCartTotal() { return cart.reduce((sum, i) => sum + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((sum, i) => sum + i.qty, 0); }

// ---- Helpers ----
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
        else if (i - rating < 1) html += '<i class="fas fa-star-half-alt"></i>';
        else html += '<i class="fas fa-star empty"></i>';
    }
    return html;
}

function renderProductCard(p, i = 0) {
    const discount = p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    return `
    <div class="product-card animate-on-scroll" data-id="${p.id}" style="animation-delay:${i * 0.06}s">
        ${p.badge ? `<div class="card-badges"><span class="card-badge ${p.badge}">${p.badge === 'sale' ? 'Sale' : p.badge === 'new' ? 'New' : 'Hot'}</span></div>` : ''}
        <div class="card-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="card-actions-overlay">
                <button class="overlay-btn" onclick="openQuickView(${p.id})" title="Quick View"><i class="fas fa-eye"></i></button>
                <button class="overlay-btn" onclick="toggleWishlist(${p.id})" title="Wishlist"><i class="fas fa-heart"></i></button>
                <button class="overlay-btn" onclick="addToCart(${p.id})" title="Add to Cart"><i class="fas fa-plus"></i></button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-category">${p.category}</div>
            <h3 class="card-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <div class="card-rating"><div class="card-stars">${renderStars(p.rating)}</div><span class="card-reviews">(${p.reviews})</span></div>
            <div class="card-price-row">
                <div class="card-price">
                    <span class="price-current">${formatPrice(p.price)}</span>
                    ${p.originalPrice > p.price ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${p.id})"><i class="fas fa-plus"></i> Add</button>
            </div>
        </div>
    </div>`;
}

// ---- Quick View ----
function openQuickView(productId) {
    const p = allProducts.find(x => x.id === productId);
    if (!p) return;
    const discount = p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    let modal = document.getElementById('quickview-modal');
    if (!modal) {
        modal = document.createElement('div'); modal.id = 'quickview-modal';
        document.body.appendChild(modal);
    }
    modal.innerHTML = `
    <div class="modal-overlay show" onclick="closeQuickView()"></div>
    <div class="quickview-content show">
        <button class="modal-close" onclick="closeQuickView()"><i class="fas fa-times"></i></button>
        <div class="quickview-body">
            <div class="quickview-image"><img src="${p.image}" alt="${p.name}"></div>
            <div class="quickview-info">
                <span class="qv-category">${p.category}</span>
                <h2>${p.name}</h2>
                <div class="qv-rating"><div class="card-stars">${renderStars(p.rating)}</div><span class="card-reviews">(${p.reviews} reviews)</span></div>
                <div class="qv-price">
                    <span class="price-current">${formatPrice(p.price)}</span>
                    ${p.originalPrice > p.price ? `<span class="price-original">${formatPrice(p.originalPrice)}</span><span class="price-discount">-${discount}%</span>` : ''}
                </div>
                <p class="qv-description">${p.description}</p>
                <div class="qv-quantity">
                    <button class="qty-btn" onclick="document.getElementById('qv-qty').value=Math.max(1,+document.getElementById('qv-qty').value-1)">-</button>
                    <input type="number" id="qv-qty" value="1" min="1" max="10">
                    <button class="qty-btn" onclick="document.getElementById('qv-qty').value=Math.min(10,+document.getElementById('qv-qty').value+1)">+</button>
                </div>
                <div class="qv-actions">
                    <button class="btn btn-primary btn-lg" onclick="addToCart(${p.id},+document.getElementById('qv-qty').value);closeQuickView()"><i class="fas fa-plus"></i> Add to Cart</button>
                    <button class="btn btn-outline" onclick="toggleWishlist(${p.id})"><i class="fas fa-heart"></i></button>
                    <a href="product.html?id=${p.id}" class="btn btn-outline">View Details</a>
                </div>
            </div>
        </div>
    </div>`;
    document.body.style.overflow = 'hidden';
}
function closeQuickView() {
    const m = document.getElementById('quickview-modal');
    if (m) m.innerHTML = '';
    document.body.style.overflow = '';
}

// ---- Toast ----
function showToast(message, type = 'success') {
    let c = document.getElementById('toast-container');
    if (!c) { c = document.createElement('div'); c.id = 'toast-container'; c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    c.appendChild(t);
    setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ---- Header ----
function renderHeader() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const act = (p) => page === p ? 'active' : '';
    document.getElementById('header-placeholder').outerHTML = `
    <div class="announcement-bar">
        <div class="container announcement-inner">
            <div class="announcement-left"><span><i class="fas fa-truck"></i> Free shipping on orders ${formatPrice(50000)}+</span><span class="divider">|</span><span><i class="fas fa-bolt"></i> Flash deals every Friday</span></div>
            <div class="announcement-right"><select aria-label="Language"><option>ENG</option><option>YOR</option><option>IGB</option></select><span class="currency-tag"><i class="fas fa-naira-sign"></i> NGN</span></div>
        </div>
    </div>
    <header class="main-header">
        <div class="container header-inner">
            <a href="index.html" class="logo"><span class="logo-icon"><i class="fas fa-microchip"></i></span><span class="logo-text">Tech<span class="logo-accent">Nova</span></span></a>
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Search for phones, laptops, gadgets..." aria-label="Search products">
                <button id="search-btn" aria-label="Search"><i class="fas fa-search"></i></button>
            </div>
            <div class="header-actions">
                <a href="about.html" class="header-action"><i class="fas fa-user"></i><span>Account</span></a>
                <a href="#" class="header-action wishlist-btn"><i class="fas fa-heart"></i><span>Wishlist</span><span class="badge wishlist-count">0</span></a>
                <a href="#" class="header-action" id="cart-toggle"><i class="fas fa-shopping-cart"></i><span>Cart</span><span class="badge cart-count">0</span></a>
            </div>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
    </header>
    <nav class="main-nav" id="main-nav">
        <div class="container nav-inner">
            <button class="categories-toggle" id="categories-toggle"><i class="fas fa-th"></i> Browse Categories <i class="fas fa-chevron-down"></i></button>
            <div class="categories-dropdown" id="categories-dropdown">
                <a href="shop.html?cat=phones"><i class="fas fa-mobile-alt"></i> Smartphones</a>
                <a href="shop.html?cat=laptops"><i class="fas fa-laptop"></i> Laptops</a>
                <a href="shop.html?cat=audio"><i class="fas fa-headphones"></i> Audio</a>
                <a href="shop.html?cat=cameras"><i class="fas fa-camera"></i> Cameras</a>
                <a href="shop.html?cat=wearables"><i class="fas fa-clock"></i> Wearables</a>
                <a href="shop.html?cat=accessories"><i class="fas fa-plug"></i> Accessories</a>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html" class="${act('index.html')}">Home</a></li>
                <li><a href="shop.html" class="${act('shop.html')}">Shop</a></li>
                <li><a href="deals.html" class="${act('deals.html')}">Deals</a></li>
                <li><a href="about.html" class="${act('about.html')}">About</a></li>
                <li><a href="faq.html" class="${act('faq.html')}">FAQ</a></li>
                <li><a href="blog.html" class="${act('blog.html')}">Blog</a></li>
                <li><a href="contact.html" class="${act('contact.html')}">Contact</a></li>
            </ul>
            <div class="nav-contact"><i class="fas fa-phone-alt"></i> <span>+234 812 345 6789</span></div>
        </div>
    </nav>`;
}

// ---- Footer ----
function renderFooter() {
    document.getElementById('footer-placeholder').outerHTML = `
    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-col footer-about">
                <a href="index.html" class="logo footer-logo"><span class="logo-icon"><i class="fas fa-microchip"></i></span><span class="logo-text">Tech<span class="logo-accent">Nova</span></span></a>
                <p>Your one-stop destination for premium IT gadgets in Nigeria. Quality products, unbeatable prices, and exceptional service since 2020.</p>
                <div class="social-links"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-youtube"></i></a></div>
            </div>
            <div class="footer-col"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="shop.html">Shop</a></li><li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact</a></li><li><a href="faq.html">FAQ</a></li></ul></div>
            <div class="footer-col"><h4>Customer Service</h4><ul><li><a href="cart.html">My Cart</a></li><li><a href="faq.html">Returns & Refunds</a></li><li><a href="faq.html">Shipping Info</a></li><li><a href="blog.html">Blog</a></li><li><a href="deals.html">Deals</a></li></ul></div>
            <div class="footer-col footer-contact"><h4>Contact Us</h4><ul><li><i class="fas fa-map-marker-alt"></i> 15 Admiralty Way, Lekki Phase 1, Lagos</li><li><i class="fas fa-phone-alt"></i> +234 812 345 6789</li><li><i class="fas fa-envelope"></i> hello@technova.ng</li><li><i class="fas fa-clock"></i> Mon - Sat: 9:00 AM - 6:00 PM</li></ul></div>
        </div>
        <div class="footer-bottom"><div class="container footer-bottom-inner"><p>&copy; 2026 TechNova Nigeria. All rights reserved.</p><div class="payment-icons"><i class="fab fa-cc-visa"></i><i class="fab fa-cc-mastercard"></i><i class="fas fa-money-bill-wave"></i><i class="fab fa-cc-paypal"></i></div></div></div>
    </footer>`;
}

// ---- Cart Sidebar ----
function renderCartSidebar() {
    const d = document.createElement('div');
    d.innerHTML = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <aside class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header"><h3><i class="fas fa-shopping-cart"></i> Your Cart</h3><button id="cart-close"><i class="fas fa-times"></i></button></div>
        <div class="cart-body" id="cart-body">
            <div class="cart-empty" id="cart-empty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p><a href="shop.html" class="btn btn-primary">Start Shopping</a></div>
            <div class="cart-items" id="cart-items"></div>
        </div>
        <div class="cart-footer" id="cart-footer" style="display:none">
            <div class="cart-subtotal"><span>Subtotal</span><span id="cart-subtotal">${formatPrice(0)}</span></div>
            <div class="cart-actions"><a href="cart.html" class="btn btn-primary btn-block">View Cart & Checkout <i class="fas fa-arrow-right"></i></a></div>
        </div>
    </aside>
    <div class="toast-container" id="toast-container"></div>
    <button class="back-to-top" id="back-to-top"><i class="fas fa-chevron-up"></i></button>`;
    while (d.firstChild) document.body.appendChild(d.firstChild);
}

function openCart() { document.getElementById('cart-sidebar').classList.add('show'); document.getElementById('cart-overlay').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeCart() { document.getElementById('cart-sidebar').classList.remove('show'); document.getElementById('cart-overlay').classList.remove('show'); document.body.style.overflow = ''; }

function updateCartUI() {
    const items = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    const sub = document.getElementById('cart-subtotal');
    if (!items) return;
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = getCartCount());
    document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wishlist.length);
    if (cart.length === 0) { empty.style.display = 'block'; items.innerHTML = ''; footer.style.display = 'none'; return; }
    empty.style.display = 'none'; footer.style.display = 'block';
    sub.textContent = formatPrice(getCartTotal());
    items.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id},-1)">-</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id},1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>`).join('');
}

// ---- Init ----
function initShared() {
    loadCart();
    renderHeader();
    renderFooter();
    renderCartSidebar();
    updateCartUI();
    document.getElementById('cart-toggle').addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);
    const ct = document.getElementById('categories-toggle'), cd = document.getElementById('categories-dropdown');
    ct.addEventListener('click', () => { ct.classList.toggle('active'); cd.classList.toggle('show'); });
    document.addEventListener('click', (e) => { if (!ct.contains(e.target) && !cd.contains(e.target)) { ct.classList.remove('active'); cd.classList.remove('show'); } });
    document.getElementById('mobile-menu-btn').addEventListener('click', () => document.getElementById('nav-links').classList.toggle('show'));
    const si = document.getElementById('search-input'), sb = document.getElementById('search-btn');
    sb.addEventListener('click', () => { const q = si.value.trim(); if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`; });
    si.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const q = si.value.trim(); if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`; } });
    const btt = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 400));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.classList.add('page-loaded');
    initScrollAnimations();
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCart(); closeQuickView(); } });
}

function initScrollAnimations() {
    const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-in'); }); }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initShared);
