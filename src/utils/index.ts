export const handleRenderAuthors = (authors: { name: string }[]) => {
    const authorNames = authors.map((item) => item.name);
    return authorNames.join(', ');
};

export const handleRenderGenre = (genres: { name: string }[]) => {
    const genreNames = genres.map((item) => item.name);
    return genreNames.join(', ');
};

export const handleRenderTags = (tags: { name: string }[]) => {
    const tagNames = tags?.map((item) => item.name) || [];
    return tagNames.join(', ');
};

export const handleParseYear = (release_date: string) => new Date(release_date).getFullYear();

export const handleFormatCurrency = (currency: string, price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(price);
};
