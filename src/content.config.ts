// SPDX-License-Identifier: MIT
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    // The original guidesnotincluded.com content (CC BY-NC-SA 4.0) lives in its
    // own clearly-named folder, src/content/docs/guidesnotincluded_archive/, so
    // the licence scope is obvious and separate from this project's MIT code.
    // generateId strips that folder from the slug, so page URLs are unchanged
    // (e.g. .../guidesnotincluded_archive/foo.md -> /foo/, index.md -> site root).
    loader: docsLoader({
      generateId: ({ entry }) => {
        // Strip the archive folder from the slug, keeping any locale prefix
        // (e.g. `zh-cn/`) that Starlight i18n needs:
        //   guidesnotincluded_archive/foo.md       -> foo
        //   zh-cn/guidesnotincluded_archive/foo.md -> zh-cn/foo
        const withoutArchive = entry.replace(
          /^(?:([^/]+)\/)?guidesnotincluded_archive\//,
          (_, locale) => (locale ? `${locale}/` : '')
        );
        // `<locale>/index.md` is that locale's homepage (`/zh-cn/`), mirroring
        // how root `index.md` maps to the site root (Starlight only normalises
        // the bare `index` id itself).
        return withoutArchive
          .replace(/\.[^./]+$/, '')
          .replace(/^([^/]+)\/index$/, '$1');
      },
    }),
    // Extend Starlight's schema with the provenance front matter that
    // scripts/crawl_archive.py emits on every page. `archived` is written as an
    // unquoted ISO date, so YAML parses it to a Date — coerce to be safe.
    schema: docsSchema({
      extend: z.object({
        source_url: z.string().optional(),
        archived: z.coerce.date().optional(),
        archive_snapshot: z.string().optional(),
        image: z.string().optional(),
      }),
    }),
  }),
};
