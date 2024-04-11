export default function TooltipLastChild({ message, children }) {
  return (
    <div class="group relative flex ">
      {children}
      <span class="fixed top-10 scale-0 transition-all rounded bg-primary-hover p-1 text-xs text-default-text group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
