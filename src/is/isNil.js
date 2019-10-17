import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export const isNil = param => isNull(param) || isUndefined(param);
