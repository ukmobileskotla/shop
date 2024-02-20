var times = document.getElementById("times");
			var bars = document.getElementById("bars");
			var nav = document.getElementById("nav");
			var searchContainer = document.getElementById("searchContainer");
			var searchIcon = document.getElementById("searchIcon");
			var catNav = document.getElementById("cat-nav");
			var topBrands = document.getElementById("topBrands");
			var carouselItems = document.getElementById("carousel_items");
			var isVisible = false;

			function displayTimes() {
				times.style.display = "block";
				bars.style.display = "none";
				times.style.marginTop = "5px";
				bars.style.marginTop = "5px";
				nav.style.display = "block";
				searchBox.style.display = "none";
				searchIcon.style.display = "none";
				nav.style.animation = "slideRight 1s";
				carouselItems.style.opacity = "0.2"
			}
			bars.onclick = displayTimes;

			function displayBars() {
				bars.style.display = "block";
				times.style.display = "none";
				nav.style.display = "none";
				searchBox.style.display = "block";
				searchIcon.style.display = "block";
				carouselItems.style.opacity = "1.0";
			}
			times.onclick = displayBars;

			function displayCatNav() {
				if(isVisible) {
					catNav.style.display = "none";
					carouselItems.style.opacity = "1.0";
					searchContainer.style.opacity = "1.0";
				}
				else {
					catNav.style.display = "block";
					catNav.style.animation = "slideRight 1s";
					carouselItems.style.opacity = "0.3";
					searchContainer.style.opacity = "0.5";
				}
				isVisible = !isVisible;
			}
			heading4.onclick = displayCatNav;

			var carouselitems = document.querySelectorAll(".carousel_item");
			var i = 1;
			setInterval(function() {
				Array.from(carouselitems).forEach(function(item) {
					if(i < carouselitems.length) {
						item.style.transform = "translateX(" + -i * 100 + '%' + ")";
					}
				})
				if(i < carouselitems.length) {
					i++;
				}
				else {
					i = 0;
				}
			}, 10000);
			
			
			
			
			function searchItems() {
				var searchTerm = document.getElementById('searchBox').value.trim(); // Get search term
				var resultsContainer = document.getElementById('searchResults');
				resultsContainer.innerHTML = ''; // Clear previous results
			
				var categories = {
					'chargers': ['a.t-mal', 'charger-2', 'charger-3', 'charger-4', 'charger-5', 'charger-6'],
					'cables': ['cable-1', 'cable-2', 'cable-3', 'cable-4', 'cable-5', 'cable-6'],
					'handsfree': ['handsfree-1', 'handsfree-2', 'handsfree-3', 'handsfree-4', 'handsfree-5', 'handsfree-6'],
					'cases': ['case-1', 'case-2', 'case-3', 'case-4', 'case-5', 'case-6'],
					'mobiles': ['mobile-1', 'mobile-2', 'mobile-3', 'mobile-4', 'mobile-5', 'mobile-6'],
					'speakers': ['speaker-1', 'speaker-2', 'speaker-3', 'speaker-4', 'speaker-5', 'speaker-6'],
					'bluetooths': ['bluetooth-1', 'bluetooth-2', 'bluetooth-3', 'bluetooth-4', 'bluetooth-5', 'bluetooth-6']
				};
			
				// Loop through each category
				for (const category in categories) {
					categories[category].forEach(fileName => {
						if (fileName.includes(searchTerm)) {
							var link = document.createElement('a');
							link.href = '/categories/' + category + '/' + fileName; // Adjust path based on your actual file structure
							link.textContent = fileName;
							link.classList.add('result-link');
							resultsContainer.appendChild(link);
							resultsContainer.appendChild(document.createElement('br'));
						}
					});
				}
			
				if (resultsContainer.innerHTML === '') {
					resultsContainer.innerHTML = '<p>No results found</p>';
				}
			}
			
			// Add event listener to trigger search on input change
			document.getElementById('searchBox').addEventListener('input', searchItems);