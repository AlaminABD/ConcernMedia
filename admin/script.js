/* concern-media/admin/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(uploadForm);
        const image = formData.get('image');
        const target = formData.get('target');

        // Simulate uploading the image and updating the target image
        console.log(`Uploading image ${image.name} to replace ${target}`);
        alert(`Image ${image.name} uploaded to replace ${target}. (This is a simulation.)`);
    });

    // Simulate fetching messages from visitors
    const messages = [
        { email: 'visitor1@example.com', content: 'Great website!' },
        { email: 'visitor2@example.com', content: 'I love your services.' },
    ];

    const messagesList = document.getElementById('messages-list');
    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = `From: ${message.email} - ${message.content}`;
        messagesList.appendChild(listItem);
    });
});
