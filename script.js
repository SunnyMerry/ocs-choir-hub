document.addEventListener('DOMContentLoaded', () => {
    const videoCategoriesContainer = document.getElementById('video-categories-container');
    const latestVideosList = document.getElementById('latest-videos-list');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const noVideoResults = document.getElementById('no-video-results');
    const noLatestResults = document.getElementById('no-latest-results');
    const categoryList = document.getElementById('category-list');
    const homeDashboardSection = document.getElementById('home-dashboard');
    const choirRepertoireSection = document.getElementById('choir-repertoire');
    const repertoireHeading = document.getElementById('repertoire-heading');

    // --- YOUR APP DATA ---
    // The "Latest Updates" will now simply show the first 4 videos as they appear in this array.
    // Order your videos here so the first 4 are the ones you consider "latest".
    const appData = {
        "videos": [
            // Place your 4 latest videos/playlists here first if you want them on the dashboard
            { "title": "Piliin Mo Ang Pilipinas - Bing Rio-Pablico", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZRrwQzmyTXF6-7i-uBf2MD", "category": "Choir Performances" },
            { "title": "Sa Piging Na Ito - Ferdinand M. Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYGEP3oeqUI997uZlUdE_Pl", "category": "Filipino Music" },
            { "title": "Let My Love Be Heard - Jake Runestad", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1vQf7emcxikXiqSi-DrwE", "category": "Sacred Music" },
            { "title": "Oroquieta Chamber Singers", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYEpM-UdPkGd11rzH9uiTpZ", "category": "Choir Performances" },

            // Rest of your videos/playlists follow:
			{ "title": "Kordero ng Diyos by Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZFzXn2tIXc5dIxXvLr6TkK", "category": "Liturgical Music" },
			{ "title": "The Lord Bless You and Keep You", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbqA1a16rh_aiVV4Mc21bW5", "category": "Sacred Music" },
			{ "title": "Gandang Sinauna at Sariwa", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3i5oMtXYoJiLfjpHPg5cP", "category": "Filipino Music" },
			{ "title": "Humayo't Ihayag by Manoling Francisco, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1x6rFNhYjjjRR7iUCciuG", "category": "Filipino Music" },
            { "title": "Ave Verum Corpus SATB", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbVKjNjDbr9P77gCwt7uoNR", "category": "Liturgical Music" },
            { "title": "Abendlied", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaoQ0wgW6n_leDwCpdhS0By", "category": "Classical Pieces" },
            { "title": "Die Himmel erzählen die Ehre Gottes, SWV 386", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYVYufxG7rUk-A255bPQhJa", "category": "Classical Pieces" },
            { "title": "Lupang Hinirang Arr L. San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja6H0kOeCuo2OuLbBCJWSsM", "category": "Filipino Music" },
            { "title": "Basbasan at Kalingain by Ferdz Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ3HHnj0KO6Nuo9fQdHHMq3", "category": "Filipino Music" },
            { "title": "Haec Dies", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZngwvjVHTS3YFcAvLaC_AL", "category": "Liturgical Music" },
            { "title": "Sapagkat Diyos ay Pag-Ibig", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja9d57zrWhRd1EDureOUfSa", "category": "Filipino Music" },
            { "title": "An Irish Blessing by James E. Moore", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbRHwcPt7TH_LlRII_m9uZo", "category": "Sacred Music" },
            { "title": "Gloria, Maramba", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbWx11mRyXUq0bVK6kflW3P", "category": "Liturgical Music" },
            { "title": "Festive Praise - Allen Pote", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZH-VAQZ-cEG5-g1vByiJ6Z", "category": "Sacred Music" },
            { "title": "Amen - Lucio San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaHDW6iJZ5uA-RZ7ITOZlnl", "category": "Liturgical Music" },
            { "title": "Pag-aalay ng Bayan", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZxkJhnfhKRih-1jIMlNSqD", "category": "Filipino Music" },
            { "title": "Handog Namin Sa Iyo Ama", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYLOCmoPikWJ5wk6tSoS6eh", "category": "Filipino Music" },
            { "title": "Birhen ng Guadalupe - Rev. Fr. Carlo Magno Marcelo", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZYp0J6ANJSZhKvpjhV4fRS", "category": "Filipino Music" },
            { "title": "Sa Krus Mo at Pagkabuhay - Rev. Fr. Damaso 'Bong' Panganiban", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbsOG4fK4xQ1jSMrQXEAulr", "category": "Liturgical Music" },
            { "title": "Ama namin - Rev Fr. Manoling Francisco SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbPc1jKXgZYCG9oKhJYBT4p", "category": "Liturgical Music" },
            { "title": "Purihin at Ipagdangal - Ferdz M. Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbF3393uF-u7ROAdai7b-75", "category": "Filipino Music" },
            { "title": "Panginoon, Kaawaan Mo Kami - Rdo. P. Allan B. Antonio", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja19JkeZF755eQ7n0aBO-ob", "category": "Liturgical Music" },
            { "title": "Isang Pagkain, Isang Katawan, Isang Bayan - Lucio San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZJKT_zVI9Ugxhgk0Ho0GpI", "category": "Filipino Music" },
            { "title": "Sa Krus Mo at Pagkabuhay - Rev Fr. Manoling Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjafY_pDfudGof9aWZ3IFJ9M", "category": "Liturgical Music" },
            { "title": "Halina, Hesus - Eduardo P. Hontiveros, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbaxlauHzZYaoMS--DOxzVr", "category": "Liturgical Music" },
            { "title": "Amen - Manoling V. Francisco, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYzaevI6DHBhEsQwWU-AoFg", "category": "Liturgical Music" },
            { "title": "Korderong Diyos - Manuel V. Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZJklSvgXpdD7ZtxWsczh-2", "category": "Liturgical Music" },
            { "title": "Alay Namin [Adbiyento] - C. Marcelo, arr. Cañazares", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYn5RVnjoi-tEsbXk-efyyf", "category": "Liturgical Music" },
            { "title": "Dakilang Pag-Ibig - C. Pangilinan, E. Hontiveros, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjY_T1074W5ITeWyG5ZY94Ok", "category": "Liturgical Music" },
            { "title": "Angels We Have Heard On High", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZw4YOitpL_RvxgPRyBVKxg", "category": "Christmas Carols" },
            { "title": "O Holy Night", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZsnjfZ9FnxVgq8KJkcOIFv", "category": "Christmas Carols" },
            { "title": "Munting Sanggol - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbYAKKEu6wCqz7joqKliE2t", "category": "Christmas Carols" },
            { "title": "Sa Iyong Mga Yapak", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjahWTqFn6JUofFrFUh_lnNI", "category": "Filipino Music" },
            { "title": "Kumukutikutitap - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3A3FWNOqmHzG-PQcF5jrD", "category": "Christmas Carols" },
            { "title": "Seasons of Love", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjarVu2OrxYSa6NakUyuqpuP", "category": "Secular Songs" },
            { "title": "Canticorum Jubilo - Georg Friedrich Handel", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYb9wZ2FUZBXYIZkZW51kKR", "category": "Classical Pieces" },
            { "title": "Carol of the Bells", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja3dmF51mGGTKGW5scKx9gQ", "category": "Christmas Carols" },
            { "title": "A Merry Christmas - Arthur Warrell", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYcUYACct23S6SCVaYQE6gb", "category": "Christmas Carols" },
            { "title": "Paghahandog ng Sarili - Arnel De Pano", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYZta7em08IobDt4LiC4Raf", "category": "Filipino Music" },
            { "title": "Silent Night - Franz Xaver Gruber", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZDX49ryy023TmaIvRBoaj2", "category": "Christmas Carols" },
            { "title": "O Come, All Ye Faithful - John F. Wade", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ5_sj1HI8ae_EGJuCSDNIZ", "category": "Christmas Carols" },
            { "title": "The Majesty and Glory of Your Name - Tom Fettke", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZxutW4AZAePTqT5L7fYPdl", "category": "Sacred Music" },
            { "title": "Iesu, Panis Vitae", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaxZVJg76on1Kh0zj6ZC-DH", "category": "Liturgical Music" },
            { "title": "Kung 'Yong Nanaisin - Manoling V. Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYIFNDJUn5A59jjm0og6DyT", "category": "Filipino Music" },
            { "title": "Tagumpay Natin Lahat - Gary Granada", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbwH5y8Ay5y-73X3x_3S2iQ", "category": "Secular Songs" },
            { "title": "We Will Serve Him", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbpDYLjbPshEsfkQpYCdJwR", "category": "Sacred Music" },
            { "title": "Panginoon, Maawa Ka", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbdTb3d5WEeV_Z7GlB5mQ1t", "category": "Liturgical Music" },
            { "title": "Panginoon Maawa Ka - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbAvr2yNkPomd_hOZqghLAy", "category": "Liturgical Music" },
            { "title": "Santo - G. Torres", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ1BUv4FTWlE4oQ2X36UeOI", "category": "Liturgical Music" },
            { "title": "Tinapay At Alak Naming Hatid - L. Delgado", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZihcRspVwaxqHwSkdMpxif", "category": "Liturgical Music" },
            { "title": "Papuri sa Diyos - Misa Birhen ng Antipolo (Gloria)- Consolacion II", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3p73vw-3X2oVGKipnzhF0", "category": "Liturgical Music" },
            { "title": "Ang Pagkabuhay ni Hesus | Misa Delgado Book IV", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZRgQ2AFBrNW32_dfZsm2H5", "category": "Liturgical Music" },
            { "title": "Locus Iste - Anton Bruckner", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZCXad84Pnq3ME3czB38MJ0", "category": "Classical Pieces" },
            { "title": "\"Hallelujah!\" Chorus - Handel's Messiah", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZoiwqXuXV8MCU53ARNyh6V", "category": "Classical Pieces" },
            { "title": "Sicut cervus - Giovanni Pierluigi da Palestrina", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbfxdmMb6DLUh_UiJ6gwh1I", "category": "Classical Pieces" },
            { "title": "No. 53: Worthy is the Lamb That was Slain - Handel's Messiah", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZemOPcqf_kGw5Zgjzrk7MA", "category": "Classical Pieces" },
            { "title": "The Road Home – Michael Dennis Browne", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjY2zt5UD_l9hTjL2HroBik-", "category": "Sacred Music" },
            { "title": "Amor De Mi Alma (You Are the Love of My Soul)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbv6pSZFgR9-EFYrBLKu_uQ", "category": "Secular Songs" },
            { "title": "Jagdlied - Mendelssohn Op.59-6", "link": "https://www.youtube.com/watch?v=EXAMPLE1", "category": "Classical Pieces" }
        ]
    };
    // --- END OF YOUR APP DATA ---


    // --- Theme Toggle Logic ---
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    themeToggle.querySelector('.icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('.icon').textContent = '☀️';
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('.icon').textContent = '🌙';
        }
    });


    // --- Render Content Function (now handles categories for repertoire and flat list for latest) ---
    const renderItems = (itemsToRender, containerElement, noResultsElement, isCategorized = true) => {
        containerElement.innerHTML = ''; // Clear current content
        let totalItemsRendered = 0;

        if (isCategorized) {
            const categories = {};
            // Group items by category
            itemsToRender.forEach(item => {
                const categoryName = item.category || 'Uncategorized'; // Default category
                if (!categories[categoryName]) {
                    categories[categoryName] = [];
                }
                categories[categoryName].push(item);
            });

            // Get sorted category names
            const sortedCategoryNames = Object.keys(categories).sort((a, b) => {
                if (a === 'Uncategorized') return 1;
                if (b === 'Uncategorized') return -1;
                return a.localeCompare(b);
            });

            // Render each category
            sortedCategoryNames.forEach(categoryName => {
                const categorySection = document.createElement('div');
                categorySection.classList.add('content-category-section');

                const categoryHeading = document.createElement('h3');
                categoryHeading.textContent = categoryName;
                categorySection.appendChild(categoryHeading);

                const itemsGrid = document.createElement('div');
                itemsGrid.classList.add('items-grid');

                categories[categoryName].forEach(item => {
                    const itemCard = createItemCard(item);
                    itemsGrid.appendChild(itemCard);
                    totalItemsRendered++;
                });
                categorySection.appendChild(itemsGrid);
                containerElement.appendChild(categorySection);
            });
        } else { // For flat lists like "Latest Updates"
            const itemsGrid = document.createElement('div');
            itemsGrid.classList.add('items-grid');
            itemsToRender.forEach(item => {
                const itemCard = createItemCard(item);
                itemsGrid.appendChild(itemCard);
                totalItemsRendered++;
            });
            containerElement.appendChild(itemsGrid);
        }

        noResultsElement.style.display = totalItemsRendered === 0 ? 'block' : 'none';
    };

    // Helper function to create an item card (reusable)
    const createItemCard = (item) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const title = document.createElement('h3');
        title.textContent = item.title;
        itemCard.appendChild(title);

        const link = document.createElement('a');
        link.href = item.link;
        link.target = "_blank"; // Open in new tab
        link.rel = "noopener noreferrer"; // Security best practice
        link.textContent = 'Watch Now';
        itemCard.appendChild(link);
        return itemCard;
    };


    // --- Sidebar Category List Generation ---
    const generateCategoryList = () => {
        const categories = new Set(appData.videos.map(video => video.category));
        const sortedCategories = Array.from(categories).sort(); // Sort categories alphabetically

        // Clear existing categories (except Home and All)
        const existingDynamicCategories = categoryList.querySelectorAll('li:not(:first-child):not(:last-child)');
        existingDynamicCategories.forEach(li => li.remove());

        // Add dynamic categories
        sortedCategories.forEach(category => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#";
            link.textContent = category;
            link.dataset.category = category;
            listItem.appendChild(link);
            categoryList.insertBefore(listItem, categoryList.lastElementChild); // Insert before "All Repertoire"
        });
    };


    // --- Display Logic ---
    const displaySection = (sectionId, category = null) => {
        // Hide all main content sections first
        homeDashboardSection.style.display = 'none';
        choirRepertoireSection.style.display = 'none';

        // Remove active class from all sidebar links
        categoryList.querySelectorAll('a').forEach(link => link.classList.remove('active'));

        // Show the requested section and set active link
        if (sectionId === 'home-dashboard') {
            homeDashboardSection.style.display = 'block';
            document.querySelector('[data-category="home"]').classList.add('active');
            renderLatestVideos();
        } else if (sectionId === 'choir-repertoire') {
            choirRepertoireSection.style.display = 'block';
            let filteredVideos = appData.videos;
            if (category && category !== 'all') {
                filteredVideos = appData.videos.filter(video => video.category === category);
                repertoireHeading.textContent = `${category} Repertoire`;
            } else {
                repertoireHeading.textContent = 'All Choir Repertoire';
            }
            renderItems(filteredVideos, videoCategoriesContainer, noVideoResults, true); // Render categorized
            document.querySelector(`[data-category="${category || 'all'}"]`).classList.add('active');
        }
    };

    // Render Latest Videos for Dashboard (takes first 4 from the array)
    const renderLatestVideos = () => {
        // Simply take the first 4 videos from the appData.videos array
        const latest4Videos = appData.videos.slice(0, 4);
        renderItems(latest4Videos, latestVideosList, noLatestResults, false); // Render as flat list (not categorized)
    };


    // --- Event Listeners ---
    // Sidebar navigation
    categoryList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default link behavior
            const category = event.target.dataset.category;
            if (category === 'home') {
                displaySection('home-dashboard');
            } else {
                displaySection('choir-repertoire', category);
            }
        }
    });

    // Search Logic (now only filters videos)
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();

        // Filter videos based on search term (applies to both dashboard and repertoire)
        const filteredVideos = appData.videos.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.category && item.category.toLowerCase().includes(searchTerm))
        );

        // If search term is empty, display the default section (Home or All Repertoire)
        if (searchTerm === '') {
            const activeLink = categoryList.querySelector('a.active');
            if (activeLink && activeLink.dataset.category === 'home') {
                displaySection('home-dashboard');
            } else {
                displaySection('choir-repertoire', activeLink ? activeLink.dataset.category : 'all');
            }
        } else {
            // If there's a search term, show repertoire section and filter all videos
            homeDashboardSection.style.display = 'none';
            choirRepertoireSection.style.display = 'block';
            repertoireHeading.textContent = `Search Results for "${searchInput.value}"`;
            renderItems(filteredVideos, videoCategoriesContainer, noVideoResults, true); // Still categorize search results
        }
    });


    // --- Initial Load ---
    generateCategoryList();
    displaySection('home-dashboard'); // Show home dashboard by default on load
});
