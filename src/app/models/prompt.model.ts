export interface PromptCategory {
    id: string;
    label: string;
    icon: string;
    description: string;
  }
  
  export interface PromptRequest {
    category: string;
    rawInput: string;
  }
  
  export interface GeneratedPrompt {
    goal: string;
    context: string;
    requirements: string;
    dos: string;
    donts: string;
    format: string;
    steps: string;
  }
  
  export interface SavedPrompt {
    id?: string;
    title: string;
    category: string;
    raw_input: string;
    generated_goal: string;
    generated_context: string;
    generated_requirements: string;
    generated_dos: string;
    generated_donts: string;
    generated_format: string;
    generated_steps: string;
    generated_raw_text: string;
    created_date?: string;
  }