import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to conditionally join classNames and merge tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
