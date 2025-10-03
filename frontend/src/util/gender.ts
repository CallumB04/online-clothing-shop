// Convert gender to label for displaying on page
export const addApostropheToGender = (gender: string) => {
    let upper = gender.toUpperCase();
    if (upper === "MENS") {
        return "Men's";
    } else if (upper === "WOMENS") {
        return "Women's";
    } else {
        return gender;
    }
};
