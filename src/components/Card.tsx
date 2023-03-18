import ArrowDown from "../icons/arrow-down.svg"

import { useState } from "react"

interface ICard {
  children: React.ReactNode
}

export const Card = ({ children }: ICard) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleOpened = () => {
    setIsOpened((prevOpened) => !prevOpened)
  }

  return (
    <div
      className={`rounded-sm text-black p-6 pb-8  border-2 box-border relative hover:shadow-card cursor-pointer ${
        isOpened
          ? "border-blue shadow-card bg-blue8"
          : "bg-gray-200 border-gray-300"
      }`}
      onClick={toggleOpened}
    >
      {children}
      <button
        className={`border-none bg-transparent absolute bottom-3 left-1/2 -translate-x-1/2 ${
          isOpened ? "rotate-180" : ""
        }`}
      >
        <ArrowDown
          className={`fill-gray-400 group-hover:fill-gray-500 ${
            isOpened ? "fill-gray-500" : ""
          }`}
        />
      </button>
    </div>
  )
}
