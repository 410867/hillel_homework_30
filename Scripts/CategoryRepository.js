const categories = [
    {
        'id': 1,
        'title': 'Смартфони',
        'parentId': 0,
    },
    {
        'id': 2,
        'title': 'Ноутбуки',
        'parentId': 0,
    },
    {
        'id': 3,
        'title': 'Планшети',
        'parentId': 0,
    },
]

export const categoryList = (parentId = 0) => {
    return categories.filter((value) => {
        return value.parentId === parentId;
    })
}