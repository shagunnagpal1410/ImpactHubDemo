// Location functionality
        function getCurrentLocation() {
            const locationDisplay = document.getElementById('locationDisplay');
            const currentLocationDiv = document.getElementById('currentLocation');
            
            locationDisplay.style.display = 'block';
            currentLocationDiv.textContent = 'Detecting location...';
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        
                        // Simulate reverse geocoding (in real app, you'd use Google Maps API or similar)
                        setTimeout(() => {
                            currentLocationDiv.innerHTML = `
                                <div>📍 Chennai, Tamil Nadu, India</div>
                                <small style="color: rgba(170, 171, 184, 0.6);">Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}</small>
                            `;
                        }, 1500);
                    },
                    (error) => {
                        currentLocationDiv.textContent = 'Unable to detect location. Please enable location services.';
                    }
                );
            } else {
                currentLocationDiv.textContent = 'Geolocation is not supported by this browser.';
            }
        }

        // Domain selection functionality
        function toggleDomain(element) {
            element.classList.toggle('selected');
        }

        function savePreferences() {
            const selectedDomains = Array.from(document.querySelectorAll('.domain-tag.selected'))
                .map(tag => tag.textContent);
            
            if (selectedDomains.length === 0) {
                alert('Please select at least one domain of interest.');
                return;
            }
            
            alert(`Preferences saved!\nSelected domains: ${selectedDomains.join(', ')}`);
        }

        // Simulate real-time updates
        function updateLeaderboard() {
            // This would connect to your API in a real application
            console.log('Leaderboard updated');
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Auto-select a few domains for demo
            const defaultDomains = ['Education', 'Environment'];
            defaultDomains.forEach(domain => {
                const tag = Array.from(document.querySelectorAll('.domain-tag'))
                    .find(tag => tag.textContent === domain);
                if (tag) tag.classList.add('selected');
            });

            // Simulate location input functionality
            document.getElementById('locationInput').addEventListener('input', function(e) {
                const value = e.target.value;
                if (value.length > 2) {
                    // Here you would typically call a location API for suggestions
                    console.log('Searching for location:', value);
                }
            });
        });

        // Mock function for event registration
        function registerForEvent(eventName) {
            alert(`Successfully registered for: ${eventName}`);
        }

        // Add click handlers for upcoming events
        document.addEventListener('DOMContentLoaded', function() {
            const upcomingEvents = document.querySelectorAll('#upcomingEvents .event-item');
            upcomingEvents.forEach(event => {
                if (event.querySelector('.status-upcoming')) {
                    event.style.cursor = 'pointer';
                    event.addEventListener('click', function() {
                        const eventTitle = this.querySelector('.event-title').textContent;
                        if (confirm(`Would you like to register for: ${eventTitle}?`)) {
                            registerForEvent(eventTitle);
                            this.querySelector('.event-status').textContent = 'Registered';
                            this.querySelector('.event-status').className = 'event-status status-registered';
                        }
                    });
                }
            });
        });