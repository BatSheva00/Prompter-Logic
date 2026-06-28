import { PromptCategory, GeneratedPrompt } from './prompt.model';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: 'build_app',
    label: 'Build an Application',
    icon: 'code-2',
    description: 'Generate a detailed prompt to build a web, mobile, or desktop application from scratch.'
  },
  {
    id: 'write_document',
    label: 'Write a Document',
    icon: 'file-text',
    description: 'Craft professional letters, reports, proposals, or any written document.'
  },
  {
    id: 'business_idea',
    label: 'Business Idea',
    icon: 'lightbulb',
    description: 'Develop and refine a business concept with market analysis and strategy.'
  },
  {
    id: 'tech_spec',
    label: 'Technical Specification',
    icon: 'settings',
    description: 'Create detailed technical specifications, architecture docs, or system designs.'
  },
  {
    id: 'improve_prompt',
    label: 'Improve a Prompt',
    icon: 'sparkles',
    description: 'Take an existing prompt and enhance it for better, more precise AI outputs.'
  },
  {
    id: 'custom',
    label: 'Custom Idea',
    icon: 'wand-2',
    description: 'Start from scratch with any idea — no category constraints.'
  }
];

export function assembleRawText(prompt: GeneratedPrompt): string {
  return '## Goal\n' + prompt.goal +
    '\n\n## Context\n' + prompt.context +
    '\n\n## Requirements\n' + prompt.requirements +
    "\n\n## Do's\n" + prompt.dos +
    "\n\n## Don'ts\n" + prompt.donts +
    '\n\n## Expected Output Format\n' + prompt.format +
    '\n\n## Step-by-Step Instructions\n' + prompt.steps;
}