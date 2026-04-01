import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  footer?: ReactNode;
  className?: string;
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  footer,
  className,
}: ModalProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    check();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => setMounted(true), []);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(
            "fixed inset-0 z-50 flex justify-center overflow-hidden overscroll-contain",
            "items-end p-0",
            "sm:items-center sm:p-4"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className={clsx(
              "relative z-10 w-full border border-[var(--color-border)] bg-[var(--color-content-bg)] shadow-xl",
              "rounded-t-2xl rounded-b-none pt-3 pb-4 px-4",
              "sm:rounded-lg sm:p-4",
              size === "sm" && "sm:max-w-sm",
              size === "md" && "sm:max-w-lg",
              size === "lg" && "sm:max-w-2xl",
              "h-[75vh] sm:h-auto sm:max-h-[85vh] overflow-y-auto",
              className
            )}
            initial={isMobile ? { y: "100%", opacity: 1 } : { y: 20, opacity: 0 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
            exit={isMobile ? { y: "100%", opacity: 1 } : { y: 12, opacity: 0 }}
            transition={
              isMobile
                ? { type: "tween", duration: 0.28, ease: "easeOut" }
                : { type: "spring", stiffness: 300, damping: 30 }
            }
            drag={isMobile ? "y" : false}
            dragConstraints={isMobile ? { top: 0, bottom: 0 } : undefined}
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={(_event, info) => {
              if (!isMobile) return;
              if (info.offset.y > 90 || info.velocity.y > 800) onClose();
            }}
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex items-center justify-center pt-2">
              <div className="h-1.5 w-12 rounded-full bg-[var(--color-border)]" />
            </div>
            {(title || description) && (
              <div className="mb-3">
                {title && (
                  <h3 className="text-base font-semibold text-[var(--color-fg)]">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{description}</p>
                )}
              </div>
            )}
            {children}
            {footer && (
              <div className="mt-4 flex items-center justify-end gap-2">{footer}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}

export default Modal;
