export const PROFILE_SORT_PRIORITY = (p1, p2) => {
    var _a, _b;
    return ((_a = p1.priority) !== null && _a !== void 0 ? _a : 0) - ((_b = p2.priority) !== null && _b !== void 0 ? _b : 0);
};
