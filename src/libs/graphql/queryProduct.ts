module.exports = `
    {
        allWpProduct(filter: {title: {ne: "SWACE_PLACEHOLDER"}}) {
            nodes {
                id
                slug
                status
                type: nodeType
            }
        }
    }
`;
