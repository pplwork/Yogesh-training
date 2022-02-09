export const clickStartBtn = (i) => {
  return {
    type: "START_TIMER",
    interval: i,
  };
};
