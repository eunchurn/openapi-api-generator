export const onCreateRoute = (method: string, descriptor: any) => {
  const [path, ...handlers] = descriptor
  console.log("\x1b[35m%s\x1b[0m", method.toUpperCase(), path, handlers.map((item: Function) => item.name))
}