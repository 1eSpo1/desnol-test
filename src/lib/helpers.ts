import {ITEMS_PER_PAGE, MOCK_DATA, MockData} from "@/constants/mock";

export const getValidRequests = (data: typeof MOCK_DATA, username: string | null) => {
    return data.filter((request) => request.user === username).map(({user, ...rest}) => rest);
}

export const validateForm = (username: string, password: string) => {
    if (username === 'gavrilov' && password === '111aaa') return true
    if (username === 'fedorov' && password === '222bbb') return true
    return false;
}

export const getTableRequsets = (data: Omit<MockData, "user">[] , currentPage: number) => {
    return data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
}

export const getTotalPages = (count: number, itemsPerPage: number) => {
    return Math.ceil(count / itemsPerPage);
}

export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};