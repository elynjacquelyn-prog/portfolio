 document.addEventListener('DOMContentLoaded', function() {
            var modal = document.getElementById("imageModal");
            var modalImg = document.getElementById("modalImage");
            var captionText = document.getElementById("caption");
            var span = document.getElementsByClassName("close")[0];

            // Function to open modal
            function openModal(src, alt) {
                modal.style.display = "block";
                modalImg.src = src;
                captionText.innerHTML = alt;
            }

            // 1. Add click event to images
            var images = document.querySelectorAll('.project-img');
            images.forEach(function(img) {
                img.addEventListener('click', function() {
                    openModal(this.src, this.alt);
                });
            });

            // 2. Add click event to buttons (THIS IS THE NEW PART)
            var buttons = document.querySelectorAll('.btn-view');
            buttons.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault(); // Stop default link behavior (navigating away)
                    
                    // Find the image inside the same card as the clicked button
                    var card = this.closest('.project-card');
                    var img = card.querySelector('.project-img');
                    
                    // If an image is found, open it in the modal
                    if (img) {
                        openModal(img.src, img.alt);
                    }
                });
            });

            // Close modal actions
            span.onclick = function() { 
                modal.style.display = "none";
            }

            modal.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        });