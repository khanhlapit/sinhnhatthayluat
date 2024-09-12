document.addEventListener('DOMContentLoaded', function() {
    // Animate title
    const title = document.querySelector('.title');
    title.style.opacity = '0';
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        title.style.opacity = opacity;
        opacity += 0.1;
    }, 100);

    // Animate emojis
    const emojis = document.querySelectorAll('.emojis span');
    emojis.forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.5}s`;
    });

    // Add confetti effect
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfetti, 300);

    // Handle video upload
    const videoUpload = document.getElementById('video-upload');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadedVideo = document.getElementById('uploaded-video');
    const uploadMessage = document.getElementById('upload-message');

    uploadBtn.addEventListener('click', function() {
        const file = videoUpload.files[0];
        if (file) {
            if (file.type === 'video/mp4') {
                const videoURL = URL.createObjectURL(file);
                uploadedVideo.src = videoURL;
                uploadedVideo.style.display = 'block';
                uploadMessage.textContent = 'Video đã được tải lên thành công!';
                uploadMessage.style.color = 'green';
            } else {
                uploadMessage.textContent = 'Vui lòng chọn file MP4.';
                uploadMessage.style.color = 'red';
            }
        } else {
            uploadMessage.textContent = 'Vui lòng chọn một file video.';
            uploadMessage.style.color = 'red';
        }
    });
});