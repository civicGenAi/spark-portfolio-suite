import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient-gold">Rahman Mbahe</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © 2025 Rahman Mbahe. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> in Tanzania.
          </p>

          {/* Back to top */}
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
