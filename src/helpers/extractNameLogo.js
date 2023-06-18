function findNameById(array, id) {
  const foundObject = array.find((obj) => obj.id === id);
  return foundObject
    ? { name: foundObject.name, logos: foundObject.logos.light }
    : null;
}

export default findNameById;
