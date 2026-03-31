/**
 * When there are no pages opting out of prerender and we use an action on Astro 6, the following error is thrown:
 * ```
 * 19:58:28 [ERROR] [astro:actions] An unhandled error occurred while running the "astro:routes:resolved" hook
 * [ActionsWithoutServerOutputError] A server is required to create callable backend functions. To deploy routes to a server, add an adapter to your Astro config and configure your route for on-demand rendering
 * ```
 * Adding an unused page that opt outs of prerender, removes the error and everything works as expected.
 *
 * Similar issues:
 * https://github.com/withastro/astro/issues/12744
 * https://github.com/withastro/astro/issues/16103
 */
export const prerender = false
