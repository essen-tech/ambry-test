module.exports = `
    {
        allWpPage(filter: {title: {ne: "SWACE_PLACEHOLDER"}}) {
            nodes {
                id
                slug
                status
                type: nodeType
            }
        }
    }
`;
