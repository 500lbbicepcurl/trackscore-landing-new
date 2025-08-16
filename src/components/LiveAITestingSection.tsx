import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Phone, Zap, MessageCircle } from 'lucide-react';

const LiveAITestingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              className="p-3 bg-primary/10 rounded-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Experience AI in Action
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Don't just read about our AI - talk to it! Test our live AI agent right here and see how it handles real customer conversations with natural language processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mic className="w-4 h-4" />
              <span>Voice Enabled</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Real-time Response</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>Natural Conversation</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glowing border effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main container */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Live AI Agent
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-2">Try Our AI Agent Now</h3>
                <p className="text-muted-foreground">
                  Click the microphone and start speaking. Our AI will respond in real-time just like it would handle your customer calls.
                </p>
              </div>

              {/* Iframe container */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border/30">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-full h-full"
                >
                  <iframe src="https://app.millis.ai/agents/embedded?id=-OXm4aQrmcBoRs-G0bPA&k=vGGtMkLSCYtg8uVUde7S6qmwLmjXuurk&c=eJxlkEFuwjAQRa9iGVUKUhLsQKgwS47AthsnnhirwY7siUBF3L2TEoqqWvbi%2Fxk%2F%2FZkbR4c9JK5uvA3eQ4vOW6744VeUZclz7kwPZB9RRyQZR%2B8fjUcMA79TA33%2Fj0Hd9BCVCZhekO5dnV37h%2FKwitTrdJpozYgY%2FCGlqeZ6JAYzMQxFOmkTLplgglX1cGXRNjqrd0yuydhs2YrV4m253H%2F4RrefNobRm8KdtQXFeudBx8JGbRx4zKSsDdh8YmRVXbPnWzEpCDIX5I5V6w0VNlTY1TM8RDNl8sEDyTb0gdRCwkbojowueCwu4OwJFdsKQRbCFef4itJLCl89BxA5m28pl3vaTBfi%2BTE9idckpBfdzyE7uS%2FaptyKnGPUPrXRDcgVxhFotWBd8NQPI%2BVIyO%2Ffl6%2BY4A%3D%3D" width="100%" height="100%" allow="microphone"></iframe>
                </motion.div>
              </div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-6"
              >
                <p className="text-sm text-muted-foreground">
                  This is exactly how our AI handles your customer calls - natural, intelligent, and instant.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveAITestingSection;