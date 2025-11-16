document.addEventListener('DOMContentLoaded', () => {
    const allRepertoireGrid = document.getElementById('all-repertoire-grid');
    const latestVideosList = document.getElementById('latest-videos-list');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const noVideoResults = document.getElementById('no-video-results');
    const noLatestResults = document.getElementById('no-latest-results');
    const categoryList = document.getElementById('category-list');
    const dynamicCategoriesContainer = document.getElementById('dynamic-categories-container');
    const sidebarSectionHeader = document.querySelector('.sidebar-section-header[data-section-name="categories"]');
    const homeDashboardSection = document.getElementById('home-dashboard');
    const choirRepertoireSection = document.getElementById('choir-repertoire');
    const repertoireHeading = document.getElementById('repertoire-heading');

    // --- ENHANCED APP DATA STRUCTURE (EASIER TO UPDATE!) ---
    // Add new songs directly under their respective category.
    // The 'latestUpdates' array dictates what shows on the Home Dashboard.
    const appData = {
        "latestUpdates": [
            // List the titles of the 4 videos you want to showcase as "Latest Updates"
            "Himno ng Diosesis ng Lucena (Musika at Ayos: Naldy A. Rodriguez | Titik: Dr. Palermo Salvacion)",
            "Banal Ka (Sanctus)",
            "Paggugunita (Arr. Rodelia Austria-Valeriano)",
            "Jingle Bells Calypso (Arr. Leo M. Teller, based on J. Pierpont)"
        ],
        "categories": {
            "Filipino Music": [
                { "title": "Himno ng Diosesis ng Lucena (Musika at Ayos: Naldy A. Rodriguez | Titik: Dr. Palermo Salvacion)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZLtiJ8Ww9TUG7--L1xFUeW" },
                { "title": "Paggugunita (Arr. Rodelia Austria-Valeriano)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZjQKc6rMVqBj5ZDpO79DpC" },
                { "title": "Humayo't Ihayag by Manoling Francisco, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1x6rFNhYjjjRR7iUCciuG" },
                { "title": "Gandang Sinauna at Sariwa", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3i5oMtXYoJiLfjpHPg5cP" },
                { "title": "Lupang Hinirang Arr L. San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja6H0kOeCuo2OuLbBCJWSsM" },
                { "title": "Basbasan at Kalingain by Ferdz Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ3HHnj0KO6Nuo9fQdHHMq3" },
                { "title": "Sapagkat Diyos ay Pag-Ibig", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja9d57zrWhRd1EDureOUfSa" },
                { "title": "Pag-aalay ng Bayan", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZxkJhnfhKRih-1jIMlNSqD" },
                { "title": "Handog Namin Sa Iyo Ama", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYLOCmoPikWJ5wk6tSoS6eh" },
                { "title": "Birhen ng Guadalupe - Rev. Fr. Carlo Magno Marcelo", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZYp0J6ANJSZhKvpjhV4fRS" },
                { "title": "Purihin at Ipagdangal - Ferdz M. Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbF3393uF-u7ROAdai7b-75" },
                { "title": "Isang Pagkain, Isang Katawan, Isang Bayan - Lucio San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZJKT_zVI9Ugxhgk0Ho0GpI" },
                { "title": "Sa Iyong Mga Yapak", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjahWTqFn6JUofFrFUh_lnNI" },
                { "title": "Paghahandog ng Sarili - Arnel De Pano", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYZta7em08IobDt4LiC4Raf" },
                { "title": "Kung 'Yong Nanaisin - Manoling V. Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYIFNDJUn5A59jjm0og6DyT" },
                { "title": "Sa Piging Na Ito - Ferdinand M. Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYGEP3oeqUI997uZlUdE_Pl" },
                { "title": "Panunumpa – A. Joson (Fr. JBoy Gonzales, SJ)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYi1iSpfcH38EfA6UtojvA3" },
                { "title": "Bundok Banahaw (Arr. Fabian Obispo)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZG_Ak5XgysF4peIUnkA2xQ" },
                { "title": "Dahil sa 'Yo - F. Obispo Jr.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaempjxQzDGyq7jSr9CmgjW" },
                { "title": "Gapas (Eudenice V. Palaruan)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjakKonBXmCqWFBEG9K57n_h" }
            ],
            "Liturgical Music": [
                { "title": "Banal Ka (Sanctus)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbOEEcg7aD545XAiw9kJquK" },
                { "title": "Kordero ng Diyos by Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZFzXn2tIXc5dIxXvLr6TkK" },
                { "title": "Ave Verum Corpus SATB", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbVKjNjDbr9P77gCwt7uoNR" },
                { "title": "Haec Dies", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZngwvjVHTS3YFcAvLaC_AL" },
                { "title": "Gloria, Maramba", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbWx11mRyXUq0bVK6kflW3P" },
                { "title": "Amen - Lucio San Pedro", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaHDW6iJZ5uA-RZ7ITOZlnl" },
                { "title": "Sa Krus Mo at Pagkabuhay - Rev. Fr. Damaso 'Bong' Panganiban", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbsOG4fK4xQ1jSMrQXEAulr" },
                { "title": "Ama namin - Rev Fr. Manoling Francisco SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbPc1jKXgZYCG9oKhJYBT4p" },
                { "title": "Panginoon, Kaawaan Mo Kami - Rdo. P. Allan B. Antonio", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja19JkeZF755eQ7n0aBO-ob" },
                { "title": "Sa Krus Mo at Pagkabuhay - Rev Fr. Manoling Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjafY_pDfudGof9aWZ3IFJ9M" },
                { "title": "Halina, Hesus - Eduardo P. Hontiveros, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbaxlauHzZYaoMS--DOxzVr" },
                { "title": "Amen - Manoling V. Francisco, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYzaevI6DHBhEsQwWU-AoFg" },
                { "title": "Korderong Diyos - Manuel V. Francisco, S.J.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZJklSvgXpdD7ZtxWsczh-2" },
                { "title": "Alay Namin [Adbiyento] - C. Marcelo, arr. Cañazares", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYn5RVnjoi-tEsbXk-efyyf" },
                { "title": "Dakilang Pag-Ibig - C. Pangilinan, E. Hontiveros, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjY_T1074W5ITeWyG5ZY94Ok" },
                { "title": "Iesu, Panis Vitae", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaxZVJg76on1Kh0zj6ZC-DH" },
                { "title": "Panginoon, Maawa Ka", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbdTb3d5WEeV_Z7GlB5mQ1t" },
                { "title": "Panginoon Maawa Ka - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbAvr2yNkPomd_hOZqghLAy" },
                { "title": "Santo - G. Torres", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ1BUv4FTWlE4oQ2X36UeOI" },
                { "title": "Tinapay At Alak Naming Hatid - L. Delgado", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZihcRspVwaxqHwSkdMpxif" },
                { "title": "Papuri sa Diyos - Misa Birhen ng Antipolo (Gloria)- Consolacion II", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3p73vw-3X2oVGKipnzhF0" },
                { "title": "Ang Pagkabuhay ni Hesus | Misa Delgado Book IV", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZRgQ2AFBrNW32_dfZsm2H5" }
            ],
            "Christmas Carols": [
                { "title": "Jingle Bells Calypso (Arr. Leo M. Teller, based on J. Pierpont)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbNdl7rUlYE4xdrukpVPeeN" },
                { "title": "Angels We Have Heard On High", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZw4YOitpL_RvxgPRyBVKxg" },
                { "title": "O Holy Night", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZsnjfZ9FnxVgq8KJkcOIFv" },
                { "title": "Munting Sanggol - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbYAKKEu6wCqz7joqKliE2t" },
                { "title": "Kumukutikutitap - Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3A3FWNOqmHzG-PQcF5jrD" },
                { "title": "Carol of the Bells", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja3dmF51mGGTKGW5scKx9gQ" },
                { "title": "A Merry Christmas - Arthur Warrell", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYcUYACct23S6SCVaYQE6gb" },
                { "title": "Silent Night - Franz Xaver Gruber", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZDX49ryy023TmaIvRBoaj2" },
                { "title": "O Come, All Ye Faithful - John F. Wade", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ5_sj1HI8ae_EGJuCSDNIZ" },
				{ "title": "Tanging Hiling – Grijaldo / Alcala", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjapLhE4b24mxnZCSpCXrCbC" }
            ],
            "Sacred Music": [
                { "title": "The Lord Bless You and Keep You", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbqA1a16rh_aiVV4Mc21bW5" },
                { "title": "An Irish Blessing by James E. Moore", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbRHwcPt7TH_LlRII_m9uZo" },
                { "title": "Festive Praise - Allen Pote", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZH-VAQZ-cEG5-g1vByiJ6Z" },
                { "title": "The Majesty and Glory of Your Name - Tom Fettke", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZxutW4AZAePTqT5L7fYPdl" },
                { "title": "We Will Serve Him", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbpDYLjbPshEsfkQpYCdJwR" },
                { "title": "Let My Love Be Heard - Jake Runestad", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1vQf7emcxikXiqSi-DrwE" },
                { "title": "LUX AETERNA – Elgar’s Nimrod with Requiem Mass Text (Arr. John Cameron", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYdFZ_3pw4aGaQmpYSjZcF8" }
            ],
            "Classical Pieces": [
                { "title": "Abendlied", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaoQ0wgW6n_leDwCpdhS0By" },
                { "title": "Die Himmel erzählen die Ehre Gottes, SWV 386", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYVYufxG7rUk-A255bPQhJa" },
                { "title": "Canticorum Jubilo - Georg Friedrich Handel", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYb9wZ2FUZBXYIZkZW51kKR" },
                { "title": "Locus Iste - Anton Bruckner", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZCXad84Pnq3ME3czB38MJ0" },
                { "title": "\"Hallelujah!\" Chorus - Handel's Messiah", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZoiwqXuXV8MCU53ARNyh6V" },
                { "title": "Sicut cervus - Giovanni Pierluigi da Palestrina", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbfxdmMb6DLUh_UiJ6gwh1I" },
                { "title": "No. 53: Worthy is the Lamb That was Slain - Handel's Messiah", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZemOPcqf_kGw5Zgjzrk7MA" },
                { "title": "Jagdlied - Mendelssohn Op.59-6", "link": "https://www.youtube.com/watch?v=EXAMPLE1" }
            ],
            "Secular Songs": [
                { "title": "Seasons of Love", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjarVu2OrxYSa6NakUyuqpuP" },
                { "title": "Tagumpay Natin Lahat - Gary Granada", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbwH5y8Ay5y-73X3x_3S2iQ" },
                { "title": "Amor De Mi Alma (You Are the Love of My Soul)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbv6pSZFgR9-EFYrBLKu_uQ" }
            ],
            "Choir Performances": [
                { "title": "Oroquieta Chamber Singers", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYEpM-UdPkGd11rzH9uiTpZ" },
                { "title": "Piliin Mo Ang Pilipinas - Bing Rio-Pablico", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZRrwQzmyTXF6-7i-uBf2MD" }
            ],
            "Concert Performance": [
                { "title": "Metropop Medley (Arr. Darren Vega)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ3CyIqZSt3FV0L9WH4l6A0" },
                { "title": "Golden (Words & Music by EJAE and Mark Sonnenblick | Arr. Emmanuel Cañazares)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZLRxOVnxjYq3C86J28YbQE" },
                { "title": "Let My Love Be Heard - Jake Runestad", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1vQf7emcxikXiqSi-DrwE" },
                { "title": "Abendlied", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaoQ0wgW6n_leDwCpdhS0By" },
                { "title": "Amor De Mi Alma (You Are the Love of My Soul)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbv6pSZFgR9-EFYrBLKu_uQ" },
				{ "title": "The Road Home – Michael Dennis Browne", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjY2zt5UD_l9hTjL2HroBik-" }
            ]
        }
    };
    // --- END OF YOUR APP DATA ---

    // Utility function to get all videos in a flattened array with category attached
    const getAllVideos = () => {
        const allVideos = [];
        for (const category in appData.categories) {
            appData.categories[category].forEach(video => {
                allVideos.push({
                    ...video,
                    category: category // Add the category name to each video object
                });
            });
        }
        return allVideos;
    };

    // --- Theme Toggle Logic (No Change) ---
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


    // Helper function to create an item card for the main content areas (No Change)
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

    // --- Render Items for Main Content Areas (No Change) ---
    const renderMainContentItems = (itemsToRender, containerElement, noResultsElement) => {
        containerElement.innerHTML = ''; // Clear current content
        let totalItemsRendered = 0;

        // Create an items-grid div if it doesn't exist or replace its content
        let itemsGrid = containerElement.querySelector('.items-grid');
        if (!itemsGrid) {
            itemsGrid = document.createElement('div');
            itemsGrid.classList.add('items-grid');
            containerElement.appendChild(itemsGrid);
        } else {
            itemsGrid.innerHTML = ''; // Clear grid content
        }

        itemsToRender.forEach(item => {
            const itemCard = createItemCard(item);
            itemsGrid.appendChild(itemCard);
            totalItemsRendered++;
        });

        noResultsElement.style.display = totalItemsRendered === 0 ? 'block' : 'none';
    };


    // --- Sidebar Category List Generation (MODIFIED) ---
    const generateCategoryList = () => {
        // Get categories directly from the keys of the new appData.categories object
        const categories = Object.keys(appData.categories);
        const sortedCategories = categories.sort();

        // Clear existing dynamic categories in the collapsible container
        dynamicCategoriesContainer.innerHTML = '';

        const ul = document.createElement('ul'); // Create a <ul> for the category links
        ul.classList.add('category-links-list'); // Add a class for potential styling

        sortedCategories.forEach(category => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#";
            link.dataset.category = category; // Use data-category for filtering
            link.textContent = category;
            listItem.appendChild(link);
            ul.appendChild(listItem);
        });

        dynamicCategoriesContainer.appendChild(ul);
    };


    // --- Display Logic (MODIFIED) ---
    const displaySection = (sectionId, category = null) => {
        // Hide all main content sections first
        homeDashboardSection.style.display = 'none';
        choirRepertoireSection.style.display = 'none';

        // Remove active class from all sidebar links (including dynamic categories)
        categoryList.querySelectorAll('a').forEach(link => link.classList.remove('active'));


        // Show the requested section and set active link
        if (sectionId === 'home-dashboard') {
            homeDashboardSection.style.display = 'block';
            document.querySelector('[data-category="home"]').classList.add('active');
            renderLatestVideos();
        } else if (sectionId === 'choir-repertoire') {
            choirRepertoireSection.style.display = 'block';
            let filteredVideos = [];
            let activeLinkElement = null;

            if (category && category !== 'all') {
                // Filter by a specific category from the new structure
                filteredVideos = appData.categories[category] || [];
                repertoireHeading.textContent = `${category} Repertoire`;
                activeLinkElement = document.querySelector(`a[data-category="${category}"]`);
                // Ensure the "Categories" section is expanded when a sub-category is selected
                sidebarSectionHeader.classList.remove('collapsed');
                dynamicCategoriesContainer.classList.remove('collapsed');

            } else { // "All Repertoire" selected
                // Flatten all videos for 'All Repertoire' view
                filteredVideos = getAllVideos();
                repertoireHeading.textContent = 'All Choir Repertoire';
                activeLinkElement = document.querySelector('[data-category="all"]');
            }

            if (activeLinkElement) {
                activeLinkElement.classList.add('active');
            }
            renderMainContentItems(filteredVideos, allRepertoireGrid, noVideoResults);
        }
    };

    // Render Latest Videos for Dashboard (MODIFIED)
    const renderLatestVideos = () => {
        // Get all videos in a flattened structure for easy look-up
        const allVideos = getAllVideos();
        
        // Use the titles in appData.latestUpdates to find the corresponding video objects
        const latestVideos = appData.latestUpdates.map(latestTitle => 
            allVideos.find(video => video.title === latestTitle)
        ).filter(Boolean); // Filter out any videos that weren't found

        renderMainContentItems(latestVideos, latestVideosList, noLatestResults);
    };


    // --- Event Listeners (MINOR CHANGE) ---
    // Sidebar navigation (for Home, All Repertoire, and dynamic category links)
    categoryList.addEventListener('click', (event) => {
        // Check if a direct link or a category link within the dynamic container was clicked
        if (event.target.tagName === 'A' && event.target.dataset.category) {
            event.preventDefault();
            const category = event.target.dataset.category;
            if (category === 'home') {
                displaySection('home-dashboard');
            } else { // 'all' or a specific category from the dynamic list
                displaySection('choir-repertoire', category);
            }
        }
    });

    // NEW: Event Listener for the main "Categories" section header (No Change)
    sidebarSectionHeader.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        dynamicCategoriesContainer.classList.toggle('collapsed');
        sidebarSectionHeader.classList.toggle('collapsed');
    });


    // Search Logic (MODIFIED)
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        // Search against ALL videos
        const allVideos = getAllVideos();

        const filteredVideos = allVideos.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.category && item.category.toLowerCase().includes(searchTerm))
        );

        // If search term is empty, display the currently active section
        if (searchTerm === '') {
            const activeLink = categoryList.querySelector('a.active');
            if (activeLink && activeLink.dataset.category === 'home') {
                displaySection('home-dashboard');
            } else {
                // Default to 'All Repertoire' if no category was active, or use existing active category
                const currentCategory = activeLink ? activeLink.dataset.category : 'all';
                displaySection('choir-repertoire', currentCategory);
            }
        } else {
            // If there's a search term, always show repertoire section and filter all videos
            homeDashboardSection.style.display = 'none';
            choirRepertoireSection.style.display = 'block';
            repertoireHeading.textContent = `Search Results for "${searchInput.value}"`;
            renderMainContentItems(filteredVideos, allRepertoireGrid, noVideoResults);

            // Remove active class from all sidebar links when searching
            categoryList.querySelectorAll('a').forEach(link => link.classList.remove('active'));
        }
    });


    // --- Initial Load ---
    generateCategoryList(); // Build the sidebar categories first
    displaySection('home-dashboard'); // Show home dashboard by default on load
});
