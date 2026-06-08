import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, "ellipsis", total];
  }

  if (current >= total - 2) {
    return [1, "ellipsis", total - 2, total - 1, total];
  }

  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

type MarketplacePaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const MarketplacePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: MarketplacePaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <Pagination className="mt-12">
      <PaginationContent className="gap-1.5">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={`h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 hover:bg-gray-50 ${
              currentPage <= 1 ? "pointer-events-none opacity-40" : "cursor-pointer"
            }`}
          />
        </PaginationItem>

        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis className="h-9 w-9 text-gray-400" />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
                className={`h-9 min-w-9 rounded-lg border text-sm font-medium cursor-pointer ${
                  page === currentPage
                    ? "border-dq-orange bg-white text-dq-navy shadow-none"
                    : "border-transparent bg-transparent text-gray-600 hover:bg-white hover:border-gray-200"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={`h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-600 hover:bg-gray-50 ${
              currentPage >= totalPages ? "pointer-events-none opacity-40" : "cursor-pointer"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MarketplacePagination;
