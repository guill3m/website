/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly UMAMI_ANALYTICS_HOST: string
	readonly UMAMI_ANALYTICS_ID: string
	readonly UMAMI_ANALYTICS_SCRIPT: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
