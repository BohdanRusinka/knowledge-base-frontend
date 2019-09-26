const mockArray = (maxLength) => {
  return [...new Array(Math.floor(Math.random() * maxLength))];
};

const mockTree = (deep = 3) => {
  if (deep > 0) {
    return mockArray(100).map((_, i) => ({
      key: `${deep}-${i}-${Math.random()}`,
      children: mockTree(deep - 1)
    }));
  }
  return null;
};

const resources = mockTree();
const users = {};

export { resources, users };
