export const isBuffer = (obj: any): obj is Buffer => {
  return Buffer ? Buffer.isBuffer(obj) : false;
};
