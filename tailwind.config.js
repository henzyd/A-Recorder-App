/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#FF006B",
        SecondaryColor: "#A10044",
        TetiaryColor: "#DF85AB",
        AscentColor: "#A33838",
        BG: "#A10044E5",
        Grey: "#888888",
        HoriLine: "#524E4E",
        FouthSection: "rgba(255, 255, 255, 0.9)",
        // recorder
        RecorderAscentColor: "#A33838E5",
        RecorderPrimaryColor: "#F70068B2",
        RecorderLightBtnColor: "#FF006BE5",
        // Dark mode recorder
        DarkRecorderBorder: "rgba(163, 111, 111, 0.9)",
        DarkThemeBtnContainer: "rgba(255, 255, 255, 0.28)",
      },
      backgroundImage: {
        FirstSecBackgroundImg: "url('/src/Images/Group 15.png')",
        FourthSecBackgroundImg: "url('/src/Images/Group 38.png')",
        LinearBackground:
          "linear-gradient(358.85deg, rgba(255, 255, 255, 0.9) -12.32%, rgba(171, 26, 87, 0.9) 138.64%);",
        // FirstSecSlideImg: "url('src/Images/undraw_Recording_re_5xyq 1.png')",
      },
      boxShadow: {
        SliderBackgroundShadow: "0px 11px 38px 1.5px rgba(0, 0, 0, 0.16)",
        FouthSecShadow: "4px 4px 16px 0px rgba(255, 255, 255, 0.25)",
        // recorder
        BtnboxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.25)",
        RocorderControlBtnBoxShadow: "1px 4px 16px rgba(0, 0, 0, 0.25);",
      },
      screens: {
        SmallPhones: { min: " 220px", max: "380px" },
        // => @media (min-width: 320px) { ... }

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        // MediumPhones: "375px",
        // // => @media (min-width: 375px) { ... }

        LargePhones: { min: "425px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        Tablet: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px) { ... }

        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
