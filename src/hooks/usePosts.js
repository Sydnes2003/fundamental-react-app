import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort && sort === "id") {
            return [...posts].sort((a, b) => a[sort] - b[sort]);
        } else if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const searchedSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query));
    }, [query, sortedPosts]);

    return searchedSortedPosts;
}