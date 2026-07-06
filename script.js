/**
 * VILLAGE EXPLORER - Premium Structural Architecture Logic Data
 * Modular structured dataset holding our deep profile configurations for each location.
 */
const villageData = {
    "village-a": {
        name: "Village Name A",
        location: "Green Valley Base, Northern Rockies",
        rating: "4.9",
        tagline: "Where alpine waterfalls kiss ancient pine trails.",
        heroImg: "https://images.unsplash.com/photo-1508873696983-2df5199e4009?auto=format&fit=crop&w=1920&q=90",
        about: "Village A is an alpine eco-sanctuary hidden deep inside a glacial river basin. Famous for its well-maintained traditional dry-stone agricultural terraces, the village offers a direct portal into a carbon-neutral life. Here, local micro-hydro turbines power the community, ensuring that the natural canopy sounds and clean air remain perfectly undisturbed by commercial smog.",
        history: "Founded in the late 14th century as an isolated monastic outpost, Village A became a critical safe-haven along the historical Silk and spice transit paths. The original stone granaries and defensive lookouts stand structurally sound today, maintaining historical integrity and deep native legends of legendary forest guardians.",
        culture: {
            dress: "Handcrafted indigo-dyed organic hemp wool robes worn with native silver leaf clasps.",
            festivals: "The Equinox Lantern Parade, where thousands of handmade biodegradable lights float down the river network.",
            language: "Old-world Dialect mixed with regional conversational metrics.",
            music: "Resonant bamboo flutes coupled with deep rhythmic animal skin hand drums.",
            customs: "A mandatory tradition of offering warm herbal salt tea to travelers arriving across the mountain boundaries."
        },
        food: [
            { name: "Traditional Roast Plate", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", desc: "Slow wood-fire roasted roots and gathered valley mushrooms." },
            { name: "Stone-Baked Bread", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80", desc: "Fresh ground wild barley loaves baked directly over hot flagstones." },
            { name: "Organic Crisp Greens", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", desc: "Fresh raw heirloom greens plucked straight from natural organic permaculture grids." },
            { name: "Honey Infused Sweets", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80", desc: "Wild honeycomb treats set gently with parched walnut starch." },
            { name: "Herbal Forest Tea", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80", desc: "A refreshing infusion of dried pine needles, mint, and local field blossoms." }
        ],
        attractions: [
            { name: "Bridal Veil Cascade", img: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=500&q=80", desc: "A roaring 120m pure water spring dropping into an emerald bathing pool.", dist: "1.2 km from center", duration: "2 - 3 Hours" },
            { name: "The Pine Wood Shrine", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80", desc: "An architectural wonder constructed completely out of interlocked cedar columns without using nails.", dist: "0.5 km from center", duration: "1 Hour" }
        ],
        activities: ["Trekking", "Camping", "Photography", "Bird Watching"],
        gallery: [
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80"
        ],
        weather: { summer: "22°C - 28°C", winter: "-2°C - 8°C", monsoon: "Heavy dramatic misting", best: "June to September" },
        nearby: [
            { name: "Glacial Ridge Lookout", dist: "5.5 km away", desc: "High altitude viewing platform seeing across seven parallel valleys." }
        ]
    },
    "village-b": {
        name: "Village Name B",
        location: "Misty Highlands Plateau",
        rating: "4.8",
        tagline: "Ancient stone fortresses wrapped in continuous rolling cloudscapes.",
        heroImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=90",
        about: "Perched dramatically on a high wind-swept plateau, Village B is famous for its signature structural stone multi-story homesteads. The village architecture blends flawlessly into the surrounding granite hills, creating a striking medieval silhouette against the sky.",
        history: "Historically serving as an important military watch station, Village B has defended the mountain pass for over seven hundred years. Local folklore is full of epic poetry celebrating unity and resilience during the old empires.",
        culture: {
            dress: "Heavy woven geometric tartan wraps colored using lichen and madder root extracts.",
            festivals: "The Great Solstice Fire Gathering, featuring historical competitive poetry slams around huge bonfires.",
            language: "Highland Highland tongue with rhythmic inflections.",
            music: "Stringed lutes and deep resonating choral singing.",
            customs: "Exchanging small hand-polished quartz river stones as tokens of peace when visiting neighbor homes."
        },
        food: [
            { name: "Smoked Meat Broth", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", desc: "Rich broth simmered for 18 hours over peat embers." },
            { name: "Oat & Seed Hearth Bread", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80", desc: "Dense, nutrient-heavy woodfired bread packed with wild flax seeds." },
            { name: "Cellar Root Slaw", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", desc: "Fermented winter radishes and cold-pressed seed oil dressing." },
            { name: "Dried Plum Cakes", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80", desc: "Concentrated mountain plums baked into small, travel-hardy sweet cakes." },
            { name: "Smoked Heather Brew", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80", desc: "An aromatic hot brew prepared from mountain heather blooms." }
        ],
        attractions: [
            { name: "The Granite Citadel Ruins", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80", desc: "An ancient watchtower with sweeping 360-degree views of the plateau.", dist: "0.2 km from center", duration: "1.5 Hours" },
            { name: "Echoing Slot Canyon", img: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=500&q=80", desc: "A naturally carved acoustic canyon pathway where whispers echo cleanly.", dist: "2.8 km from center", duration: "2 Hours" }
        ],
        activities: ["Trekking", "Cycling", "Photography"],
        gallery: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80"
        ],
        weather: { summer: "15°C - 22°C", winter: "-8°C - 3°C", monsoon: "Frequent rolling clouds and rain", best: "May to October" },
        nearby: [
            { name: "Basalt Monolith Field", dist: "8.0 km away", desc: "Volcanic pillar fields rising vertically from the lower high grasslands." }
        ]
    },
    "village-c": {
        name: "Village Name C",
        location: "Lakeside Valley Basin",
        rating: "4.9",
        tagline: "Tranquid waters reflecting morning skies and floating wetlands.",
        heroImg: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1920&q=90",
        about: "Village C is a stunning water-centric community built along the banks of an emerald alpine lake. The entire social life revolves around manual wooden canoes and floating crop platforms, offering a masterclass in adapting to aquatic environments.",
        history: "Originally established by ancient fishermen and boat builders, the village developed unique legal codes centered on preserving water purity and sharing fish catches fairly among families.",
        culture: {
            dress: "Light canvas linens matched with hand-woven marsh reed hats.",
            festivals: "The Festival of Floating Candles, when the entire lake mirrors thousands of tiny leaf boats holding glowing wicks.",
            language: "Lowland River Dialect with expressive lyrical tones.",
            music: "Resonant wooden marimbas and soft rhythm shakers.",
            customs: "Splashing a small drop of clean lake water onto a guest's palm to wish them smooth sailing."
        },
        food: [
            { name: "Claypot Baked Fish", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", desc: "Lake fish baked gently with wild ginger roots inside sealed mud pots." },
            { name: "Steamed Sorghum Buns", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80", desc: "Fluffy steamed buns prepared from hand-milled local sorghum grain." },
            { name: "Floating Garden Salad", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", desc: "Crisp water spinach, watercress, and freshly pressed wild mustard seeds." },
            { name: "Sweet Glazed Pastries", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80", desc: "Crisp fried rice cakes glazed with dark unrefined sugarcane syrup." },
            { name: "Sun-Dried Berry Tea", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80", desc: "A tart, antioxidant-rich tea brewed from sun-dried sweet marsh berries." }
        ],
        attractions: [
            { name: "Mirror Water Lake", img: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=500&q=80", desc: "An incredibly calm, deep body of water that creates near-perfect optical reflections of the mountains.", dist: "0.0 km away", duration: "Continuous" },
            { name: "Sunrise Point Ridge", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80", desc: "An east-facing hill that catches beautiful pink and gold light over the water.", dist: "1.5 km climb", duration: "2 Hours" }
        ],
        activities: ["Boating", "Fishing", "Bird Watching", "Photography"],
        gallery: [
            "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
        ],
        weather: { summer: "20°C - 26°C", winter: "2°C - 12°C", monsoon: "Spectacular, high-volume atmospheric downpours", best: "October to April" },
        nearby: [
            { name: "Lotus Wetland Sanctuary", dist: "4.0 km boat ride", desc: "A protected wetland sanctuary home to over 140 species of migratory water birds." }
        ]
    }
};

/**
 * CORE LOGIC INITIALIZER
 */
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initViewSwitching();
    initLightbox();
    initFormHandler();
});

/**
 * 1. STICKY NAVBAR & MOBILE MENU TOGGLE
 */
function initNavigation() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll listener for sticky menu
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Mobile Hamburger configuration
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu on link clicks
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Logo reset back to homepage
    document.getElementById("nav-logo").addEventListener("click", (e) => {
        e.preventDefault();
        showHomepage();
    });
}

/**
 * 2. SPA VIEW SWITCHING ENGINE
 */
function initViewSwitching() {
    // Intercept all explore button clicks across home view cards
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("explore-btn")) {
            const villageId = e.target.getAttribute("data-id");
            renderVillageDetail(villageId);
        }
    });
}

function showHomepage() {
    document.getElementById("village-detail-view").classList.add("hidden");
    document.getElementById("homepage-view").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 3. DYNAMIC TEMPLATE RENDERING CONTEXT
 */
function renderVillageDetail(id) {
    const data = villageData[id];
    if (!data) return;

    const detailContainer = document.getElementById("village-detail-view");
    
    // Map icons safely for activities
    const iconMap = {
        "Trekking": "fa-mountain-trails",
        "Camping": "fa-campground",
        "Cycling": "fa-bicycle",
        "Boating": "fa-ship",
        "Bird Watching": "fa-binoculars",
        "Photography": "fa-camera",
        "Fishing": "fa-fish"
    };

    // Construct deep structural markup layout blocks
    detailContainer.innerHTML = `
        <div class="detail-nav-buffer">
            <div class="container">
                <button class="btn btn-outline back-to-home-btn" id="back-home-trigger">
                    <i class="fa-solid fa-arrow-left"></i> Back to Destinations
                </button>
            </div>
        </div>

        <header class="detail-hero" style="background: linear-gradient(to top, rgba(31,58,82,0.9) 0%, rgba(0,0,0,0.2) 100%), url('${data.heroImg}') no-repeat center center/cover;">
            <div class="container">
                <div class="detail-hero-content">
                    <span class="badge"><i class="fa-solid fa-feather"></i> Cultural Heritage Profile</span>
                    <h1>${data.name}</h1>
                    <div class="detail-sub-meta">
                        <span><i class="fa-solid fa-location-dot"></i> ${data.location}</span>
                        <span><i class="fa-solid fa-star"></i> ${data.rating} Rating</span>
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <!-- Core Split text block layout -->
            <div class="content-split-grid">
                <div class="main-text-rail">
                    <div class="text-block">
                        <h3>About the Village</h3>
                        <p>${data.about}</p>
                    </div>
                    
                    <div class="text-block">
                        <h3>Historical Profile & Origins</h3>
                        <p>${data.history}</p>
                    </div>

                    <div class="text-block">
                        <h3>Living Culture & Traditions</h3>
                        <div class="culture-tags">
                            <div class="culture-tag"><strong>Dress:</strong> ${data.culture.dress}</div>
                            <div class="culture-tag"><strong>Festivals:</strong> ${data.culture.festivals}</div>
                            <div class="culture-tag"><strong>Local Language:</strong> ${data.culture.language}</div>
                            <div class="culture-tag"><strong>Music Artistry:</strong> ${data.culture.music}</div>
                            <div class="culture-tag"><strong>Social Customs:</strong> ${data.culture.customs}</div>
                        </div>
                    </div>
                </div>

                <div class="sidebar-rail">
                    <div class="card sidebar-panel glass-card">
                        <h3>Seasonal Climate</h3>
                        <div class="weather-row"><span>Summer Season</span><strong>${data.weather.summer}</strong></div>
                        <div class="weather-row"><span>Winter Season</span><strong>${data.weather.winter}</strong></div>
                        <div class="weather-row"><span>Monsoon Cycle</span><strong>${data.weather.monsoon}</strong></div>
                        <div class="weather-row best-season">
                            <span><i class="fa-solid fa-calendar-check"></i> Peak Visit Window:</span>
                            <div>${data.weather.best}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Food Array Cards Row -->
            <div class="sub-grid-section">
                <h3>Local Culinary Heritage</h3>
                <div class="item-card-grid">
                    ${data.food.map(item => `
                        <div class="card small-item-card">
                            <div class="img-container">
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                            <div class="card-body">
                                <h4>${item.name}</h4>
                                <p>${item.desc}</p>
                                <span class="badge">Organic Native</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Attractions Section -->
            <div class="sub-grid-section">
                <h3>Top Tourist Attractions</h3>
                <div class="item-card-grid">
                    ${data.attractions.map(item => `
                        <div class="card small-item-card">
                            <div class="img-container">
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                            <div class="card-body">
                                <h4>${item.name}</h4>
                                <p>${item.desc}</p>
                                <div class="card-meta-line">
                                    <span><i class="fa-solid fa-route"></i> ${item.dist}</span>
                                    <span><i class="fa-solid fa-clock"></i> ${item.duration}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Adventure Icons Section -->
            <div class="sub-grid-section">
                <h3>Available Adventure Activities</h3>
                <div class="icon-grid">
                    ${data.activities.map(act => `
                        <div class="card icon-card">
                            <i class="fa-solid ${iconMap[act] || 'fa-person-hiking'}"></i>
                            <h4>${act}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Masonry Lightbox Gallery -->
            <div class="sub-grid-section">
                <h3>Image Gallery</h3>
                <div class="masonry-gallery">
                    ${data.gallery.map((imgUrl, index) => `
                        <div class="gallery-item" data-src="${imgUrl}" data-caption="${data.name} Landscape view ${index + 1}">
                            <img src="${imgUrl}" alt="Gallery snapshot">
                            <div class="gallery-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Nearby Landmarks Panel -->
            <div class="sub-grid-section">
                <h3>Nearby Regional Attractions</h3>
                <div class="item-card-grid">
                    ${data.nearby.map(place => `
                        <div class="card card-body" style="padding:24px;">
                            <h4 style="color:var(--secondary); margin-bottom:8px;">${place.name}</h4>
                            <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:12px;">${place.desc}</p>
                            <span class="badge" style="width:fit-content;"><i class="fa-solid fa-car-side"></i> ${place.dist}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Crucial Eco Travel Tips Panel Matrix -->
            <div class="sub-grid-section">
                <h3>Responsible Eco-Travel Tips</h3>
                <div class="item-card-grid">
                    <div class="card card-body" style="padding:24px; border-left:4px solid var(--accent);">
                        <h4 style="margin-bottom:8px;"><i class="fa-solid fa-shirt"></i> Pack Accordingly</h4>
                        <p style="color:var(--text-muted); font-size:0.9rem;">Mountain air drops temperature quickly post sunset. Bring adequate natural layer wools.</p>
                    </div>
                    <div class="card card-body" style="padding:24px; border-left:4px solid var(--primary);">
                        <h4 style="margin-bottom:8px;"><i class="fa-solid fa-hands-praying"></i> Respect Customs</h4>
                        <p style="color:var(--text-muted); font-size:0.9rem;">Always ask village elders permission before conducting direct personal photography portraits.</p>
                    </div>
                    <div class="card card-body" style="padding:24px; border-left:4px solid #3b82f6;">
                        <h4 style="margin-bottom:8px;"><i class="fa-solid fa-trash-slash"></i> Zero Trace Footprint</h4>
                        <p style="color:var(--text-muted); font-size:0.9rem;">Bring reusable containers. All synthetic waste plastics must be packed back to urban hubs.</p>
                    </div>
                    <div class="card card-body" style="padding:24px; border-left:4px solid #ef4444;">
                        <h4 style="margin-bottom:8px;"><i class="fa-solid fa-wallet"></i> Bring Local Cash</h4>
                        <p style="color:var(--text-muted); font-size:0.9rem;">Digital cellular infrastructure is intermittent. Small artisanal vendors accept local physical currency tokens only.</p>
                    </div>
                </div>
            </div>

            <!-- Emergency System Safety Links -->
            <div class="sub-grid-section" style="margin-bottom:64px;">
                <h3>Emergency Coordination Access</h3>
                <div class="item-card-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                    <div class="card card-body text-center" style="padding:20px; text-align:center;">
                        <i class="fa-solid fa-kit-medical" style="font-size:1.8rem; color:#ef4444; margin-bottom:8px;"></i>
                        <h5>Base Outpost Hospital</h5>
                        <p style="font-size:0.85rem; color:var(--text-muted);">Radio Frequency Line 4</p>
                    </div>
                    <div class="card card-body text-center" style="padding:20px; text-align:center;">
                        <i class="fa-solid fa-shield-halved" style="font-size:1.8rem; color:var(--secondary); margin-bottom:8px;"></i>
                        <h5>Community Marshals</h5>
                        <p style="font-size:0.85rem; color:var(--text-muted);">+1 (800) 555-0199</p>
                    </div>
                    <div class="card card-body text-center" style="padding:20px; text-align:center;">
                        <i class="fa-solid fa-user-shield" style="font-size:1.8rem; color:var(--primary); margin-bottom:8px;"></i>
                        <h5>Eco Concierge Guide</h5>
                        <p style="font-size:0.85rem; color:var(--text-muted);">On-Call Satellite Hub</p>
                    </div>
                </div>
            </div>

        </div>
    `;

    // Swap presentation layouts smoothly
    document.getElementById("homepage-view").classList.add("hidden");
    detailContainer.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Attach back button listener
    document.getElementById("back-home-trigger").addEventListener("click", () => {
        showHomepage();
    });
}

/**
 * 4. MODERN LIGHTBOX GALLERY CONTROLLER
 */
function initLightbox() {
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");

    // Dynamic click binding on parent node to support content injected late
    document.body.addEventListener("click", (e) => {
        const item = e.target.closest(".gallery-item");
        if (item) {
            const imgSrc = item.getAttribute("data-src");
            const imgCaption = item.getAttribute("data-caption");
            
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
            captionText.innerHTML = imgCaption;
            document.body.style.overflow = "hidden"; // freeze background scroll
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

/**
 * 5. CONTACT & BOOKING VALIDATION CONTROLLER
 */
function initFormHandler() {
    const form = document.getElementById("booking-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Premium modern UI success acknowledgement feedback loop
        alert(`Thank you, ${name}! Your premium village exploration request has been processed securely. A concierge specialist will reach out to you at ${email} within 12 hours.`);
        form.reset();
    });
}