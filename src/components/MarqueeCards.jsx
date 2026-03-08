const MarqueeCards = ({ id, text }) => {
  return (
    <div
      className="
        min-w-85
        h-45
        rounded-2xl
        bg-[#0d0d0d]
        border border-white/10
        p-6
        overflow-hidden
        font-mono
        text-sm
        text-white/80
        shadow-[0_0_40px_rgba(255,255,255,0.06)]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 text-xs text-white/40">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          <span>200 OK</span>
        </div>
        <span>APPLICATION/JSON</span>
      </div>

      {/* BODY */}
      <pre className="whitespace-pre-wrap wrap-break-word leading-relaxed">
{`{
  "data": [
    {
      "id": "${id}",
      "text": "${text}"
    }
  ]
}`}
      </pre>
    </div>
  );
};

export default MarqueeCards;