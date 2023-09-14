export const checkNotEmpty = (value) => {
    if (!(typeof value === 'string' && value !== "")) {
        return 'Valid if not be empty'
    };
    return;
};

export const checkIsNotNone = (item) => {
    if (!item || item.value === "-NONE-") {
        return 'A value must be selected'
    };
    return;
};
export const checkIsNumber = (value) => {
    if (isNaN(value)) {
        return 'Valid if a number'
    };
    return;
};

export const checkIsBetween = (value, x = 0, y) => {
    if (isNaN(value) || value < x || (y && value > y)) {
        if (y) return `Valid if >= ${x} and <= ${y}`;
        return `Valid if >= ${x}`
    };
    return;
};

export const checkIsYear = (value, year = 2024) => {
    if (isNaN(value) || value < 2024) {
        return `Valid if > ${year}`
    };
    return;
};
export const checkIsPercent = (value, x = 0, y) => {
    if (isNaN(value) || value < x || (y && value > y)) {
        if (y) return `Valid if >= ${x} and <= ${y}`;
        return `Valid if >= ${x}`
    };
    return;
};

