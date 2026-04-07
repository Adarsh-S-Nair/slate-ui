import { forwardRef, useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react';
import clsx7 from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronDown, Check } from 'lucide-react';

// src/components/Button.tsx
var baseStyles = "inline-flex select-none items-center justify-center rounded-md text-sm font-medium transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.97] hover:scale-[1.01]";
var variants = {
  primary: "bg-[var(--color-accent)] text-[var(--color-on-accent,white)] hover:bg-[var(--color-accent-hover)]",
  accent: "bg-[var(--color-accent)] text-[var(--color-on-accent,white)] hover:bg-[var(--color-accent-hover)]",
  secondary: "bg-transparent text-[var(--color-fg)] hover:text-[color-mix(in_oklab,var(--color-fg),var(--color-bg)_30%)]",
  ghost: "bg-transparent text-[var(--color-fg)] hover:bg-[color-mix(in_oklab,var(--color-fg),transparent_96%)]",
  danger: "bg-[var(--color-danger)] text-[var(--color-on-danger)] hover:bg-[color-mix(in_oklab,var(--color-danger),black_12%)] focus-visible:ring-[var(--color-danger)]",
  dangerSubtle: "bg-transparent text-[var(--color-danger)] hover:bg-[color-mix(in_oklab,var(--color-danger),transparent_92%)] hover:text-[color-mix(in_oklab,var(--color-danger),black_10%)] focus-visible:ring-[var(--color-danger)]",
  outline: "bg-transparent border border-[var(--color-border)] text-[var(--color-fg)] shadow-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-200",
  glass: "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/30 backdrop-blur-sm shadow-sm shadow-[var(--color-accent)]/5 transition-all duration-200",
  matte: "bg-[var(--color-accent)] text-[var(--color-on-accent,white)] border-none hover:bg-[var(--color-accent-hover)] shadow-none",
  minimal: "bg-transparent text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)]/50 border-none shadow-none"
};
var sizes = {
  sm: "h-8 px-3 py-2",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-5 py-2",
  iconSm: "h-8 w-8 p-0",
  icon: "h-9 w-9 p-0",
  iconLg: "h-11 w-11 p-0"
};
var Button = forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: clsx7(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        ),
        disabled: loading || props.disabled,
        ...props,
        children: loading ? /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" }) : children
      }
    );
  }
);
Button.displayName = "Button";
var Button_default = Button;
var Input = forwardRef(function Input2({ className, isInvalid = false, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ref,
      className: clsx7(
        "w-full rounded-md border bg-[var(--color-content-bg)] px-3 py-2 text-base outline-none",
        "border-[color-mix(in_oklab,var(--color-fg),transparent_90%)] focus:border-[var(--color-fg)]",
        isInvalid && "border-[var(--color-danger)] focus:border-[var(--color-danger)]",
        className
      ),
      ...props
    }
  );
});
var Input_default = Input;
var paddingClasses = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8"
};
var widthClasses = {
  full: "w-full",
  "2/3": "w-full md:w-2/3",
  "1/3": "w-full md:w-1/3",
  "1/2": "w-full md:w-1/2",
  "1/4": "w-full md:w-1/4"
};
var variantClasses = {
  default: "bg-[var(--color-surface)] border border-[var(--color-card-border)] shadow-soft",
  subtle: "bg-[var(--color-bg)] border border-[var(--color-card-border)]",
  danger: "bg-[color-mix(in_oklab,var(--color-danger),transparent_95%)] border border-[color-mix(in_oklab,var(--color-danger),transparent_80%)]",
  glass: "glass-panel backdrop-blur-md"
};
function Card({
  title,
  action,
  titleClassName,
  titleColor,
  children,
  className,
  style,
  background,
  padding = "md",
  variant = "glass",
  width = "full",
  allowOverflow = false,
  hover = false,
  onMouseLeave,
  onMouseEnter,
  onClick
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style,
      className: clsx7(
        "rounded-xl relative transition-all duration-300 flex flex-col",
        hover && "hover:-translate-y-0.5 hover:shadow-md",
        allowOverflow ? "overflow-visible" : "overflow-hidden",
        widthClasses[width],
        variantClasses[variant],
        className
      ),
      onMouseLeave,
      onMouseEnter,
      onClick,
      children: [
        background,
        variant === "glass" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none border border-white/5 dark:border-white/[0.02] rounded-xl" }),
        (title || action) && /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx7(
              "relative z-10 flex items-center justify-between",
              padding === "none" ? "px-5 pt-5 pb-2" : clsx7(paddingClasses[padding], "pb-2")
            ),
            children: [
              title && /* @__PURE__ */ jsx(
                "div",
                {
                  className: clsx7(
                    "text-sm font-medium",
                    titleColor || "text-zinc-500 dark:text-zinc-400",
                    titleClassName
                  ),
                  children: title
                }
              ),
              action && /* @__PURE__ */ jsx("div", { children: action })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx7(
              "relative z-10 flex-1 min-h-0",
              (title || action) && padding !== "none" ? "pt-0" : "",
              paddingClasses[padding]
            ),
            children
          }
        )
      ]
    }
  );
}
function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  footer,
  className
}) {
  const [isMobile, setIsMobile] = useState(null);
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
    const onKey = (e) => {
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
  const modalContent = /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: clsx7(
        "fixed inset-0 z-50 flex justify-center overflow-hidden overscroll-contain",
        "items-end p-0",
        "sm:items-center sm:p-4"
      ),
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsx(
          motion.button,
          {
            "aria-label": "Close",
            className: "absolute inset-0 bg-black/40",
            onClick: onClose,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            role: "dialog",
            "aria-modal": "true",
            className: clsx7(
              "relative z-10 w-full border border-[var(--color-border)] bg-[var(--color-content-bg)] shadow-xl",
              "rounded-t-2xl rounded-b-none pt-3 pb-4 px-4",
              "sm:rounded-lg sm:p-4",
              size === "sm" && "sm:max-w-sm",
              size === "md" && "sm:max-w-lg",
              size === "lg" && "sm:max-w-2xl",
              "h-[75vh] sm:h-auto sm:max-h-[85vh] overflow-y-auto",
              className
            ),
            initial: isMobile ? { y: "100%", opacity: 1 } : { y: 20, opacity: 0 },
            animate: isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 },
            exit: isMobile ? { y: "100%", opacity: 1 } : { y: 12, opacity: 0 },
            transition: isMobile ? { type: "tween", duration: 0.28, ease: "easeOut" } : { type: "spring", stiffness: 300, damping: 30 },
            drag: isMobile ? "y" : false,
            dragConstraints: isMobile ? { top: 0, bottom: 0 } : void 0,
            dragElastic: 0.1,
            dragMomentum: false,
            onDragEnd: (_event, info) => {
              if (!isMobile) return;
              if (info.offset.y > 90 || info.velocity.y > 800) onClose();
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "sm:hidden flex items-center justify-center pt-2", children: /* @__PURE__ */ jsx("div", { className: "h-1.5 w-12 rounded-full bg-[var(--color-border)]" }) }),
              (title || description) && /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                title && /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-[var(--color-fg)]", children: title }),
                description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--color-muted)]", children: description })
              ] }),
              children,
              footer && /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end gap-2", children: footer })
            ]
          }
        )
      ]
    }
  ) });
  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
