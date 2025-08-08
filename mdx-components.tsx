import type { MDXComponents } from "mdx/types";
import { AnchorDiscriminatorCalculator } from "@/app/components/AnchorDiscriminatorCalculator/AnchorDiscriminatorCalculator";
import ArticleSection from "@/app/components/ArticleSection/ArticleSection";
import Codeblock from "@/app/components/Codeblock/Codeblock";
import Icon from "@/app/components/Icon/Icon";
import IDE from "@/app/components/TSChallengeEnv/IDE";
import { Requirement } from "@/app/components/Challenges/Requirement";
import { RequirementList } from "@/app/components/Challenges/RequirementList";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ArticleSection,
    Codeblock,
    IDE,
    RequirementList,
    Requirement,
    AnchorDiscriminatorCalculator,
    blockquote: ({ children }) => (
      <blockquote className="bg-background-primary rounded-xl flex items-start gap-x-2 py-4 px-6">
        <Icon
          name="Warning"
          className="text-brand-secondary flex-shrink-0 top-1.5 relative"
          size={18}
        />
        <div className="overflow-x-auto custom-scrollbar min-w-0">{children}</div>
      </blockquote>
    ),
  };
}
