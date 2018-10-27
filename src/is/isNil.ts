import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export const isNil = (param: any): param is null | undefined => isNull(param) || isUndefined(param);