var Modal_default = Modal;
function Drawer({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  footer,
  className,
  views = [],
  currentViewId,
  onViewChange: _onViewChange,
  onBack
}) {
  const [isMobile, setIsMobile] = useState(null);
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
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const topbar = document.getElementById("app-topbar");
    const originalTopbarPaddingRight = topbar ? topbar.style.paddingRight : "";
    document.documentElement.style.setProperty("overflow", "hidden", "important");
    document.body.style.setProperty("overflow", "hidden", "important");
    document.body.style.paddingRight = `${parseInt(window.getComputedStyle(document.body).paddingRight || "0") + scrollbarWidth}px`;
    if (topbar) {
      topbar.style.paddingRight = `${parseInt(window.getComputedStyle(topbar).paddingRight || "0") + scrollbarWidth}px`;
    }
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      if (topbar) {
        topbar.style.paddingRight = originalTopbarPaddingRight;
      }
    };
  }, [isOpen]);
  useEffect(() => setMounted(true), []);
  const currentView = views.find((view) => view.id === currentViewId);
  const displayTitle = currentView?.title || title;
  const displayDescription = currentView?.description || description;
  const displayContent = currentView?.content || children;
  const showBackButton = currentView?.showBackButton && onBack;
  const drawerContent = /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: clsx7(
        "fixed inset-0 z-50 flex overflow-hidden overscroll-contain",
        "items-end p-0",
        "sm:items-start sm:justify-end sm:p-4"
      ),
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsx(
          motion.button,
          {
            "aria-label": "Close",
            className: "absolute inset-0 bg-black/40",
            onClick: onClose,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            role: "dialog",
            "aria-modal": "true",
            className: clsx7(
              "relative z-10 w-full border border-[var(--color-border)] bg-[var(--color-content-bg)] shadow-xl flex flex-col",
              "rounded-t-lg rounded-b-none",
              "sm:rounded-lg",
              size === "sm" && "sm:max-w-sm",
              size === "md" && "sm:max-w-md",
              size === "lg" && "sm:max-w-lg",
              size === "xl" && "sm:max-w-xl",
              "h-[75vh] sm:h-full sm:max-h-[100vh]",
              "overflow-hidden",
              className
            ),
            initial: isMobile ? { y: "100%", opacity: 1 } : { x: "100%", opacity: 1 },
            animate: isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 },
            exit: isMobile ? { y: "100%", opacity: 1 } : { x: "100%", opacity: 1 },
            transition: { type: "tween", duration: 0.2, ease: "easeOut" },
            drag: isMobile ? "y" : false,
            dragConstraints: isMobile ? { top: 0, bottom: 0 } : void 0,
            dragElastic: 0.1,
            dragMomentum: false,
            onDragEnd: (_event, info) => {
              if (!isMobile) return;
              if (info.offset.y > 90 || info.velocity.y > 800) onClose();
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "sm:hidden flex items-center justify-center pt-3 pb-1 flex-none bg-[var(--color-content-bg)] z-30", children: /* @__PURE__ */ jsx("div", { className: "h-1.5 w-12 rounded-full bg-[var(--color-border)]" }) }),
              /* @__PURE__ */ jsx("div", { className: "px-4 py-3 border-b border-[var(--color-border)]/50 flex-none bg-[var(--color-content-bg)] z-20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                showBackButton && /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: onBack,
                    className: "flex items-center justify-center w-8 h-8 rounded-full hover:bg-[color-mix(in_oklab,var(--color-fg),transparent_90%)] transition-colors cursor-pointer",
                    "aria-label": "Go back",
                    children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 text-[var(--color-fg)]" })
                  }
                ),
                (displayTitle || displayDescription) && /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  displayTitle && /* @__PURE__ */ jsx("h3", { className: "text-base font-normal text-[var(--color-fg)]", children: displayTitle }),
                  displayDescription && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[var(--color-muted)]", children: displayDescription })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 overflow-y-auto", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { x: 20, opacity: 0 },
                  animate: { x: 0, opacity: 1 },
                  exit: { x: -20, opacity: 0 },
                  transition: { duration: 0.2, ease: "easeOut" },
                  className: clsx7("h-full", currentView?.noPadding ? "" : "px-4 pb-4"),
                  children: displayContent
                },
                currentViewId || "default"
              ) }),
              footer && /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-[var(--color-border)]/50 flex-none bg-[var(--color-content-bg)] z-20", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-2", children: footer }) })
            ]
          }
        )
      ]
    }
  ) });
  if (!mounted) return null;
  return createPortal(drawerContent, document.body);
}
var slideDownKeyframes = `
@keyframes slate-dropdown-slide-down {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
var keyframesInjected = false;
function ensureKeyframes() {
  if (keyframesInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = slideDownKeyframes;
  document.head.appendChild(style);
  keyframesInjected = true;
}
function Dropdown({
  trigger,
  label,
  items,
  align = "right",
  className,
  size = "md",
  maxHeight = 200,
  matchTriggerWidth = true
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const [triggerWidth, setTriggerWidth] = useState(0);
  useEffect(() => {
    if (triggerRef.current && matchTriggerWidth) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [label, matchTriggerWidth, isOpen]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);
  const sizeClasses = size === "sm" ? "h-8 px-3 text-xs" : "h-9 px-4 text-sm";
  return /* @__PURE__ */ jsxs("div", { ref: dropdownRef, className: clsx7("relative", className), children: [
    trigger ? /* @__PURE__ */ jsx("div", { onClick: () => setIsOpen(!isOpen), className: "cursor-pointer", children: trigger }) : /* @__PURE__ */ jsxs(
      "button",
      {
        ref: triggerRef,
        onClick: () => setIsOpen(!isOpen),
        className: clsx7(
          "inline-flex items-center justify-between gap-2 rounded-lg font-medium whitespace-nowrap cursor-pointer",
          "transition-all duration-200 ease-out",
          "bg-[var(--color-dropdown-bg,var(--color-input-bg))] text-[var(--color-fg)]",
          "hover:brightness-[0.97] dark:hover:brightness-[1.1]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
          sizeClasses
        ),
        children: [
          /* @__PURE__ */ jsx("span", { children: label || "Options" }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: clsx7(
                "transition-transform duration-200 flex-shrink-0",
                isOpen && "rotate-180"
              ),
              size: size === "sm" ? 14 : 16
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx7(
          "absolute top-full mt-1 z-50",
          "glass-panel backdrop-blur-md rounded-lg overflow-hidden",
          "shadow-lg shadow-black/5 dark:shadow-black/30",
          align === "right" ? "right-0" : "left-0"
        ),
        style: {
          animation: "slate-dropdown-slide-down 0.15s ease-out",
          minWidth: matchTriggerWidth && triggerWidth > 0 ? `${triggerWidth}px` : void 0
        },
        ref: (el) => {
          if (el) ensureKeyframes();
        },
        children: /* @__PURE__ */ jsx("div", { className: "py-1 overflow-y-auto", style: { maxHeight: `${maxHeight}px` }, children: items.map((item, index) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              if (!item.disabled && item.onClick) {
                item.onClick();
                setIsOpen(false);
              }
            },
            disabled: item.disabled,
            className: clsx7(
              "w-full px-3 py-1.5 text-left text-xs font-medium",
              "flex items-center justify-between gap-2",
              "transition-colors duration-150",
              item.disabled ? "opacity-40 cursor-not-allowed text-[var(--color-muted)]" : "cursor-pointer hover:bg-[var(--color-accent)]/8 active:bg-[var(--color-accent)]/12 text-[var(--color-fg)]",
              item.selected && "bg-[var(--color-accent)]/5"
            ),
            children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                item.icon && /* @__PURE__ */ jsx("span", { className: "flex-shrink-0", children: item.icon }),
                /* @__PURE__ */ jsx("span", { children: item.label })
              ] }),
              item.selected && /* @__PURE__ */ jsx(Check, { size: 12, className: "text-[var(--color-accent)] flex-shrink-0" })
            ]
          },
          index
        )) })
      }
    )
  ] });
}
function Tooltip({
  content,
  children,
  side = "right",
  offset = 10
}) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;
      switch (side) {
        case "right":
          top = rect.top + rect.height / 2;
          left = rect.right + offset;
          break;
        case "top":
          top = rect.top - offset;
          left = rect.left + rect.width / 2;
          break;
        case "bottom":
          top = rect.bottom + offset;
          left = rect.left + rect.width / 2;
          break;
        case "left":
          top = rect.top + rect.height / 2;
          left = rect.left - offset;
          break;
        default:
          top = rect.top + rect.height / 2;
          left = rect.right + offset;
      }
      setPosition({ top, left });
    }
  }, [isVisible, side, offset]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: triggerRef,
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      className: "w-full",
      children: [
        children,
        typeof document !== "undefined" && createPortal(
          /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -5, scale: 0.95 },
              animate: { opacity: 1, x: 0, scale: 1 },
              exit: { opacity: 0, x: -5, scale: 0.95 },
              transition: { duration: 0.15, ease: "easeOut" },
              style: {
                position: "fixed",
                top: position.top,
                left: position.left,
                transform: "translateY(-50%)",
                zIndex: 60
              },
              className: "pointer-events-none px-2.5 py-1.5 text-xs font-medium text-[var(--color-fg)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md shadow-md whitespace-nowrap",
              children: [
                content,
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-[var(--color-surface)] border-l border-b border-[var(--color-border)] rotate-45",
                    style: { zIndex: -1 }
                  }
                )
              ]
            }
          ) }),
          document.body
        )
      ]
    }
  );
}
function ConfirmDialog({
  isOpen,
  title = "Are you sure?",
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "primary",
  onCancel,
  onConfirm,
  requiredText,
  showRequiredTextUppercase = false,
  busy = false
}) {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (!isOpen) setValue("");
  }, [isOpen]);
  const meetsRequirement = useMemo(() => {
    if (!requiredText) return true;
    return value.trim().toLowerCase() === requiredText.trim().toLowerCase();
  }, [value, requiredText]);
  const handleConfirm = async () => {
    if (!meetsRequirement || busy || submitting) return;
    try {
      setSubmitting(true);
      await onConfirm();
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(Modal_default, { isOpen, onClose: onCancel, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "relative",
      onSubmit: (e) => {
        e.preventDefault();
        void handleConfirm();
      },
      children: [
        /* @__PURE__ */ jsx("h3", { className: "pr-8 text-lg font-semibold text-[var(--color-fg)]", children: title }),
        variant === "danger" && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2 rounded-md border border-[color-mix(in_oklab,var(--color-danger),transparent_70%)] bg-[color-mix(in_oklab,var(--color-danger),transparent_90%)] px-3 py-2", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              className: "text-[var(--color-danger)]",
              fill: "currentColor",
              "aria-hidden": true,
              children: /* @__PURE__ */ jsx("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" })
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "This action cannot be undone." })
        ] }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-[var(--color-muted)]", children: description }),
        requiredText && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium", children: [
            "Type",
            " ",
            showRequiredTextUppercase ? requiredText.toUpperCase() : requiredText,
            " ",
            "to confirm."
          ] }),
          /* @__PURE__ */ jsx(
            Input_default,
            {
              className: "mt-2",
              value: showRequiredTextUppercase ? value.toUpperCase() : value,
              onChange: (e) => setValue(e.target.value),
              placeholder: showRequiredTextUppercase ? requiredText.toUpperCase() : requiredText,
              isInvalid: value.length > 0 && !meetsRequirement,
              autoFocus: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            Button_default,
            {
              type: "button",
              variant: "outline",
              onClick: onCancel,
              className: "flex-1",
              children: cancelLabel
            }
          ),
          /* @__PURE__ */ jsx(
            Button_default,
            {
              type: "submit",
              variant: variant === "danger" ? "danger" : "primary",
              disabled: !meetsRequirement || busy || submitting,
              loading: busy || submitting,
              className: "flex-1",
              children: confirmLabel
            }
          )
        ] })
      ]
    }
  ) });
}
function EmptyStateRoot({ children, className }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: "easeOut" },
      className: clsx7("relative", className),
      children
    }
  );
}
function Hero({
  icon,
  badge,
  title,
  description,
  action,
  preview,
  layout = "centered",
  className
}) {
  if (layout === "split" && preview) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx7(
          "relative flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 py-12 lg:py-20",
          className
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.03] dark:opacity-[0.05]",
              style: {
                background: `radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)`
              }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1 max-w-xs", children: [
            icon && /* @__PURE__ */ jsxs("div", { className: "relative mb-6 w-fit", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-[var(--color-accent)] [&>svg]:w-7 [&>svg]:h-7", children: icon }) }),
              badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white [&>svg]:w-3 [&>svg]:h-3", children: badge })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-semibold text-[var(--color-fg)] mb-4 tracking-tight leading-tight", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-[var(--color-muted)] mb-8 leading-relaxed", children: description }),
            action
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative flex-1 w-full lg:w-auto", children: preview })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx7(
        "flex flex-col items-center justify-center py-16 lg:py-20",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-[var(--color-accent)] [&>svg]:w-10 [&>svg]:h-10", children: icon }) }),
          badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white [&>svg]:w-4 [&>svg]:h-4", children: badge })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-[var(--color-fg)] mb-2 text-center", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-[var(--color-muted)] text-center max-w-md mb-8", children: description }),
        action
      ]
    }
  );
}
function Features({ children, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx7(
        "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto",
        className
      ),
      children
    }
  );
}
function Feature({
  icon,
  title,
  description,
  iconColor = "var(--color-accent)",
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: clsx7("text-center", className), children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-10 h-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center mx-auto mb-3",
        style: { color: iconColor },
        children: /* @__PURE__ */ jsx("div", { className: "[&>svg]:w-5 [&>svg]:h-5", children: icon })
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-[var(--color-fg)] mb-1", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--color-muted)]", children: description })
  ] });
}
function Preview({ children, className }) {
  return /* @__PURE__ */ jsxs("div", { className: clsx7("relative", className), children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)] pointer-events-none z-10" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 opacity-60", children })
  ] });
}
function MockCard({
  color = "var(--color-accent)",
  progressPercent = 60,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx7(
        "bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-8 h-8 rounded-lg flex items-center justify-center",
                style: {
                  backgroundColor: `color-mix(in oklab, ${color}, transparent 90%)`
                },
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-4 h-4 rounded",
                    style: {
                      backgroundColor: `color-mix(in oklab, ${color}, transparent 60%)`
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-[var(--color-muted)]/20 rounded" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-4 w-16 bg-[var(--color-muted)]/20 rounded" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 w-full bg-[var(--color-muted)]/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full rounded-full",
            style: {
              width: `${progressPercent}%`,
              backgroundColor: `color-mix(in oklab, ${color}, transparent 60%)`
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-3 w-12 bg-[var(--color-muted)]/15 rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-3 w-12 bg-[var(--color-muted)]/15 rounded" })
        ] })
      ]
    }
  );
}
var EmptyState = Object.assign(EmptyStateRoot, {
  Hero,
  Features,
  Feature,
  Preview,
  MockCard
});
function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  y = 12
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      },
      className,
      children
    }
  );
}

export { Button, Card, ConfirmDialog, Drawer, Dropdown, EmptyState, FadeIn, Input, Modal, Tooltip };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
