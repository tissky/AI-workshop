"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
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
    <Tabs 
      defaultValue="all" 
      value={selectedCategory}
      onValueChange={setSelectedCategory}
      className="w-full"
    >
      <div className="mb-8 flex justify-center">
        <TabsList 
          variant="pills" 
          size="md"
          aria-label="模型分类筛选"
        >
          {modelCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              aria-label={`筛选${category.name}`}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {modelCategories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            role="list"
            aria-label={`${category.name}列表`}
          >
            {filteredModels.map((model) => (
              <Card 
                key={model.id} 
                variant="interactive"
                role="listitem"
                aria-labelledby={`model-title-${model.id}`}
                className="group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <Badge variant="success" size="sm">
                    {model.accuracy}
                  </Badge>
                </div>
                
                <h3 
                  id={`model-title-${model.id}`}
                  className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors"
                >
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{model.desc}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">使用量: {model.uses}</span>
                  <button 
                    className="text-accent hover:opacity-80 font-medium transition-opacity inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    aria-label={`使用${model.name}`}
                  >
                    使用
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 12l4-4-4-4" />
                    </svg>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
