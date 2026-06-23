// Next.js App Router convention: this file is automatically discovered by
// @next/mdx and supplies the component map used to render every .mdx file
// in the project (currently blog articles under /src/content/blog/).
//
// The actual component map lives in /src/components/mdx/mdx-components.tsx
// so it can also be imported explicitly by other surfaces (MDX served via
// MDXRemote, custom renderers, tests, etc.). This wrapper simply re-exports
// the hook that Next.js looks for.
export { useMDXComponents } from "@/components/mdx/mdx-components";
