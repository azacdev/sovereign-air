const Footer = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col md:gap-0 gap-8 items-center justify-between py-8 px-10 border-t border-slate-300 border-dashed">
      <span className="font-medium text-slate-700 justify-center md:justify-start items-center">
        Copyright © 2023 Sovereign Air. All rights reserved.
      </span>
      <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center md:justify-start">
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Terms and conditions
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Long Term Contracts
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Copyright Policy
        </a>
        <a
          href="#"
          className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
        >
          Customer Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
