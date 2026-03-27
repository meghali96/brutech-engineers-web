const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.311-2.012C9.94 31.108 12.86 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.388 1.097-1.938 2.008-3.172 2.274-.846.178-1.95.32-5.668-1.218-4.76-1.97-7.82-6.804-8.058-7.118-.228-.314-1.916-2.55-1.916-4.862 0-2.312 1.212-3.45 1.642-3.922.388-.426 1.03-.614 1.644-.614.198 0 .376.01.536.018.472.02.708.048 1.02.788.388.926 1.334 3.258 1.45 3.496.118.238.236.554.078.868-.148.322-.278.466-.516.738-.238.272-.464.48-.702.774-.218.258-.464.534-.198 1.03.266.488 1.182 1.95 2.538 3.16 1.742 1.552 3.21 2.032 3.666 2.258.456.226.722.19.988-.114.274-.314 1.174-1.366 1.486-1.836.306-.47.618-.39 1.042-.234.428.15 2.724 1.284 3.19 1.518.466.236.776.352.892.548.114.198.114 1.138-.274 2.236z" />
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = '917702949688';
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center animate-pulse-slow hover:scale-110 transition-transform group"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
