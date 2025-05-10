// tailwind-animate-plugin.js
export default function animatePlugin() {
  return {
    handler: ({ addUtilities }) => {
      addUtilities({
        '.animate-accordion-down': {
          animation: 'accordion-down 0.2s ease-out',
        },
        '.animate-accordion-up': {
          animation: 'accordion-up 0.2s ease-out',
        },
        '.animate-fade-in': {
          animation: 'fade-in 0.3s ease-out',
        },
        '.animate-fade-out': {
          animation: 'fade-out 0.3s ease-out',
        },
      });
    },
  };
}