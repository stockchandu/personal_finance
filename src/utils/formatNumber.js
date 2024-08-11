export const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat("en-IN");
    return `₹ ${formatter.format(parseInt(number))}`;
};