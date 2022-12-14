const isValidDate = (date: Date) => {
    return date instanceof Date && !isNaN(date.valueOf());
};

export default isValidDate;