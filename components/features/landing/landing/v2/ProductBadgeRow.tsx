interface ProductBadgeRowProps {
  code: string;
  status: string;
}

function statusStyles(status: string): string {
  const normalized = status.toLowerCase();
  if (normalized === "live") {
    return "border-[#16A34A]/30 bg-[#16A34A]/10 text-[#15803D]";
  }
  if (normalized === "beta") {
    return "border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#B45309]";
  }
  return "border-gray-200 bg-gray-50 text-gray-600";
}

const ProductBadgeRow = ({ code, status }: ProductBadgeRowProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-[13px] font-bold text-dq-navy">
        {code}
      </span>
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider ${statusStyles(status)}`}
      >
        {status}
      </span>
    </div>
  );
};

export default ProductBadgeRow;
