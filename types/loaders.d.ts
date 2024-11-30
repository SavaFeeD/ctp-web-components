declare module '*.html' {
  const value: any;
  export default value;
}

declare module '*.css' {
  const value: any;
  export default value;
}

declare module '!!raw-loader!*' {
  const contents: string
  export = contents
}