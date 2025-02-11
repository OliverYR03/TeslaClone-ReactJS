import "./App.css";
import Navbar from "./components/Navbar";
import Downnav from "./components/Downnav";
import Section from "./components/Section";
import Inventori from "./components/Inventori";
import FirstLastSection from "./components/FirstLastSection";

function App() {
  return (
    <div className=" items-center justify-between w-full">
      <Inventori />
      <Navbar />
      <div className="container min-h-screen">
        <FirstLastSection
          model="Model Y"
          backgroundImg="model-y.avif"
          description="From $31,4901 After Est. Savings"
          price="$299/mo Leasing"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="New Model Y"
          backgroundImg="model-y-2.avif"
          description="Deliveries Begin in March"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Model 3"
          backgroundImg="model-3.avif"
          description="From $31,4901 After Est. Savings"
          price="$249/mo Leasing"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="CyberTrukk"
          backgroundImg="cybertruk.avif"
          description="$7,500 Federal Tax Credit Available"
          price="$749/mo Leasing"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Model X"
          backgroundImg="model-x.avif"
          description="Free Supercharging Included"
          price="$1,149/mo Leasing"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Model S"
          backgroundImg="model-s.avif"
          description="Free Supercharging Included"
          price="$998/mo Leasing"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Solar Panels"
          backgroundImg="solar-panels.avif"
          description="Schedule a Virtual Consultation"
          price=""
          leftBtn="Order Now"
          rightBtn="Learn More"
        />

        <Section
          model="Solar Roof"
          backgroundImg="solar-roof.avif"
          description="Produce Clean Energy From Your Roof"
          price=""
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Powerwall"
          backgroundImg="power-wall.avif"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        <Section
          model="Accesories"
          backgroundImg="accesories.avif"
          leftBtn="Shop Now"
        />
        <FirstLastSection
          model="We Are Tesla"
          backgroundVideo="we-are-tesla.webm"
          leftBtn="Join Tesla"
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col xl:w-[32vw] w-[90vw] xl:h-[20vh] text-center text-[#5c5e62]">
          <div className="text mt-10 flex flex-col text-xs align-center font-normal">
            <p className="justify-center leading-[18px]">
              1 Price before estimated savings is $46,630, including Destination
              and Order Fees, but excluding taxes and other fees. Subject to
              change. Vehicle shown has upgrades that will increase the price.
              Estimated savings includes $6,500 in
              <span className="underline underline-offset-4 font-medium">gas savings</span>
              estimated over five years, the $7,500 Federal Tax Credit and state
              incentives, available to eligible buyers and subject to MSRP caps.
              Not all vehicles, customers or finance options will be eligible.
              <span className="underline underline-offset-4 font-medium">Terms apply.</span>
              <br />
              <br />2 Price before estimated savings is $44,130, including
              Destination and Order Fees, but excluding taxes and other fees.
              Subject to change. Vehicle shown has upgrades that will increase
              the price. Estimated savings includes $6,500 in <span className="underline underline-offset-4 font-medium">gas savings</span>
              estimated over five years, the $7,500 Federal Tax Credit and state
              incentives, available to eligible buyers and subject to MSRP caps.
              Not all vehicles, customers or finance options will be eligible. <span className="underline underline-offset-4 font-medium">Terms apply.</span>
            </p>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center w-full min-h-[20vh] mb-10">
        <nav className="flex justify-center mt-4">
          <ul className="flex xl:flex-row flex-col xl:gap-4 gap-2 items-center text-xs text-[#5c5e62] font-medium">
            <li>Tesla © 2025</li>
            <li>Privacy Legal</li>
            <li>Vehicle Recalls</li>
            <li className=" xl:block hidden">Contact</li>
            <li >News</li>
            <li className=" xl:block hidden">Get Updates</li>
            <li className=" xl:block hidden">Locations</li>
          </ul>
        </nav>
      </footer>
      <Downnav />
    </div>
  );
}

export default App;
