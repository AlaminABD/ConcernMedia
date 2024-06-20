
/* concern-media/admin/script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Handle image upload form
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(uploadForm);
            const image = formData.get('image');
            const target = formData.get('target');

            // Simulate uploading the image and updating the target image
            console.log(`Uploading image ${image.name} to replace ${target}`);
            alert(`Image ${image.name} uploaded to replace ${target}. (This is a simulation.)`);
        });
    }

    // Simulate fetching messages from visitors
    const messagesList = document.getElementById('messages-list');
    if (messagesList) {
        const messages = [
            { email: 'visitor1@example.com', content: 'Great website!' },
            { email: 'visitor2@example.com', content: 'I love your services.' },
        ];

        messages.forEach(message => {
            const listItem = document.createElement('li');
            listItem.textContent = `From: ${message.email} - ${message.content}`;
            messagesList.appendChild(listItem);
        });
    }

    // Handle settings form
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const siteTitle = document.getElementById('site-title').value;
            const siteDescription = document.getElementById('site-description').value;
            const adminEmail = document.getElementById('admin-email').value;
            const bannerImage = document.getElementById('banner-image').files[0];

            // Simulate saving the settings
            console.log(`Saving settings:
                Site Title: ${siteTitle}
                Site Description: ${siteDescription}
                Admin Email: ${adminEmail}
                Banner Image: ${bannerImage ? bannerImage.name : 'No new image'}`);
                
            alert(`Settings saved:
                Site Title: ${siteTitle}
                Site Description: ${siteDescription}
                Admin Email: ${adminEmail}
                Banner Image: ${bannerImage ? bannerImage.name : 'No new image'} (This is a simulation.)`);
        });
    }
});
