import { motion } from "framer-motion";

const Card = ({ children }) => <div className="">{children}</div>;

const CardContent = ({ children }) => (
  <div className="flex flex-col items-center text-center">{children}</div>
);

const categories = [
  { title: "Tax & Financial Advice", icon: "💰", link: "#" },
  { title: "Legal Consultation", icon: "⚖️", link: "#" },
  { title: "Tech Support & IT Help", icon: "🖥️", link: "#" },
  { title: "Investment Guidance", icon: "📈", link: "#" },
  { title: "Startup & Business Law", icon: "🏛️", link: "#" },
  { title: " Health Consultation", icon: "🩺", link: "#" } 
];

export default function ConsultationCategories() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold">Consult Top Experts Online</h2>
      <p className="text-gray-500 mb-6">
        Get professional advice in finance, legal, technology, and wellness.
      </p>
      <div className="flex justify-center gap-6 overflow-x-auto p-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-40 text-center"
          >
            <Card>
              <CardContent>
                <div className="w-30 h-30 flex items-center justify-center rounded-full bg-gray-100 text-5xl mb-3">
                  {category.icon}
                </div>
                <p className="font-semibold text-sm">{category.title}</p>
                <a
                  href={category.link}
                  className="text-blue-500 text-sm mt-2 hover:underline"
                >
                  VISIT NOW
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
