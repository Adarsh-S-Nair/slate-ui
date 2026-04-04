import * as react from 'react';
import react__default, { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const Button: react.ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "accent" | "secondary" | "ghost" | "danger" | "dangerSubtle" | "outline" | "glass" | "matte" | "minimal";
    size?: "sm" | "md" | "lg" | "iconSm" | "icon" | "iconLg";
    fullWidth?: boolean;
    loading?: boolean;
} & react.RefAttributes<HTMLButtonElement>>;

declare const Input: react.ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    isInvalid?: boolean;
} & react.RefAttributes<HTMLInputElement>>;

type CardProps = {
    title?: ReactNode;
    action?: ReactNode;
    titleClassName?: string;
    titleColor?: string;
    children: ReactNode;
    className?: string;
    style?: react__default.CSSProperties;
    background?: ReactNode;
    padding?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "subtle" | "danger" | "glass";
    width?: "full" | "2/3" | "1/3" | "1/2" | "1/4";
    allowOverflow?: boolean;
    hover?: boolean;
    onMouseLeave?: () => void;
    onMouseEnter?: () => void;
    onClick?: () => void;
};
declare function Card({ title, action, titleClassName, titleColor, children, className, style, background, padding, variant, width, allowOverflow, hover, onMouseLeave, onMouseEnter, onClick, }: CardProps): react_jsx_runtime.JSX.Element;

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
declare function Modal({ isOpen, onClose, title, description, children, size, footer, className, }: ModalProps): react.ReactPortal | null;

type DrawerView = {
    id: string;
    title: string;
    description?: string;
    content: ReactNode;
    showBackButton?: boolean;
    noPadding?: boolean;
};
type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    footer?: ReactNode;
    className?: string;
    views?: DrawerView[];
    currentViewId?: string;
    onViewChange?: (viewId: string) => void;
    onBack?: () => void;
};
declare function Drawer({ isOpen, onClose, title, description, children, size, footer, className, views, currentViewId, onViewChange: _onViewChange, onBack, }: DrawerProps): react.ReactPortal | null;

type DropdownItem = {
    label: string;
    value?: string;
    onClick?: () => void;
    icon?: ReactNode;
    disabled?: boolean;
    selected?: boolean;
};
type DropdownProps = {
    trigger?: ReactNode;
    label?: string;
    items: DropdownItem[];
    align?: "left" | "right";
    className?: string;
    size?: "sm" | "md";
    maxHeight?: number;
    matchTriggerWidth?: boolean;
};
declare function Dropdown({ trigger, label, items, align, className, size, maxHeight, matchTriggerWidth, }: DropdownProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    content: string;
    children: react__default.ReactNode;
    side?: "right" | "top" | "bottom" | "left";
    offset?: number;
}
declare function Tooltip({ content, children, side, offset, }: TooltipProps): react_jsx_runtime.JSX.Element;

type ConfirmDialogProps = {
    isOpen: boolean;
    title?: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: "danger" | "primary";
    onCancel: () => void;
    onConfirm: () => Promise<void> | void;
    requiredText?: string;
    showRequiredTextUppercase?: boolean;
    busy?: boolean;
    busyLabel?: string;
};
declare function ConfirmDialog({ isOpen, title, description, confirmLabel, cancelLabel, variant, onCancel, onConfirm, requiredText, showRequiredTextUppercase, busy, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element;

type EmptyStateProps = {
    children: ReactNode;
    className?: string;
};
type HeroProps = {
    icon?: ReactNode;
    badge?: ReactNode;
    title: string;
    description: string;
    action?: ReactNode;
    preview?: ReactNode;
    layout?: "centered" | "split";
    className?: string;
};
type FeaturesProps = {
    children: ReactNode;
    className?: string;
};
type FeatureProps = {
    icon: ReactNode;
    title: string;
    description: string;
    iconColor?: string;
    className?: string;
};
type PreviewProps = {
    children: ReactNode;
    className?: string;
};
type MockCardProps = {
    color?: string;
    progressPercent?: number;
    className?: string;
};
declare function EmptyStateRoot({ children, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;
declare function Hero({ icon, badge, title, description, action, preview, layout, className, }: HeroProps): react_jsx_runtime.JSX.Element;
declare function Features({ children, className }: FeaturesProps): react_jsx_runtime.JSX.Element;
declare function Feature({ icon, title, description, iconColor, className, }: FeatureProps): react_jsx_runtime.JSX.Element;
declare function Preview({ children, className }: PreviewProps): react_jsx_runtime.JSX.Element;
declare function MockCard({ color, progressPercent, className, }: MockCardProps): react_jsx_runtime.JSX.Element;
declare const EmptyState: typeof EmptyStateRoot & {
    Hero: typeof Hero;
    Features: typeof Features;
    Feature: typeof Feature;
    Preview: typeof Preview;
    MockCard: typeof MockCard;
};

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    y?: number;
};
declare function FadeIn({ children, delay, duration, className, y, }: FadeInProps): react_jsx_runtime.JSX.Element;

export { Button, Card, ConfirmDialog, Drawer, type DrawerView, Dropdown, type DropdownItem, EmptyState, FadeIn, Input, Modal, Tooltip };
