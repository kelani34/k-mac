import Image from "next/image";

export const AppBar = () => {
  return (
    <div className=" absolute  bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-blend-multiply backdrop-blur-2xl rounded-[20px] bg-[rgba(245,245,245,0.15)] flex gap-2 items-center">
      {[...Array(12).keys()].map((num) => (
        <Image
          key={num}
          className="cursor-pointer"
          src={`/images/app-bar/image-${num}.png`}
          alt=""
          height={62}
          width={62}
        />
      ))}
    </div>
  );
};
