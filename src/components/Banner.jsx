import IconButton from "./IconButton";

//data
import { fbIcons, insta, linkedIn, youtubeIcon } from "../data/components/banner";
import { yearsImg } from "../data/home/homepage";

const ContactLink = ({ type, value }) => {
  let link;

  if (type === "email") {
    link = `mailto:${value}`;
  } else if (type === "phone") {
    link = `tel:${value}`;
  }

  return <a href={link}>{value}</a>;
};

export default function Banner() {
  return (
    <div className="bg-[#330073] relative items-center overflow-hidden px-4 sm:px-12 py-2 md:py-1 hidden sm:flex justify-between md:items-center z-10">
      {/* Left Section: 8 Years Image (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-4">
        <img src={yearsImg} alt="8 years" className="h-8 w-auto" />
      </div>

      {/* Center Section: Contact Information */}
      <div className="flex flex-col sm:flex-row items-center text-center md:text-left gap-2 md:gap-4 mx-3 font-montserrat">
        <p className="text-sm text-white font-semibold">
          <ContactLink type="email" value="contact@markletech.com" />
        </p>
        <svg
          viewBox="0 0 2 2"
          aria-hidden="true"
          className="hidden md:inline mx-2 size-1 fill-current text-white"
        >
          <circle r={1} cx={1} cy={1} />
        </svg>
        <p className="text-sm text-white font-semibold uppercase">
          {` IN : `}
          <ContactLink type="phone" value="+91-7982 332 070" />
        </p>
        <svg
          viewBox="0 0 2 2"
          aria-hidden="true"
          className="hidden md:inline mx-2 size-1 fill-current text-white"
        >
          <circle r={1} cx={1} cy={1} />
        </svg>
        <p className="text-sm text-white font-semibold uppercase">
          {` USA : `}
          <ContactLink type="phone" value="+1-628 277 4060" />
        </p>
      </div>

      {/* Right Section: Social Media Icons (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-4">
        <IconButton
          svg={fbIcons}
          bgColor="bg-blue-500"
          href="https://www.facebook.com/markletechandmedia/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          svg={insta}
          bgColor="bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500"
          href="https://www.instagram.com/markletechandmedia/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          svg={linkedIn}
          bgColor="bg-[#006699]"
          href="https://in.linkedin.com/company/markle-tech-and-mediaagency"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          svg={youtubeIcon}
          bgColor="bg-[#FF3000]"
          href="https://www.youtube.com/@markletechandmedia"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      {/* Login Button */}
      {/* <div className="flex items-center justify-center md:ml-4 font-montserrat">
        <a
          href="/login"
          className="text-white font-semibold uppercase hover:underline"
        >
          LOGIN
        </a>
      </div> */}
    </div>
  );
}
