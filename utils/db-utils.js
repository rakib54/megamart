export const replaceMongoIdWithArray = (arr) => {
  const newArr = arr.map((item) => {
    return {
      ...item,
      id: item._id.toString()
    }
  }).map(({ _id, ...rest }) => {
    return rest;
  })

  return newArr;
}

export const replaceMongoIdWithObject = (obj) => {
  const { _id, ...rest } = { id: obj._id.toString(), ...obj };

  return rest;
} 