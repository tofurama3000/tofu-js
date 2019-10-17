export const isBuffer = obj => {
  return Buffer ? Buffer.isBuffer(obj) : false;
};
