"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface ModelCategory {
  id: string;
  name: string;
}

interface Model {
  id: number;
  name: string;
  category: string;
  accuracy: string;
  uses: string;
  desc: string;
}

interface ModelsFilterProps {
  modelCategories: ModelCategory[];
  models: Model[];
}

export default function ModelsFilter({ modelCategories, models }: ModelsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredModels = selectedCategory === "all" 
    ? models 
    : models.filter(model => model.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        {modelCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category.id
                ? 'bg-accent text-accent-foreground'
                : 'bg-background text-foreground border border-border hover:bg-muted'
            }`}
            aria-label={`筛选${category.name}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModels.map((model) => (
          <Card key={model.id} variant="interactive" className="group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center text-accent font-bold">
                AI
              </div>
              <Badge variant="success" size="sm">
                {model.accuracy}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {model.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{model.desc}</p>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">使用量: {model.uses}</span>
              <button 
                className="text-accent hover:text-accent-dark font-medium transition-colors inline-flex items-center gap-1"
                aria-label={`使用${model.name}`}
              >
                使用 →
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
