import Image from "next/image";
import profileImg from "@/app/assets/image-avatar.jpg";

const MainLayout = () => {
  return (
    <header>
      <Image src={profileImg} width={40} height={40} alt="profile image" />
    </header>
  );
};

export default MainLayout;
