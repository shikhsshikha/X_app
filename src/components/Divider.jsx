const Divider = () => {
  return (
    <div className="w-75 flex items-center gap-3">
      <div className="flex-1 h-px bg-gray-700" />
      <span className="text-[13px] text-gray-400">OR</span>
      <div className="flex-1 h-px bg-gray-700" />
    </div>
  );
};

export default Divider;
