import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const data = [
  {
    icon: <CiMail />,
    text: "chekist.ot@gmail.com",
  },
  {
    icon: <FaPhoneVolume />,
    text: "+976 88705548",
  },
  {
    icon: <FaLinkedin />,
    text: "Arvinbuyan Otgonjargal",
  },
];

export const Contact = () => {
  return (
    <div className="p-8">
      <div>
        <motion.button>
          <div className="flex flex-col gap-3">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <a className="text-[20px]">{item.icon}</a>
                  <p className="text-xl">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.button>
      </div>
    </div>
  );
};
