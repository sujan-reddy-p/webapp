type ProfileControlsProps = {
  current: "recruiter" | "visitor";
};

export function ProfileControls({ current }: ProfileControlsProps) {
  return (
    <nav className="profile-controls fixed right-4 top-4 z-[70] flex items-center rounded-full border p-1 shadow-2xl backdrop-blur-xl sm:right-7 sm:top-6" aria-label="Choose portfolio view">
      <a href="/recruiter" aria-current={current === "recruiter" ? "page" : undefined} data-cursor="GO" className="profile-control-link rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[.1em] sm:px-4">Recruiter</a>
      <a href="/explore" aria-current={current === "visitor" ? "page" : undefined} data-cursor="GO" className="profile-control-link rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[.1em] sm:px-4">Visitor</a>
    </nav>
  );
}
