export const isOperand = (text) => {
  return ["x", "+", "-", "%", "/", ".", "="].includes(text);
};
