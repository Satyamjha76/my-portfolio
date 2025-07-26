import { useEffect } from "react";

export default function useMeta({ title, description, keywords, canonical }) {
  useEffect(() => {
    if (title) document.title = title;

    const updateOrCreateMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    // Update basic meta tags
    updateOrCreateMeta("description", description);
    updateOrCreateMeta("keywords", keywords);
    updateOrCreateMeta("author", "Satyam Jha");

    // Canonical URL (set per page)
    const canonicalUrl = canonical || window.location.href;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // ❌ Do not touch charset or viewport
  }, [title, description, keywords, canonical]);
}
