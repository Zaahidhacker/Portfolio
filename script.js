document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.youtubelink, .youtubebox, .youtubeicon, .twitterlink, .twitterbox, .twittericon, .redditlink, .redditicon, .redditbox, .gmaillink, .emailbox, .gmailicon');

  const checkVisibility = () => {
    links.forEach((link, index) => {
      const rect = link.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
          link.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        }, index * 100); // Stagger effect by 100ms per element
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
});
