import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export const isNil = (param: any) => isNull(param) || isUndefined(param);
