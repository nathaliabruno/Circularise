import Image from "next/image"

interface IAvatar {
  url?: string
  name?: string
  size?: string
}

const Avatar = ({ url, name, size }: IAvatar) => {
  return (
    <div
      className={`rounded-full bg-gray-400 ${
        size === "small" ? "w-14 h-14" : "w-20 h-20"
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
