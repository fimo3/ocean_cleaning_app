export default function Tooltip({ message, children }) {
  return (
    <div class="group relative flex ">
      {children}
      <span class="absolute top-10 scale-0 transition-all rounded bg-primary-hover p-2 text-xs text-default-text group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
