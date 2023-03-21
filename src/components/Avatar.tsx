import Image from "next/image"

interface IAvatar {
  url?: string
  name?: string
  size?: string
}

const Avatar = ({ url, name, size }: IAvatar) => {
  return (
    <div
      className={`rounded-full min-w-[2.5rem] bg-gray-400 ${
        size === "small"
          ? "w-10 min-h-10 max-h-10 md:w-14 md:min-h-14 md:max-h-14 md:min-w-14"
          : "w-20 min-h-20 max-h-20 md:min-w-20"
      } overflow-hidden`}
    >
      {url && (
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={url}
          alt={name ? name : "No Image"}
          width={80}
          height={80}
          priority
        />
      )}
    </div>
  )
}

export default Avatar
