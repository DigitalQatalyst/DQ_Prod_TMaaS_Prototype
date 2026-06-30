"use client";

import { Pagination } from "@/components/foundation/workspace-ui/Pagination";

interface RequestsPaginationProps {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

/** DWS.01 EntityList pager — right-aligned with page caption. */
export function RequestsPagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
}: RequestsPaginationProps) {
  if (totalCount === 0) return null;

  return (
    <div className="flex justify-end pt-1" data-testid="pager">
      <Pagination
        page={page}
        pageSize={pageSize}
        total={totalCount}
        showCaption
        onPageChange={onPageChange}
      />
    </div>
  );
}
