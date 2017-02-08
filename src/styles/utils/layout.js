export function container(width = '768px') {
  return `
    margin: 0 auto;
    width: 100%;
    max-width: ${width};
  `;
}

export default {
  container,
};
