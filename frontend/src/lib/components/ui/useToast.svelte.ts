export type ToastType = 'default' | 'success' | 'error' | 'warning';

export interface Toast {
	id: string;
	title?: string;
	description?: string;
	type?: ToastType;
	duration?: number;
}

class ToastState {
	toasts = $state<Toast[]>([]);

	add(toast: Omit<Toast, 'id'>) {
		const id = Math.random().toString(36).slice(2, 9);
		const newToast = { ...toast, id, type: toast.type || 'default', duration: toast.duration || 5000 };
		
		this.toasts = [...this.toasts, newToast];

		if (newToast.duration > 0) {
			setTimeout(() => {
				this.remove(id);
			}, newToast.duration);
		}
		return id;
	}

	remove(id: string) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}
}

export const toast = new ToastState();
