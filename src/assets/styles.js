export const colors = {
  primary: "#907c66",
  title: "#c5c6ca",
  content: "#535459",
  bgDark: "#2c2d32",
  bgLight: "#323338",
};

export const fonts = {
  title: "'Lato', sans-serif",
  content: "'Roboto', sans-serif",
};

const screens = {
  ms: "320px",
  mm: "375px",
  ml: "480px",
  ts: "576px",
  tm: "768px",
  tl: "850px",
  txl: "950px",
  ls: "1024px",
  lm: "1100px",
  ll: "1200px",
  d: "2560px",
};

export const media = {
  ms: `@media(min-width:${screens.ms})`,
  mm: `@media(min-width:${screens.mm})`,
  ml: `@media(min-width:${screens.ml})`,
  tabletS: `@media(min-width:${screens.ts})`,
  tabletM: `@media(min-width:${screens.tm})`,
  tl: `@media(min-width:${screens.tl})`,
  txl: `@media(min-width:${screens.txl})`,
  laptopS: `@media(min-width:${screens.ls})`,
  laptopM: `@media(min-width:${screens.lm})`,
  laptopL: `@media(min-width:${screens.ll})`,
  d: `@media(min-width:${screens.d})`,
};
