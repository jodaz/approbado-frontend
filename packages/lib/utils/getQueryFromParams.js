const getQueryFromParams = ({
    perPage, page, sort, filter, type = null
}) => {
    const query = {};

    if (page) {
        query.page = page
    }

    if (perPage) {
        query.perPage = perPage
    }

    // Add all filter params to query.
    Object.keys(filter || {}).forEach((key) => {
        query[`filter[${key}]`] = filter[key];
    });

    // Add sort parameter
    if (sort && sort.field) {
        query.sort = sort.field;
        query.order = sort.order === 'ASC' ? 'asc' : 'desc';
    }

    if (type) {
        query.type = type
    }

    return query;
}

export default getQueryFromParams;
