import ArrowDown from "../icons/arrow-down.svg"

import { useEffect, useState } from "react"

interface ICard {
  children: React.ReactNode
  opened: Function
}

export const Card = ({ children, opened }: ICard) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleOpened = () => {
    setIsOpened((prevOpened) => !prevOpened)
  }

  useEffect(() => {
    opened(isOpened)
  }, [isOpened, opened])

  return (
    <div
      className={`rounded-sm text-black p-6 pb-8  border-2 box-border relative hover:shadow-card cursor-pointer transition [overflow-anchor:none] mb-4 duration-200 ease-in-out break-inside-avoid ${
        isOpened
          ? "border-blue shadow-card bg-blue8"
          : "bg-gray-200 border-gray-300 "
      }`}
      onClick={toggleOpened}
    >
      {children}
      <button
        className={`border-none bg-transparent absolute bottom-3 left-1/2 -translate-x-1/2 ease-in-out ${
          isOpened && "rotate-180"
        }`}
      >
        <ArrowDown
          className={`fill-gray-400 group-hover:fill-gray-500 ${
            isOpened && "fill-gray-500"
          }`}
        />
      </button>
    </div>
  )
}
