export default function SidebarTab({ onClick, isActive, children }) {
  return (
    <div
      onClick={onClick}
      className={`sidebar__menu${isActive ? '--selected' : ''}`}
    >
      {children}
    </div>
  );
}
