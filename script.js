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

    // --- YOUR APP DATA ---
    // IMPORTANT: The "Latest Updates" on the Home Dashboard will now simply show the
    //            first 4 videos as they appear in this 'videos' array.
    //            Arrange your videos in this array so the first 4 are the ones
    //            you want to showcase as "latest".
    const appData = {
        "videos": [
            // --- Place your 4 "Latest Update" videos/playlists here first ---
 			{ "title": "Himno ng Diosesis ng Lucena (Musika at Ayos: Naldy A. Rodriguez | Titik: Dr. Palermo Salvacion)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZLtiJ8Ww9TUG7--L1xFUeW", "category": "Filipino Music" },
			{ "title": "Banal Ka (Sanctus)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbOEEcg7aD545XAiw9kJquK", "category": "Liturgical Music" },
			{ "title": "Paggugunita (Arr. Rodelia Austria-Valeriano)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZjQKc6rMVqBj5ZDpO79DpC", "category": "Filipino Music" },
			{ "title": "Jingle Bells Calypso (Arr. Leo M. Teller, based on J. Pierpont)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbNdl7rUlYE4xdrukpVPeeN", "category": "Christmas Carols" },
            // --- Rest of your videos/playlists follow below ---
			{ "title": "Oroquieta Chamber Singers", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYEpM-UdPkGd11rzH9uiTpZ", "category": "Choir Performances" },
			{ "title": "Humayo't Ihayag by Manoling Francisco, SJ", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1x6rFNhYjjjRR7iUCciuG", "category": "Filipino Music" },
            { "title": "Kordero ng Diyos by Ryan Cayabyab", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZFzXn2tIXc5dIxXvLr6TkK", "category": "Liturgical Music" },
            { "title": "The Lord Bless You and Keep You", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbqA1a16rh_aiVV4Mc21bW5", "category": "Sacred Music" },
            { "title": "Gandang Sinauna at Sariwa", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjb3i5oMtXYoJiLfjpHPg5cP", "category": "Filipino Music" },
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
            { "title": "Jagdlied - Mendelssohn Op.59-6", "link": "https://www.youtube.com/watch?v=EXAMPLE1", "category": "Classical Pieces" },
			{ "title": "Let My Love Be Heard - Jake Runestad", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1vQf7emcxikXiqSi-DrwE", "category": "Sacred Music" },
			{ "title": "Sa Piging Na Ito - Ferdinand M. Bautista", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYGEP3oeqUI997uZlUdE_Pl", "category": "Filipino Music" },
			{ "title": "Piliin Mo Ang Pilipinas - Bing Rio-Pablico", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZRrwQzmyTXF6-7i-uBf2MD", "category": "Choir Performances" },
			{ "title": "LUX AETERNA – Elgar’s Nimrod with Requiem Mass Text (Arr. John Cameron", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYdFZ_3pw4aGaQmpYSjZcF8", "category": "Sacred Music" },
			{ "title": "Panunumpa – A. Joson (Fr. JBoy Gonzales, SJ)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjYi1iSpfcH38EfA6UtojvA3", "category": "Filipino Music" },
			{ "title": "Bundok Banahaw (Arr. Fabian Obispo)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZG_Ak5XgysF4peIUnkA2xQ", "category": "Filipino Music" },
			{ "title": "Dahil sa 'Yo - F. Obispo Jr.", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaempjxQzDGyq7jSr9CmgjW", "category": "Filipino Music" },
			{ "title": "Paggugunita (Arr. Rodelia Austria-Valeriano)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZjQKc6rMVqBj5ZDpO79DpC", "category": "Filipino Music" },
			{ "title": "Gapas (Eudenice V. Palaruan)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjakKonBXmCqWFBEG9K57n_h", "category": "Filipino Music" },
			{ "title": "Jingle Bells Calypso (Arr. Leo M. Teller, based on J. Pierpont)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbNdl7rUlYE4xdrukpVPeeN", "category": "Christmas Carols" },
			{ "title": "Himno ng Diosesis ng Lucena (Musika at Ayos: Naldy A. Rodriguez | Titik: Dr. Palermo Salvacion)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZLtiJ8Ww9TUG7--L1xFUeW", "category": "Filipino Music" },
			{ "title": "Banal Ka (Sanctus)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbOEEcg7aD545XAiw9kJquK", "category": "Liturgical Music" },
			{ "title": "Metropop Medley (Arr. Darren Vega)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZ3CyIqZSt3FV0L9WH4l6A0", "category": "Concert Performance" },
			{ "title": "Golden (Words & Music by EJAE and Mark Sonnenblick | Arr. Emmanuel Cañazares)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjZLRxOVnxjYq3C86J28YbQE", "category": "Concert Performance" },
            // NEW: CONCERT PERFORMANCE CATEGORY
            { "title": "Let My Love Be Heard - Jake Runestad", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDja1vQf7emcxikXiqSi-DrwE", "category": "Concert Performance" },
            { "title": "Abendlied", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjaoQ0wgW6n_leDwCpdhS0By", "category": "Concert Performance" },
			{ "title": "Amor De Mi Alma (You Are the Love of My Soul)", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjbv6pSZFgR9-EFYrBLKu_uQ", "category": "Concert Performance" },
			{ "title": "The Road Home – Michael Dennis Browne", "link": "https://www.youtube.com/playlist?list=PLAAamlPjfDjY2zt5UD_l9hTjL2HroBik-", "category": "Sacred Music" }
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


    // Helper function to create an item card for the main content areas
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

    // --- Render Items for Main Content Areas (Dashboard, All Repertoire, Search Results) ---
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


    // --- Sidebar Category List Generation ---
    const generateCategoryList = () => {
        const categories = new Set(appData.videos.map(video => video.category));
        const sortedCategories = Array.from(categories).sort();

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
            let activeLinkElement = null;

            if (category && category !== 'all') {
                filteredVideos = appData.videos.filter(video => video.category === category);
                repertoireHeading.textContent = `${category} Repertoire`;
                activeLinkElement = document.querySelector(`a[data-category="${category}"]`);
                // Ensure the "Categories" section is expanded when a sub-category is selected
                sidebarSectionHeader.classList.remove('collapsed');
                dynamicCategoriesContainer.classList.remove('collapsed');

            } else { // "All Repertoire" selected
                repertoireHeading.textContent = 'All Choir Repertoire';
                activeLinkElement = document.querySelector('[data-category="all"]');
            }

            if (activeLinkElement) {
                activeLinkElement.classList.add('active');
            }
            renderMainContentItems(filteredVideos, allRepertoireGrid, noVideoResults);
        }
    };

    // Render Latest Videos for Dashboard (takes first 4 from the array)
    const renderLatestVideos = () => {
        const latest4Videos = appData.videos.slice(0, 4);
        renderMainContentItems(latest4Videos, latestVideosList, noLatestResults);
    };


    // --- Event Listeners ---
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

    // NEW: Event Listener for the main "Categories" section header
    sidebarSectionHeader.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        dynamicCategoriesContainer.classList.toggle('collapsed');
        sidebarSectionHeader.classList.toggle('collapsed');
    });


    // Search Logic
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredVideos = appData.videos.filter(item =>
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
