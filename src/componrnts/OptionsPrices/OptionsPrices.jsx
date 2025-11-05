import OptionsPrice from "../OptionsPrice/OptionsPrice";

const OptionsPrices = () => {
  const OptionsPrices = [
    {
      id: 1,
      name: "Basic Membership",
      price: 1500,
      features: [
        "Access to gym equipment",
        "1 personal training session per month",
        "Locker room access",
        "Free Wi-Fi",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 3000,
      features: [
        "Access to gym equipment",
        "4 personal training sessions per month",
        "Group fitness classes (yoga, Zumba, HIIT)",
        "Locker room and shower access",
        "Free Wi-Fi",
        "Nutrition consultation",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 5000,
      features: [
        "Unlimited access to gym equipment",
        "8 personal training sessions per month",
        "All group fitness classes",
        "Locker room, shower & towel service",
        "Free Wi-Fi and smoothie bar discount",
        "Nutrition and workout plan consultation",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 8000,
      features: [
        "Access for 2 adults and 2 children",
        "Unlimited gym access",
        "All group fitness classes",
        "Locker room and shower access",
        "Family fitness programs",
        "Nutrition consultation",
      ],
    },
    {
      id: 5,
      name: "Student Membership",
      price: 1200,
      features: [
        "Access to gym equipment",
        "2 group fitness classes per month",
        "Locker room access",
        "Discounted personal training sessions",
        "Free Wi-Fi",
      ],
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 px-3 py-10 items-center justify-center text-amber-400">
        {OptionsPrices.map((optin) => (
          <OptionsPrice key={optin.id} optin={optin}></OptionsPrice>
        ))}
        
      </div>
    </div>
  );
};

export default OptionsPrices;
