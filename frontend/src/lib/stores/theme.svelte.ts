import { browser } from '$app/environment';

export type ThemeMode = 'system' | 'light' | 'dark';

class ThemeStore {
	mode = $state<ThemeMode>('system');
	isDark = $state(false);

	private updateDOM() {
		if (!browser) return;
		const root = document.documentElement;
		if (this.isDark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}

	evaluate() {
		if (!browser) return;
		if (this.mode === 'system') {
			this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		} else {
			this.isDark = this.mode === 'dark';
		}
		this.updateDOM();
	}

	init() {
		if (!browser) return;
		const saved = localStorage.getItem('theme-mode') as ThemeMode | null;
		if (saved && ['system', 'light', 'dark'].includes(saved)) {
			this.mode = saved;
		}
		this.evaluate();

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (this.mode === 'system') this.evaluate();
		});
	}

	setMode(newMode: ThemeMode) {
		this.mode = newMode;
		if (browser) {
			localStorage.setItem('theme-mode', newMode);
		}
		this.evaluate();
	}
}

export const themeStore = new ThemeStore();
