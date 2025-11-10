"use client";

import { useState } from "react";

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
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModels.map((model) => (
          <div key={model.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {model.accuracy}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {model.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{model.desc}</p>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">使用量: {model.uses}</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                使用 →
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
