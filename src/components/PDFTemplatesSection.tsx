import { motion } from "framer-motion";

const PDFTemplatesSection = () => {
  const templates = [
    {
      title: "Voice Intent",
      description: "Multiple Voice intents to figure out better, how to select the order RTO and cancellation."
    },
    {
      title: "NDR Automations",
      description: "Use Attio's intuitive UI and ultra-customizable blocks to craft your ideal workflows."
    },
    {
      title: "Address Recovery Calls",
      description: "Help your business scale with enriched data, custom attributes, and integrations."
    },
    {
      title: "Sentiment Analyst",
      description: "Analyze, track and share reports built on real-time data from across your workspace."
    }
  ];

  return (
    <section className="py-20 bg-[#1c1833]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Templates.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#262044] rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-3">
                  {template.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {template.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFTemplatesSection;

