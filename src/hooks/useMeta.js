import { useEffect } from "react";

export default function useMeta({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title;

    const updateOrCreate = (name, content) => {
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

    updateOrCreate("description", description);
    updateOrCreate("keywords", keywords);
    updateOrCreate("author", "Satyam Jha");

    // ✅ DO NOT touch viewport or charset here
  }, [title, description, keywords]);
}
