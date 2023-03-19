import { ComponentType, ReactNode } from "react"

interface IText {
  tag?: ComponentType | keyof JSX.IntrinsicElements
  children: ReactNode | string
  styling?: string
}
export const Text = ({ tag: Wrapper = "p", children, styling }: IText) => {
  let styles
  switch (Wrapper) {
    case "h1":
      styles = "text-2xl font-bold leading-normal"
      break

    case "h2":
      styles = "text-xl font-bold leading-5 my-2"
      break

    case "h3":
      styles = "text-lg leading-normal my-2"
      break

    case "p":
      styles = "text-base leading-normal"
      break

    default:
      break
  }
  return <Wrapper className={`${styles} ${styling}`}>{children}</Wrapper>
}
