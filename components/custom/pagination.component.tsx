"use client";

import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
}

export default function PaginationComponent({
  totalPages,
  currentPage,
}: PaginationComponentProps) {
  const router = useRouter();

  const goToPage = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                goToPage(Math.max(currentPage - 1, 1));
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href='#'
                isActive={i + 1 === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                goToPage(Math.min(currentPage + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
