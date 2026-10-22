import { EditorialSidebar } from '@/components/editorial/EditorialSidebar';
import type { ResearchPost } from '@/lib/types';

export function ResearchSidebar({ posts }: { posts: ResearchPost[] }) {
  return (
    <EditorialSidebar
      relatedLabel="Related research"
      related={posts.map((post) => ({
        href: `/research/${post.slug}`,
        label: post.title,
        kicker: post.cluster,
      }))}
      ctaTitle="Put the evidence into a working brief."
      ctaBody="Bring one recurring workflow. We will help identify its preparation, review, and escalation boundaries."
      ctaId="cta-research-sidebar-schedulecall"
    />
  );
}
