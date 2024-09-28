<script src="/socket.io/socket.io.js"></script>
<script>
    // Connect to the Socket.io server
    const socket = io('http://localhost:5000'); // Update with your backend URL if necessary

    // Send message on button click
    document.getElementById('sendButton').addEventListener('click', () => {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value;
        socket.emit('sendMessage', message); // Emit the message to the backend
        messageInput.value = ''; // Clear input field
    });

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message; // Display the received message
        messagesDiv.appendChild(newMessage); // Append the message to the messages div
    });
</script>
