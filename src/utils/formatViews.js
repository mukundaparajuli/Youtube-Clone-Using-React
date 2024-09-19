export const formatViews = (viewCount) => {
    if (viewCount >= 1_000_000) {
        return (viewCount / 1_000_000).toFixed(1) + "M views";
    } else if (viewCount >= 1_000) {
        return (viewCount / 1_000).toFixed(1) + "K views";
    }
    return viewCount.toLocaleString() + " views";
};
