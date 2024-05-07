// utils.ts
export const isValidObjectId = (id: string): boolean => {
    const objectIdPattern = /^[a-f\d]{24}$/i;
    return objectIdPattern.test(id);
};
