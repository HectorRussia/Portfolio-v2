
const GitHubSVG = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LinkedInSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.8v1.9h.1c.66-1.25 2.28-2.57 4.7-2.57C22 7.33 24 9.8 24 14.3V22h-5v-6c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.07V22h-5V8z" />
  </svg>
);

export default function SideBars() {
  return (
    <>
      {/* left fixed icons + line (hidden on small screens) */}
      <div className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-20" aria-hidden>
        <div className="flex flex-col items-center gap-6">
          <a href="https://github.com/HectorRussia?tab=repositories" target="_blank" rel="noreferrer"
            className="text-slate-300 hover:text-teal-400 transition-colors">
            <GitHubSVG />
          </a>
          <a href="https://www.linkedin.com/in/ponkrit-woralamee-b9a448297" target="_blank" rel="noreferrer"
            className="text-slate-300 hover:text-teal-400 transition-colors">
            <LinkedInSVG />
          </a>
        </div>
        <div className="w-px h-40 bg-slate-600"></div>
      </div>

      {/* right fixed vertical email + line (hidden on small screens) */}
      <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-6 z-20" aria-hidden>
        <div className="text-slate-400 text-xs tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          <a href="mailto:Ponkrit.wo@hotmail.com" className="inline-block transform rotate-180 hover:text-teal-400 transition-colors">
            Ponkrit.wo@hotmail.com
          </a>
        </div>
        <div className="w-px h-40 bg-slate-600"></div>
      </div>
    </>
  );
}