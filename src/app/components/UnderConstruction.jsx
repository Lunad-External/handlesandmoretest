// create an UI for website under construction this will be server side component
export default function UnderConstruction() {
  return (
    <>
      <div className="flex flex-col items-center  min-h-screen py-1 gap-y-10">
        <header className="w-full h-52 bg-[#008080] flex items-center justify-center">
          <img src="./handlelogo.png" alt="under construction logo " />
        </header>
        <section className="flex flex-col items-center justify-center gap-4">
          <img
            src="./constructionimage.svg"
            alt="under construction"
            className="w-full h-[250px] object-contain"
          />
          <p className="text-7xl text-[#008080]/40 tracking-wider">
            Coming Soon
          </p>

          <div className="flex flex-col items-center justify-center gap-20 mb-10">
            <h1 className="text-5xl underline space-y-6 mt-20 text-black/40 underline-offset-8 flex">
              Our Other Brands
            </h1>
            <div className="flex items-center justify-center gap-10">
              <a href="https://hidayath.com" target="_blank" rel="noreferrer">
                <img
                  src="./hidayath_logo.webp"
                  alt="hidayath logo"
                  width={200}
                  height={200}
                />
              </a>
              <a
                href="https://hold-design.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Hold_Logo.jpg"
                  alt="hold logo"
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
