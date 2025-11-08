export const capitalize = (s: string) => {
    return s.length <= 1 ? s.toUpperCase() : s[0].toUpperCase() + s.slice(1);
};
